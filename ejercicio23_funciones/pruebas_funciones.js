//Funcion
function saludar() {
    console.log("Hola");
}
saludar();
//Funcion con argumentos co
function sumar(numero1, numere2) {
    return numero1 + numere2;
}

const resultado = sumar(3, 7);
console.log(resultado);
sumar(8, 2);// Funciona pero no recogemos el resultado
console.log(sumar(3));

function elevar(base = 2, exponente = 2) {
    return base ** exponente;
}
console.log(elevar(4, 3));//4**3=64
console.log(elevar(undefined, 3));//2**3=8
console.log(elevar());//2**2=4
console.log(elevar(3));//3**2=9

//Asignacion de funciones a variables
let miFuncion = function () {
    console.log("Hola soy un funcion asignada a una variable");

}
miFuncion();

//Uso de la particula this  (construccion de clases a traves de funciones)
function Alumno(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saluda = () => {
        console.log("Hola, soy" + this.nombre);
    }

}
const alumno1 = new Alumno("Almudena", 18);
alumno1.saluda();



//Variable arguments --> Array con todos los argumentos que llegan
function hazAlgo(a1, a2, a3) {
    console.log(arguments.length);
    console.log(arguments[0]);

}
hazAlgo("UNO", 2);



//Parametro rest

function sumar(...sumando) {
    sumando.forEach(numero => console.log(numero));
}
sumar(1);
sumar(3, 4);
sumar(3, 8, 10, 3, 4);