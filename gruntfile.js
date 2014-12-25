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
            cwd: 'uploads/', // required option
            dest: 'uploads/'
          }]
        }
      },

      smushit: {
        mygroup: {
          src: [
                'uploads/**/*.jpg',
                'uploads/**/*.png'
               ],
          dest: 'uploads/'
        }
      }

  });

grunt.loadNpmTasks('grunt-pngmin');
grunt.loadNpmTasks('grunt-smushit');

grunt.registerTask('default', ['pngmin', 'smushit']);

}
