function passFunction(timeout) {
    return new Promise(res => setTimeout(res, timeout, 'Passed!'));
}
function failFunction(timeout) {
    return new Promise((res, rej) => setTimeout(rej, timeout));
}

function race (passTime, failTime) {
    Promise.race([passFunction(passTime), failFunction(failTime)]).then(
        value => console.log(value),
        failed => console.log('Failed!')
    );
}


race(1000, 2000);
race(2000, 1000);
