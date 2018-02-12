import {createStore, applyMiddleware} from "redux";
import reducer from "src/js/reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from "src/js/sagas/index";
import createSagaMiddleware from "redux-saga";

const testSaga = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(testSaga)));

testSaga.run(rootSaga);

export default store;
