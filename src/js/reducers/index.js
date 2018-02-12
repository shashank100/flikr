import {combineReducers} from "redux";
import images from "src/js/reducers/imagesReducer";
import query from "src/js/reducers/queryReducer";
import selectedImageId from "src/js/reducers/selectedImageReducer";

export default combineReducers({
    images,
    query,
    selectedImageId
});
