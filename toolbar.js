"use strict";

var menubar = require( "menubar" );

var mb = menubar( {
    dir: "build",
    icon: "build/favicon/favicon.png",
    width: 250,
    height: 370
} );

mb.on( "ready", function ()
{
    console.log( "app is ready" );
    // your app code here

} );
