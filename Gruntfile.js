module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
     dist: {
        src: ["scripts/lib/jquery-1.9.1.min.js",
              "scripts/lib/jquery.cycle2.min.js",
              "scripts/lib/underscore-1.5.2-min.js",
              "scripts/lib/backbone-1.1.0-min.js",
              "scripts/lib/jquery-ui-1.10.0.custom.min.js",
              "scripts/lib/jquery.placeholder.min.js",
              "scripts/lib/jquery.validate.min.js",
              "scripts/lib/additional-methods.min.js",
              "scripts/lib/json2.js",
              "scripts/lib/socket.io.js",
              "scripts/lib/custom.js",
              "scripts/lib/DD_belatedPNG_0.0.8a.js",
              "scripts/service/info.js",
              "scripts/prototypes.js",
              "scripts/staticResource/constants.js",
              "scripts/staticResource/apiResource.js",
              "scripts/staticResource/status.js",
              "scripts/staticResource/config.js",
              "scripts/service/storageService.js",
              "scripts/service/utilities.js",
              "scripts/service/templateUtl.js",
              "scripts/service/viewRegistrationService.js",
              "scripts/service/eventClearService.js",
              "scripts/model/representation/locationRepresentation.js",
              "scripts/model/representation/searchRepresentation.js",
              "scripts/model/representation/userSearchRepresentation.js",
              "scripts/model/IdentityVerification/DriverVerification.js",
              "scripts/model/IdentityVerification/PassengerVerification.js",
              "scripts/model/notification.js",
              "scripts/model/transaction.js",
              "scripts/model/user.js",
              "scripts/model/message.js",
              "scripts/model/letter.js",
              "scripts/service/locationService.js",
              "scripts/test/testMockObj.js",
              "scripts/dataManagers/sessionManager.js",
              "scripts/dataManagers/userManager.js",
              "scripts/dataManagers/messageManager.js",
              "scripts/dataManagers/transactionManager.js",
              "scripts/dataManagers/notificationManager.js",
              "scripts/dataManagers/letterManager.js",
              "scripts/dataManagers/generalManager.js",
              "scripts/dataManagers/socketManager.js",
              "scripts/view/shared/multiPageView.js",
              "scripts/view/shared/BaseFormView.js"
              "scripts/view/mapview.js",
              "scripts/view/advertisementView.js",
              "scripts/view/letterView.js",
              "scripts/view/dropdown/baseDropDownView.js",
              "scripts/view/dropdown/locationDropDownView.js",
              "scripts/view/dropdown/idTypeDropDownView.js",
              "scripts/view/message/MessageDetailView.js",
              "scripts/view/message/MessagePostView.js",
              "scripts/view/message/MessagePublishView.js",
              "scripts/view/message/MessageEditView.js",
              "scripts/view/searchResultView.js",
              "scripts/view/userSearchResultView.js",
              "scripts/view/frontPageView.js",
              "scripts/view/mainPageView.js",
              "scripts/view/personalSub/transactionHistoryView.js",
              "scripts/view/personalSub/notificationHistoryView.js",
              "scripts/view/personalSub/messageHistoryView.js",
              "scripts/view/personalSub/personalSocialView.js",
              "scripts/view/personalSub/personalHistoryView.js",
              "scripts/view/personalSub/personalMessageView.js",
              "scripts/view/personalSub/personalUtilityView.js",
              "scripts/view/personalSub/notificationHistoryView.js",
              "scripts/view/personalView.js",
              "scripts/view/registrationView.js",
              "scripts/view/findPasswordView.js",
              "scripts/view/popup/transactionView.js",
              "scripts/view/topBarView.js",
              "scripts/view/howItWorksView.js",
              "scripts/view/serviceCenterView.js",
              "scripts/main.js"
              ],
        dest: 'build/main.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        files: {
          'build/main.min.js':['<%= concat.dist.dest %>']
        }
      }
    },
    cssmin: {
      dist: {
        files: {
          'build/style/css/style-min.css': ['style/css/*.css']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
