module.exports = function ( grunt )
{
    "use strict";

    return {
        scripts:
        {
            expand: true,
            cwd: "source/modules/",
            src: [
                "*/*.js",
                "*/*/*.js",
                "!**/*.spec.js",
                "!*/tests/**/*.*"
            ],
            filter: function ( filepath )
            {
                if( /mocks.+replace\.js/.test( filepath ) )
                {
                    return grunt.option( "replacemocks" );
                }
                else if( /mocks/.test( filepath ) )
                {
                    return grunt.option( "mocks" );
                }

                return true;
            },
            dest: "build/modules/"
        },
        fonts: {
            expand: true,
            cwd: "source/fonts/",
            src: [
                "**/*.*"
            ],
            dest: "build/fonts/"
        },
        images: {
            expand: true,
            cwd: "source/images/",
            src: [
                "**/*.*"
            ],
            dest: "build/images/"
        },
        favicon: {
            expand: true,
            cwd: "source/favicon/",
            src: [
                "**/*.*"
            ],
            dest: "build/favicon/"
        },
        manifest:
        {
            expand: true,
            cwd: "source/",
            src: [
                "manifest.json"
            ],
            dest: "build/"
        },
        sitemap:
        {
            expand: true,
            cwd: "source/",
            src: [
                "**/sitemap.txt"
            ],
            dest: "build/"
        },
        sounds:
        {
            expand: true,
            cwd: "source/audio/",
            src: [
                "**/*.*"
            ],
            dest: "build/audio/"
        }
    };
};
