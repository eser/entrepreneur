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

_jsmake2.default.task('sayHello', function (argv) {
    console.log('hello ' + argv.name);
});

_jsmake2.default.exec('sayHello --name=eser');