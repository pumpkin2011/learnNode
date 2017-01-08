// 事件
var events = require('events')

var eventEmitter = new events.EventEmitter()

var connectHandler = () => {
  console.log('connected success')

  eventEmitter.emit('data_received')
}

eventEmitter.on('connection', connectHandler)

eventEmitter.on('data_received', () => {
  console.log('data received success')
})

eventEmitter.emit('connection')

console.log('finished')
