const prompt = require("prompt-sync")();

let primer_numero = prompt("Ingrese el primer numero: ");
let segundo_numero = prompt("Ingrese el segundo numero: ");
primer_numero = parseFloat(primer_numero);
segundo_numero = parseFloat(segundo_numero);

console.log("Suma: ", primer_numero + segundo_numero);
console.log("Resta: ", primer_numero - segundo_numero);
console.log("Multiplicacion: ", primer_numero * segundo_numero);
console.log("Division: ", primer_numero / segundo_numero);
console.log("Modulo: ", primer_numero % segundo_numero);
console.log("Potencia: ", primer_numero ** segundo_numero);

let opcion = prompt(
  "Elija una figura (1.cuadrado, 2.rectangulo, 3.triangulo, 4.circulo): "
).toLowerCase;

switch (opcion) {
  case "1":
    let lado = parseFloat(prompt("Ingrese el lado: "));
    console.log("El area del cuadrado es: ", lado * lado);
    break;
  case "2":
    let base = parseFloat(prompt("Ingrese la base: "));
    let altura = parseFloat(prompt("Ingrese la altura: "));
    console.log("El area del rectangulo es: ", base * altura);
    break;
  case "3":
    let base1 = parseFloat(prompt("Ingrese la base: "));
    let altura1 = parseFloat(prompt("Ingrese la altura: "));
    console.log("El area del triangulo es: ", (base1 * altura1) / 2);
    break;
  case "4":
    let radio = parseFloat(prompt("Ingrese el radio: "));
    console.log("El area del circulo es: ", Math.PI * radio ** 2);
    break;

  default:
    console.log("Opcion no valida");
}

let ingles = parseFloat(prompt("Ingrese la nota de ingles: "));
let matematicas = parseFloat(prompt("Ingrese la nota de matematicas: "));
let lengua = parseFloat(prompt("Ingrese la nota de lengua: "));

let promedio = (ingles + matematicas + lengua) / 3;
console.log("El promedio es: ", promedio);
if (promedio >= 7) {
  console.log("Aprobo");
} else {
  console.log("Reprobo");
}

if (promedio === 10) {
  console.log("Satisfactorio (Beca - Aprueba)");
} else if (promedio >= 8 && promedio <= 9) {
  console.log("Muy buena - Aprueba");
} else if (promedio >= 7 && promedio < 8) {
  console.log("Buena - Aprueba");
} else {
  console.log("Regular - Reprueba");
}

let literal = prompt(
  "Elija una figura (cuadrado, rectangulo, triangulo, circulo): "
).toLowerCase;

switch (literal) {
  case "cuadrado":
    let lado = parseFloat(prompt("Ingrese el lado: "));
    console.log("El area es: ", lado * lado);
    console.log("El perimetro es: ", lado * 4);
    break;

  case "rectangulo":
    let base = parseFloat(prompt("Ingrese la base: "));
    let altura = parseFloat(prompt("Ingrese la altura: "));
    console.log("El area es: ", base * altura);
    console.log("El perimetro es: ", (base + altura) * 2);
    break;

  case "triangulo":
    let cateto1 = parseFloat(prompt("Ingrese el cateto base: "));
    let cateto2 = parseFloat(prompt("Ingrese el cateto adyacente: "));
    hipotenusa = Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
    console.log("El area es: ", (cateto1 * cateto2) / 2);
    console.log("El perimetro es: ", cateto1 + cateto2 + hipotenusa);
    console.log("La hipotenusa es: ", hipotenusa);
    break;

  case "circulo":
    let radio = parseFloat(prompt("Ingrese el radio: "));
    console.log("El area es: ", Math.PI * radio ** 2);
    console.log("El perimetro es: ", Math.PI * radio * 2);
    break;
  default:
    console.log("Opcion no valida");
}

let numero = parseInt(prompt("Ingrese un numero: "));
for (let i = 1; 1 <= 10; i++) {
  console.log(`${numero} X ${i} = ${numero * i}`);
}

let arreglo = [1, 2, 3, 4, 5];
console.log("Arreglo: ", arreglo);

let n = parseInt(prompt("Ingrese un numero: "));
if (n % 2 === 0) {
  console.log("El numero es par");
} else {
  console.log("El numero es impar");
}

let frutas = ["manzana", "pera", "mando", "papaya", "durazno"];
frutas.forEach((fruta) => console.log(fruta));

let array = [1, 2, 3, 4, 5];
let sum = 0;
for (let nums of array) sum += nums;
console.log("Suma: ", suma);

let estudiantes = ["ana", "zuriel", "alisson", "gema", "alejandra"];
let nombre = prompt("Ingrese un nombre: ").toLowerCase;
if (estudiantes.includes(nombre)) {
  console.log(`${nombre} esta en la lista`);
} else {
  console.log(`${nombre} no esta en la lista`);
}

let valores = [12, 32, 54, 21, 23];
let mayor = Math.max(valores);
console.log("Numero mayor es: ", mayor);

let lista = [1, 2, 3, 4, 5];
console.log("Lista: ", lista);
console.log("Lista inversa: ", lista.reverse());
