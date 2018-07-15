var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

io.on('connection', function(socket) {
    console.log('a user connected: ', socket.id)

    socket.on('change-color', function(color) {
        console.log('color: ', color)
        socket.broadcast.emit('change-color', color)
    })

    socket.on('disconnect', function () {
        //io.emit('user disconnected')
        console.log('user -- disconnect io')
    })
})

http.listen(5000, function() {
  console.log('listening on *:5000')
})
