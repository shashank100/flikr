import React from "react";
import ReactDOM from "react-dom";
import App from "src/js/App";
import store from "src/js/store/store";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
