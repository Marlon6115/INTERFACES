const prompt = require("prompt-sync")();

function pagina28() {
  let edad = parseInt(prompt("Ingrese su edad: ").trim());

  if (edad < 18) {
    console.log("Eres menor de edad");
  } else {
    if (edad < 65) {
      console.log("Eres adulto");
    } else {
      console.log("Eres un adulto mayor");
    }
  }
}

function pagina29() {
  let nota = parseInt(prompt("Ingrese su nota: ").trim());

  switch (nota) {
    case 1 <= nota <= 4:
      console.log("Insuficiente");
      break;

    case 5 <= nota <= 6:
      console.log("Regular");
      break;

    case 7 <= nota <= 8:
      console.log("Bueno");
      break;

    case 9 <= nota <= 10:
      console.log("Excelente");
      break;

    default:
      console.log("Nota invalida");
      break;
  }
}
function pagina30() {
  let fruta = parseInt(prompt("Ingrese la fruta: ").toLowerCase());

  switch (fruta) {
    case "naranjas":
      console.log("Las naranjas cuestan $5");
      break;
    case "manzanas":
      console.log("Las manzanas cuestan $10");
      break;
    case "fresas":
      console.log("Las fresas cuestan $15");
      break;
    default:
      console.log("Disculpe, no tenemos ese tipo de fruta ", fruta);
      break;
  }
}
function pagina31() {
  console.log(
    "1. Suma\n2. Resta\n3. Multiplicacion\n4. Division\n5. Modulo\n6. Potencia"
  );

  let opcion = prompt("Elija una opcion: ").trim();
  switch (opcion) {
    case "1": {
      let primer_numero = parseFloat(prompt("Ingrese el primer numero: "));
      let segundo_numero = parseFloat(prompt("Ingrese el segundo numero: "));
      console.log("Suma: ", primer_numero + segundo_numero);
      break;
    }
    case "2": {
      let primer_numero = parseFloat(prompt("Ingrese el primer numero: "));
      let segundo_numero = parseFloat(prompt("Ingrese el segundo numero: "));
      console.log("Resta: ", primer_numero - segundo_numero);
      break;
    }
    case "3": {
      let primer_numero = parseFloat(prompt("Ingrese el primer numero: "));
      let segundo_numero = parseFloat(prompt("Ingrese el segundo numero: "));
      console.log("Multiplicacion: ", primer_numero * segundo_numero);
      break;
    }
    case "4": {
      let primer_numero = parseFloat(prompt("Ingrese el primer numero: "));
      let segundo_numero = parseFloat(prompt("Ingrese el segundo numero: "));
      console.log("Division: ", primer_numero / segundo_numero);
      break;
    }
    case "5": {
      let primer_numero = parseFloat(prompt("Ingrese el primer numero: "));
      let segundo_numero = parseFloat(prompt("Ingrese el segundo numero: "));
      console.log("Modulo: ", primer_numero % segundo_numero);
      break;
    }
    case "6": {
      let primer_numero = parseFloat(prompt("Ingrese el primer numero: "));
      let segundo_numero = parseFloat(prompt("Ingrese el segundo numero: "));
      console.log("Potencia: ", primer_numero ** segundo_numero);
      break;
    }
    default:
      console.log("Opcion invalida");
      break;
  }
}
function pagina32() {
  let i = 0;
  let sumaVector = 0;
  let v = [1, 2, 3, 4];
  while (i < v.length) {
    sumaVector += v[i];
    i++;
  }
}
function pagina34() {
  let opcion = 0;
  console.log(
    "1. Suma\n2. Resta\n3. Multiplicacion\n4. Division\n5. Modulo\n6. Potencia\n7. Salir"
  );

  opcion = parseInt(prompt("Elije una opcion: "));

  switch (opcion) {
    case "1": {
      let primer_numero = parseFloat(prompt("Ingrese el primer numero: "));
      let segundo_numero = parseFloat(prompt("Ingrese el segundo numero: "));
      console.log("Suma: ", primer_numero + segundo_numero);
      break;
    }
    case "2": {
      let primer_numero = parseFloat(prompt("Ingrese el primer numero: "));
      let segundo_numero = parseFloat(prompt("Ingrese el segundo numero: "));
      console.log("Resta: ", primer_numero - segundo_numero);
      break;
    }
    case "3": {
      let primer_numero = parseFloat(prompt("Ingrese el primer numero: "));
      let segundo_numero = parseFloat(prompt("Ingrese el segundo numero: "));
      console.log("Multiplicacion: ", primer_numero * segundo_numero);
      break;
    }
    case "4": {
      let primer_numero = parseFloat(prompt("Ingrese el primer numero: "));
      let segundo_numero = parseFloat(prompt("Ingrese el segundo numero: "));
      console.log("Division: ", primer_numero / segundo_numero);
      break;
    }
    case "5": {
      let primer_numero = parseFloat(prompt("Ingrese el primer numero: "));
      let segundo_numero = parseFloat(prompt("Ingrese el segundo numero: "));
      console.log("Modulo: ", primer_numero % segundo_numero);
      break;
    }
    case "6": {
      let primer_numero = parseFloat(prompt("Ingrese el primer numero: "));
      let segundo_numero = parseFloat(prompt("Ingrese el segundo numero: "));
      console.log("Potencia: ", primer_numero ** segundo_numero);
      break;
    }
    case "7": {
      console.log("Saliendo....");
    }
    default:
      console.log("Opcion no valida");
      break;
  }
}

