import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/codemirror/lib/codemirror.css";
import "../node_modules/codemirror/theme/eclipse.css";
import "../node_modules/codemirror/mode/javascript/javascript";
import "./assets/css/admin.min.css";
import "../node_modules/semantic-ui-css/semantic.min.css";

ReactDOM.render(<App />, document.getElementById("root"));
