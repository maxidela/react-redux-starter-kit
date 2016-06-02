import React from 'react';
import TodoList from '../TodoList/TodoList';
import TodoAdd from '../TodoAdd/TodoAdd';

export default class Todo extends React.Component {
    render() {
        return (
            <div>
                <strong>Incomplete</strong>
                <TodoList items={this.props.todos.incomplete} />
                <strong>Complete</strong>
                <TodoList items={this.props.todos.complete} />
                <TodoAdd submit={this.props.addTodo} />
            </div>
        );
    }
}