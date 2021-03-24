//////////////////////////////////////////////////////////////////////////////
// The nullish coalescing operator, ??, returns its right-hand side operand //
// when its left-hand side is null or undefined. This contrasts with        //
// the || operator, which would return "string" for all the examples.       //
// Only available on node.js 14.x+                                            //
//////////////////////////////////////////////////////////////////////////////

const things = [
    'String',
    '',
    1,
    0,
    true,
    false,
    null,
    undefined
];

function logIfExists(thing) {
    const formattedThing = thing ?? 'doesn\'t exist';
    console.log(`When given: ${thing}, logs: ${formattedThing}`);
}

things.forEach(thing => logIfExists(thing));
