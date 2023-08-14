import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import { FaChild, FaEdit } from "react-icons/fa";
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
          <div className=" flex gap-5 mb-5 mt-2">
            <div className=" w-1/2 h-[515px] bg-slate-200 rounded-lg">
              <div className="flex   my-2 ">
                <div className="w-[140px] h-[140px] flex justify-center pt-1 ml-8">
                  <img
                    src={child.image}
                    alt="childImage"
                    className="bg-slate-300 w-32 h-32 cursor-pointer rounded-full p-1"
                  ></img>
                </div>
                <div className=" mt-12 ml-48">
                  <button className="flex justify-center w-32 h-10 bg-orange hover:bg-red-600 hover:text-white rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                    <div className="flex mt-2 gap-3 font-semibold">
                      {" "}
                      Absent{" "}
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex mx-3 border border-orange my-3 p-1 rounded-md">
                <div className=" font-semibold">Pickup Location: </div>
                <div className=" w-14 text-sm mt-1 pl-2"> {child.address}</div>
                <div className=" ml-[280px] pt-7"><FaEdit className=" text-2xl cursor-pointer hover:text-blue-600  hover:shadow-lg transform hover:scale-[113%] transition duration-300 ease-out" /></div>
              </div>
              <div className="flex mx-3 border border-orange my-3 p-1 rounded-md">
                <div className=" font-semibold">School Location: </div>
                <div className=" w-14 text-sm mt-1 pl-2"> {child.schoolAddress}</div>
                <div className=" ml-[280px] pt-7"><FaEdit className=" text-2xl cursor-pointer hover:text-blue-600  hover:shadow-lg transform hover:scale-[113%] transition duration-300 ease-out" /></div>
              </div>
              <div className="flex mx-3  mt-5 p-1 rounded-md">
                <div className=" font-semibold ">Imergency Contact number:</div>
                <div className=" w-14 text-sm mt-1 pl-2">{child.contactnum}</div>
                <div className=" ml-[195px]"><FaEdit className=" text-2xl cursor-pointer hover:text-blue-600  hover:shadow-lg transform hover:scale-[113%] transition duration-300 ease-out" /></div>
              </div>
              <div className="flex mx-3  mt-3 p-1 ">
                <div className="">Related Children:</div>
                <div className="text-sm mt-1 pl-2 text-blue-700">L.L.A. Hansani , K.S.T. Gunawardhana</div>
 
              </div>
            </div>
            <div className="w-1/2 bg-slate-200 rounded-lg">
                <div className="border">
                    <div className="">Pickup location ...</div>
                    <div className="">School location ...</div>
                </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default ChildrenDetails;
