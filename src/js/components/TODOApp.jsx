import React from "react";
import FilterLink from "src/js/components/FilterLink";
import AddTodo from "src/js/containers/AddTodo";
import VisibleTodoList from "src/js/containers/VisibleTodoList";

const TODOApp = () => {
    return(
        <div>
            <AddTodo />
            <FilterLink />
            <VisibleTodoList />
        </div>
    );
}

export default TODOApp;
