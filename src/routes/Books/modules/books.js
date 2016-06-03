import {List, Map} from 'immutable';

export function Search(text) {
    return {
        type: 'SEARCH',
        text: text
    };
}

export function ShowBooks(books) {
    return {
        type: 'SHOW_BOOKS',
        books: books
    }
}

export function ShowError(error) {
    return {
        type: 'SHOW_ERROR',
        error: error
    }
}

const fetchBooks = title => {
    return fetch('https://www.googleapis.com/books/v1/volumes?q=' + title);
};

export const searchBook = (text) => {
    return (dispatch) => {
        return fetchBooks(text).then(
            response => response.json().then(books => dispatch(ShowBooks(books.items))),
            error => dispatch(ShowError(error))
        );
    };
};

const addBooks = (state, books) => {
    return state.clear().merge(books.map(book => {
        return Map({
            id: book.id,
            link: book.volumeInfo.previewLink,
            title: book.volumeInfo.title || 'N/A',
            authors: book.volumeInfo.authors || [],
            imageLinks: book.volumeInfo.imageLinks || {},
            publishedDate: book.volumeInfo.publishedDate || 'N/A',
            description: book.volumeInfo.description || 'N/A',
            categories: book.volumeInfo.categories || []
        });
    }));
};

export default function booksReducer(state = List(), action) {
    switch (action.type) {
        case 'SHOW_BOOKS':
            return addBooks(state, action.books);
        case 'SHOW_ERROR':
            return state;
        default:
            return state;
    }

    return state;
}