import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard, AiFillCar } from "react-icons/ai";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/driver/dashboard", icon: <AiFillDashboard /> },
  { title: "School Ride", path: "/driver/ride", icon: <AiFillCar /> },
  { title: "Finance", path: "/driver/finance", icon: <MdPayments /> },
  { title: "Support", path: "/driver/support", icon: <MdSupportAgent /> },
  {
    title: "Feedback",
    path: "/driver/feedback",
    icon: <MdOutlineRateReview />,
  },
];

function AddSchool() {
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <h1 className="text-[#5a5c69] text-[28px]  leading-8 font-normal cursor-pointer">
          Add New School Details
        </h1>
      </MainLayout>
    </div>
  );
}

export default AddSchool;
