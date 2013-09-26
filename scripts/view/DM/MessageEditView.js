var MessageEditView = Backbone.View.extend({

	el: "",

	initialize: function (id, message) {
		_.bindAll(this, 'render', 'bindEvents', 'updateLocation', 'populate', 'toggleDateVisibility', 'submit', 'close');
		app.viewRegistration.register("MessageEdit", this, true);
		this.isClosed = false;
		this.changed = false;
		this.message = message;
		this.location = new UserLocation();
		if (testMockObj.testMode){
			this.message = testMockObj.sampleMessageA;
		}
		this.userid = id;
		this.template = _.template(tpl.get('DMModule/DMEdit'));

		this.requestTemplate = ( this.message.get("type") === Constants.messageType.ask )
			? _.template(tpl.get('DMModule/DMPublish_singleSlotAsk')) 
			: _.template(tpl.get('DMModule/DMPublish_singleSlotHelp'));
		this.domContainer = $('#content');
		this.render();
		this.populate();
		this.bindEvents();
	},

	render: function () {
		this.domContainer.append(this.template);

		$('#publish_time_container').append(this.requestTemplate(this.message.set('id',1).toJSON()));
	},
	bindEvents: function () {
		var that = this;
		$("#publish_back").on("click", function() {
			app.navigate(that.userId + "/Message/"+that.messageId, true);
		});
		$("#publish_finish").on("click", function() {
			that.submit()
		});
		$('input[name=publish_continuous_1]').on("change", function(e) {
			that.toggleDateVisibility(e);
			debugger;
			var maximumDate = $("input[name=publish_endDate_1]").datepicker("getDate");
			if (e.target.checked){
				$("input[name=publish_startDate_1]").datepicker("option", "maxDate", maximumDate);
			} else {
				$("input[name=publish_startDate_1]").datepicker("option", "maxDate", null);
			}
			
		});

		$('input[name=school],input[name=location]').on("click", function(e){
			that.locationPickerView = new LocationPickerView(that.location, that);
		});

		$("input[name=publish_startDate_1]").datepicker({
			buttonImageOnly: true,
			buttonImage: "calendar.gif",
			buttonText: "Calendar",
			minDate: new Date(),
			onSelect:function(text,inst){
				var d = new Date();
				d.setDate(inst.selectedDay);
				d.setMonth(inst.selectedMonth);
				d.setYear(inst.selectedYear);
				$("input[name=publish_endDate_1]").datepicker("option", "minDate", d);
			}
		});
		$("input[name=publish_endDate_1]").datepicker({
			buttonImageOnly: true,
			buttonImage: "calendar.gif",
			buttonText: "Calendar",
			minDate: new Date(),
			onSelect:function(text,inst){
				var d = new Date();
				d.setDate(inst.selectedDay);
				d.setMonth(inst.selectedMonth);
				d.setYear(inst.selectedYear);
				$("input[name=publish_startDate_1]").datepicker("option", "maxDate", d);
			}
		});
	},
	updateLocation: function(){
		$('input[name=school]').val(this.location.get("university"));
		$('input[name=location]').val(
			this.location.get("province") + " " +
			this.location.get("city") + " " +
			this.location.get("region")
			);
		this.message.set("location", this.location)
	},
	populate: function (){
		var gender = Constants.genderLookup[this.message.get("genderRequirement")];

		$("#edit_myGender").val(gender);
		$("input[value="+gender+"]").attr("checked", true);
		$("input[name=location]").val(
			this.message.get("location").get("province") + " " + 
			this.message.get("location").get("city") + " " + 
			this.message.get("location").get("region")
		);
		$("input[name=school]").val(this.message.get("location").get("university"));
		$("textarea[name=detail]").val(this.message.get("note"));
		var startDate = Utilities.getDateString(this.message.get("departureTime"));
		var endDate = Utilities.getDateString(this.message.get("end"));
		$("input[name=publish_startDate_"+this.message.get("id")+"]").val(startDate);
		if (startDate !== endDate){
			$("input[name=publish_endDate_"+this.message.get("id")+"]").val(endDate);
		} else {
			this.toggleDateVisibility();
			$('input[name=publish_continuous_1]').attr("checked",false);
		}
		var time = this.message.get("departure_Time");
		$("select[name=class_time_"+this.message.get("id")+"]").val(time);
		time = this.message.get("arrival_Time");
		$("select[name=class_duration_"+this.message.get("id")+"]").val(time);
		$("input[name=publish_rate_"+this.message.get("id")+"]").val(this.message.get("simple_hourlyRate"));
	},
	toggleDateVisibility: function (e) {
		$('input[name=publish_endDate_1]').toggle();
		$('span[name=to_1]').toggle();
	},
	submit: function () {
		this.MessageManager.updateMessage(updatedMessage, function(){
			alert("Message Update success");
			app.navigate(app.sessionManager.getUserId() + "/Message/" + app.MessageManager.getMessage().id, true);
		});
	},

	close: function () {
		$("#publish_back").off();
		$("#publish_finish").off();
		if (!this.isClosed){
			this.domContainer.empty();
			this.isClosed = true;
		}
	}


});