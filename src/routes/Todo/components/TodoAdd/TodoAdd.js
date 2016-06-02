import React from 'react';

export default class TodoAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {'newtodo' : ''};
    }
    submit(e) {
        e.preventDefault();
        this.props.submit(this.state.newtodo);
        this.setState({'newtodo': ''});
    }
    render() {
        return (
            <form onSubmit={this.submit.bind(this)}>
                <div className="form-group">
                    <label>New Todo: </label>
                    <input
                        type="text"
                        name="todo-input"
                        id="todo-input"
                        className="form-control"
                        value={this.state.newtodo}
                        onChange={(e) => {this.setState({'newtodo': e.target.value})}}
                    />
                </div>
                <input type="submit" value="Submit" className="btn btn-default" />
            </form>
        );
    }
}