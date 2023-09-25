import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import route files

import Home from "./views/user/Home";
import Login from "./views/user/Login"; //
import DriverRegister from "./views/driver/DriverRegister";
import ParentRegister from "./views/parent/ParentRegister"; //

import UserProfile from "./views/user/UserProfile";

import DriverLanding from "./views/driver/DriverLanding";
import DriverDashboardPg from "./views/driver/DriverDashboardPg";
import DriverFinance from "./views/driver/Finance";
import DriverFeedback from "./views/driver/Feedback";
import DriverRide from "./views/driver/Ride";
import DriverSupport from "./views/driver/Support";
import PastRides from "./views/driver/PastRides";
import Vehicle from "./views/driver/Vehicle";
import DriverProfile from "./views/driver/DriverProfile";
import ChildDetails from "./views/driver/ChildDetails"
import NextRide from "./views/driver/NextRide";
import RideRequests from "./views/driver/RideRequests";
import Deposits from "./views/driver/Deposits";
import AddRide from "./views/driver/AddRide";
import AddVehicle from "./views/driver/AddVehicle";
import RideSchools from "./views/driver/Schools";
import AddSchool from "./views/driver/AddSchool";

import ParentDashboardPg from "./views/parent/Parent"; //
import ParentChildren from "./views/parent/Children";
import AddChild from "./views/parent/AddChild";
import ViewChildLocation from "./views/parent/ViewChildLocation";
import AddSchoolRide from "./views/parent/AddSchoolRide";
import ViewVehicle from "./views/parent/ViewVehicle";
import ViewRide from "./views/parent/ViewRide";
import ParentPayment from "./views/parent/Payment";
import ParentSupport from "./views/parent/Support";
import ParentFeedback from "./views/parent/Feedback";
import ParentProfile from "./views/parent/ParentProfile"
import ChildrenDetails from "./views/parent/ChildrenDetails";

import AdminDashboardPg from "./views/admin/AdminDashboardPg";
import AdminEmployees from "./views/admin/Employees";
import AdminDrivers from "./views/admin/Drivers";
import AdminRides from "./views/admin/Rides";
import AdminRideDetails from "./views/admin/RideDetails";
import AdminChildren from "./views/admin/Children";
import AdminChildrenList from "./views/admin/ChildrenList";
import AdminFinance from "./views/admin/Finance";
import AdminSupportAgent from "./views/admin/SupportAgent";
import AdminVCoordinator from "./views/admin/VCoordinator";
import AdminDriverInfo from "./views/admin/DriverInfo";
import AdminVehicleInfo from "./views/admin/VehicleInfo";
import AdminParentsInfo from "./views/admin/ParentsInfo";
import AdminAddEmployee from "./views/admin/AddEmployee";
import AdminEmergency from "./views/admin/Emergency";
import AdminAnalysis from "./views/admin/Analysis";
import AdminProfile from "./views/admin/AdminProfile";
import AdminEmergencyList from "./views/admin/EmergencyList";
import AdminCondition from "./views/admin/Condition";

import VcoordinatorDashboardPg from "./views/v_coordinator/VcoordinatorDashboardPg";
import VcVehicles from "./views/v_coordinator/Vehicles";
import VcVehiclesDetails from "./views/v_coordinator/VehiclesDetails";
import VcRides from "./views/v_coordinator/Rides";
import VcRidesDetails from "./views/v_coordinator/RidesDetails";
import VcTrack from "./views/v_coordinator/Track";
import VcEmergency from "./views/v_coordinator/Emergency";
import VcEmergencyDetails from "./views/v_coordinator/EmergencyDetails";
import VcConditionCheck from "./views/v_coordinator/ConditionCheck";
import VcFeedback from "./views/v_coordinator/Feedback";
import VRRequest from "./views/v_coordinator/VRRequest";
import CCRequest from "./views/v_coordinator/CCRequest";
import VcProfile from "./views/v_coordinator/VcProfile";


import SupAgentDashboardPg from "./views/sup_agent/SupAgentDashboardPg";
import Chat from "./views/sup_agent/Chat";
import SupParents from "./views/sup_agent/Parents";
import SupDrivers from "./views/sup_agent/Drivers";
import SupAgentProfile from "./views/sup_agent/SupAgentProfile";
import Complaints from "./views/sup_agent/Complaints";
// import DriverVehicleDetails from "./views/sup_agent/DriverVehicleDetails";
// import ParentChildDetails from "./views/sup_agent/ParentChildDetails";

