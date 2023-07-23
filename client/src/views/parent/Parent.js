import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa"
import { MdOutlineCrisisAlert } from "react-icons/md"
import { FaRegCalendarMinus } from "react-icons/fa"

function Parent() {
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

        <div className="pt-[25px] px-[25px] bg-[#F8F9FC]">
          <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">Dashboard</h1>

          <div className="grid grid-cols-2 gap-[150px] mt-[25px] pb-[15px]">
            {/* Registered Children */}
            <div className=" h-[110px] rounded-[8px] bg-white border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out" >
              <div>
                <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px] pb-1">Registered Children</h1>
                <h2 className="text-[#B589DF] text-[12px] leading-[17px] font-bold">R.B.S. Udayanga</h2>
                <h2 className="text-[#B589DF] text-[12px] leading-[17px] font-bold">L.L.A. Hansani</h2>
              </div>
              <FaRegCalendarMinus fontSize={28} color="" />
            </div>
            {/* Alerts */}
            <div className=" h-[110px] rounded-[8px] bg-white border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out" >
              <div>
                <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px] pb-1">Alerts</h1>
                <div className="flex">
                  <h2 className="text-[#B589DF] text-[12px] leading-[17px] font-bold">Message</h2>
                  <FaEnvelope fontSize={20} color="" className="pl-2"/>
                </div>
                <div className="flex">
                  <h2 className="text-[#c91c28] text-[12px] leading-[17px] font-bold">Payment pending</h2>
                  <MdOutlineCrisisAlert fontSize={20} color="" className="pl-1"/>
                </div>
              </div>
              <FaRegCalendarMinus fontSize={28} color="" />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Parent;
