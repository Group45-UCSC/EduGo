import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard } from "react-icons/ai";
import { BsCoin } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <AiFillDashboard /> },
  { title: "Employees", path: "/admin/employees", icon: <FaUserGroup /> },
  { title: "Drivers & Vehicles", path: "/admin/drivers", icon: <BsFillCarFrontFill /> },
  { title: "School Rides", path: "/admin/rides", icon: <FaShippingFast /> },
  { title: "Children & Parents", path: "/admin/childrenlist", icon: <FaChild /> },
  { title: "Finance", path: "/admin/finance", icon: <BsCoin /> },
];

function AdminCondition() {

    const con_details = () => {
        window.location.href = `/admin/conditioninfo`;
      };

    const checks = [
        {
            type : "Van",
            name : "Ishan Jayasekara",
            nic : "993321123V",
            contact : "0771234567",
            date : "2023/08/15"
        },
        {
            type : "Van",
            name : "Supun Thilakshana",
            nic : "993218313V",
            contact : "0743213567",
            date : "2023/08/16"
        },
        {
            type : "Bus",
            name : "Rashmika Anuradha",
            nic : "973456534V",
            contact : "0769898789",
            date : "2023/08/16"
        },
        {
            type : "Bus",
            name : "Gimahan Rajapaksha",
            nic : "979983346V",
            contact : "0712341239",
            date : "2023/08/17"
        },
        
    ];

  return (
    <div>
        <MainLayout data={sideNavBarLinks}>
            <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">Condition Check</h1>

          {/* condition check table */}
            <div className='ml-32 mt-8 mr-32 mb-80 shadow-md overflow-auto '>
        <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
          <thead className='border-y-4 border-white drop-shadow '>
            <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
              <th className='px-3.5 p-1 w-24 '>Type</th>
              <th className='px-3.5 w-30'>Driver's Name</th>
              <th className='px-3.5 w-30'>NIC</th>
              <th className='px-3.5 w-30'>Contact</th>
              <th className='px-3.5 w-30'>Date</th> 
            </tr>
          </thead>

          <tbody className=''>
          {checks.map((item) => (
          <tr onClick={con_details} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
              <td className='text-center  p-3 ' >{item.type}</td>
              <td>{item.name}</td>
              <td>{item.nic}</td>
              <td>{item.contact}</td>
              <td>{item.date}</td>
            </tr>
            ))}
          </tbody>
          </table>
          </div>
        </MainLayout>
    </div>
  )
}

export default AdminCondition