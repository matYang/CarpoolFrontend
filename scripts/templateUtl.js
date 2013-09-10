tpl = {

    // Hash of preloaded templates for the app
    templates:{},

    // Recursively pre-load all the templates for the app.
    // This implementation should be changed in a production environment. All the template files should be
    // concatenated in a single file.
    loadTemplates:function (names, callback) {

        if (names.length > 0){

            var that = this,
                i = 0,
                tplCount = 0;

            /* well this is the recursive function we used in V0.9, it is synchronous to ensure safety, ok for 4 templates in v0.9, unacceptable for 25+ templates in v1.0
            var loadTemplate = function (index) {
                var name = names[index];

                Constants.dLog("loading " + names[index]);

                $.get('templates/' + name + '.html', function (data) {
                    that.templates[name] = data;
                    index++;
                    if (index < names.length) {
                        loadTemplate(index);
                        Constants.dLog("trying another load");
                    } else {
                        callback();
                        Constants.dLog("trying callback");
                    }
                });
            };
            loadTemplate(0);
            */

            var loopingLoadTemplate = function(index){
                var name = names[index];

                $.get('templates/' + name + '.html', function (data) {
                    that.templates[name] = data;
                    tplCount++;
                    //safety lock
                    if (tplCount === names.length){
                        callback();
                    }
                });
            };

            for (i = 0; i < names.length; i++){
                loopingLoadTemplate(i);
            }
        }
    },

    // Get template by name from hash of preloaded templates
    get:function (name) {
        return this.templates[name];
    }

};