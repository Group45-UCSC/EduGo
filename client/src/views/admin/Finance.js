import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <FaBeer /> },
  { title: "Employees", path: "/admin/employees", icon: <FaBeer /> },
  { title: "Drivers", path: "/admin/drivers", icon: <FaBeer /> },
  { title: "School Rides", path: "/admin/rides", icon: <FaBeer /> },
  { title: "Children", path: "/admin/children", icon: <FaBeer /> },
  { title: "Finance", path: "/admin/finance", icon: <FaBeer /> },
];

function Finance() {
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        This is Admin's Finance page.
      </MainLayout>
    </div>
  );
}

export default Finance;