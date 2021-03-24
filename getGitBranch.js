const {exec} = require('child_process');
const {promisify} = require('util');

const execAsync = promisify(exec);

execAsync('git rev-parse --abbrev-ref HEAD').then(result => {
    console.log(`Branch is ${result.stdout.trim()}.`)
});
