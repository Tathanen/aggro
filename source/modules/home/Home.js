/* Home module */

angular.module( "Home", [] )

.config( [ "$routeProvider",

    function ( $routeProvider )
    {
        "use strict";

        // Define the routes that are specific to your module
        $routeProvider
            .when( "/", {
                templateUrl: "modules/home/templates/home.html",
                controller: "Home",
                controllerAs: "home"
            } );

    }

] );

angular.module( "App" ).requires.push( "Home" );
