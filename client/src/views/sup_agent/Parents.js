import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/sup_agent/dashboard", icon: <FaBeer /> },
  { title: "Parents", path: "/sup_agent/parents", icon: <FaBeer /> },
  { title: "Drivers", path: "/sup_agent/drivers", icon: <FaBeer /> },
];

function Parents() {
  return (
    <MainLayout data={sideNavBarLinks}>
      This is Sup Agents's parent details page
    </MainLayout>
  );
}

export default Parents;