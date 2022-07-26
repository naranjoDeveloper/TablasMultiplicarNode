const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs');

console.log("base yargs", argv);

crearArchivo(argv.b , argv.l , argv.h)
  .then((nombre) => {
    console.log(nombre.rainbow, "creado");
})
  .catch((err) => {
    console.log(err);
  });
