// we listen to events and whenever some event
// occurs we register a function that will execute in
// response to those events.
// 1. create custom event - extend the class
// 2. emit event / listen for it - just create the instance
// on() - listen for an event, emit() - emit an event
const EventEmitter = require('events')  // class 'EventEmitter'
const customEmitter = new EventEmitter()  // instance of class
customEmitter.on('response', (name,roll) => {
    console.log(`data received : name = ${name} ; roll = ${roll}`)
})
customEmitter.on('response', () => {
    console.log(`some other logic`)
})
customEmitter.emit('response','Jesmi',32)
// we can also pass the argument when we are emitting the event.

