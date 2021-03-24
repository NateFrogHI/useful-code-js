// Only available in Nodejs 14+

const test = {
    someDefinedObject: {
        thing: 'this outer thing',
        innerDefinedObject: {
            thing: 'This inner Thing'
        }
    }
};

console.log(`Thing in an undefined Object:
  ${test.someUndefinedObject?.thing}`);
console.log(`Thing in a defined Object:
  ${test.someDefinedObject?.thing}`);
console.log(`Thing in an inner undefined Object within an undefined Object: 
  ${test.someUndefinedObject?.innerUndefinedObject?.thing}`);
console.log(`Thing in an inner undefined Object:
  ${test.someDefinedObject?.innerUndefinedObject?.thing}`);
console.log(`Thing in an inner defined Object:
  ${test.someDefinedObject?.innerDefinedObject.thing}`);
console.log(`Thing in an undefined Object:
  ${test.someUndefinedObject?.thing}`);
console.log(`Thing in an undefined Object:
  ${test.someUndefinedObject?.thing}`);