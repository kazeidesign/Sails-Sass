/**
 * `sass`
 *
 * ---------------------------------------------------------------
 *
 * Compile your LESS files into a CSS stylesheet.
 *
 * By default, only the `assets/styles/importer.scss` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-sass
 *
 */
module.exports = function(grunt) {                  // Create new Grunt task

  grunt.config.set('sass', {                        // Task sass
    dev: {
      files: [{
        expand: true,                               // 'expand directory'
        cwd: 'assets/styles/',                      // 'source folder'
        src: ['importer.scss', 'importer.sass'],    // 'source files'
        dest: '.tmp/public/styles/',                // 'destination folder'
        ext: '.css'                                 // 'extension of compiled file'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-sass');                 // Load task Grunt-sass  
};
