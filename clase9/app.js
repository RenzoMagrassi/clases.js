let peliculasFavoritas = require("./peliculas.js");

for (let i = 0; i < peliculasFavoritas.length; i++) {
    console.log("");
    console.log("Peliculas en la posicion" + i + ":");
    console.log(peliculasFavoritas[i]);
    console.log("");
    
}
let fs = require("fs");
let rutaTexto = require("./text.txt");
let datos = fs.readFileSync(rutaTexto, "utf-8");

console.log(datos);