import React, {useState} from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";

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

function AdminEmergencyList() {

  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  const handleClick = () => {
    window.location.href = `/admin/emergency`;
  };
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>

      <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">Emergency List</h1>

      {/* filter and search button */}
      <div className="flex mt-8 ml-[57%]">
          <div className="flex border border-slate-400 w-40 rounded-md h-8">
            <form action=''>
              <input type="text" placeholder='Filter here' className='overflow-auto pl-2 pt-1 w-32 bg-transparent float-left border-collapse'></input>
              < BiFilterAlt className="text-slate-400 float-right h-5 w-5 mt-1 ml-1 hover:cursor-pointer" />
            </form>
          </div>

          <div className="flex border border-slate-400 ml-8 w-52 rounded-md h-8">
            <form action=''>
              <input type="text" placeholder='Search..' className='overflow-auto pl-2 pt-1 w-44 bg-transparent float-left border-collapse'></input>
              < AiOutlineSearch className="text-slate-400 float-right h-5 w-5 mt-1 ml-1 hover:cursor-pointer" />
            </form>
          </div>
        </div>

      {/*emergency button container */}
      <div className="flex text-center ml-32 mt-4">
          {/* buttons */}
          <div
            onClick={() => updateToggle(1)}
            className={
              toggle === 1
                ? "h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer"
                : "h-11 w-44 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"
            }
          >
            Current Emergencies
          </div>
          <div
            onClick={() => updateToggle(2)}
            className={
              toggle === 2
                ? "ml-1 h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer"
                : "h-11 w-44 ml-1 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"
            }
          >
            All Emergencies
          </div>
        </div>


      {/* rides table */}
      <div className={toggle === 1 ? "details" : "details hidden"}>
      <div className='ml-32 mr-32 shadow-md overflow-auto '>
        <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
          <thead className='border-y-4 border-white drop-shadow '>
            <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
              <th className='px-3.5 p-1 w-24 '>ID</th>
              <th className='px-3.5 w-30'>License plate</th>
              <th className='px-3.5 w-30'>Departure</th>
              <th className='px-3.5 w-30'>Destination</th>
              <th className='px-3.5 w-30'>Contact</th>
              <th className='px-3.5 w-30'>Status</th>  
            </tr>
          </thead>

          <tbody className=''>
            <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                <td className='text-center  p-3'></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
          </tbody>

        </table>
      </div>
      </div>

      <div className={toggle === 2 ? "details" : "details hidden"}>
      <div className='ml-32 mr-32 shadow-md overflow-auto '>
        <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
          <thead className='border-y-4 border-white drop-shadow '>
            <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
              <th className='px-3.5 p-1 w-24 '>ID</th>
              <th className='px-3.5 w-30'>License plate</th>
              <th className='px-3.5 w-30'>Departure</th>
              <th className='px-3.5 w-30'>Destination</th>
              <th className='px-3.5 w-30'>Contact</th>
              <th className='px-3.5 w-30'>Status</th>  
            </tr>
          </thead>

          <tbody className=''>

            <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
              <td className='text-center  p-3 ' ></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>

        </table>
      </div>
      </div>

      </MainLayout>
    </div>
  );
}

export default AdminEmergencyList;