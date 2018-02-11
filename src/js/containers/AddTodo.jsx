import React from "react";
import store from "src/js/store/store";
import {connect} from "react-redux";
import {addTodo} from "src/js/actions/todoActions";
var todoId = 0, input;
let AddTodo = ({ dispatch }) => {
    return (
        <div>
            <input ref={(node) => {input = node}} />
            <button onClick={() => {
                dispatch(addTodo(input.value));
                input.value = "";
            }}>Add Todo</button>
        </div>
    )
}

AddTodo = connect()(AddTodo);

export default AddTodo;
