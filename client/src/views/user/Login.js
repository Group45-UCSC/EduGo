import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <div>
      Login Page
      <br></br>
      <NavLink to="/driver/home">click me to go Driver landing page</NavLink><br/>
      <NavLink to="/parent/home">click me to go Parent Agent landing page</NavLink><br/>
      <NavLink to="/admin/home">click me to go Admin landing page</NavLink><br/>
      <NavLink to="/sup_agent/home">click me to go Support Agent landing page</NavLink><br/>
      <NavLink to="/vc/home">click me to go Vehicle Coordinator landing page</NavLink>
    </div>
  )
}

export default Login