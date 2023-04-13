const uuid = require("uuid")


let peliculas = [
    {
        id: uuid.v4(),
        rating: 6,
        premios: 90,
        precio: 400,
        genero: "Accion"
    },
    {
        id: uuid.v4(),
        rating: 5,
        premios: 4,
        precio: 6000,
        genero: "Animacion"
    },
    {
        id: uuid.v4(),
        rating: 90,
        premios: 7,
        precio: 4000,
        genero: "Aventuras"
    },
    {
        id: uuid.v4(),
        rating: 43,
        premios: 10,
        precio: 4980,
        genero: "Suspenso"
    }
]
module.exports = peliculas;
