import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";

function SupAgent() {

    const sideNavBarLinks = [
      { title: "Dashboard", path: "/sup_agent/dashboard", icon: <FaBeer /> },
      { title: "Parents", path: "/sup_agent/parents", icon: <FaBeer /> },
      { title: "Drivers", path: "/sup_agent/drivers", icon: <FaBeer /> }
    ];

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        This is Admin's Landing page
      </MainLayout>
    </div>
  );
}

export default SupAgent;
