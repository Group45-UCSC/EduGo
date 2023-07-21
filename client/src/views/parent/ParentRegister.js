import React from 'react'
import { NavLink } from "react-router-dom";

function ParentRegister() {
  return (
    <div>
      Parent Register Page
      <br></br>
      <NavLink to="/parent/home">click me to go Parent landing page</NavLink>
    </div>
  )
}

export default ParentRegister