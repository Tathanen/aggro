module.exports =  function ( grunt )
{
    "use strict";

    return {
        options: {
            module: "App",
            htmlmin: {
                collapseBooleanAttributes: true,
                collapseWhitespace: false,
                removeAttributeQuotes: false,
                removeComments: true,
                removeEmptyAttributes: false,
                removeRedundantAttributes: false,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        },
        build: {
            src: [
                "modules/*/templates/*.html",
                "!modules/_app/templates/index.html"
            ],
            filter: function ( filepath )
            {
                return /mocks/.test( filepath ) ? grunt.option( "mocks" ) : true;
            },
            dest: "build/templates.js",
            cwd: "source"
        }
    };

};
