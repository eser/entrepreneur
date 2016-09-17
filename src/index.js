import maester from 'maester';
import jsmake from 'jsmake';

jsmake.task('sayHello', function (argv) {
    console.log('hello ' + argv.name);
});

jsmake.exec('sayHello --name=eser');
