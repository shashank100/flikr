import "regenerator-runtime/runtime"
import React from "react";
import ReactDOM from "react-dom";
import store from "src/js/store/store";
import {Provider} from "react-redux";
import Routes from "src/routes/Routes";

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById("root")
);
