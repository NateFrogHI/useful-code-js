let obj1 = {};
let obj2 = {x: 5, y: 6};

obj1 = obj2;
console.log(
    `Values after assign obj1 = obj2:
        obj1: ${JSON.stringify(obj1)}
        obj2: ${JSON.stringify(obj2)}`
);
obj1.x = 10;
console.log(
    `Values after assign obj1.x = 10:
        obj1: ${JSON.stringify(obj1)}
        obj2: ${JSON.stringify(obj2)}`
);
obj2.y = 2;
console.log(
    `Values after assign obj2.y = 2:
        obj1: ${JSON.stringify(obj1)}
        obj2: ${JSON.stringify(obj2)}`
);
