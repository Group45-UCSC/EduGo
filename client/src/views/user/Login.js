import React from 'react';
import { NavLink } from 'react-router-dom';


function Login() {
  return (
    <div>
      Login Page
      <br></br>
      <NavLink to="/driver/dashboard">click me to go Driver landing page</NavLink><br/>
      <NavLink to="/parent/dashboard">click me to go Parent Agent landing page</NavLink><br/>
      <NavLink to="/admin/dashboard">click me to go Admin landing page</NavLink><br/>
      <NavLink to="/sup_agent/dashboard">click me to go Support Agent landing page</NavLink><br/>
      <NavLink to="/vc/dashboard">click me to go Vehicle Coordinator landing page</NavLink>
    </div>
  )
}

export default Login