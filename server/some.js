/**
Una de las funciones interesantes que podemos hacer uso con Javascript, para hacer nuestro código más elegante es Some. ¿Qué hace esta función? ¿Cuándo es aconsejable usarla?


El método some() comprueba si un elemento del array cumple con una condición, y nos devuelve un booleano. Esto implica que esta función la utilizaremos cuando trabajemos con arrays de cualquier tipo, sean arrays de strings, array de objetos, etc.

Sintaxis
La sintaxis completa del método sería:

arr.some(callback(element[, index[, array]])[, thisArg])
Como podemos observar, además de utilizar el array y el elemento que compararemos, también nos tendremos la posibilidad (como en el resto de métodos de JS), la posibilidad de utilizar el index (posición dentro del array) y el array completo.

 

Parámetros
callbackFunción que verifica cada elemento, toma tres argumentos:

element
El elemento actual siendo procesado en el array.
index Optional
El índice del elemento del array que se está procesando.
array Optional
El array sobre el que ha sido llamada la función some().
thisArg OptionalValor a usar como this cuando se ejecute callback.
*/



const numbers = [1, 2, 3, 4];

let rta = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {
    rta = true;
    break;
  }
}
console.log(rta);

const rta2 = numbers.some((item) => item % 2 === 0);
console.log("rta2", rta2);

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
  {
    customerName: "Nicolas",
    total: 2322,
    delivered: false,
  },
];

const rta3 = orders.some((item) => item.delivered);
console.log("rta3", rta3);

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    })
}

console.log('isOverlap', isOverlap(newAppointment));
