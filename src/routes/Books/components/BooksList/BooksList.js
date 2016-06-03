import React from 'react';
import Book from '../Book/Book';

class BooksList extends React.Component {
    render() {
        return (
            <div className="bg-info text-left">
                <br />
                {this.props.books.size > 0
                ? this.props.books.map(book => <Book key={book.get('id')} bookdata={book}></Book>)
                : <div className="text-center">No Results</div>
                }
                <br />
            </div>
        );
    }
}

export default BooksList;