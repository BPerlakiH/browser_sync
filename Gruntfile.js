module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserSync: {
      dev: {
        options: {
            proxy: 'localhost.pde',
            files: 'assets/MOL/stylesheets/*.css, js/*.js, application/**/*.php, application/views/**/*.phtml, assets/**/*.yml'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['browserSync']);
  
};