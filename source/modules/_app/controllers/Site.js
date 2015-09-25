/* Site controller */

angular.module( "App" )

.controller( "Site", [ "$rootScope",

    function ( $rootScope )
    {
        "use strict";

        var ctrl = this;

        ctrl.updated = null;

        $rootScope.$on( "monitor.updated", function ( event, when )
        {
            ctrl.updated = when;

        } );

    }

] );
