import React from 'react';
import classes from './TodoListItem.scss'

export default class TodoListItem extends React.Component {
    render() {
        return (
            <li className={(this.props.item.complete ? classes.todoItemComplete : '') + " list-group-item pointer"}
                onClick={this.props.click}>
                {this.props.item.text}
            </li>
        );
    }
}