// import AddSchoolRide from "./views/parent/AddSchoolRide";


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

          <Route exact path="/user/profile" element={<UserProfile />} />

          <Route exact path="/driver/landing" element={<DriverLanding />} />
          <Route exact path="/driver/dashboard" element={<DriverDashboardPg />} />
          <Route exact path="/driver/ride" element={<DriverRide />} />
          <Route exact path="/driver/finance" element={<DriverFinance />} />
          <Route exact path="/driver/support" element={<DriverSupport />} />
          <Route exact path="/driver/feedback" element={<DriverFeedback />} />
          <Route exact path="/driver/rides/past" element={<PastRides />} />
          <Route exact path="/driver/vehicle" element={<Vehicle/>} />
          <Route exact path="/driver/ride/childDetails/:id" element={<ChildDetails/>} />
          <Route exact path="/driver/nextride" element={<NextRide/>} />
          <Route exact path="/driver/ride/riderequests" element={<RideRequests/>} />
          <Route exact path="/driver/finance/deposits" element={<Deposits/>} />
          <Route exact path="/driver/vehicle/add" element={<AddVehicle/>} />
          <Route exact path="/driver/ride/add" element={<AddRide/>} />
          <Route exact path="/driver/ride/schools" element={<RideSchools/>} />
          <Route exact path="/driver/add/school" element={<AddSchool/>} />

          <Route exact path="/parent/dashboard" element={<ParentDashboardPg />} />
          <Route exact path="/parent/children" element={<ParentChildren />} />
          <Route exact path="/parent/children/addchild" element={<AddChild />} />
          <Route exact path="/parent/children/childrendetails/:id" element={<ChildrenDetails />} />
          <Route exact path="parent/children/addnewride/viewvehicle/:id" element={<ViewVehicle />} />
          <Route exact path="/parent/children/childlocation/:id" element={<ViewChildLocation />} />
          <Route exact path="/parent/Children/addnewride/:id" element={<AddSchoolRide />} />
          <Route exact path="/parent/children/viewride/:id" element={<ViewRide />} />
          <Route exact path="/parent/payment" element={<ParentPayment />} />
          <Route exact path="/parent/support" element={<ParentSupport />} />
          <Route exact path="/parent/feedback" element={<ParentFeedback />} />

          <Route exact path="/admin/dashboard" element={<AdminDashboardPg />} />
          <Route exact path="/admin/employees" element={<AdminEmployees />} />
          <Route exact path="/admin/drivers" element={<AdminDrivers />} />
          <Route exact path="/admin/rides" element={<AdminRides />} />
          <Route exact path="/admin/ridedetails" element={<AdminRideDetails />} />
          <Route exact path="/admin/children" element={<AdminChildren />} />
          <Route exact path="/admin/childrenlist" element={<AdminChildrenList />} />
          <Route exact path="/admin/finance" element={<AdminFinance />} />
          <Route exact path="/admin/supportagent" element={<AdminSupportAgent />} />
          <Route exact path="/admin/VCoordinator" element={<AdminVCoordinator />} />
          <Route exact path="/admin/DriverInfo" element={<AdminDriverInfo />} />
          <Route exact path="/admin/VehicleInfo" element={<AdminVehicleInfo />} />
          <Route exact path="/admin/ParentsInfo" element={<AdminParentsInfo />} />
          <Route exact path="/admin/AddEmployee" element={<AdminAddEmployee />} />
          <Route exact path="/admin/Emergency" element={<AdminEmergency />} />
          <Route exact path="/admin/Analysis" element={<AdminAnalysis />} />
          <Route exact path="/admin/EmergencyList" element={<AdminEmergencyList />} />
          <Route exact path="/admin/Condition" element={<AdminCondition />} />

          <Route exact path="/vc/dashboard" element={<VcoordinatorDashboardPg />} />
          <Route exact path="/vc/vehicles" element={<VcVehicles />} />
          <Route exact path="/vc/vehiclesdetails/:id" element={<VcVehiclesDetails />} />
          <Route exact path="/vc/rides" element={<VcRides />} />
          <Route exact path="/vc/ridesdetails" element={<VcRidesDetails />} />
          <Route exact path="/vc/track" element={<VcTrack />} />
          <Route exact path="/vc/emergency" element={<VcEmergency />} />
          <Route exact path="/vc/emergencydetails/:id" element={<VcEmergencyDetails />} />
          <Route exact path="/vc/conditioncheck" element={<VcConditionCheck />} />
          <Route exact path="/vc/feedback" element={<VcFeedback />} />
          <Route exact path="/vc/vrrequest" element={<VRRequest />} />
          <Route exact path="/vc/ccrequest" element={<CCRequest />} />


          <Route exact path="/sup_agent/dashboard" element={<SupAgentDashboardPg />} />
          <Route exact path="/sup_agent/parents" element={<SupParents />} />
          <Route exact path="/sup_agent/drivers" element={<SupDrivers />} />
          <Route exact path="/sup_agent/chat" element={<Chat/>} />
          <Route exact path="/sup_agent/complaints" element={<Complaints/>} />

          <Route exact path="/driver/profile" element={<DriverProfile />} />
          <Route exact path="/parent/profile" element={<ParentProfile/>}/>
          <Route exact path="/admin/profile" element={<AdminProfile/>}/>
          <Route exact path="/sup_agent/profile" element={<SupAgentProfile />} />
          <Route exact path="/v_coordinator/profile" element={<VcProfile/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
