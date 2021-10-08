const functionSavedAsVariable = () => console.log('I\'m a function saved as a variable');

function namedFunction() {
    console.log('I\'m a named function');
}

function functionRunner(someFunction) {
    someFunction();
    if(someFunction.name) {
        console.log(`This function has a name!  Its name is: ${someFunction.name}`);
    } else {
        console.log('This function is nameless');
    }
}

functionRunner(functionSavedAsVariable);
functionRunner(namedFunction);
functionRunner(() => console.log('I\'m an anonymous function'));
