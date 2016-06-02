export function Add(text) {
    return {
        type: 'ADD_TODO',
        text: text
    }
}

export function Toggle(id) {
    return {
        type: 'TOGGLE_TODO',
        id: id
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
    return [...state, {id: guid(), text: text, complete: false}]
}

function toggleTodo(state, id) {
    return state.map(x => {
        if (x.id === id) {
           x.complete = !x.complete;
        }
        return x;
    });
}

const initialState = [];

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return addTodo(state, action.text);
        case 'TOGGLE_TODO':
            return toggleTodo(state, action.id);
        default:
            return state
    }
    return state;
}