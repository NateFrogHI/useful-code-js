function stringify(thing, depth, spacing, currentSpacing) {
    let whitespace = currentSpacing || '';
    let childSpacing = whitespace;
    let stringThing = '';
    const updatedDepth = depth - 1;

    for (let i = 0; i < spacing; i++) {
        childSpacing += ' ';
    }

    if (Array.isArray(thing)) {
        if(depth >= 1) {
            stringThing += `[`;
            if (thing.length === 0) {
                stringThing += `]`;
            } else {
                thing.forEach((value, index) => {
                    stringThing += `\n${childSpacing}`;
                    stringThing += stringify(value, updatedDepth, spacing, childSpacing);
                    stringThing += (index < thing.length - 1) ? ',' : '';
                });
                stringThing += `\n${whitespace}]`;
            }
        } else {
            stringThing += '"[object Array]"';
        }
    } else if (typeof thing === 'function') {
        stringThing += '"[object Function]"';
    } else if (typeof thing === 'object') {
        if(depth >= 1) {
            let count = 0;
            let index = 0;

            stringThing += `{`;
            for (const key in thing) { count++ }
            if (count === 0) {
                stringThing += `}`;
            } else {
                for (const key in thing) {
                    stringThing += `\n${childSpacing}"${key}": `;
                    stringThing += stringify(thing[key], updatedDepth, spacing, childSpacing);
                    stringThing += (index++ < count - 1) ? ',' : '';
                }
                stringThing += `\n${whitespace}}`;
            }
        } else {
            stringThing += `"[object Object]"`;
        }
    } else if (typeof thing === 'boolean') {
        stringThing += `${thing}`;
    } else {
        stringThing += `"${thing}"`;
    }

    return stringThing;
}
