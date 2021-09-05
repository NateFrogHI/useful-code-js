const numbers = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5'
};

for (const [qualifiedName, value] of Object.entries(numbers)) {
    console.log(`${qualifiedName}: ${value}`);
}