var ServiceCenterView = Backbone.View.extend({
    el: "#content",
    initialize: function(params){
        this.currentTab = params ? params.tab || "about" : "about";
        this.isClosed = false;
        _.bindAll(this, "preRender", "render", "bindEvents", "close");
        this.baseTemplate = _.template(tpl.get('serviceCenter_base'));
        this.aboutUsPage = _.template(tpl.get('serviceCenter_aboutUs'));
        this.feedbackPage = _.template(tpl.get('serviceCenter_feedback'));
        this.termsPage = _.template(tpl.get('serviceCenter_terms'));
        this.termsEnPage = _.template(tpl.get('serviceCenter_terms_en'));
        this.faqPage = _.template(tpl.get('serviceCenter_faq'));
        this.careerPage = _.template(tpl.get('serviceCenter_career'));
        this.preRender();
        this.render();
        this.bindEvents();
    },
    preRender: function() {
        this.$el.append(this.baseTemplate);
        this.$contentEl = $("#help_content");
    },
    render: function (){
        switch(this.currentTab){
            case "about":
                this.$contentEl.empty().append(this.aboutUsPage);
                break;
            case "faq":
                this.$contentEl.empty().append(this.faqPage);
                break;
            case "career":
                this.$contentEl.empty().append(this.careerPage);
                break;
            case "term":
                this.$contentEl.empty().append(this.termsPage);
                var that = this;
                $("#terms_lang").on("click", "li", function (e) {
                    debugger;
                    if ($(e.target).attr("data-id") === "zh") {
                        that.$contentEl.empty().append(that.termsPage);
                    } else {
                        that.$contentEl.empty().append(that.termsEnPage);
                    }
                });
                break;
            case "feedback":
                this.$contentEl.empty().append(this.feedbackPage);
                break;
            default:
            break;
        }
    },
    bindEvents: function (){
        var that = this;
        $("#serviceTab").on("click", "dd", function (e) {
            $("#terms_lang").off();
            $(e.delegateTarget).find(".active").removeClass("active");
            that.currentTab = $(e.target).addClass("active").attr("data-id");
            app.navigate("/service/"+that.currentTab)
            that.render();
        });
    },
    close: function (){
        if (!this.isClosed){
            $("#serviceTab").off();
            this.$el.close();
        }
    }
});