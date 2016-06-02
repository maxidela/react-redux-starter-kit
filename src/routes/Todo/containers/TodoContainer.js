import { connect } from 'react-redux';
import Todo from '../components/Todo/Todo';
import {Add, Toggle} from '../modules/todo';

const mapStateToProps = (state) => ({
    todos : state.todos
});

const mapActionCreators = {
    addTodo: Add,
    toggle: Toggle
};

export default connect(mapStateToProps, mapActionCreators)(Todo);