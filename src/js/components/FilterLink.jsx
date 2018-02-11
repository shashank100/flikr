import React from "react";
import Filter from "src/js/containers/Filter";

const FilterLink = () => {
    return (
        <p>
            Show: {' '}
            <Filter visibilityFilter="SHOW_ALL">All</Filter>
            {' '}
            <Filter visibilityFilter="SHOW_ACTIVE">Active</Filter>
            {' '}
            <Filter visibilityFilter="SHOW_COMPLETED">Completed</Filter>
        </p>
    );
}

export default FilterLink;
