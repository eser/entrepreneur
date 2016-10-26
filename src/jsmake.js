import { Entrepreneur } from './Entrepreneur.js';

jsmake.desc('Project scaffolding with Entrepreneur');
jsmake.task('enpt install', (argv) => {
    const entp = new Entrepreneur(jsmake);

    entp.install(argv);
});
