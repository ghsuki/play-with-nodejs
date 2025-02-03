const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.once('event', () => {
    console.log('Event occurred');
})

myEmitter.emit('event');
myEmitter.emit('event');