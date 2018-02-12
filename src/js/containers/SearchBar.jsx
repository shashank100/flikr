import React from "react";
import {searchImages} from "src/js/actions/libraryActions";
import {connect} from "react-redux";
import {store} from "src/js/store/store"

let SearchBar = ({ dispatch }) => {
    let input;
    return (
        <div>
            <input ref={node => {input = node}}></input>
            <button onClick={() => {
                    dispatch(searchImages(input.value));
                    input.value = "";
            }}>Search</button>
        </div>
    )
}

SearchBar = connect()(SearchBar);

export default SearchBar;
