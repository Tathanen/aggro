/* Mocks controller */

angular.module( "e2e-mocks" )

.controller( "Mocks", [ "API",

    function( API )
    {
        "use strict";

        var ctrl = this;
        ctrl.contacts = [];

        ctrl.getContacts = function ()
        {
            API.$get( "contacts" )

                .then( function( response )
                {
                    ctrl.contacts = response.data;
                },
                function ( err )
                {
                    console.log( err );
                } );
        };

        ctrl.addContact = function( name )
        {
            API.$post( "contacts", { "name": name } )

                .then( function( response )
                {
                    ctrl.nextContact = "";
                    ctrl.contacts.push( response.data );
                },
                function( err )
                {
                    console.log( err );
                } );
        };
        ctrl.deleteContact = function ( index )
        {
            API.$delete( "contacts/" + index )

                .then( function()
                {
                    ctrl.getContacts();
                },
                function( err )
                {
                    console.log( err );
                } );
        };

        ctrl.getContacts();
    }

] );
