import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { NavLink, useLocation } from "react-router-dom";
import user from "../../images/user.png";
import parentMap from "../../images/parentMap.png";
import { AiFillDashboard, AiFillCar } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";

function ChildDetails() {
  const location = useLocation();

  const dataParam = new URLSearchParams(location.search).get("data");
  const childData = JSON.parse(decodeURIComponent(dataParam));

  const sideNavBarLinks = [
    {
      title: "Dashboard",
      path: "/driver/dashboard",
      icon: <AiFillDashboard />,
    },
    { title: "School Ride", path: "/driver/ride", icon: <AiFillCar /> },
    { title: "Finance", path: "/driver/finance", icon: <MdPayments /> },
    { title: "Support", path: "/driver/support", icon: <MdSupportAgent /> },
    {
      title: "Feedback",
      path: "/driver/feedback",
      icon: <MdOutlineRateReview />,
    },
  ];

  const childDetails = [
    {
      name: "R.B.S.Udayanga",
      schoolName: "Royal Collage",
      schoolRide: "R103",
    },
  ];
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="pt-6 px-6">
          <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
            Children
          </h1>
          <div>
            <h2>Vehicle Details</h2>
            <p>Id: {childData.id}</p>
            <p>Name: {childData.name}</p>
            <p>School: {childData.schoolName}</p>
          </div>

          <div className="mt-[25px] pb-[15px]">
            <div className="flex justify-center">
              <div className="flex flex-col gap-4">
                {childDetails.map((child, index) => (
                  <div
                    key={index}
                    className="h-[150px] w-[1000px] rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                  >
                    <div className="">
                      <img
                        src={user}
                        alt="user"
                        className="bg-slate-300 w-32 cursor-pointer rounded-full p-1"
                      />
                    </div>
                    <div className="w-1/3">
                      <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px] pb-1">
                        Child Details
                      </h1>
                      <div className="leading-6">
                      <div className="flex gap-1">
                          <h3 className="text-[16px] leading-[17px] font-semibold">
                            Id:
                          </h3>
                          <div className="text-[12px] font-semibold">
                            {childData.id}
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <h3 className="text-[16px] leading-[17px] font-semibold">
                            Name:
                          </h3>
                          <div className="text-[12px] font-semibold">
                            {childData.name}
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <h3 className="text-[16px] leading-[17px] font-semibold">
                            School Name:
                          </h3>
                          <div className="text-[12px] font-semibold">
                            {child.schoolName}
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <h3 className="text-[16px] leading-[17px] font-semibold">
                            School Ride:
                          </h3>
                          <div className="text-[12px] font-semibold">
                            {child.schoolRide}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="font-bold text-[#16a34a] text-lg">
                      <h1>On Ride</h1>
                    </div>
                    <div className=" flex gap-5">
                      {/*---------------------Buttons-----------------------------*/}

                      <div className="">
                        <NavLink to="/parent/children/viewride">
                          <button
                            className="flex justify-center  w-40 h-10 bg-orange hover:bg-[#b3913b] rounded-md cursor-pointer"
                            // onClick={() => {
                            //   setModalOpen(true);
                            // }}
                          >
                            <div className="flex mt-2 gap-3 font-semibold">
                              <FaEye fontSize={28} color="" />
                              View Ride
                            </div>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location View */}
            <div className="flex justify-center mt-5">
              <div className=" w-1/2 border-l-4 border-orange shadow-lg cursor-pointer rounded-[4px]">
                <div className="bg-white flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px] rounded-[4px]">
                  <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
                    Ongoing Location
                  </h2>
                </div>
                <div className="w-full">
                  <img src={parentMap} alt="map"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default ChildDetails;
