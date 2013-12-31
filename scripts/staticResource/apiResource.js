/*
 no matter who we are, where we are from, each of us is a part
 of something greater, more consequential, than we individualy are
 wonders can only be achieved, by hardwork and unity
 I believe we can, we must, get the project going fast
 we do big things from the days of our funding,
 big things, cause we dare to dream
 our destiny is our choice, and we share common hopes common creed
 while all of us have different backgrounds, different stories different beliefs,
 we do not give up, not this time
 */

(function () {'use strict';

    this.ApiResource = function () {

        /*---------------  API level constants   --------------*/
        var api_modules = {

            rootPrefix: Constants.origin + '/api',

            versionPrefix: '/v1.0',

            moduleResource: {
                'DM': '/dianming',
                'users': '/users',
                'transaction': '/transaction',
                'notification': '/notification',
                'letter': '/letter',
                'general': '/general',
                'location': '/location',
            },

            moduleSufixResource: {
                'DM': {
                    dianming: '/dianming',
                    recent: '/recent',
                    search: '/search',
                    transaction: '/transaction',
                    autoMatch: '/autoMatch'
                },

                'users': {
                    findSession: '/findSession',
                    user: '/user',
                    login: '/login',
                    logout: '/logout',
                    img: '/img',
                    email: '/email',
                    changePassword: '/changePassword',
                    contactInfo: '/contactInfo',
                    singleLocation: '/singleLocation',
                    circleLocation: '/circleLocation',
                    emailActivation: '/emailActivation',
                    resendActivationEmail: '/resendActivationEmail',
                    forgetPassword: '/forgetPassword',
                    toggleNotices: '/toggleNotices',
                    watchUser: '/watchUser',
                    isUserWatched: '/isWatched/:id',
                    messageHistory: '/messageHistory',
                    transaction: '/transaction',
                    notification: '/notification',
                    searchUser: '/searchUser'
                },

                'transaction': {
                    transaction: '/transaction',
                    admin: '/admin'
                },

                'notification': {
                    notification: '/notification'
                },

                'general': {
                    feedBack: '/feedBack'
                },

                'location': {
                    location: '/location'
                },

                'letter': {
                    letter: '/letter',
                    user: '/user'
                }
            }
        };

        var api_maker = function (moduleName, actionName) {
            return api_modules.rootPrefix + api_modules.versionPrefix + api_modules.moduleResource[moduleName] + api_modules.moduleSufixResource[moduleName][actionName];
        };

        var api_assembler = function () {

            return {

                DM_dianming: api_maker('DM', 'dianming'),
                DM_recent: api_maker('DM', 'recent'),
                DM_search: api_maker('DM', 'search'),
                DM_transaction: api_maker('DM', 'transaction'),
                DM_autoMatch: api_maker('DM', 'autoMatch'),

                users_findSession: api_maker('users', 'findSession'), //GET added to session manaegr
                users_user: api_maker('users', 'user'), //GET and POST added to user manager
                users_login: api_maker('users', 'login'), //GET dded to session manager
                users_logout: api_maker('users', 'logout'), //GET added to session manager
                users_img: api_maker('users', 'img'), //
                users_email: api_maker('users', 'email'),
                users_changePassword: api_maker('users', 'changePassword'),
                users_contactInfo: api_maker('users', 'contactInfo'),
                users_singleLocation: api_maker('users', 'singleLocation'),
                users_emailActivation: api_maker('users', 'emailActivation'),
                users_resendActivationEmail: api_maker('users', 'resendActivationEmail'),
                users_forgetPassword: api_maker('users', 'forgetPassword'),
                users_toggleNotices: api_maker('users', 'toggleNotices'),
                users_watchUser: api_maker('users', 'watchUser'),
                users_isUserWatched: api_maker('users', 'isUserWatched'),
                users_messageHistory: api_maker('users', 'messageHistory'),
                users_transaction: api_maker('users', 'transaction'),
                users_notification: api_maker('users', 'notification'),
                users_searchUser: api_maker('users', 'searchUser'),

                transaction_transaction: api_maker('transaction', 'transaction'),
                transaction_admin: api_maker('transaction', 'admin'),

                notification_notification: api_maker('notification', 'notification'),

                letter_letter: api_maker('letter', 'letter'),
                letter_user: api_maker('letter', 'user'),

                general_feedBack: api_maker('general', 'feedBack'),

                location_location: api_maker('location', 'default')
            };
        };

        return api_assembler();
    };

}).call(this);