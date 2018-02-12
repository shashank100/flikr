import React from "react";
import {searchCategory} from "src/js/actions/libraryActions";
import SearchBar from "src/js/containers/SearchBar";
import SearchResults from "src/js/containers/SearchResults"
import {connect} from "react-redux";

let Search = () => {
    return (
        <div>
            <SearchBar />
            <SearchResults />
        </div>
    );
}

export default Search;
