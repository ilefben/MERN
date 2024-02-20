import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react";
import App from "./App";
import store from "./js/store/store";
import "bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
