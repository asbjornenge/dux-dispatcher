#!/usr/bin/env node
var args = require('minimist')(process.argv.slice(2), {
    default : {
        port : 8000
    }
})
var http = require('http'),
    faye = require('faye');

var server = http.createServer(),
    bayeux = new faye.NodeAdapter({mount: '/'});

bayeux.attach(server)
server.listen(args.port, function() {
    console.log('Dispatcher up @ port '+args.port)
})
