import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { MdPayments,MdSupportAgent,MdOutlineRateReview,} from "react-icons/md";
import { FaChild } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { useLocation } from "react-router-dom";

function ChildrenDetails() {

  
    const location = useLocation();
    const dataParam = new URLSearchParams(location.search).get("data");
    const child = JSON.parse(decodeURIComponent(dataParam));

  const sideNavBarLinks = [
    {
      title: "Dashboard",
      path: "/parent/dashboard",
      icon: <AiFillDashboard />,
    },
    { title: "Children", path: "/parent/children", icon: <FaChild /> },
    { title: "Payment", path: "/parent/payment", icon: <MdPayments /> },
    { title: "Support", path: "/parent/support", icon: <MdSupportAgent /> },
    {
      title: "Feedback",
      path: "/parent/feedback",
      icon: <MdOutlineRateReview />,
    },
  ];
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="px-6">
          <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
            Children Details
          </h1>
          <div>
            {child.name}
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default ChildrenDetails;
