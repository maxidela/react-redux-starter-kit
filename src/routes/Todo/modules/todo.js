export function Add(text) {
    return {
        type: 'ADD_TODO',
        text: text
    }
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function addTodo(state, text){
    let newState = Object.assign({}, state);
    newState['incomplete'].push({
        id: guid(),
        text: text
    });
    return newState;
}

const initialState = {
    complete: [],
    incomplete: []
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return addTodo(state, action.text);
        case 'TOGGLE_TODO':
            return state
        default:
            return state
    }
    return state;
}