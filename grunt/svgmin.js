module.exports = {
    options: {
        plugins: [
             { cleanupIDs: false }
        ]
    },
    build: {
        files: [ {
          expand: true,
          cwd: "source/images/",
          src: [ "**/*.svg" ],
          dest: "build/images/"
        } ]
    }
};