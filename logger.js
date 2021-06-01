const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    // 'message' is the event
    this.emit('message', { id: uuid.v4(), msg });
  }
}

// module.exports = Logger;

// const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('Called listener', data));

logger.log('Hello World');
logger.log('Hello');
logger.log('Hi');