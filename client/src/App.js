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
import Vcoordinator from "./views/v_coordinator/Vcoordinator";
import SupAgent from "./views/sup_agent/SupAgent";
import DriverFinance from "./views/driver/Finance";
import DriverFeedback from "./views/driver/Feedback";
import DriverRide from "./views/driver/Ride";
import DriverSupport from "./views/driver/Support";
import ParentChildren from "./views/parent/Children";
import ParentPayment from "./views/parent/Payment";
import ParentSupport from "./views/parent/Support";
import ParentFeedback from "./views/parent/Feedback";
import VcVehicles from "./views/v_coordinator/Vehicles";
import VcRides from "./views/v_coordinator/Rides";
import VcEmergency from "./views/v_coordinator/Emergency";
import SupParents from "./views/sup_agent/Parents";
import SupDrivers from "./views/sup_agent/Drivers";
import AdminEmployees from "./views/admin/Employees";
import AdminDrivers from "./views/admin/Drivers";
import AdminRides from "./views/admin/Rides";
import AdminChildren from "./views/admin/Children";
import AdminFinance from "./views/admin/Finance"

//define routes

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/driver/register" element={<DriverRegister />} />
          <Route exact path="/parent/register" element={<ParentRegister />} />

          <Route exact path="/driver/dashboard" element={<Driver />} />
          <Route exact path="/driver/ride" element={<DriverRide />} />
          <Route exact path="/driver/finance" element={<DriverFinance />} />
          <Route exact path="/driver/support" element={<DriverSupport />} />
          <Route exact path="/driver/feedback" element={<DriverFeedback />} />

          <Route exact path="/parent/dashboard" element={<Parent />} />
          <Route exact path="/parent/children" element={<ParentChildren />} />
          <Route exact path="/parent/payment" element={<ParentPayment />} />
          <Route exact path="/parent/support" element={<ParentSupport />} />
          <Route exact path="/parent/feedback" element={<ParentFeedback />} />

          <Route exact path="/admin/dashboard" element={<Admin />} />
          <Route exact path="/admin/employees" element={<AdminEmployees />} />
          <Route exact path="/admin/drivers" element={<AdminDrivers />} />
          <Route exact path="/admin/rides" element={<AdminRides />} />
          <Route exact path="/admin/children" element={<AdminChildren />} />
          <Route exact path="/admin/finance" element={<AdminFinance />} />

          <Route exact path="/vc/dashboard" element={<Vcoordinator />} />
          <Route exact path="/vc/vehicles" element={<VcVehicles />} />
          <Route exact path="/vc/rides" element={<VcRides />} />
          <Route exact path="/vc/emergency" element={<VcEmergency />} />

          <Route exact path="/sup_agent/dashboard" element={<SupAgent />} />
          <Route exact path="/sup_agent/parents" element={<SupParents />} />
          <Route exact path="/sup_agent/drivers" element={<SupDrivers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
