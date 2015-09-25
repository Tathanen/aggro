module.exports = function ( grunt )
{
    "use strict";

    var path = require( "path" );

    require( "load-grunt-config" )( grunt, {
        data: {
            version: grunt.option( "gitver" ) || Date.now(),
            configPath: path.join( process.cwd(), "node_modules", "dominatr-grunt", "grunt" ),
            overridePath: path.join( process.cwd(), "grunt" ),
            mergeFunction: function ( obj, ext )
            {
                return require( "config-extend" )( obj, ext );
            },
            aws: {
                accessKeyId: grunt.option( "aws-access-key-id" ),
                secretAccessKey: grunt.option( "aws-secret-access-key" )
            }
        }
    } );
};
