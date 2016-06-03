import React from 'react';

class BooksSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {searchTitle : ''};
    }
    search() {
        const {store} = this.context;
        if (this.state.searchTitle.length > 0) {
            //store.dispatch();
            this.props.doSearch(this.state.searchTitle);
        }
    }
    render() {
        return (
            <div className="form-inline">
                <div className="form-group">
                    <input type="text"
                           placeholder="Enter book title"
                           className="form-control col-md-4"
                           value={this.state.searchTitle}
                           onChange={(e) => {this.setState({searchTitle: e.target.value})}}
                    />
                    <input type="submit"
                           value="Search"
                           className="btn btn-default"
                           onClick={this.search.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

/**
 * Needed to get the store and being able to call this.context
 * @type {{store: (*|string|string)}}
 */
BooksSearch.contextTypes = {
    store: React.PropTypes.object
};

export default BooksSearch;