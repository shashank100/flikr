import {takeLatest} from "redux-saga";
import {put} from "redux-saga/effects";
import {searchImages} from "src/js/services/searchImageService";
import {SEARCH_IMAGES ,SEARCH_IMAGES_SUCCESS, SEARCH_IMAGES_FAILURE} from "src/js/constants/actionTypes";

function* fetchImages(action) {
    try {
        const images =  yield searchImages(action.query);
        yield put({type: SEARCH_IMAGES_SUCCESS, images});
    } catch (err) {
        yield put({type: SEARCH_IMAGES_FAILURE, message: "Some Error Occured"});
    }
}

export function* watchForSearchImages() {
    yield* takeLatest(SEARCH_IMAGES, fetchImages)
}
