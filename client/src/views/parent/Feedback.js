import React from 'react'
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";

function Feedback() {
  const sideNavBarLinks = [
    { title: "Dashboard", path: "/parent/dashboard", icon: <FaBeer /> },
    { title: "Children", path: "/parent/children", icon: <FaBeer /> },
    { title: "Payment", path: "/parent/payment", icon: <FaBeer /> },
    { title: "Support", path: "/parent/support", icon: <FaBeer /> },
    { title: "Feedback", path: "/parent/feedback", icon: <FaBeer /> },
  ];
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        This is Parent's Feedback page
      </MainLayout>
    </div>
  )
}

export default Feedback