import React from 'react';
import BooksSearch from '../BooksSearch/BooksSearch';
import BooksList from '../BooksList/BooksList';

class Books extends React.Component {
    render() {
        return (
            <div>
                <BooksSearch doSearch={this.props.search}></BooksSearch>
                <br />
                <BooksList books={this.props.books}></BooksList>
            </div>
        );
    }
}

export default Books;