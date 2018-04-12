let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)



app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket){
  	socket.on('chat message', function(msg){
    // console.log('message: ' + msg)
    io.emit('chat message', msg)
  })
})

// io.on('connection', function(req, res) {
// 	console.log('a user connected')
// })

http.listen(3000, function(){
	console.log('Server initialised on port: 3000')
})