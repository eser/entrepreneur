/**
 * entrepreneur
 *
 * @version v0.0.1
 * @link http://eser.ozvataf.com
 */
'use strict';

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