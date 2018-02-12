import {watchForSearchImages} from "src/js/sagas/imagesSaga"

export default function* rootSaga() {
    yield [
        watchForSearchImages()
    ];
}
