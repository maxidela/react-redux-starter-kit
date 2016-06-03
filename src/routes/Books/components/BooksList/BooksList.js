import React from 'react';
import Book from '../Book/Book';
import Pagination from '../Pagination/Pagination';

class BooksList extends React.Component {
    render() {
        return (
            <div className="bg-info">
                <br />
                {this.props.books.get('list').size > 0
                ? this.props.books.get('list').map(book => <Book key={book.get('id')} bookdata={book}></Book>)
                : <div className="text-center">No Results</div>
                }
                <br />
                <Pagination paginate={this.props.doSearch}
                            pagesData={this.props.books.get('pagination')}
                            currentSearch={this.props.books.get('currentSearch')}
                ></Pagination>
            </div>
        );
    }
}

export default BooksList;