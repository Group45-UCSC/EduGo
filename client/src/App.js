import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import route files

import Home from "./views/user/Home";  
import Login from "./views/user/Login";
import DriverRegister from "./views/driver/DriverRegister";
import ParentRegister from "./views/parent/ParentRegister";
import Driver from "./views/driver/Driver";
import Parent from "./views/parent/Parent";
import Admin from "./views/admin/Admin";
import V_coordinator from "./views/v_coordinator/V_coordinator";
import Sup_agent from "./views/sup_agent/Sup_agent";

//define routes

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/driver/register" element={<DriverRegister/>} />
          <Route exact path="/parent/register" element={<ParentRegister/>} />
          <Route exact path="/driver/home" element={<Driver/>} />
          <Route exact path="/parent/home" element={<Parent/>} />
          <Route exact path="/admin/home" element={<Admin/>} />
          <Route exact path="/vc/home" element={<V_coordinator/>} />
          <Route exact path="/sup_agent/home" element={<Sup_agent/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
