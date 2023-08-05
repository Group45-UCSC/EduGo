import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer, FaStar } from "react-icons/fa";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/driver/dashboard", icon: <FaBeer /> },
  { title: "School Ride", path: "/driver/ride", icon: <FaBeer /> },
  { title: "Finance", path: "/driver/finance", icon: <FaBeer /> },
  { title: "Support", path: "/driver/support", icon: <FaBeer /> },
  { title: "Feedback", path: "/driver/feedback", icon: <FaBeer /> },
];

function Vehicle() {
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>Vehicle details</MainLayout>
    </div>
  );
}

export default Vehicle;
