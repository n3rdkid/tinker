import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Signup">Register</NavLink>
      <NavLink to="/Quiz">Quiz</NavLink>
      <NavLink to="/Challenge">Challenges</NavLink>
      <NavLink to="/AddChallenge">Add Challenge</NavLink>
    </div>
  );
};

export default Navigation;
