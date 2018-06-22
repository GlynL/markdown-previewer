import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./styles/index.css";

import App from "./Components/App";
import registerServiceWorker from "./registerServiceWorker";

const store = ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
