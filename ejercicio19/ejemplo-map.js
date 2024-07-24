const alumnos = new Map ();

let peli1 = {

    director: "Nick Cassavetes",
    genero: "Romance",
    año: "2004",
    duracion: "2h 1min"
}
let peli2 = {
    director: "Michael Sucsy",
    genero: "Romance",
    año: "2012",
    duracion: "1h 44min"
}
let peli3 ={
    director: "Thea Sharrock",
    genero: "Romance",
    año: "2016",
    duracion: "1h 50min"
}
let peliculas = new Map([
    ["El diario de noa", peli1],
    ["Votos de amor", peli2],
    ["Antes de ti", peli3],

    
])


console.log(peliculas.get("El diario de noa").director);
console.log(peliculas.get("Votos de amor").genero);
console.log(peliculas.get("Yo antes de ir").duracion);

