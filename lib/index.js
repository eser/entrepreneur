/**
 * entrepreneur
 *
 * @version v0.0.1
 * @link http://eser.ozvataf.com
 */
'use strict';

var _maester = require('maester');

var _maester2 = _interopRequireDefault(_maester);

var _jsmake = require('jsmake');

var _jsmake2 = _interopRequireDefault(_jsmake);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Entrepreneur {}

const instance = new Entrepreneur();

if (global.entp === undefined) {
    global.entp = instance;
}

module.exports = instance;