import React from 'react';

export default class TodoAdd extends React.Component {
    constructor (props) {
        super(props);
    }
    submit (e) {
        e.preventDefault();
        this.props.submit(this.state.newtodo);
    }
    render() {
        return (
            <form onSubmit={(e) => {this.submit(e)}}>
                <div className="form-group">
                    <label>New Todo: </label>
                    <input
                        type="text"
                        name="todo-input"
                        id="todo-input"
                        className="form-control"
                        onChange={(e) => {this.setState({'newtodo': e.target.value})}}
                    />
                </div>
                <input type="submit" value="Submit" className="btn btn-default" />
            </form>
        );
    }
}