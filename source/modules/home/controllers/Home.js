/* Home controller */

angular.module( "Home" )

.controller( "Home", [ "$rootScope",

    function ( $rootScope )
    {
        "use strict";

        var ctrl = this;

        ctrl.token = process.env.token;

        if( ctrl.token )
        {
            Spark.login( { accessToken: ctrl.token },

                function ( err, body )
                {
                    console.log( "Spark logged in", body );

                    Spark.onEvent( "occupied", function ()
                    {
                        $rootScope.$apply( function ()
                        {
                            ctrl.roomStatus = "Occupied";
                            $rootScope.$broadcast( "monitor.updated", moment().format( "LTS" ) );
                        } );
                    } );

                    Spark.onEvent( "empty", function ()
                    {
                        $rootScope.$apply( function ()
                        {
                            ctrl.roomStatus = "Empty";
                            $rootScope.$broadcast( "monitor.updated", moment().format( "LTS" ) );
                        } );
                    } );

                } );
        }
        else
        {
            ctrl.error = "Authentication not supplied";
        }

    }

] );
