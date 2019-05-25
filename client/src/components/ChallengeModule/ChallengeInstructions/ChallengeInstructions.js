import React from "react";

const challengeInstructions = props => (
  <div class="container-fluid ">
    <div class="row">
      <div class="jumbotron">
        <div class="col-sm-6 bg-light">
          <h1 class=" text-success">How Tinker Works</h1>
          <p>published by Math in Javascript</p>
          <div
            class="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div class="btn-group mr-2" role="group" aria-label="First group">
              <button type="button" class="btn btn-secondary">
                String
              </button>
            </div>
            <div class="btn-group mr-2" role="group" aria-label="Second group">
              <button type="button" class="btn btn-secondary">
                Validation
              </button>
            </div>
            <p>
              This is an introduction to have challenge on Edabit work.In the
              code tab you will see a starter function that looks like this.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default challengeInstructions;
