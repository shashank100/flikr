import * as types from "src/js/constants/actionTypes";

const selectedImageReducer = (state = "", action) => {
    switch (action.type) {
        case types.SELECT_IMAGE:
            return action.id
        default:
            return state;
    }
}

export default selectedImageReducer;
