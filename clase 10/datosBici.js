let fs = require("fs");
let jsonBicicletas = fs.readFileSync("./bicicletas.json", "utf-8");
let bicicletasImportadas = JSON.parse(jsonBicicletas);
module.exports = bicicletasImportadas; 