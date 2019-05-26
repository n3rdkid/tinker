import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Signup">Register</NavLink>
      <NavLink to="/Quiz">Quiz</NavLink>
      <NavLink to="/Challenges">Challenges</NavLink>
      <NavLink to="/AddChallenge">Add Challenge</NavLink>
      <NavLink to="/AddResources">Add Resources</NavLink>
    </div>
  );
};

export default Navigation;
