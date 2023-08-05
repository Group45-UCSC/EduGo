import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer, FaRegCalendarMinus, FaEllipsisV } from "react-icons/fa";
import schoolVan from "../../images/schoolVan.jpeg";
import parentMap from "../../images/parentMap.png";
import { AiFillDashboard } from "react-icons/ai"
import { MdLocationOn, MdPersonAdd, MdPayments, MdSupportAgent, MdOutlineRateReview } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
// import { ToastContainer, toast } from 'react-toastify';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { NavLink } from "react-router-dom";

const data = [
  {
    name: "0",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "1",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "3",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "4",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "5",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "6",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const sideNavBarLinks = [
  { title: "Dashboard", path: "/driver/dashboard", icon: <AiFillDashboard /> },
  { title: "School Ride", path: "/driver/ride", icon: <AiFillCar /> },
  { title: "Finance", path: "/driver/finance", icon: <MdPayments /> },
  { title: "Support", path: "/driver/support", icon: <MdSupportAgent /> },
  { title: "Feedback", path: "/driver/feedback", icon: <MdOutlineRateReview /> },
];

function DriverDashboardPg() {
  // const [name, setName] = useState("");

  // async function getName() {
  //   try {
  //     const response = await fetch("http://localhost:5000/edugo/user/verify", {
  //       method: "GET",
  //       headers: { token: localStorage.token },
  //     });

  //     const parseRes = await response.json();
  //     // console.log(parseRes);

  //     setName(parseRes.user_name);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // }

  // useEffect(() => {
  //   getName();
  // },[]);

  // const logout = (e) => {
  //   e.preventDefault();
  //   localStorage.removeItem("token");
  //   setAuth(false);
  //   // toast.success("Logged out successfully");
  // };

  const [modalOpen, setModalOpen] = useState(false);
  // Add children model load
  function Modal({ setOpenModal }) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-stone-900/75 flex justify-center items-center">
        <div className="w-80 h-80 rounded-lg bg-white shadow-md flex flex-col p-5 ">
          <div className="flex justify-end">
            <button
              className="text-2xl cursor-pointer "
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="inline-block text-center mt-2">
            <h1>Are You Sure You Want to Continue?</h1>
          </div>
          <div className="flex flex-col justify-center items-center text-2xl">
            <p>The next page looks amazing. Hope you want to go there!</p>
          </div>
          <div className="flex justify-center items-center mt-5">
            <button
              className="w-36 h-12 mr-2 bg-orange rounded-lg text-xl cursor-pointer"
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button className="w-36 h-12 bg-orange rounded-lg text-xl cursor-pointer">
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  const notifications = [
    {
      id: 1,
      type: "vehicle",
      Date: "2023/07/30",
      Time: "8.50",
      From: "Vehicle coordinator",
      Message: "Your vehicle Condition check is reach to out of date.",
    },
    {
      id: 1,
      type: "rideRequest",
      Date: "2023/07/25",
      Time: "4.45",
      From: "ParentId",
      Message: "New Student ride request",
    },
    {
      id: 1,
      type: "studentAbsent",
      Date: "2023/08/05",
      Time: "6.05",
      From: "ParentId:p002",
      Message: "ChildId:c005 is not attending today",
    },
    {
      id: 1,
      type: "chat",
      Date: "2023/08/03",
      Time: "2.35",
      From: "support agent",
      Message: "New message received",
    },
    {
      id: 1,
      type: "vehicle",
      Date: "2023/07/03",
      Time: "9.35",
      From: "vehicle coordinator",
      Message: "Your driving License expires soon",
    },
    {
      id: 1,
      type: "missedRequest",
      Date: "2023/08/05",
      Time: "6.24",
      From: "parentId:p007",
      Message: "Request to pickup missed child: C004",
    },
  ];
  return (
    // <div>
    //   <MainLayout data={sideNavBarLinks}>
    //     <div className="pt-[25px] px-[25px] ">
    //       <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
    //         Dashboard
    //       </h1>
    //       <div className="grid grid-cols-2 gap-[150px] mt-[25px] pb-[15px]">
    // <div className=" h-[180px] rounded-[8px] bg-white border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
    //   <div>
    //     <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px] pb-1">
    //       Vehicle
    //     </h1>
    //     <div className="flex gap-x-20">
    //       <div className="w-40 ">
    //         <img
    //           src={schoolVan}
    //           alt="schoolVan"
    //           className="border-2 border-gray"
    //         ></img>
    //       </div>
    //       <div className="">
    //         <h2 className="font-medium">PJ-4893</h2>
    //         <h2>VID3001</h2>
    //       </div>
    //     </div>
    //   </div>
    //   <FaRegCalendarMinus fontSize={28} color="" />
    //         </div>
    //         {/* Alerts */}
    //         <div className=" h-[180px] rounded-[8px] bg-white border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
    //           <div>
    //             <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px] pb-1">
    //               Alerts
    //             </h1>
    //             <div className="flex">
    //               <h2 className="text-[#B589DF] text-[12px] leading-[17px] font-bold">
    //                 Your vehicle verification
    //               </h2>
    //             </div>
    //             <div className="flex">
    //               <h2 className="text-[#c91c28] text-[12px] leading-[17px] font-bold">
    //                 - Approved
    //               </h2>
    //             </div>
    //           </div>
    //           <FaRegCalendarMinus fontSize={28} color="" />
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-2 mt-[22px] w-full gap-[150px] ">
    // <div className=" bg-white shadow-md cursor-pointer rounded-[4px]">
    //   <div className="bg-[#F8F9FC]  flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
    //     <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
    //       Earnings Overview
    //     </h2>
    //     <FaEllipsisV color="gray" className="cursor-pointer" />
    //   </div>
    //   <div className="w-full">
    //     <LineChart
    //       width={500}
    //       height={300}
    //       data={data}
    //       margin={{
    //         top: 5,
    //         right: 30,
    //         left: 20,
    //         bottom: 5,
    //       }}
    //     >
    //       <CartesianGrid strokeDasharray="3 3" />
    //       <XAxis dataKey="name" />
    //       <YAxis />
    //       <Tooltip />
    //       <Legend />
    //       <Line
    //         type="monotone"
    //         dataKey="pv"
    //         stroke="#8884d8"
    //         activeDot={{ r: 8 }}
    //       />
    //       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    //     </LineChart>
    //   </div>
    // </div>
    //         <div className=" bg-white shadow-md cursor-pointer rounded-[4px]">
    //           <div className="bg-[#F8F9FC]  flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
    //             <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
    //               Earnings Overview
    //             </h2>
    //             <FaEllipsisV color="gray" className="cursor-pointer" />
    //           </div>
    //           <diV className="">
    //             <img src={parentMap} alt="parentMap"></img>
    //           </diV>
    //         </div>
    //       </div>
    //     </div>
    //   </MainLayout>
    //   <div className="w-full flex items-center flex-col font-nunito">
    //     <h1>Add new school ride</h1>
    //     <button
    //       className="openModalBtn w-48 h-10 bg-orange rounded-md cursor-pointer"
    //       onClick={() => {
    //         setModalOpen(true);
    //       }}
    //     >
    //       Add School Ride
    //     </button>

    //     {modalOpen && <Modal setOpenModal={setModalOpen} />}
    //   </div>
    // </div>
    <div>
      <MainLayout data={sideNavBarLinks}>
        <h1 className="text-[#5a5c69] text-[28px] mb-3 leading-8 font-normal cursor-pointer">
          Dashboard
        </h1>
        <div className="grid grid-cols-5 h-screen gap-4">
          <div className="col-span-3">
            <div className="w-full h-2/6 grid grid-cols-2 gap-4">
              {/* <div className=" bg-blue-500"> */}
              <div className=" h-[180px] rounded-[8px] bg-slate-100 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                <div>
                  <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px] pb-1">
                    Your Next Ride is on
                  </h1>
                  <h2 className="text-[#B589DF] text-[12px] leading-[17px] font-bold">
                    Tomorrow at 5.45 a.m
                  </h2>
                  <h2 className="text-[#B589DF] text-[12px] leading-[17px] font-bold">
                    From Homagama
                  </h2>
                </div>
                <FaRegCalendarMinus fontSize={28} color="" />
              </div>
              {/* </div> */}
              <div className="">
                {/* Content for the right column (2 parts) */}
                <NavLink to= "/driver/vehicle">
                <div className=" h-[180px] rounded-[8px] bg-slate-100 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                  <div>
                    <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px] pb-1">
                      Vehicle
                    </h1>
                    <div className="flex gap-x-20">
                      <div className="w-40 ">
                        <img
                          src={schoolVan}
                          alt="schoolVan"
                          className="border-2 border-gray"
                        ></img>
                      </div>
                      <div className="">
                        <h2 className="font-medium">PJ-4893</h2>
                        <h2>VID3001</h2>
                      </div>
                    </div>
                  </div>
                  <FaRegCalendarMinus fontSize={28} color="" />
                </div>
                </NavLink>
              </div>
            </div>
            {/* <div className=" h-[110px] rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"></div>
            </div> */}
            <div className="w-full h-4/6">
              {/* chart */}
              <div className=" bg-white shadow-md cursor-pointer rounded-[4px]">
                <div className="bg-[#F8F9FC]  flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
                  <h2 className="text-orange text-[16px] leading-[19px] font-bold">
                    Earnings Overview
                  </h2>
                  <FaEllipsisV color="gray" className="cursor-pointer" />
                </div>
                <div className="w-full">
                  <LineChart
                    width={700}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 rounded-md text-center">
            <div className="text-orange leading-4 text-lg font-bold mb-3">
              New Updates
            </div>
            <div className="flex flex-col gap-4">
              {notifications.map((notifi) => (
                <h1 className="h-20 w-[95%] rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                  {notifi.Message}
                </h1>
              ))}
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default DriverDashboardPg;
