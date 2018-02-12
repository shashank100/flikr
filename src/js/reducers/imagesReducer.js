import * as types from "src/js/constants/actionTypes";

const imagesReducer = (state = [], action) => {
    switch (action.type) {
        case types.SEARCH_IMAGES_SUCCESS:
            let images = action.images;
            return [
                ...images
            ];
        default:
            return state;
    }
}

export default imagesReducer;
