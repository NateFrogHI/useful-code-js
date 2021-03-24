class Abstract {
    constructor() {
        if (new.target === Abstract) {
            throw new Error('Cannot construct Abstract instances directly');
        }
    }
    f1() {
        throw new Error('Function "f1" not implemented');
    }
    f2() {
        throw new Error('Function "f2" not implemented');
    }
    f3() {
        throw new Error('Function "f3" not implemented');
    }
    f4() {
        throw new Error('Function "f4" not implemented');
    }
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
