import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import route files

import Home from "./views/user/Home";  
import Login from "./views/user/Login";
import DriverRegister from "./views/driver/DriverRegister";
import ParentRegister from "./views/parent/ParentRegister";
import Driver from "./views/driver/Driver";
import Parent from "./views/parent/Parent";
import ChildrenPage from "./views/parent/ChildrenPage";
import Admin from "./views/admin/Admin";
import Vcoordinator from "./views/v_coordinator/Vcoordinator";
import SupAgent from "./views/sup_agent/SupAgent";
import DriverFinance from "./views/driver/Finance";
import DriverFeedback from "./views/driver/Feedback";
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
          <Route exact path="/driver/finance" element={<DriverFinance/>} />
          <Route exact path="/driver/feedback" element={<DriverFeedback/>} />
          <Route exact path="/parent/home" element={<Parent/>} />
          <Route exact path="/parent/children" element={<ChildrenPage/>} />
          <Route exact path="/admin/home" element={<Admin/>} />
          <Route exact path="/vc/home" element={<Vcoordinator/>} />
          <Route exact path="/sup_agent/home" element={<SupAgent/>} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
