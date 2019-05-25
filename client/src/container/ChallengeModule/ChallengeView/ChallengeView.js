import React from "react";
class ChallengeView extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="list-item">
            <a data-toggle="tab" href="#">
              Instructions
            </a>
          </li>
          <li className="list-item">
            <a data-toggle="tab" href="#">
              Code
            </a>
          </li>
          <li className="list-item">
            <a data-toggle="tab" href="#">
              Resources
            </a>
          </li>
        </ul>
        <div class="tab-content">
          <div id="instructions" class="tab-pane fade in active">
            <h3>Instructions</h3>
          </div>
          <div id="menu1" class="tab-pane fade">
            <h3>Code</h3>
          </div>
          <div id="menu2" class="tab-pane fade">
            <h3>Resources</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default ChallengeView;
