import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";

function Vcoordinator() {
  const sideNavBarLinks = [
    { title: "Dashboard", path: "/vc/dashboard", icon: <FaBeer /> },
    { title: "Vehicles", path: "/vc/vehicles", icon: <FaBeer /> },
    { title: "School Rides", path: "/vc/rides", icon: <FaBeer /> },
    { title: "Emergency", path: "/vc/emergency", icon: <FaBeer /> },
  ];

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        This is vehicle coordinator's Landing page
      </MainLayout>
    </div>
  );
}

export default Vcoordinator;
