module.exports = function(grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

    pngmin: {

      compile: {
        options: {
          ext: '.png',
          force: true
        },

          files: [{
            expand: true, // required option
            src: ['**/*.png'],
            cwd: 'wp-content/uploads/', // required option
            dest: 'wp-content/uploads/'
          }]
        }
      },

      smushit: {
        mygroup: {
          src: [
                'wp-content/uploads/**/*.jpg',
                'wp-content/uploads/**/*.png'
               ],
          dest: 'wp-content/uploads/'
        }
      }

  });

grunt.loadNpmTasks('grunt-pngmin');
grunt.loadNpmTasks('grunt-smushit');

grunt.registerTask('default', ['pngmin', 'smushit']);

}
