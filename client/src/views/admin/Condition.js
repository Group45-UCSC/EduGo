import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiOutlineClose } from "react-icons/ai";
import schoolVan from "../../images/schoolVan.jpeg";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

import { AiFillDashboard } from "react-icons/ai";
import { BsCoin } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <AiFillDashboard /> },
  { title: "Employees", path: "/admin/employees", icon: <FaUserGroup /> },
  {
    title: "Drivers & Vehicles",
    path: "/admin/drivers",
    icon: <BsFillCarFrontFill />,
  },
  { title: "School Rides", path: "/admin/rides", icon: <FaShippingFast /> },
  {
    title: "Children & Parents",
    path: "/admin/childrenlist",
    icon: <FaChild />,
  },
  { title: "Finance", path: "/admin/finance", icon: <BsCoin /> },
];

function AdminCondition() {
  const [viewPopup, setViewPopup] = useState(false);

  function showPopup() {
    setViewPopup(true);
  }

  function hidePopup() {
    setViewPopup(false);
  }

  const checks = [
    {
      type: "Van",
      name: "Ishan Jayasekara",
      nic: "993321123V",
      contact: "0771234567",
      date: "2023/08/15",
    },
    {
      type: "Van",
      name: "Supun Thilakshana",
      nic: "993218313V",
      contact: "0743213567",
      date: "2023/08/16",
    },
    {
      type: "Bus",
      name: "Rashmika Anuradha",
      nic: "973456534V",
      contact: "0769898789",
      date: "2023/08/16",
    },
    {
      type: "Bus",
      name: "Gimahan Rajapaksha",
      nic: "979983346V",
      contact: "0712341239",
      date: "2023/08/17",
    },
  ];

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">
          Condition Check
        </h1>

        {/* condition check table */}
        <div className="ml-32 mt-8 mr-32 mb-80 shadow-md overflow-auto ">
          <table className="w-full text-center border-separate border-spacing-y-2 border border-slate-50 ">
            <thead className="border-y-4 border-white drop-shadow ">
              <tr className=" bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md ">
                <th className="px-3.5 p-1 w-24 ">Type</th>
                <th className="px-3.5 w-30">Driver's Name</th>
                <th className="px-3.5 w-30">NIC</th>
                <th className="px-3.5 w-30">Contact</th>
                <th className="px-3.5 w-30">Date</th>
              </tr>
            </thead>

            <tbody className="">
              {checks.map((item) => (
                <tr
                  onClick={showPopup}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3 ">{item.type}</td>
                  <td>{item.name}</td>
                  <td>{item.nic}</td>
                  <td>{item.contact}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* popup container */}

        {viewPopup && (
          <div className="fixed top-0 left-0 translate-x-[-16px] w-[102.6%] h-full overflow-auto bg-stone-900/75">
            {/* close button */}
            <div
              onClick={hidePopup}
              className="flex w-16 h-12 bg-red-600 float-right mr-16 mt-4 text-white text-lg pt-2 pl-4 cursor-pointer hover:bg-red-700 shadow-lg"
            >
              <AiOutlineClose className="mt-2 ml-2" />
            </div>

            {/* details container */}
            <div className="mt-16 ml-80 mr-16 bg-[#F4F4F4] rounded-lg shadow-lg drop-shadow-lg">

            <div className='font-bold ml-12 mt-4 pt-4 text-2xl'>Condition Check</div>
              {/* display image container */}
              <div className="flex mt-8">
                <BsChevronLeft className="mt-14 ml-[30%] w-8 h-8" />
                <img
                  src={schoolVan}
                  alt="school van"
                  className="ml-12 max-h-[150px] max-w-[300px]"
                ></img>
                <BsChevronRight className="mt-14 ml-12 w-8 h-8" />
              </div>

              {/* all images container */}
              <div className="flex mt-8">
                <img
                  src={schoolVan}
                  alt="school van"
                  className="ml-[20%] h-[50px]"
                ></img>
                <img
                  src={schoolVan}
                  alt="school van"
                  className="ml-2 h-[50px]"
                ></img>
                <img
                  src={schoolVan}
                  alt="school van"
                  className="ml-2 h-[50px]"
                ></img>
                <img
                  src={schoolVan}
                  alt="school van"
                  className="ml-2 h-[50px]"
                ></img>
                <img
                  src={schoolVan}
                  alt="school van"
                  className="ml-2 h-[50px]"
                ></img>
                <img
                  src={schoolVan}
                  alt="school van"
                  className="ml-2 h-[50px]"
                ></img>
                <img
                  src={schoolVan}
                  alt="school van"
                  className="ml-2 h-[50px]"
                ></img>
              </div>

              {/* firstsqure */}
              <div className="mt-4 ml-[10%] pl-8 pt-4 pb-3 grid grid-cols-2 gap-[250px] bg-[#F4F4F4] w-[900px] rounded-lg shadow-md drop-shadow-md">
                <div className="">
                  <h1 className="font-bold p-1 text-[19px]">
                    {" "}
                    Vehicle Details
                  </h1>
                  <p className="p-1"> Type : van</p>
                  <p className="p-1"> Make : Nissan</p>
                  <p className="p-1"> Model : Hiace</p>
                  <p className="p-1"> Year : 1981</p>
                  <p className="p-1"> Contact : 071-xxxxxxx</p>
                </div>
                <div className="mt-8">
                  <p className="p-1"> License Plate : 50 - 0591</p>
                  <p className="p-1"> License Plate : 50 - 0591</p>
                  <p className="p-1">Engine Number : LH 1989</p>
                  <p className="p-1">Chassis Number : xxxxxxxxx</p>
                  <p className="p-1">Address : 23/4, Pannipitiya</p>
                  <p className="p-1">Last checked : 2023/ 03 / 26</p>
                </div>
              </div>
              <button className="h-12 w-60 ml-[40%] mt-8 font-semibold bg-gradient-to-b from-amber-500 to-amber-300  rounded-lg shadow-md hover:shadow-lg transform hover:scale-[102%] trasition duration-300 ease-out  hover:cursor-pointer">
                    Next date - 2023/08/26
                </button>

                {/* feedbacks */}
                <div className="mt-4 ml-[10%] pl-8 pt-4 pb-3 mb-8 bg-[#F4F4F4] w-[900px]  rounded-lg shadow-md drop-shadow-md">
            <h1 className="font-bold pt-1 text-[19px]">Previous feedbacks</h1>

            <div className="mt-4">
            <p>Date : 2023/03/26</p>
            <p>Coordinator : Hasantha Gallage</p>
                <input type="text" placeholder="Comment on the vehicle condition here..." className="w-[850px] h-[100px] pl-6 pt-1 pb-2 mb-3 rounded-lg shadow-md drop-shadow-md"></input>
            </div>
            <div className="mt-4">
            <p>Date : 2022/09/26</p>
            <p>Coordinator : Hasantha Gallage</p>
                <input type="text" placeholder="Comment on the vehicle condition here..." className="w-[850px] h-[100px] pl-6 pt-1 pb-2 mb-3 rounded-lg shadow-md drop-shadow-md"></input>
            </div>
            </div>
            </div>
          </div>
        )}
      </MainLayout>
    </div>
  );
}

export default AdminCondition;
