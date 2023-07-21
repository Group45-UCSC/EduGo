import React from "react";
import { NavLink } from "react-router-dom";

function DriverRegister() {
  return (
    <div>
      Driver Register Page
      <br></br>
      <NavLink to="/driver/home">click me to go Driver landing page</NavLink>
    </div>
  );
}

export default DriverRegister;
