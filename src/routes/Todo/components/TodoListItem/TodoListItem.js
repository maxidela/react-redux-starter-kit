import React from 'react';

export default class TodoListItem extends React.Component {
    render() {
        return (
            <li className="list-group-item pointer"
                onClick={this.props.click}>
                {this.props.item}
            </li>
        );
    }
}