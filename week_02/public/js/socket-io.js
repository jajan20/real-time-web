// CLIENT SIDE JAVASCRIPT!!!!

(function() {
	var socket = io()
	var delays = document.getElementById('delays')
	var delayForm = document.getElementById('delayForm')
	var delayRoute = document.getElementById('delayRoute')
	var delayReason = document.getElementById('delayReason')

	delayForm.addEventListener('submit', function(event) {
		event.preventDefault()
		// console.log(delayReason.value)
		socket.emit('delay', delayReason.value, delayRoute.value)
		delayReason.value = ''
		delayRoute.value = ''
	})

	socket.on('delay', function(reason, route) {
		var delay = document.createElement('article')
		var delayHeader = document.createElement('h2')
		var singleMessage = document.createElement('p')
		
		delayHeader.innerHTML = route
		singleMessage.innerHTML = reason

		delays.append(delay)
		delay.append(delayHeader)
		delay.append(singleMessage)
	})
})()
