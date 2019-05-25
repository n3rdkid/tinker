import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "../../../../node_modules/codemirror/lib/codemirror.css";
import "../../../../node_modules/codemirror/theme/material.css";
class ChallengeView extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a data-toggle="tab" href="#instructions" className="nav-link">
              Instructions
            </a>
          </li>
          <li className="nav-item">
            <a data-toggle="tab" href="#code" className="nav-link">
              Code
            </a>
          </li>
          <li className="nav-item">
            <a data-toggle="tab" href="#resources" className="nav-link">
              Resources
            </a>
          </li>
        </ul>
        <div class="tab-content bg-success">
          <div id="instructions" class="tab-pane fade in active  bg-danger">
            <h3>Instructions</h3>
          </div>
          <div id="code" class="tab-pane fade  bg-light">
            <h3>Code</h3>
          </div>
          <div id="resources" class="tab-pane fade  bg-dark">
            <h3>Resources</h3>
          </div>
        </div>
        <CodeMirror
          className="col-md-8"
          value={`function rot13(str) { // LBH QVQ VG!

return str;
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");`}
          options={{
            theme: "material",
            lineNumbers: true,
            mode: "jsx",
            tabSize: 2,
            autofocus: true,
            foldGutter: false,
            gutters: [],
            styleSelectedText: true
          }}
          onChange={(editor, data, value) => {

          }}
        />
      </div>
    );
  }
}
export default ChallengeView;
