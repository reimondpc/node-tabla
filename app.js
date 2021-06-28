const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

// console.log(argv);
// const [, , arg3 = 'base = 1'] = process.argv;
// const [, base] = arg3.split('=');
// console.log(base);
// const base = 2;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.green, 'fue creado'))
    .catch(err => console.log(err));