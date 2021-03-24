//////////////////////////
// Finite State Machine //
//////////////////////////

// Statechart
const machine = {
    initial: 'idle',
    states: {
        idle: {
            on: { SEARCH: 'searching' }
        },
        searching: {
            on: { SEARCH: 'searching' }
        },
        success: {
            on: {
                REJECT: 'failure',
                RESOLVE: 'success',
                SEARCH: 'searching'
            }
        },
        failure: {
            on: { SEARCH: 'searching' }
        }
    }
};

// State transition function
function transition(state, event) {
    return machine.states[state].on[event];
}
