import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/appReducer";
import Root from "./containers/Root";
import firebaseConfig from "./config";
import thunk from "redux-thunk";

let store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
