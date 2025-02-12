module.exports = function(grunt) {
    grunt.initConfig({
    less: {
        development: {
        options: {
            compress: false
        },
        files: {
            "styles/main.css": "styles/main.less"
        }
        }
    },
    uglify: {
        my_target: {
        files: {
            'scripts/game.min.js': ['scripts/game.js']
        }
        }
}
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
};