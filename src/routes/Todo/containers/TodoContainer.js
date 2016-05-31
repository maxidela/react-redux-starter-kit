import { connect } from 'react-redux';
import Todo from '../components/Todo/Todo';
import {Add} from '../modules/todo';

const mapStateToProps = (state) => ({
    todo: state.todo
});

const mapActionCreators = {
    addTodo: Add
};

export default connect(mapStateToProps, mapActionCreators)(Todo);