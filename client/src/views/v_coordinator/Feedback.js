import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard } from "react-icons/ai";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/vc/dashboard", icon: <AiFillDashboard /> },
  { title: "Vehicles", path: "/vc/vehicles", icon: <BsFillCarFrontFill /> },
  { title: "School Rides", path: "/vc/rides", icon: <FaShippingFast /> },
  { title: "Emergency", path: "/vc/emergency", icon: <FaCarCrash /> },
];


function Feedback() {
  return (

    <MainLayout data={sideNavBarLinks}>

    <div>
      <div className="mt-4 ml-32 pl-8 pt-4 pb-3 mb-10  bg-[#F4F4F4] w-[900px]  rounded-xl shadow-md drop-shadow-md">
            <h1 className="font-semibold p-1 text-[19px]"> 
              Checked and feedback as on : 2023 / 03 / 26
            </h1>
            <form className="">
                <input type="text" placeholder="Comment goes here" className="w-[850px] h-[100px] pl-6 pt-1 pb-12 mb-8 rounded-xl shadow-md drop-shadow-md"></input>
            </form>

            <h1 className="font-semibold p-1 text-[19px]">
              Checked and feedback as on : 2022 / 12 / 26
            </h1>
            <form className="">
                <input type="text" placeholder="Comment goes here" className="w-[850px] h-[100px] pl-6 pt-1 pb-12 mb-8 rounded-xl shadow-md drop-shadow-md"></input>
            </form>

            <h1 className="font-semibold p-1 text-[19px]">
              Checked and feedback as on : 2022 / 09 / 26
            </h1>
            <form className="">
                <input type="text" placeholder="Comment goes here" className="w-[850px] h-[100px] pl-6 pt-1 pb-12 mb-8 rounded-xl shadow-md drop-shadow-md"></input>
            </form>

            <h1 className="font-semibold p-1 text-[19px]">
              Checked and feedback as on : 2022 / 06 / 26
            </h1>
            <form className="">
                <input type="text" placeholder="Comment goes here" className="w-[850px] h-[100px] pl-6 pt-1 pb-12 mb-8 rounded-xl shadow-md drop-shadow-md"></input>
            </form>
        </div>
    </div>
    </MainLayout>
  )
}

export default Feedback
