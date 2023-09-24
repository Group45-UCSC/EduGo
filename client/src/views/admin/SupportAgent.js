import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import supportpic from "../../images/support1.png";
import { AiFillDashboard } from "react-icons/ai";
import { BsCoin } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <AiFillDashboard /> },
  { title: "Employees", path: "/admin/employees", icon: <FaUserGroup /> },
  { title: "Drivers & Vehicles", path: "/admin/drivers", icon: <BsFillCarFrontFill /> },
  { title: "School Rides", path: "/admin/rides", icon: <FaShippingFast /> },
  { title: "Children & Parents", path: "/admin/childrenlist", icon: <FaChild /> },
  { title: "Finance", path: "/admin/finance", icon: <BsCoin /> },
];

function AdminSupportAgent() {

    const location = useLocation();
    const dataParam = new URLSearchParams(location.search).get("data");
    const agent = JSON.parse(decodeURIComponent(dataParam));

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div>
          {/* topic */}
          <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">Support Agent</h1>

          {/* image and details container */}
          <div className='flex'>

              {/* image */}
              <div className='bg-gradient-to-b from-amber-500 to-amber-300 ml-20 mt-8 w-52 h-52 mr-14 rounded-full shadow-md'><img src={supportpic} alt="driverpic" className="w-52 h-52 rounded-full shadow-md"></img></div>

                {/* driver's details container */}
                <div className='bg-slate-200 h-64 ml-12 mb-80 w-[750px] mt-8 rounded-lg shadow-md'>

                    <div className='mt-4 ml-8 leading-8 font-semibold'>
                        <p className='mb-1'>ID: {agent.user_id}</p>
                        <p className='mb-1'>Name: {agent.user_name}</p>
                        <p className='mb-1'>Email: {agent.user_email}</p>
                        <p className='mb-1'>NIC: {agent.nic}</p>
                        <p className='mb-1'>Contact: {agent.contact_no}</p>
                        <p className='mb-1'>Address: {agent.address}</p>
                    </div>
                </div>
        </div>

      </div>
      </MainLayout>
    </div>
  )
}

export default AdminSupportAgent