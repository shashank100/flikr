import React from "react";
import TodoList from "src/js/components/TodoList";
import {toggleTodo} from "src/js/actions/todoActions";
import {connect} from "react-redux";

const getVisibleTodos = (todos, visibilityFilter) => {
    switch (visibilityFilter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETED":
            return todos.filter(todo => {
                return todo.completed
            });
        case "SHOW_ACTIVE":
            return todos.filter(todo => {
                return !todo.completed
            });
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
            onTodoClick: id => {
                dispatch(toggleTodo(id))
            }
        }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
