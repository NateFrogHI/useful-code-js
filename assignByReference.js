let originalThing = {name: 'originalThing'};
let newThing = originalThing;

newThing.name = 'newThing';

console.log(`originalThing: ${JSON.stringify(originalThing)}`);
console.log(`newThing: ${JSON.stringify(newThing)}`);
