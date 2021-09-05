var nothing;
var doSomething = (something) => {
    return something + ' was passed' + ' in.'
    + '  and this'
}

var result = doSomething(nothing);
console.log(result);

console.log(`Env var show "${process.env.ITS_FALSE}" as false: ${!process.env.ITS_FALSE}`);
