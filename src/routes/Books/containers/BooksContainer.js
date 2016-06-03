import {connect} from 'react-redux';
import Books from '../components/Books/Books';
import {searchBook} from '../modules/books'

const mapStateToProps = (state) => ({
    books: state.books
});

const mapActionCreators = {
    search: searchBook
};

export default connect(mapStateToProps, mapActionCreators)(Books);