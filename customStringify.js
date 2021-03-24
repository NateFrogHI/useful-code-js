function stringFormat(key, value) {
    if(key && value && typeof value !== 'number') {
        if (Array.isArray(value)) {
            return '[object Array]';
        }else if (typeof value === 'function') {
            return '[object Function]';
        } else if (typeof value === 'object') {
            return '[object Object]';
        } else {
            return `${value}`;
        }
    } else {
        return value;
    }
};

const testObject = {
    name: 'Test Object',
    int: 5,
    float: 32.5,
    embeddedArray: [
        1,
        2,
        3,
        4,
        5
    ],
    embeddedObject: {
        deepName: 'cant see me',
        deepArray: [
            'cant',
            'see',
            'this',
            'either'
        ]
    }
}

console.log(JSON.stringify(testObject, stringFormat, 4));
