module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
     dist: {
        src: ['scripts/service/info.js', 
              'scripts/lib/*.js',
              'scripts/staticResource/*.js',
              'scripts/service/*.js',
              'scripts/model/representation/*.js',
              'scripts/model/*.js',
              'scripts/dataManagers/*.js',
              'scripts/view/**/*.js'],
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
        files: {
          'build/style-min.css': ['style/css/*.css']
        }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
