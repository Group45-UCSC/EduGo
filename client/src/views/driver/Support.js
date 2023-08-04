import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/driver/dashboard", icon: <FaBeer /> },
  { title: "School Ride", path: "/driver/ride", icon: <FaBeer /> },
  { title: "Finance", path: "/driver/finance", icon: <FaBeer /> },
  { title: "Support", path: "/driver/support", icon: <FaBeer /> },
  { title: "Feedback", path: "/driver/feedback", icon: <FaBeer /> },
];

function Support() {
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="pt-[25px] px-[25px] ">
          <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
            Support
          </h1>
        </div>
        This is Driver Support Page
      </MainLayout>
    </div>
  );
}

export default Support;
