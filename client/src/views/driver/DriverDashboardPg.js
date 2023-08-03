import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer, FaRegCalendarMinus, FaEllipsisV } from "react-icons/fa";
import schoolVan from "../../images/schoolVan.jpeg";
import parentMap from "../../images/parentMap.png";

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
  { title: "Dashboard", path: "/driver/dashboard", icon: <FaBeer /> },
  { title: "School Ride", path: "/driver/ride", icon: <FaBeer /> },
  { title: "Finance", path: "/driver/finance", icon: <FaBeer /> },
  { title: "Support", path: "/driver/support", icon: <FaBeer /> },
  { title: "Feedback", path: "/driver/feedback", icon: <FaBeer /> },
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
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="pt-[25px] px-[25px] ">
          <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
            {/* Dashboard {name} */}
            Dashboard
          </h1>
          {/* <button className="border" onClick={(e) => logout(e)}>
            Logout
          </button> */}
          <div className="grid grid-cols-2 gap-[150px] mt-[25px] pb-[15px]">
            {/* vehicle */}
            <div className=" h-[180px] rounded-[8px] bg-white border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
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
            {/* Alerts */}
            <div className=" h-[180px] rounded-[8px] bg-white border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
              <div>
                <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px] pb-1">
                  Alerts
                </h1>
                <div className="flex">
                  <h2 className="text-[#B589DF] text-[12px] leading-[17px] font-bold">
                    Your vehicle verification
                  </h2>
                </div>
                <div className="flex">
                  <h2 className="text-[#c91c28] text-[12px] leading-[17px] font-bold">
                    - Approved
                  </h2>
                </div>
              </div>
              <FaRegCalendarMinus fontSize={28} color="" />
            </div>
          </div>
          <div className="grid grid-cols-2 mt-[22px] w-full gap-[150px] ">
            <div className=" bg-white shadow-md cursor-pointer rounded-[4px]">
              <div className="bg-[#F8F9FC]  flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
                <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
                  Earnings Overview
                </h2>
                <FaEllipsisV color="gray" className="cursor-pointer" />
              </div>
              <div className="w-full">
                <LineChart
                  width={500}
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
            <div className=" bg-white shadow-md cursor-pointer rounded-[4px]">
              <div className="bg-[#F8F9FC]  flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
                <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
                  Earnings Overview
                </h2>
                <FaEllipsisV color="gray" className="cursor-pointer" />
              </div>
              <diV className="">
                <img src={parentMap} alt="parentMap"></img>
              </diV>
            </div>
          </div>
        </div>
      </MainLayout>
      <div className="w-full flex items-center flex-col font-nunito">
        <h1>Add new school ride</h1>
        <button
          className="openModalBtn w-48 h-10 bg-orange rounded-md cursor-pointer"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Add School Ride
        </button>

        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>
    </div>
  );
}

export default DriverDashboardPg;
