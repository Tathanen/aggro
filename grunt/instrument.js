module.exports = {
    files: [ "build/modules/**/*.js", "!build/modules/**/mocks/**/*.js", "!build/project.js" ],
    options: {
        lazy: false,
        basePath: "."
    }
};
