"use strict";

// Bundlers are able to synchronously require an ESM module from a CommonJS one.
const { jQuery } = require( "../../dist-module/jquery.slim.module.js" );
module.exports = jQuery;
