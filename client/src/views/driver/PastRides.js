import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai"
import { MdLocationOn, MdPersonAdd, MdPayments, MdSupportAgent, MdOutlineRateReview } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/driver/dashboard", icon: <AiFillDashboard /> },
  { title: "School Ride", path: "/driver/ride", icon: <AiFillCar /> },
  { title: "Finance", path: "/driver/finance", icon: <MdPayments /> },
  { title: "Support", path: "/driver/support", icon: <MdSupportAgent /> },
  { title: "Feedback", path: "/driver/feedback", icon: <MdOutlineRateReview /> },
];
function PastRides() {
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div><h1 className="text-[#5a5c69] text-[28px] mb-[550px] leading-8 font-normal cursor-pointer">
            You have no any past ride details yet.
          </h1></div>
      </MainLayout>
    </div>
  );
}

export default PastRides;
