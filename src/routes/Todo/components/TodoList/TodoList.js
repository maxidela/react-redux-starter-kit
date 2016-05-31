import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

export default class TodoList extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.items.map((item) =>
                    <TodoListItem key={item.id} item={item.text} click={() => {console.log('hola')}}/>
                )}
            </ul>
        );
    }
}