import React from "react";
import {connect} from "react-redux";
import {store} from "src/js/store/store"
import SearchView from "src/js/components/SearchView";
import {selectImage} from "src/js/actions/libraryActions"

let SearchResults = ({ dispatch }) => {

    return (
            <SearchView />
    )
}

const mapStateToProps = (state) => {
    return {
        images: state.images,
        query: state.query,
        selectedImage: state.selectedImageId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onImageClick: (id) => {
            dispatch(selectImage(id));
        }
    }
}

SearchResults = connect(mapStateToProps, mapDispatchToProps)(SearchView);

export default SearchResults;
