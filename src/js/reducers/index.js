import {combineReducers} from "redux";
import todos from "src/js/reducers/todosReducer";
import visibilityFilter from "src/js/reducers/visibilityReducer";

export default combineReducers({
    todos,
    visibilityFilter
});