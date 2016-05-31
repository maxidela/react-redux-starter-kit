import React from 'react';

export default class TodoAdd extends React.Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label>New Todo: </label>
                    <input type="text" name="todo-input" id="todo-input" className="form-control" />
                </div>
                <input type="submit" value="Submit" className="btn btn-default" />
            </form>
        );
    }
}