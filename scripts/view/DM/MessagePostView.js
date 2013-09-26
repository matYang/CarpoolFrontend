
/*dedicated view for Message post, deep linking will not be used for Message post states, this view holds the session data*/
var MessagePostView = Backbone.View.extend({

	el: "",
	toSubmit:{
		"location":new UserLocation(),
		"type":"ask",
		"gender":"both",
		"numberRequests":0,
		"requests":[],
		"description":""
	},

	/**
	request 
	{
		type:ask | help,
		price: int;
		dateStart:"",
		dateEnd:"",
		time:"000"-"111",
		continuous:true|false	//if continuous is false, ignore dateEnd
	}
	*/
	initialize: function(user){
		_.bindAll(this, 'render', 'renderFirstPage', 'renderSecondPage', 'renderThirdPage', 'unbindStepEvents',
			'onTypeSelect', 'onAddClick', 'adjustContainerHeight', 'toggleDateVisibility', 'updateValue', 'deleteSlot', 'validate', 'getId', 'toMessage', 'finish', 'close');
		app.viewRegistration.register("MessagePost", this, true);
		this.isClosed = false;
		this.baseTemplate = _.template(tpl.get('DMModule/DMPublish_base'));
		this.step1Template = _.template(tpl.get('DMModule/DMPublish_step1'));
		this.step2Template = _.template(tpl.get('DMModule/DMPublish_step2'));
		this.step3Template = _.template(tpl.get('DMModule/DMPublish_step3'));
		this.askSlotTemplate = _.template(tpl.get('DMModule/DMPublish_singleSlotAsk'));
		this.helpSlotTemplate = _.template(tpl.get('DMModule/DMPublish_singleSlotHelp'));

		this.user = user;
		if (testMockObj.testMode){
			this.user = testMockObj.sampleUser;
		}

		this.domContainer = $('#content');
		this.domContainer.append(this.baseTemplate);
		this.editorContainer = $('#publish_requirement');
		this.render(1);
	},

	render: function(stepIndex){
		// --- events binding ---
		this.unbindStepEvents(stepIndex);
		this.editorContainer.empty();

		//validity of stepIndex is guranteed on the URL level, since deep linking is applied
		//reduncy of safety check is not necessary here because in development, we need to know where things go wrong
		if (stepIndex === 1){
			this.stepIndex = 1;
			this.renderFirstPage();
			this.restoreState(1);
		}
		else if (stepIndex === 2){
			this.stepIndex = 2;
			this.renderSecondPage();
		}
		else if (stepIndex === 3){
			this.stepIndex = 3;
			this.renderThirdPage();
		}
	},

	renderFirstPage: function(){
		this.editorContainer.append(this.step1Template);
		$("#publish_progress").attr("class","publish_progress_step1");
		if (!this.map) {
			var mapConfig = {};
			mapConfig.div = "publish_map";
			mapConfig.location = this.user.get("location");
			this.map = new MapView(mapConfig);
		}

		var that = this;
		$('#publish_nextStep').on('click', function(){
			if (that.validate(1)){
				that.toSubmit.gender = $('input[name=gender]:checked', '#publish_info').val();
				app.navigate(that.user.id + "/DMpost/step2");
				that.render(2);
			}
		});
		$('#publish_type>div').on('click', function(e){
			that.onTypeSelect(e.target.id);
		});
		$('#publish_locationInput, #publish_schoolInput').on("click", function(e){
				that.locationPicker = new LocationPickerView(that.toSubmit.location, that);
		});
	},
	updateLocation: function(flag) {
		$('#publish_locationInput').val(this.toSubmit.location.get("province")+" "+this.toSubmit.location.get("city")+" "+this.toSubmit.location.get("region"));
		$('#publish_schoolInput').val(this.toSubmit.location.get("university"));
		if (!flag && this.map) {
			this.map.getLatLng(this.toSubmit.location);
		}
	},
	refactorRequests: function() {
		var newRequests = [],
			counter = 0;

		var request, requests;
		requests = this.toSubmit.requests;
		for ( request in requests) {
			if (requests[request]) {
				newRequests[counter] = requests[request];
				newRequests[counter].id = counter+1;
				counter++;
			}
		}
		this.toSubmit.requests = newRequests;
		this.toSubmit.numberRequests = counter;
	},
	renderSecondPage: function(){
		this.editorContainer.append(this.step2Template);
		$("#publish_progress").attr("class","publish_progress_step2");
		var that = this;
		if (this.toSubmit.type === 'ask'){
			this.currentTemplate = this.askSlotTemplate;
		}
		if (this.toSubmit.type === 'help'){
			this.currentTemplate = this.helpSlotTemplate;
		}
		this.refactorRequests();
		if (this.toSubmit.requests.length === 0 || this.toSubmit.requests[0].type !== this.toSubmit.type) {
			$('#publish_info').on('change', 'input[value=continuous]', function(e) {
				var id = Utilities.toInt(Utilities.getId(e.target.name));
				that.toggleDateVisibility(e);
				var maximumDate = $("input[name=publish_endDate_"+id+"]").datepicker("getDate");
				if (e.target.checked){
					$("input[name=publish_startDate_"+id+"]").datepicker("option", "maxDate", maximumDate);
				} else {
					$("input[name=publish_startDate_"+id+"]").datepicker("option", "maxDate", null);
				}
			});
			this.toSubmit.requests = [];
			this.toSubmit.requests[0]={};
			this.toSubmit.requests[0].timeAvailable = "";
			this.toSubmit.requests[0].startTime = "";
			this.toSubmit.requests[0].duration = "";
			this.toSubmit.requests[0].price = -1;
			this.toSubmit.requests[0].id = 1;
			this.toSubmit.requests[0].type = this.toSubmit.type;
			this.toSubmit.numberRequests = 1;

			this.toSubmit.requests[0].timeAvailable=[false,false,false];
			$('#publish_time_slots').append(this.currentTemplate({id:1}));
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
					that.updateValue(this);
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
					that.updateValue(this);
					$("input[name=publish_startDate_1]").datepicker("option", "maxDate", d);
				}
			});
		} else {
			var request = null;
			for ( request in this.toSubmit.requests) {
				if (this.toSubmit.requests[request]){
					var index = Utilities.toInt(request)+1;
					$('#publish_time_slots').append(this.currentTemplate({id:index}));
					$("input[name=publish_endDate_"+ index +"]").datepicker({
						buttonImageOnly: true,
						buttonImage: "calendar.gif",
						buttonText: "Calendar",
						onSelect:function(text,inst){
							var d = new Date();
							d.setDate(inst.selectedDay);
							d.setMonth(inst.selectedMonth);
							d.setYear(inst.selectedYear);
							that.updateValue(this);
							$("input[name=publish_startDate_"+ index +"]").datepicker("option", "maxDate", d);
						}
					});

					$("input[name=publish_startDate_"+ index +"]").datepicker({
						buttonImageOnly: true,
						buttonImage: "calendar.gif",
						buttonText: "Calendar",
						minDate: new Date(),
						defaultDate:this.toSubmit.requests[request].startDate,
						onSelect:function(text,inst){
							var d = new Date();
							d.setDate(inst.selectedDay);
							d.setMonth(inst.selectedMonth);
							d.setYear(inst.selectedYear);
							that.updateValue(this);
							$("input[name=publish_endDate_"+ index +"]").datepicker("option", "minDate", d);
						}
					});

					$("input[name=publish_rate_"+ index +"]").val(this.toSubmit.requests[request].price);
				}
			}
			$('#publish_info').on('change', 'input[value=continuous]', function(e) {
				var id = Utilities.toInt(Utilities.getId(e.target.name));
				that.toggleDateVisibility(e);
				var maximumDate = $("input[name=publish_endDate_"+id+"]").datepicker("getDate");
				if (e.target.checked){
					$("input[name=publish_startDate_"+id+"]").datepicker("option", "maxDate", maximumDate);
				} else {
					$("input[name=publish_startDate_"+id+"]").datepicker("option", "maxDate", null);
				}
			});
		}
		this.restoreState(2);
		this.adjustContainerHeight();
		$(".input_date").on("keypress", function(e){
			e.preventDefault();
		})
		$("input").on('blur', function(e){
			that.updateValue(e);
		});
		$("input[type=checkbox]").on('click', function(e){
			that.updateValue(e);
		});
		$('#publish_back').on('click', function(){
			app.navigate(that.user.id + "/DMpost/step1");
			that.render(1);
		});
		$('#publish_finish').on('click', function(){
			that.finish();
		});
		$('#publish_nextStep').on('click', function(){
			if (that.validate(2)) {
				app.navigate(that.user.id + "/DMpost/step3");
				that.render(3);
			}
		});
		$('#publish_time_add').on('click', function(){
			that.onAddClick();
		});
		$('.publish_delete').on('click', function(e){
			that.deleteSlot(e);
		});
		$('select').on('change',function(e){
			that.updateValue(e);
		});
	},
	renderThirdPage: function(){
		var that = this;
		this.editorContainer.append(this.step3Template);
		$("#publish_progress").attr("class","publish_progress_step3");
		this.restoreState(3);
		$('#publish_description_input').on('blur', function(e){
			that.toSubmit.description=e.target.value;
		});
		$('#publish_back').on('click', function(){
			app.navigate(that.user.id + "/DMpost/step2");
			that.render(2);
		});
	},
	restoreState:function(page){
		if (page === 1) {
			$('.selectBox_selected').removeClass('selectBox_selected');
			$('#publish_'+this.toSubmit.type).addClass('selectBox_selected');
			$('input[value='+this.toSubmit.gender+']').attr("checked",true);
			this.updateLocation(1);
		} else if (page === 2) {
			var r = this.toSubmit.requests;
			if (this.toSubmit.type === "help"){
				for ( var request in r ) {
					if (r[request]){
						var id = Utilities.toInt(request)+1;
						$('input[name=publish_continuous_'+id+']').attr("checked",r[request].continuous);
						$('input[name=publish_startDate_'+id+']').val(r[request].startDate);
						if (r[request].continuous){
							$('input[name=publish_endDate_'+id+']').val(r[request].endDate);
						}
						$('input[name=publish_morning_'+id+']').attr("checked",r[request].timeAvailable[0]);
						$('input[name=publish_afternoon_'+id+']').attr("checked",r[request].timeAvailable[1]);
						$('input[name=publish_night_'+id+']').attr("checked",r[request].timeAvailable[2]);
						if (r[request].price>0){
							$('input[name=publish_rate_'+id+']').val(r[request].price);
						}
					}
				}
			} else if (this.toSubmit.type === "ask") {
				for ( var request in r ) {
					if (r[request]){
						var id = Utilities.toInt(request)+1;
						$('input[name=publish_continuous_'+id+']').attr("checked",r[request].continuous);
						$('input[name=publish_startDate_'+id+']').val(r[request].startDate);
						if (r[request].continuous){
							var startDate = new Date(),
								endDate  = new Date(),
								sd = this.toSubmit.requests[request].startDate.split("/"),
								ed = this.toSubmit.requests[request].endDate.split("/");
							startDate.setMonth(sd[0]);
							startDate.setDate(sd[1]);
							startDate.setYear(sd[2]);
							endDate.setMonth(ed[0]);
							endDate.setDate(ed[1]);
							endDate.setYear(ed[2]);
							$('input[name=publish_endDate_'+id+']').datepicker( "option", "minDate", startDate);
							$('input[name=publish_startDate_'+id+']').datepicker( "option", "maxDate", endDate);
							$('input[name=publish_endDate_'+id+']').val(r[request].endDate);
						}
						$('select[name=class_time_'+id+']').val(r[request].startTime);
						$('select[name=class_duration_'+id+']').val(r[request].duration);
						if (r[request].price>0){
							$('input[name=publish_rate_'+id+']').val(r[request].price);
						}
					}
				}
			}
		} else if (page === 3) {
			$("#publish_description_input").val(this.toSubmit.description);
		}
	},

	unbindStepEvents: function(previousStepIndex){
		if (previousStepIndex === 1){
			$('#publish_nextStep').off();
			$('#publish_type>div').off();
		}
		else if (previousStepIndex === 2){
			$('#publish_back').off();
			$('#publish_finish').off();
			$('#publish_nextStep').off();
			$('#publish_time_add').off();
			$('.input_checkbox').off();
			$('input').off();
			$('publish_delete').off();
			$('select').off();
			var id;
			for ( id = 0; id<this.toSubmit.requests.length; id++ ){
				$("input[name=publish_rate_"+id+"]").off();
				$("input[name=publish_morning_"+id+"]").off();
				$("input[name=publish_afternoon_"+id+"]").off();
				$("input[name=publish_night_"+id+"]").off();
				$("select[name=class_time_"+id+"]").off();
				$("select[name=class_duration_"+id+"]").off();
				$("input[name=publish_startDate_"+id+"]").off();
				$("input[name=publish_endDate_"+id+"]").off();
			}
		}
		else if (previousStepIndex === 3){
			$('#publish_back').off();
			$('#publish_finish').off();
			$('#publish_description_input').off();
		}
	},

	onTypeSelect: function(id) {
		if (id.indexOf('publish_ask')>-1) {
			$('.selectBox_selected').removeClass('selectBox_selected');
			$('#publish_ask').addClass('selectBox_selected');
			this.toSubmit.type = "ask";
		} else if (id.indexOf('publish_help')>-1){
			$('.selectBox_selected').removeClass('selectBox_selected');
			$('#publish_help').addClass('selectBox_selected');
			this.toSubmit.type = "help";
		}
	},
	onAddClick: function(){
		var index = this.toSubmit.requests.length;
		var that = this;
		var id = index+1;
		this.toSubmit.numberRequests++;
		this.toSubmit.requests[index] = {};
		this.toSubmit.requests[index].type = this.toSubmit.type;
		this.toSubmit.requests[index].id = id;
		this.toSubmit.requests[index].timeAvailable=[false,false,false];
		$('#publish_time_slots').append(this.currentTemplate({id:id}));
		$('#publish_delete_'+id).on('click', function(e){
			that.deleteSlot(e);
		});
		$("input[name=publish_rate_"+id+"]").on('blur', function(e){
			that.updateValue(e);
		});
		$("input[name=publish_morning_"+id+"]").on('click', function(e){
			that.updateValue(e);
		});
		$("input[name=publish_afternoon_"+id+"]").on('click', function(e){
			that.updateValue(e);
		});
		$("input[name=publish_night_"+id+"]").on('click', function(e){
			that.updateValue(e);
		});
		$("select[name=class_time_"+id+"]").on('click', function(e){
			that.updateValue(e);
		});
		$("select[name=class_duration_"+id+"]").on('click', function(e){
			that.updateValue(e);
		});

		$('input[name=publish_continuous_' + id+']').on('change', function(e) {
			var id = Utilities.toInt(Utilities.getId(e.target.name));
			that.toggleDateVisibility(e);
			var maximumDate = $("input[name=publish_endDate_"+id+"]").datepicker("getDate");
			if (e.target.checked){
				$("input[name=publish_startDate_"+id+"]").datepicker("option", "maxDate", maximumDate);
			} else {
				$("input[name=publish_startDate_"+id+"]").datepicker("option", "maxDate", null);
			}
		});
		$("input[name=publish_startDate_"+id+"]").datepicker({
			buttonImageOnly: true,
			buttonImage: "calendar.gif",
			buttonText: "Calendar",
			minDate: new Date(),
			onSelect:function(text,inst){
				var d = new Date();
				d.setDate(inst.selectedDay);
				d.setMonth(inst.selectedMonth);
				d.setYear(inst.selectedYear);
				that.updateValue(this);
				$("input[name=publish_endDate_"+ id +"]").datepicker("option", "minDate", d);
			}
		});
		$("input[name=publish_endDate_"+id+"]").datepicker({
			buttonImageOnly: true,
			buttonImage: "calendar.gif",
			buttonText: "Calendar",
			minDate: new Date(),
			onSelect:function(text,inst){
				var d = new Date();
				d.setDate(inst.selectedDay);
				d.setMonth(inst.selectedMonth);
				d.setYear(inst.selectedYear);
				that.updateValue(this);
				$("input[name=publish_startDate_"+ id +"]").datepicker("option", "maxDate", d);
			}
		});
		$("input[name=publish_endDate_"+id+"]").on("keypress", function(e){
			e.preventDefault();
		});
		$("input[name=publish_startDate_"+id+"]").on("keypress", function(e){
			e.preventDefault();
		});
		this.adjustContainerHeight();
	},
	adjustContainerHeight: function(){
		var height = this.toSubmit.numberRequests*204+20;
		$('#publish_time_container').css('height', height);
		$('#publish_requirement').css('height', height+100);
	},
	toggleDateVisibility: function(e) {
		var id = this.getId(e.target.name);
		$('input[name=publish_endDate_'+id+']').toggle();
		$('span[name=to_'+id+']').toggle();
	},
	updateValue:function(e){
		var id;
		if (e.target && e.target.value !== "") {
			id = this.getId(e.target.name);
			if (e.target.name.indexOf("rate")>-1){
				this.toSubmit.requests[Utilities.toInt(id)-1].price = Utilities.toInt(e.target.value);
			} else if (e.target.name.indexOf("morning")>-1){
				this.toSubmit.requests[Utilities.toInt(id)-1].timeAvailable[0] = e.target.checked;
			} else if (e.target.name.indexOf("afternoon")>-1){
				this.toSubmit.requests[Utilities.toInt(id)-1].timeAvailable[1] = e.target.checked;
			} else if (e.target.name.indexOf("night")>-1){
				this.toSubmit.requests[Utilities.toInt(id)-1].timeAvailable[2] = e.target.checked;
			} else if (e.target.name.indexOf("class_time")>-1) {
				this.toSubmit.requests[Utilities.toInt(id)-1].startTime = e.target.value;
			} else if (e.target.name.indexOf("class_duration")>-1) {
				this.toSubmit.requests[Utilities.toInt(id)-1].duration = e.target.value;
			}
		} else if (e.name){
			id = this.getId(e.name);
			if (e.name.indexOf("publish_startDate_")===0){
				this.toSubmit.requests[Utilities.toInt(id)-1].startDate = e.value;
				var continuous = $("input[name=publish_continuous_"+id+"]").attr("checked") === "checked";
				this.toSubmit.requests[Utilities.toInt(id)-1].continuous = continuous;
				if (!continuous) {
					this.toSubmit.requests[Utilities.toInt(id)-1].endDate = "";
				}

			} else if (e.name.indexOf("publish_endDate_")===0){
				this.toSubmit.requests[Utilities.toInt(id)-1].endDate = e.value;
				this.toSubmit.requests[Utilities.toInt(id)-1].continuous = true;
			}
		}
	},
	deleteSlot: function(e){
		var id = this.getId(e.target.id);
		$('#publish_time_'+id).remove();
		this.toSubmit.numberRequests--;
		this.toSubmit.requests[Utilities.toInt(id)-1]=null;
		this.adjustContainerHeight();
		$('#publish_delete_'+id).off();
		$("input[name=publish_rate_"+id+"]").off();
		$("input[name=publish_morning_"+id+"]").off();
		$("input[name=publish_afternoon_"+id+"]").off();
		$("input[name=publish_night_"+id+"]").off();
		$("select[name=class_time_"+id+"]").off();
		$("select[name=class_duration_"+id+"]").off();

		$('input[name=publish_continuous_' + id+']').off();
		$("input[name=publish_endDate_"+id+"]").off();
		$("input[name=publish_startDate_"+id+"]").off();

	},

	getId: function(str){
		var list = str.split("_");
		return list[list.length-1];
	},
	validate: function(page) {
		var counter = 0;

		if (page === 1) {
			if (Utilities.isEmpty($("#publish_locationInput").val())){
				return false;
			} else if (Utilities.isEmpty($("#publish_schoolInput").val())){
				return false;
			} else {
				return true;
			}
		} else if (page === 2) {
			var requests = this.toSubmit.requests,
				request;
			counter = 0;
			if (this.toSubmit.numberRequests === 0) {
				return false;
			}

			for (request in requests) {
				if (!requests[request]) continue;
				counter++;
				if (requests[request].continuous){
					if (Utilities.isEmpty(requests[request].endDate)) {
						return false;
					}
				} else if (Utilities.isEmpty(requests[request].startDate)) {
					return false;
				}
				if (Utilities.isEmpty(requests[request].price) || requests[request].price < 1 || requests[request].price >999){
					return false;
				}
				if (this.toSubmit.type === "help") {
					var timeAvailable = requests[request].timeAvailable[0] || requests[request].timeAvailable[1] || requests[request].timeAvailable[2];
					if (!timeAvailable) return false;
				}
			}
		}
		if (counter > 0)
			return true;
	},
	
	finish: function() {
		//TODO
		//for (var r in toSubmit.requests){
			app.MessageManager.postMessage(this.toMessage(), function(){
				alert("Message Post successful");
				app.navigate(app.sessionManager.getUserId() + "/Message/" + app.MessageManager.getMessage().id, true);
			});
		//}
	},

	toMessage: function () {
		var dmm = new Message();
		dmm.set("type", toSubmit.type === "ask" ? Constants.messageType.ask : Constants.messageType.help);
		var gender;
		if (toSubmit.gender === "male") {
			gender = Constants.gender.male;
		} else if (toSubmit.gender === "female") {
			gender = Constants.gender.female;
		} else {
			gender = Constants.gender.both;
		}
		dmm.set("gender", gender);
		dmm.set("ownerId", this.user.get("userId"));
		dmm.set("location", toSubmit.location);
		dmm.set("note", toSubmit.description);
		var transactions = dmm.get("transactionList");
		for ( var r in toSubmit.requests) {
			if (toSubmit.requests[r]){
				var t = new Transaction();
				t.set("startTime", toSubmit.requests[r].startTime);
				t.set("location", toSubmit.location);
				t.set("price", toSubmit.requests[r].price);
				t.set("initUserId", this.user.get("userId"));
				t.set("initUserImgPath", this.user.get("imgPath"));
				t.set("initUserLevel", this.user.get("level"));
				transactions.add(t);
			}
		}
		return dmm;
	},
	close: function(){
		if (!this.isClosed){

			this.unbindStepEvents(this.stepIndex);
			this.domContainer.empty();
			this.isClosed = true;
		}
	}
});