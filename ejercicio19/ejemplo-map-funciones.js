function sumar(s1, s2){
    return s1+s2;
}
let resultado = sumar(3,4);
console.log(resultados);

let restar = function(r1, r2) {
    return r1-r2;
}
let resultado2 = restar(3,8);
console.log(resultado2);


let facturar = ()=>{
    console.log("Facturando...");

}
let archivar = ()=>{
    console.log("Archivar...");
}

let flujoTrabajo = new Map([
    ["Facturar",facturar],
    ["Reclamara",reclamar],
    ["archivar",archivar]
]);

flujoTrabajo.get("Facturar")();
flujoTrabajo.get("Reclamar")();
flujoTrabajo.get("Archivar")();