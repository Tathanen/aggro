module.exports = {
    project:
    {
        options: {
            mangle: {},
            compress: {},
            sourceMap: false
        },
        files:
        {
            "build/project.js": "build/project.js",
            "build/templates.js": "build/templates.js"
        }
    },
    libraries:
    {
        options:
        {
            mangle: false,
            compress: {},
            sourceMap: false
        },
        files:
        {
            "build/angular.js": "build/angular.js",
            "build/components.js": "build/components.js"
        }
    }
};
