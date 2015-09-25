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

                    Spark.publishEvent( "roomStatus", {} );

                    Spark.onEvent( "occupied", function ()
                    {
                        $rootScope.$apply( function ()
                        {
                            ctrl.roomStatus = "occupied";
                            ctrl.flavor = "room is occupied";
                            $rootScope.$broadcast( "monitor.updated", moment().format( "LTS" ) );
                        } );
                    } );

                    Spark.onEvent( "empty", function ()
                    {
                        $rootScope.$apply( function ()
                        {
                            ctrl.roomStatus = "empty";
                            ctrl.flavor = "room is empty";
                            $rootScope.$broadcast( "monitor.updated", moment().format( "LTS" ) );
                        } );
                    } );

                } );
        }
        else
        {
            ctrl.roomStatus = "error";
            ctrl.flavor = "authentication not supplied";
        }

    }

] );
