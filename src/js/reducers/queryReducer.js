import {SEARCH_IMAGES} from "src/js/constants/actionTypes";

const imagesReducer = (state = "", action) => {
    switch (action.type) {
        case SEARCH_IMAGES:
            return action.query
        default:
            return state;
    }
}

export default imagesReducer;
