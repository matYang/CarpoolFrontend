(function () {'use strict';

    //used for top-level view management upon page switches, it only deals with the sudo divs that are defined in
    // index.html
    this.ViewRegistrationService = function () {

        //applying JavaScript closure
        //storing a registraName -> viewName[] map, members are dynamically generated upon view registration
        var viewRegistrationTable = {};

        //this is a private constant member defined by JavaScript closure, must be updated manually whenever a new view
        // is defined (not declared)
        //this maps the ownership of the view to other views
        var registraDepencyTable = {
            'topBar': {
                request: ['topBar'],
                antiRequest: ['topBar']
            },
            'adv': {
                request: ['adv'],
                antiRequest: ['adv']
            },
            'personal': {
                request: ['content'],
                antiRequest: ['content']
            },
            'mainPage': {
                request: ['content'],
                antiRequest: ['content']
            },
            'findUser': {
                request: ['content'],
                antiRequest: ['content']
            },
            'frontPage': {
                request: ['content'],
                antiRequest: ['content', 'advertisement']
            },
            'MessageDetail': {
                request: ['content'],
                antiRequest: ['content', 'advertisement']
            },
            'MessageEdit': {
                request: ['content'],
                antiRequest: ['content', 'advertisement']
            },
            'MessagePost': {
                request: ['content'],
                antiRequest: ['content', 'advertisement']
            },
            'HowItWorkds': {
                request: ['content'],
                antiRequest: ['content', 'advertisement']
            },
            'letter': {
                request: ['chat'],
                antiRequest: ['chat']
            },
            'registration': {
                request: ['content'],
                antiRequest: ['content', 'advertisement']
            },
            'findPassword': {
                request: ['content'],
                antiRequest: ['content', 'advertisement']
            },
            'transactionDetail': {
                request: ['popup'],
                antiRequest: ['popup']
            },
            'locationPicker': {
                request: ['popup'],
                antiRequest: ['popup']
            }
        };

        //call this function at the initialization of each new view, will guarantee the closing of anti-requested views
        // and the registration of the new view
        //if override, then view may be deleted even if it is the caller itself
        return {
            register: function (viewName, viewObject, override) {
                var registrationTarget, i = 0;

                //check if name is in the registra list, if not, then it has not been defined
                if (registraDepencyTable.hasOwnProperty(viewName)) {

                    registrationTarget = registraDepencyTable[viewName];

                    //check if the any anti-requested views has been registered, if so, attemp to close it
                    for ( i = 0; i < registrationTarget.antiRequest.length; i += 1) {
                        //check if the view has been registered, and if the registered view is the calling view itself
                        if (viewRegistrationTable.hasOwnProperty(registrationTarget.antiRequest[i]) && (viewRegistrationTable[registrationTarget.antiRequest[i]].viewName !== viewName || override)) {

                            //check if the view is valid with a close function, if so, close it, then deletes the
                            // registration record
                            if ( typeof viewRegistrationTable[registrationTarget.antiRequest[i]].viewObject.close === 'function') {
                                viewRegistrationTable[registrationTarget.antiRequest[i]].viewObject.close();
                                //remove the registration entry, compeletely unregister it
                                delete viewRegistrationTable[registrationTarget.antiRequest[i]];
                            } else {
                                alert("fatal error: viewRegistrationService:: register:: alert, member " + registrationTarget.antiRequest[i] + " does not contain close function");
                                break;
                            }
                        }
                    }

                    //registers the new view, if the view is already registered, do not register new view (unless the
                    // override flag is set)
                    for ( i = 0; i < registrationTarget.request.length; i += 1) {
                        viewRegistrationTable[registrationTarget.request[i]] = {
                            'viewName': viewName,
                            'viewObject': viewObject
                        };
                    }
                } else {
                    alert("fatal error: viewRegistrationService:: resiger:: " + viewName + " is not registered in registraDepencyTable");
                }
            },

            unregister: function (viewName) {
                var registrationTarget, i = 0;

                if (registraDepencyTable.hasOwnProperty(viewName)) {

                    registrationTarget = registraDepencyTable[viewName];

                    for ( i = 0; i < registrationTarget.request.length; i += 1) {
                        if (viewRegistrationTable.hasOwnProperty(registrationTarget.request[i]) && viewRegistrationTable[registrationTarget.request[i]].viewName === viewName) {
                            if ( typeof viewRegistrationTable[registrationTarget.request[i]].viewObject.close === 'function') {
                                viewRegistrationTable[registrationTarget.request[i]].viewObject.close();
                                viewRegistrationTable[registrationTarget.request[i]].viewObject.remove();
                                delete viewRegistrationTable[registrationTarget.request[i]];
                            } else {
                                alert("fatal error: viewRegistrationService:: unregister:: alert, member " + registrationTarget.request[i] + " does not contain close function");
                                break;
                            }
                        }
                    }
                } else {
                    alert("fatal error: viewRegistrationService:: unregister:: " + viewName + " is not registered in registraDepencyTable");
                }
            },

            isViewRegistered: function (viewName) {
                var registrationTarget, i = 0;

                if (registraDepencyTable.hasOwnProperty(viewName)) {

                    registrationTarget = registraDepencyTable[viewName];

                    for ( i = 0; i < registrationTarget.request.length; i += 1) {
                        if (!(viewRegistrationTable.hasOwnProperty(registrationTarget.request[i]) && viewRegistrationTable[registrationTarget.request[i]].viewName === viewName)) {
                            return false;
                        }
                    }
                    return true;
                } else {
                    alert("fatal error: viewRegistrationService:: isRegistered:: " + viewName + " is not registered in registraDepencyTable");
                }
            }
        };
    };

}).call(this);