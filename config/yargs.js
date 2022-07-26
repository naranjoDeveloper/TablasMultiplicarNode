require('colors')
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'.bgCyan
  })
  .option("l" , {
   alias: "listar",
   type: "boolean",
   demandOption: true,
   default: false,
   describe: 'Muestra la tabla en consola'.bgMagenta
  })
  .option('h' ,{
    alias: "hasta",
    type: 'number',
    demandOption: false,
    describe: 'Limite de la tabla de multiplicar'.bgCyan
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base no es un numero".bgRed;
    }
    return true;
  }).argv;

module.exports = argv;