const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const newArray = [...elements];  // uso el Sprite operation para clonar  sin referencia en memoria  se usa  para  objetos  y para arrays tambien
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}

const rta = elements.concat(othersElements); // concat es inmutable, genera  un clon interno del operador  a procesar
const rta2 = [...elements, ...othersElements];
const rta3 = [...elements, ...'random'];
console.log('for', newArray);
console.log('concat', rta);
console.log('...', rta2);
console.log('rta3', rta3);
elements.push(...othersElements);
console.log('elements', elements);