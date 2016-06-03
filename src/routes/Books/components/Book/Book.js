import React from 'react';
import classes from './Book.scss';

class Book extends React.Component {
    render() {
        return (
            <div className={classes.book + ' text-center'}>
                <div>
                    <a href={this.props.bookdata.get('link')} target="_blank">
                        <img
                            src={this.props.bookdata.get('imageLinks').smallThumbnail}
                            className={classes.bookImage + ' img-thumbnail'}
                        />
                    </a>
                </div>
                <div className="text-left">
                    <span><strong>Title:</strong> {this.props.bookdata.get('title')}</span><br />
                    <span><strong>Authors:</strong> {this.props.bookdata.get('authors').join(', ')}</span><br />
                    <span><strong>Published Date:</strong> {this.props.bookdata.get('publishedDate')}</span><br />
                    <span><strong>Categories:</strong> {this.props.bookdata.get('categories').join(' | ')}</span><br />
                    <span dangerouslySetInnerHTML={{__html: this.props.bookdata.get('description')}}></span><br />
                </div>
            </div>
        );
    }
}

export default Book;