function pagina35() {
  let result = "";
  let i = 0;

  do {
    i = i + 1;
    result = result + i;
  } while (i < 5);
  console.log(result);
}

function pagina36() {
  let suma = 0;
  let continuar;

  do {
    let numero = parseInt(prompt("Ingrese un numero: "));
    suma += numero;
    continuar = prompt("Quiere seguir sumando? (si/no): ").toLowerCase();
  } while (continuar === "si");
  console.log("La suma total es: ", suma);
}

function pagina37() {
  let sumaVector = 0;
  let v = [1, 2, 3, 4];
  for (i = 0; i < v.lenght; i++) sumaVector += v[i];
}

function pagina38() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) console.log(i);
  }
  let suma = 0;
  for (let i = 1; i <= 100; i++) {
    suma += i;
  }
  console.log("La suma es: ", suma);
  let sum = 0;
  for (let i = 1; i <= 5; i++) {
    let num = parseFloat(prompt("Ingrese un numero: "));
    sum += num;
  }
  console.log("El promedio es: ", suma / 5);

  let n = parseInt(prompt("¿Qué tabla deseas ver?: "));

  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }

  let palabra = prompt("Ingresa una palabra: ").toLowerCase();
  let cont = 0;
  let vocales = "aeiou";

  for (let i = 0; i < palabra.length; i++) {
    if (vocales.includes(palabra[i])) cont++;
  }

  console.log("Número de vocales:", cont);

  let sumatoria = 0;

  for (let i = 1; i <= 10; i++) {
    let numero;

    do {
      numero = prompt(`Ingresa un número positivo: `);

      numero = Number(numero);

      if (isNaN(numero) || numero < 0) {
        console.log("Error: Ingresa un número válido y positivo.");
      }
    } while (isNaN(numero) || numero < 0);

    sumatoria += numero;
  }

  console.log("La sumatoria total es:", sumatoria);
}
function pagina39() {
  const palabra = prompt("Ingresa una palabra: ").toLowerCase();
  const letra = prompt("¿Qué letra deseas contar?: ").toLowerCase();

  let contador = 0;

  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
      contador++;
    }
  }

  console.log(
    `La letra "${letra}" aparece ${contador} veces en la palabra "${palabra}".`
  );
}
function pagina46() {
  let result = sum(a, 7);
  alertBox("This is a example");
  let c = addFive(b);
  function sum(x, y) {
    return x + y;
  }
  function alertBox(text) {
    window.alert(text);
  }
  function addFive(x) {
    let y = x + 5;
    return y;
  }
}
function pagina49() {
  getColor = (Object) => {
    return Object.color;
  };
  addOne = (a) => a + 1;
  print = (b) => {
    b = b.toString();
    console.log("Es el numero".concat(b));
  };
}
function pagina53() {
  var colores = ["rojo", "azul", "verde"];
  document.write(colores[1]);
  alert(colores[2]);
}
function pagina55() {
  var colores = ["rojo", "azul", "verde"];
  colores.lenght = "#elementos";
  console.log(colores);
  console.log(colores.lenght);
  console.log(colores.pop());
  console.log(colores.length);
  console.log(colores);
  console.log((colores.length = 3));
  console.log(colores);
}

function pagina56() {
  var colores = ["rojo", "azul", "verde"];
  colores.lenght;
  colores[colores.lenght] = "item";
  colores[colores.lenght] = "amarillo";
  console.log(colores);
}

function pagina57() {
  var colores = ["rojo", "azul", "verde"];
  colores.toString();
  colores.toString();
  console.log(colores);
}
function pagina59() {
  var colores = ["rojo", "azul", "verde"];
  colores.push("item1", "item2");
  colores.push("negro", "blanco");
  console.log(colores);
}
function pagina60() {
  var colores = ["rojo", "azul", "verde", "negro", "blanco"];
  console.log(colores.pop());
}
function pagina61() {
  var colores = ["rojo", "azul", "verde", "amarillo"];
  console.log(colores.shift());
  console.log(colores.unshift("naranja"));
}
function pagina62() {
  var colores = ["rojo", "azul", "verde", "amarillo"];
  console.log(colores.reverse());
  console.log(colores.sort());
}
function pagina63() {
  var numeros = [1, 2, 3];
  var texto = numeros.join("-");
  console.log(texto);
  var nombres = ["jose", "pedro", "maria"];
  var personas = [];
  personas = nombres.concat(edades);
  console.log(personas);
}
function pagina64() {
  colores = ["rojo", "azul", "verde", "amarillo"];
  console.log(colores.slice(1, 3));
  console.log(colores.slice(2));
}
function pagina65() {
  colores = ["rojo", "azul", "verde", "amarillo"];
  console.log(colores.slice(0, 2));
  console.log(colores);
}
function pagina66() {
  colores = ["rojo", "azul", "verde", "amarillo"];
  colores.splice(2, 1, "morado", "violeta");
  console.log(colores);
}
