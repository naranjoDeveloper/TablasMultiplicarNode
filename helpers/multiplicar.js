const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x  ${i} = ${base * i}\n`;
      consola += `${base} ${"x".blue}  ${i} ${"=".blue} ${base * i}\n`;
    }

    if (listar) {
      console.clear();
      console.log("=============================".green);
      console.log("tabla del ".magenta, colors.magenta(base));
      console.log("=============================".green);
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
 
    return `Tabla ${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
