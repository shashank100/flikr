import * as types from "src/js/constants/actionTypes"
var todoId = 0;
export const addTodo = (text) => {
    return {
        type: types.ADD_TODO,
        id: todoId++,
        text
    }
}

export const toggleTodo = (id) => {
    return {
        type: types.TOGGLE_TODO,
        id
    }
}

export const changeVisibilityFilter = (visibilityFilter) => {
    return {
        type: types.CHANGE_VISIBILITY_FILTER,
        visibilityFilter
    }
}
