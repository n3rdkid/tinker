import React from "react";
import NavLink from "react-bootstrap/NavLink";
// import img from "../assets/404.png";
const restricted = () => (
  <div
    className="d-flex justify-content-center align-items-center"
    style={{ minHeight: "90vh", minWidth: "100vw", zIndex: "200" }}
  >
      {/* <img src={img}></img> */}
    <div>
      <h4 className="text-center">RESTRICTED PAGE</h4>
     <div className="text-center">
      <button className="btn btn-danger" onClick={()=>{this.props.history.goBack()}}>
        Let's Go Back
      </button>
      </div>
    </div>
  </div>
);

export default restricted;
