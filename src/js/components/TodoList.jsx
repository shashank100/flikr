import React from "react";
import TODO from "src/js/components/TODO";
const TodoList = ({todos, onTodoClick}) => {
    return (
        <ul key="1">
            {
                todos.map(todo => {
                        return <TODO key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>;
                })
            }
        </ul>
    );
}

export default TodoList;
