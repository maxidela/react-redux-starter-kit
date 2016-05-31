import React from 'react';
import TodoList from '../TodoList/TodoList';
import TodoAdd from '../TodoAdd/TodoAdd';

export default class Todo extends React.Component {
    render() {
        return (
            <div>
                <strong>Incomplete</strong>
                <TodoList items={[{text: 'hola', id: 1},{text: 'chau', id: 2},{text: 'nada', id: 3}]} />
                <strong>Complete</strong>
                <TodoList items={[{text: 'good', id: 4},{text: 'day', id: 5},{text: 'hard', id: 6}]} />
                <TodoAdd />
            </div>
        );
    }
}