"use strict";

describe( "The page", function ()
{
    it( "should do something", function ()
    {
        browser.get( "/" );

        expect( $( "main" ).isPresent() ).toBe( true );
    } );

} );
