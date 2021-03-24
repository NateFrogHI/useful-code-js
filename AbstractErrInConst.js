class Abstract {
    constructor() {
        const requiredFunctNames = ['f1', 'f2', 'f3', 'f4'];
        if (new.target === Abstract) {
            throw new Error('Cannot construct Abstract instances directly');
        }
        const missingFunctions = this.findUninitializedFunctions(requiredFunctNames);
        if (missingFunctions.length > 0) {
            throw new Error(`Must initialize all required functions.  Missing functions ${JSON.stringify(missingFunctions)}`);
        }
    }
    findUninitializedFunctions(funcNames) {
        const missingFunctions = [];
        for (let func of funcNames) {
            if (this[func] === undefined) {
                missingFunctions.push(func);
            }
        }
        return missingFunctions;
    }
    f5() {}
}
  
class Derived1 extends Abstract {}
  
class Derived2 extends Abstract {
    f1() {}
}
  
class Derived3 extends Abstract {
    f1() {}
    f3() {}
}
  
class Derived4 extends Abstract {
    f1() {}
    f2() {}
    f3() {}
    f4() {}
}

try {
    const a = new Abstract(); // new.target is Abstract; error
} catch (error) {
    console.log(error.message);
}
try {
    const b = new Derived1(); // undefined functions; error
} catch (error) {
    console.log(error.message);
}
try {
    const c = new Derived2(); // undefined functions; error
} catch (error) {
    console.log(error.message);
}
try {
    const d = new Derived3(); // undefined functions; error
} catch (error) {
    console.log(error.message);
}
try {
    const e = new Derived4(); // undefined functions; error
    console.log('Initialized all req functions');
} catch (error) {
    console.log(error.message);
}
