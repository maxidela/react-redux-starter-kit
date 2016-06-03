import React from 'react';
import Book from '../Book/Book';

class BooksList extends React.Component {
    render() {
        return (
            <div className="bg-info">
                <br />
                {this.props.books.size > 0
                ? this.props.books.map(book => <Book key={book.get('id')} bookdata={book}></Book>)
                : 'No Results'
                }
                <br />
                <br />
            </div>
        );
    }
}

export default BooksList;