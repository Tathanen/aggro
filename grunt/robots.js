module.exports = function ( grunt )
{
    "use strict";

    grunt.registerTask( "envRobotsIndex", "Set robots.txt to index the site", function ()
    {
        grunt.config( "useRobotsIndex", true );
    } );

    grunt.registerTask( "envRobotsNoIndex", "Set robots.txt to NOT index the site", function ()
    {
        grunt.config( "useRobotsIndex", false );
    } );

    grunt.registerTask( "robots", "Write a robots.txt", function ()
    {
        if( grunt.config( "useRobotsIndex" ) && grunt.config( "Host" ) )
        {
            grunt.log.write( "Writing robots.txt for indexing" );
            grunt.file.write( "build/robots.txt",
                "User-agent: *\n"
                + "Sitemap: " + grunt.config( "Host" ) + "/build/sitemap.txt\n" );
        }
        else
        {
            grunt.log.write( "Writing robots.txt for NO indexing" );
            grunt.file.write( "build/robots.txt",
                "User-agent: *\n"
                + "disallow: /\n" );
        }
    } );
};
