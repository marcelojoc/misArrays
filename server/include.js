// me dice si el elemento esta o no en el array

const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}

const rta = pets.includes('dog') // no recibe un arrow function
console.log('for', includeInArray);
console.log('includes', rta);