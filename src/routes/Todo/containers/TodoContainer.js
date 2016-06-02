import { connect } from 'react-redux';
import Todo from '../components/Todo/Todo';
import {Add} from '../modules/todo';
import {createSelector} from 'reselect';

const mapStateToProps = (state) => ({
    todos : state.todos
});

const mapActionCreators = {
    addTodo: Add
};

export default connect(mapStateToProps, mapActionCreators)(Todo);