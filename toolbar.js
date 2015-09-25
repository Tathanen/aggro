"use strict";

var menubar = require( "menubar" );

var mb = menubar( {
    dir: process.cwd() + "/build",
    icon: process.cwd() + "/build/favicon/favicon.png",
    width: 250,
    height: 370
} );

mb.on( "ready", function ()
{
    console.log( "app is ready" );
    // your app code here

} );
