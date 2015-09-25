/* Aggro API service */

angular.module( "App" )

.factory( "AggroAPI", [ "API",

    function ( API )
    {
        "use strict";

        return new API( {
            rootPath: "{{ APIROOT }}"
        } );
    }

] );
