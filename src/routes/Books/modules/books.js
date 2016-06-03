import {List, Map} from 'immutable';

export function ShowBooks(books, search) {
    return {
        type: 'SHOW_BOOKS',
        books: books,
        search: search
    }
}

export function ShowError(error) {
    return {
        type: 'SHOW_ERROR',
        error: error
    }
}

const fetchBooks = (title, startIndex) => {
    return fetch('https://www.googleapis.com/books/v1/volumes?q=' + title + '&maxResults=12&startIndex=' + startIndex);
};

export const searchBook = (text, startIndex = 0) => {
    return (dispatch) => {
        return fetchBooks(text, startIndex).then(
            response => response.json().then(books => dispatch(ShowBooks(books, text))),
            error => dispatch(ShowError(error))
        );
    };
};

const addBooks = (state, books, search) => {
    return state
        .update('currentSearch', () => search)
        .updateIn(['pagination', 'total'], 0,  total => books.totalItems)
        .set('list', List(books.items.map(book => {
            return Map({
                id: book.id,
                link: book.volumeInfo.previewLink,
                title: book.volumeInfo.title || 'N/A',
                authors: book.volumeInfo.authors || [],
                imageLinks: book.volumeInfo.imageLinks || {},
                publishedDate: book.volumeInfo.publishedDate || 'N/A',
                description: book.searchInfo ? book.searchInfo.textSnippet : 'N/A',
                categories: book.volumeInfo.categories || []
            });
        })));
};

const initialState = Map({
    pagination: Map({
        total: 0,
        currentPage: 0
    }),
    currentSearch: '',
    list: List()
});

export default function booksReducer(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_BOOKS':
            return addBooks(state, action.books, action.search);
        case 'SHOW_ERROR':
            return state;
        default:
            return state;
    }
}