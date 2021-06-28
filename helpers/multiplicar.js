const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${colors.blue(base)} ${'x'.red} ${colors.blue(i)} ${'='.red} ${colors.blue(base * i)}\n`;
        }
        if (listar) {
            console.log('==================='.yellow);
            console.log('    Tabla del'.yellow, colors.blue(base));
            console.log('==================='.yellow);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creado`;

        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err;

        //     console.log(`tabla-${base}.txt creado`);
        // })        
    } catch (err) {
        throw err;
    }
}

module.exports = { crearArchivo }