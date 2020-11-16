import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"

import App from "./App";
// eslint-disable-next-line
import styles from "./index.module.css"

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);