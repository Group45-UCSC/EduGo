import React from 'react'
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";

function Support() {
  const sideNavBarLinks = [
    { title: "Dashboard", path: "/driver/dashboard", icon: <FaBeer /> },
    { title: "School Ride", path: "/driver/ride", icon: <FaBeer /> },
    { title: "Finance", path: "/driver/finance", icon: <FaBeer /> },
    { title: "Support", path: "/driver/support", icon: <FaBeer /> },
    { title: "Feedback", path: "/driver/feedback", icon: <FaBeer /> },
  ];

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        This is Driver Support Page
      </MainLayout>
    </div>
  )
}

export default Support