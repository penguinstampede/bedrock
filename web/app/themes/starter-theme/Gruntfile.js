module.exports = function(grunt) {

  require('load-grunt-tasks', 'grunt-contrib-watch')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'style.css': 'static/scss/theme.scss'
            }
        }
    },
    watch: {
      scripts: {
        files: ['static/scss/**/*'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'static/js/vendor/foundation-base.js': [
            'static/js/vendor/foundation/foundation.core.js'
          ],
          'static/js/vendor/foundation-all.js': [
            'static/js/vendor/foundation/foundation.core.js',
            'static/js/vendor/foundation/foundation.util.*.js',
            'static/js/vendor/foundation/*.js'
          ]
        }
      }
    }
  });

  grunt.registerTask('default', ['sass','uglify','watch']);

};
