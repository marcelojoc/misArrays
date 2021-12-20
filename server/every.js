const numbers = [1,30,39,29,10,13];

/**
El método every() de JavaScript funciona en arreglos y lo que hace es verificar si todos los elementos de un arreglo pasan un test. El test es una función.

El método every() comienza a ejecutar la función de test para cada elemento del arreglo y va a retornar false o true, según sea el caso:

Falso: el método retornara false si es que la función de test retorne false para algún elemento y luego de eso dejará de ejecutar la función test en los siguientes elementos.
Verdadero: si la función de test no retornar ningún valor false, en ese caso el método every() devolverá true. Hay que tener en cuenta que este método no cambia el arreglo original.
**/
let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false
    }
}
console.log('for', rta);
const rta2 = numbers.every(item => item <= 40)
console.log('rta2', rta2);


const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 15,
  },
];

const rta3 = team.every( (item) => item.age <=15);

console.log('esta aceptado el equipo? ' +rta3);
