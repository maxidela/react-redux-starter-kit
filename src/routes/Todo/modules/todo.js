import {List} from 'immutable';

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

function addTodo(state, text) {
    let newId = guid();
    return state.push({id: newId, text: text, complete: false});
}

function toggleTodo(state, id) {
    return state.update(state.findIndex(x => x.id === id), v => {
        return {id: v.id, text: v.text, complete: !v.complete}
    });
}

export default function todoReducer(state = List(), action) {
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