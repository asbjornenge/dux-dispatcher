var http = require('http'),
    faye = require('faye');

var server = http.createServer(),
    bayeux = new faye.NodeAdapter({mount: '/'});

bayeux.attach(server)
server.listen(8000, function() {
    console.log('Dispatcher up @ :8000')
})
