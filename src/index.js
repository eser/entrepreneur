import maester from 'maester';
import jsmake from 'jsmake';

class Entrepreneur {

}

const instance = new Entrepreneur();

if (global.entp === undefined) {
    global.entp = instance;
}

module.exports = instance;
