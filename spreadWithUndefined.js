const obj1 = {a: 'a', b: 'b', c: 'c'};
const obj2 = {c: 'C', d: 'd'};
const obj3 = undefined;

console.log(`Spread with two objects: ${JSON.stringify({...obj1, ...obj2})}`);
console.log(`Spread with one object and undefined: ${JSON.stringify({...obj1, ...obj3})}`);
