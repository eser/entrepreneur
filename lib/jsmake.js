/**
 * entrepreneur
 *
 * @version v0.0.1
 * @link http://eser.ozvataf.com
 */
'use strict';

var _Entrepreneur = require('./Entrepreneur.js');

jsmake.desc('Project scaffolding with Entrepreneur');
jsmake.task('enpt install', argv => {
    const entp = new _Entrepreneur.Entrepreneur(jsmake);

    entp.install(argv);
});