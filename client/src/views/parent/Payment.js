import React from 'react'
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard } from "react-icons/ai"
import { FaChild, } from "react-icons/fa"
import { MdPayments, MdSupportAgent, MdOutlineRateReview, } from "react-icons/md";

function Payment() {
  const sideNavBarLinks = [
    { title: "Dashboard", path: "/parent/dashboard", icon: <AiFillDashboard /> },
    { title: "Children", path: "/parent/children", icon: <FaChild /> },
    { title: "Payment", path: "/parent/payment", icon: <MdPayments /> },
    { title: "Support", path: "/parent/support", icon: <MdSupportAgent /> },
    { title: "Feedback", path: "/parent/feedback", icon: <MdOutlineRateReview /> },
];
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        This is Parent's Payment page
      </MainLayout>
    </div>
  )
}

export default Payment