(function () {
	'use strict';


	this.GeneralManager = function(sessionManager, userManager){

		this.apis = new ApiResource();

		this.sessionManager = sessionManager;
		this.userManager = userManager;

		this.timeStamp = new Date();

        this.sessionManager.resgisterManager(this);

	};

	GeneralManager.prototype.validateFeedback = function(feedback) {

		if (typeof feedback !== 'string'){
			Constants.dWarn("GeneralManager::validateFeedback:: invalid parameter");
			return false;
		}

        if (feedback.length < 1){
            alert("请至少输入一个字符");
            return false;
        }
        if (feedback.length > 200){
            alert("反馈太长了。。。。你还是发邮件吧");
            return false;
        }

        return true;
	};

    GeneralManager.prototype.release = function() {
        this.timeStamp = new Date();
    };

	GeneralManager.prototype.sendFeedback = function(feedback, callback) {
		if (typeof feedback !== 'string'){
			Constants.dWarn("GeneralManager::sendFeedback:: invalid parameter");
			return;
		}
		if (!this.validateFeedback(feedback)){
			return;
		}
		var self = this;

        $.ajax({
            type: "POST",
            url: self.apis.general_feedBack,
            data: feedback,
            dataType: 'text',
            success: function(data){
                self.timeStamp = new Date();

            },
            error: function (data, textStatus, jqXHR){
                if (textStatus && textStatus == 400){
                    alert("出错了，请稍后再试");
                }
                alert("出错了，请稍后再试");
            }
        });
	};



}).call(this);