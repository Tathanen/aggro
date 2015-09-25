/* Mocks module */

angular.module( "e2e-mocks", [ "ngMockE2E", "ngRoute" ] )

.config( [ "$provide", "$routeProvider",

    function ( $provide, $routeProvider )
    {
        "use strict";

        // Sample route for seed purposes only, should be removed in project
        // (also remove "ngRoute" and "$routeProvider" from lines above)
        $routeProvider.when( "/mocks", {
            templateUrl: "/modules/mocks/templates/mocks.html",
            controller: "Mocks"
        } );

        // Decorate $httpBackend so "when" accepts $routeProvider format, eg. /user/:userid?
        $provide.decorator( "$httpBackend", [ "$delegate",

            function ( $delegate )
            {
                // ** Function copied from private angular.js source, modified to be smaller
                function pathObj ( path )
                {
                    var ret = {
                        originalPath: path,
                        regexp: path
                    };
                    var keys = ret.keys = [];
                    path = path
                        .replace( /([().])/g, "\\$1" )
                        .replace( /(\/)?:(\w+)([\?\*])?/g, function( _, slash, key, option )
                        {
                            var optional = option === "?" ? option : null;
                            var star = option === "*" ? option : null;
                            keys.push( { name: key, optional: !!optional } );
                            slash = slash || "";
                            return ""
                                + ( optional ? "" : slash )
                                + "(?:"
                                + ( optional ? slash : "" )
                                + ( star && "(.+?)" || "([^/]+)" )
                                + ( optional || "" )
                                + ")"
                                + ( optional || "" );
                        } )
                        .replace( /([\/$\*])/g, "\\$1" );

                    ret.regexp = new RegExp( path, "i" );
                    return ret;
                }

                var oldWhen = $delegate.when;
                $delegate.when = function ( method, url, data, headers )
                {
                    return angular.isString( url )
                        ? oldWhen( method, pathObj( url ).regexp, data, headers )
                        : oldWhen( method, url, data, headers );
                };

                $delegate.getParams = function ( url, matchUrl )
                {
                    // ** Function copied from private angular.js source, modified to remove function parameters
                    function routeParams ()
                    {
                        var route = pathObj( matchUrl );
                        var params = {};
                        if( !route.regexp )
                        {
                            return {};
                        }

                        var matches = route.regexp.exec( url.split( "?" )[ 0 ] );
                        if( !matches )
                        {
                            return {};
                        }

                        for( var i = 1; i < matches.length; ++i )
                        {
                            var key = route.keys[ i - 1 ];
                            var val = matches[ i ];

                            if( key && val )
                            {
                                params[ key.name ] = val;
                            }
                        }
                        return params;
                    }

                    // ** Function copied from private angular.js source, modified to remove function parameters
                    function queryParams ()
                    {
                        var query = url.split( "?" )[ 1 ] || null;
                        if( !query )
                        {
                            return {};
                        }
                        var params = {};
                        var key, keyValue;

                        query.split( "&" ).forEach( function( param )
                        {
                            keyValue = param.replace( /\+/g, "%20" ).split( "=" );
                            key = decodeURIComponent( keyValue[ 0 ] );
                            if( angular.isDefined( key ) )
                            {
                                var val = angular.isDefined( keyValue[ 1 ] )
                                    ? decodeURIComponent( keyValue[ 1 ] )
                                    : true;

                                if( !hasOwnProperty.call( params, key ) )
                                {
                                    params[ key ] = val;
                                }
                                else if( angular.isArray( params[ key ] ) )
                                {
                                    params[ key ].push( val );
                                }
                                else
                                {
                                    params[ key ] = [ params[ key ], val ];
                                }
                            }
                        } );

                        return params;
                    }

                    return !matchUrl
                        ? queryParams()
                        : angular.extend( {}, routeParams(), queryParams() );
                };

                return $delegate;
            }

        ] );

    }

] )

.run( [ "$httpBackend",

    function ( $httpBackend )
    {
        "use strict";
        var APIRoot = "{{ APIROOT }}";

        // Fake Data, simple for demo purposes
        var contacts = [
            { "id": 1, "name": "Jack Thomas" },
            { "id": 2, "name": "James Jones" },
            { "id": 3, "name": "Phillip Sanky" }
        ];
        var contact  = { "name": "Peter Malloy" };

        // Example: mock "GET", specify only data to be returned
        $httpBackend.when( "GET", APIRoot + "contacts" )

            .respond( contacts );

        // Example: mock "POST", specify response status code and data to be returned
        $httpBackend.when( "POST", APIRoot + "contacts" )

            .respond( function( method, url, data )
            {
                data           = angular.fromJson( data );
                var newContact = data.name ? data : contact;
                newContact.id  = contacts[ contacts.length - 1 ].id + 1;
                contacts.push( newContact );

                return [ 201, newContact ];
            } );

        // Example: mock "DELETE", specify response status code, null data to be returned, and custom headers
        $httpBackend.when( "DELETE", APIRoot + "contacts/:id" )

            .respond( function( method, url )
            {
                // Example: retrieve API parameters via $httpBackend.getParams()
                var params = $httpBackend.getParams( url, APIRoot + "contacts/:id" );

                for( var i = 0; i < contacts.length; i++ )
                {
                    if( contacts[ i ].id === Number( params.id ) )
                    {
                        contacts.splice( i, 1 );
                        break;
                    }
                }

                return [
                    204,
                    null,
                    { someHeader: "value" }
                ];
            } );

        // Any content that still needs to be requested from an external source/HTTP request
        // needs to use passThrough(), including template files. Handlers are prioritized
        // by the order they are attached, meaning passThrough()s could be listed earlier.
        $httpBackend.when( "GET", /^\/build/ ).passThrough();

        // Fallback for all other routes, just in case. You 'may' need to list more than just the GET fallback.
        $httpBackend.when( "GET", /\*/ ).passThrough();
    }

] );

angular.module( "App" ).requires.push( "e2e-mocks" );
