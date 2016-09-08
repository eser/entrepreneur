const EventEmitter = require('events'),
    JsMake = require('jsmake'),
    Maester = require('maester');

class Entrepreneur extends EventEmitter {
    constructor() {
        super();
    }
}

const instance = new Entrepreneur();
module.exports = instance;
