const express = require('express')
const autoComplete = require('js-autocomplete')
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

let trainRoutes = require('./train.routes.json')
// console.log(trainRoutes)

const ejs = require('ejs')
const ns = require('ns-api') ({
	username: '',
	password: ''
})



// const app = express()

app.set('view engine, ejs')
app.use(express.static('./public'))

app.get('/', function(req, res) {
	// self = this
	ns.storingen(function(err, data) {
  		// data['trainRoutes'] = self.trainRoutes
  		res.render('index.ejs', {data})
  		// console.log(data)
	})
})

io.on('connection', function(socket){
  	socket.on('delay', function(reason, route){
    io.emit('delay', reason, route)
    console.log(reason, route)
  })
})

http.listen(8008, function(){
	console.log(`(ง ื▿ ื)ว 8008`)
})
