
/*dedicated view for Message post, deep linking will not be used for Message post states, this view holds the session data*/
var MessagePostView = Backbone.View.extend({

	el: "",
	toSubmit:{
		"origin":new UserLocation(),
		"dest":new UserLocation(),
		"type":"ask",
		"gender":"both",
		"numberRequests":0,
		"requests":[],
		"description":"",
		"priceList":[0],
		"seats":1,
		"priceListEntries": 1,
		"conditionalPrice":false
	},

	/**
	request 
	{
		type:ask | help,
		dateStart:"",
		dateEnd:"",
		time:"000"-"111",
		round:true|false	//if round is false, ignore dateEnd
	}
	*/
	initialize: function(user){
		_.bindAll(this, 'render', 'renderFirstPage', 'renderSecondPage', 'renderThirdPage', 'unbindStepEvents',
			'onTypeSelect', 'onAddClick', 'adjustContainerHeight', 'toggleDateVisibility', 'updateValue', 'deleteSlot', 'validate', 'getId', 'toMessage', 'finish', 'close');
		app.viewRegistration.register("MessagePost", this, true);
		this.isClosed = false;
		this.baseTemplate = _.template(tpl.get('Module/Publish_base'));
		this.step1Template = _.template(tpl.get('Module/Publish_step1'));
		this.step2Template = _.template(tpl.get('Module/Publish_step2'));
		this.step3Template = _.template(tpl.get('Module/Publish_step3'));
		this.askSlotTemplate = _.template(tpl.get('Module/Publish_singleSlotAsk'));

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

		var that = this;
		$('#publish_nextStep').on('click', function(){
			if (that.validate(1)){
				that.toSubmit.gender = $('input[name=gender]:checked', '#publish_info').val();
				app.navigate(that.user.id + "/post/step2");
				that.render(2);
			}
		});
		$('#publish_type>div').on('click', function(e){
			that.onTypeSelect(e.target.id);
		});
		$('#publish_originInput').on("click", function(e){
				that.locationPicker = new LocationPickerView(that.toSubmit.origin, that, "publish_originInput");
		});
		$('#publish_destInput').on("click", function(e){
				that.locationPicker = new LocationPickerView(that.toSubmit.dest, that, "publish_destInput");
		});
		this.restoreState(1);
		if (!this.map) {
			var mapConfig = {};
			mapConfig.div = "publish_map";
			mapConfig.origin = this.user.get("location");
			this.map = new MapView(mapConfig);
		}
	},
	updateLocation: function(flag, id) {
		$('#publish_originInput').val(this.toSubmit.origin.get("province")+" "+this.toSubmit.origin.get("city")+" "+this.toSubmit.origin.get("region"));
		$('#publish_destInput').val(this.toSubmit.dest.get("province")+" "+this.toSubmit.dest.get("city")+" "+this.toSubmit.dest.get("region"));
		if (this.map) {
			this.map.getDirection(this.toSubmit.origin, this.toSubmit.dest);
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
		this.currentTemplate = this.askSlotTemplate;
		this.refactorRequests();
		if (this.toSubmit.requests.length === 0 || this.toSubmit.requests[0].type !== this.toSubmit.type) {
			$('#publish_info').on('change', 'input[value=round]', function(e) {
				var id = Utilities.toInt(Utilities.getId(e.target.name));
				var maximumDate = $("input[name=publish_returnDate_"+id+"]").datepicker("getDate");
				if (this.checked){
					that.toggleDateVisibility(e, false);
					$("input[name=publish_departDate_"+id+"]").datepicker("option", "maxDate", maximumDate);
				} else {
					that.toggleDateVisibility(e, true);
					$("input[name=publish_departDate_"+id+"]").datepicker("option", "maxDate", null);
				}
			});
			this.toSubmit.requests = [];
			this.toSubmit.requests[0]={};
			this.toSubmit.requests[0].timeAvailable = "";
			this.toSubmit.requests[0].departTime = "";
			this.toSubmit.requests[0].returnTime = "";
			this.toSubmit.requests[0].id = 1;
			this.toSubmit.requests[0].type = this.toSubmit.type;
			this.toSubmit.numberRequests = 1;

			this.toSubmit.requests[0].timeAvailable=[false,false,false];
			$('#publish_time_slots').append(this.currentTemplate({id:1}));
			$("input[name=publish_departDate_1]").datepicker({
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
					$("input[name=publish_returnDate_1]").datepicker("option", "minDate", d);
				}
			});
			$("input[name=publish_returnDate_1]").datepicker({
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
					$("input[name=publish_departDate_1]").datepicker("option", "maxDate", d);
				}
			});
		} else {
			var request = null;
			for ( request in this.toSubmit.requests) {
				if (this.toSubmit.requests[request]){
					var index = Utilities.toInt(request)+1;
					$('#publish_time_slots').append(this.currentTemplate({id:index}));
					$("input[name=publish_returnDate_"+ index +"]").datepicker({
						buttonImageOnly: true,
						buttonImage: "calendar.gif",
						buttonText: "Calendar",
						onSelect:function(text,inst){
							var d = new Date();
							d.setDate(inst.selectedDay);
							d.setMonth(inst.selectedMonth);
							d.setYear(inst.selectedYear);
							that.updateValue(this);
							$("input[name=publish_departDate_"+ index +"]").datepicker("option", "maxDate", d);
						}
					});

					$("input[name=publish_departDate_"+ index +"]").datepicker({
						buttonImageOnly: true,
						buttonImage: "calendar.gif",
						buttonText: "Calendar",
						minDate: new Date(),
						defaultDate:this.toSubmit.requests[request].departDate,
						onSelect:function(text,inst){
							var d = new Date();
							d.setDate(inst.selectedDay);
							d.setMonth(inst.selectedMonth);
							d.setYear(inst.selectedYear);
							that.updateValue(this);
							$("input[name=publish_returnDate_"+ index +"]").datepicker("option", "minDate", d);
						}
					});
				}
			}
			$('#publish_info').on('change', 'input[value=round]', function(e) {
				var id = Utilities.toInt(Utilities.getId(e.target.name));
				if (this.checked){
					that.toggleDateVisibility(e, false);
				} else {
					that.toggleDateVisibility(e, true);
				}
				var maximumDate = $("input[name=publish_returnDate_"+id+"]").datepicker("getDate");
				if (e.target.checked){
					$("input[name=publish_departDate_"+id+"]").datepicker("option", "maxDate", maximumDate);
				} else {
					$("input[name=publish_departDate_"+id+"]").datepicker("option", "maxDate", null);
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
		$('#publish_back').on('click', function(){
			app.navigate(that.user.id + "/post/step1");
			that.render(1);
		});
		$('#publish_nextStep').on('click', function(){
			if (that.validate(2)) {
				app.navigate(that.user.id + "/post/step3");
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
		$("#publish_priceList").hide();
		$("#priceList_minus").hide();
		$("#publish_progress").attr("class","publish_progress_step3");
		this.restoreState(3);
		$("#seats").on("keypress", function(e) {
			if (e.keyCode<48 || e.keyCode>57) {
				e.preventDefault();
			}
		});
		$("#seats").on("blur", function(e){
			that.toSubmit.seats = Utilities.toInt(e.target.value);
		});
		$("#seats_1").on("blur", function(e){
			that.toSubmit.priceList[0] = Utilities.toInt(e.target.value);
		});
		$('#publish_description_input').on('blur', function(e){
			that.toSubmit.description=e.target.value;
		});
		$("#priceList_add").on("click", function(e) {
			if (that.toSubmit.priceListEntries < that.toSubmit.seats) {
				var seatId = ++that.toSubmit.priceListEntries;
				$("#priceList_add").before("<div class='publish_priceEntry'>" +
					"人数 <input id = 'seatsNumber_"+ seatId +"' type = 'text' class='seat_price' pattern='[0-9]*' />" +
					" 每人<input id = 'seats_"+ seatId +"' type = 'text' class='seat_price' pattern='[0-9]*' />元</div>");
				that.toSubmit.priceList[seatId-1] = 0;
				$("#publish_priceList, #publish_pricelist_container").animate({
			    	height: "+=30"
				}, 200);

				$("#seats_"+seatId).on("blur", function(e) {
					that.toSubmit.priceList[seatId-1] = Utilities.toInt(e.target.value);
				});
				$("#priceList_minus").show();
			}
		});
		$("#priceList_minus").on("click", function(e) {
			$(".publish_priceEntry").last().remove();
			var seatId = that.toSubmit.priceListEntries--;
			if (seatId == 2) {
				$("#priceList_minus").hide();
			}
			that.toSubmit.priceList[seatId-1] = null;
			$("#publish_priceList, #publish_pricelist_container").animate({
				height: "-=30"
			}, 200);


		})
		$('#publish_back').on('click', function(){
			app.navigate(that.user.id + "/post/step2");
			that.render(2);
		});
		$("#conditionalPriceSwitch").on("click", function(e) {
			if ($("#conditionalPriceSwitch").hasClass("publish_selected")) {
				$("#conditionalPriceSwitch").removeClass("publish_selected");
				$("#publish_singlePrice").fadeIn();
				$("#publish_priceList").hide();
				that.toSubmit.conditionalPrice = false;
			} else {
				$("#conditionalPriceSwitch").addClass("publish_selected");
				$("#publish_singlePrice").hide();
				$("#publish_priceList").fadeIn();
				that.toSubmit.conditionalPrice = false;
			}
			
		});
	},
	restoreState:function(page){
		if (page === 1) {
			$('.selectBox_selected').removeClass('selectBox_selected');
			$('#publish_'+this.toSubmit.type).addClass('selectBox_selected');
			this.updateLocation(1);
		} else if (page === 2) {
			var r = this.toSubmit.requests;
			for ( var request in r ) {
				if (r[request]){
					var id = Utilities.toInt(request)+1;
					debugger;
					$('input[name=publish_round_'+id+']').attr("checked",r[request].round);
					$('input[name=publish_departDate_'+id+']').val(r[request].departDate);
					if (r[request].departDate) {
						var departDate = new Date(),
							returnDate  = new Date(),
							sd = this.toSubmit.requests[request].departDate.split("/");
							departDate.setMonth(sd[0]);
							departDate.setDate(sd[1]);
							departDate.setYear(sd[2]);
							$('input[name=publish_returnDate_'+id+']').datepicker( "option", "minDate", departDate);
					}
					if (r[request].round && r[request].returnDate) {
						ed = this.toSubmit.requests[request].returnDate.split("/");
						returnDate.setMonth(ed[0]);
						returnDate.setDate(ed[1]);
						returnDate.setYear(ed[2]);
						$('input[name=publish_departDate_'+id+']').datepicker( "option", "maxDate", returnDate);
						$('input[name=publish_returnDate_'+id+']').val(r[request].returnDate);
					}
					$('select[name=depart_time_'+id+']').val(r[request].departTime);
					$('select[name=return_time_'+id+']').val(r[request].returnTime);
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
			$('#publish_nextStep').off();
			$('#publish_time_add').off();
			$('input').off();
			$('publish_delete').off();
			$('select').off();
			var id;
			for ( id = 0; id<this.toSubmit.requests.length; id++ ){
				$("select[name=depart_time_"+id+"]").off();
				$("select[name=return_time_"+id+"]").off();
				$("input[name=publish_departDate_"+id+"]").off();
				$("input[name=publish_returnDate_"+id+"]").off();
				$("input[name=publish_round_"+id+"]").off();
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
		$("select[name=depart_time_"+id+"]").on('click', function(e){
			that.updateValue(e);
		});
		$("select[name=return_time_"+id+"]").on('click', function(e){
			that.updateValue(e);
		});

		$('input[name=publish_round_' + id+']').on('change', function(e) {
			var id = Utilities.toInt(Utilities.getId(e.target.name));
			var maximumDate = $("input[name=publish_returnDate_"+id+"]").datepicker("getDate");
			if (this.checked){
				$("input[name=publish_departDate_"+id+"]").datepicker("option", "maxDate", maximumDate);
				that.toggleDateVisibility(e, false);
			} else {
				$("input[name=publish_departDate_"+id+"]").datepicker("option", "maxDate", null);
				that.toggleDateVisibility(e, true);
			}
		});
		$("input[name=publish_departDate_"+id+"]").datepicker({
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
				$("input[name=publish_returnDate_"+ id +"]").datepicker("option", "minDate", d);
			}
		});
		$("input[name=publish_returnDate_"+id+"]").datepicker({
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
				$("input[name=publish_departDate_"+ id +"]").datepicker("option", "maxDate", d);
			}
		});
		$("input[name=publish_returnDate_"+id+"]").on("keypress", function(e){
			e.preventDefault();
		});
		$("input[name=publish_departDate_"+id+"]").on("keypress", function(e){
			e.preventDefault();
		});
		this.adjustContainerHeight();
	},
	adjustContainerHeight: function(){
		var height = this.toSubmit.numberRequests*204+20;
		$('#publish_time_container').css('height', height);
		$('#publish_requirement').css('height', height+100);
	},
	toggleDateVisibility: function(e, state) {
		var id = this.getId(e.target.name);
		$('input[name=publish_returnDate_'+id+']').prop('disabled', state);
		$('select[name=return_time_'+id+']').prop('disabled', state);
	},
	updateValue:function(e){
		var id;
		if (e.target && e.target.value !== "") {
			id = this.getId(e.target.name);
			if (e.target.name.indexOf("depart_time")>-1) {
				this.toSubmit.requests[Utilities.toInt(id)-1].departTime = e.target.value;
			} else if (e.target.name.indexOf("return_time")>-1) {
				this.toSubmit.requests[Utilities.toInt(id)-1].returnTime = e.target.value;
			}
		} else if (e.name){
			id = this.getId(e.name);
			if (e.name.indexOf("publish_departDate_")===0){
				this.toSubmit.requests[Utilities.toInt(id)-1].departDate = e.value;
				var round = $("input[name=publish_round_"+id+"]").attr("checked") === "checked";
				this.toSubmit.requests[Utilities.toInt(id)-1].round = round;

			} else if (e.name.indexOf("publish_returnDate_")===0){
				this.toSubmit.requests[Utilities.toInt(id)-1].returnDate = e.value;
				this.toSubmit.requests[Utilities.toInt(id)-1].round = true;
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
		$("select[name=depart_time_"+id+"]").off();
		$("select[name=return_time_"+id+"]").off();

		$('input[name=publish_round_' + id+']').off();
		$("input[name=publish_returnDate_"+id+"]").off();
		$("input[name=publish_departDate_"+id+"]").off();

	},

	getId: function(str){
		var list = str.split("_");
		return list[list.length-1];
	},
	validate: function(page) {
		var counter = 0;

		if (page === 1) {
			if (Utilities.isEmpty($("#publish_originInput").val())){
				return false;
			} else if (Utilities.isEmpty($("#publish_destInput").val())){
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
				if (requests[request].round){
					if (Utilities.isEmpty(requests[request].returnDate)) {
						return false;
					}
				} else if (Utilities.isEmpty(requests[request].departDate)) {
					return false;
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
		//validate before finish
		var messages = new Messages(), i;
		for ( i = 1; i <= this.toSubmit.seats; i++) {
			this.toSubmit.priceList[i] = 0;
		}

		if (!this.toSubmit.conditionalPrice) {
			this.toSubmit.priceList[0] = Utilities.toInt($("seats_single").val());
		} else {
			for ( i = 1; i <= this.toSubmit.priceListEntries; i++) {
				var seatNumber = $("#seatsNumber_"+i).val();
				seatNumber = Utilites.toInt(seatNumber);
				this.toSubmit.priceList[seatNumber-1] = Utilities.toInt($("seats_"+i).val()) || 0;
			}
		}
		for ( var r in toSubmit.requests) {
			if (this.toSubmit.requests[r]){
				var t = new Transaction();
				var m = new Message();
				m.set("type", this.toSubmit.type === "ask" ? Constants.messageType.ask : Constants.messageType.help);
				m.set("ownerId", this.user.get("userId"));
				m.set("departure_Location", this.toSubmit.origin);
				m.set("arrival_Location", this.toSubmit.dest);
				m.set("note", this.toSubmit.description);
				m.set("departure_Time", this.toSubmit.requests[r].departTime);
				m.set("departure_Location", this.toSubmit.origin);
				m.set("departure_seatsNumber", this.toSubmit.seats);
				m.set("departure_priceList", this.toSubmit.priceList);
				if (this.toSubmit.requests[r].round) {
					m.set("isRoundTrip", true);
					m.set("arrival_Time", this.toSubmit.requests[r].returnTime);
					m.set("arrival_Location", this.toSubmit.dest);
					m.set("arrival_seatsNumber", this.toSubmit.seats);
					m.set("arrival_priceList", this.toSubmit.priceList);
				}
				messages.add(m);
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
