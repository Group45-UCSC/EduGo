import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";

import { PiTrendUpBold } from "react-icons/pi";
import { PiTrendDownBold } from "react-icons/pi";
import { BsFillBarChartFill } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

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

function Finance() {

  const [toggle, setToggle] = useState(2);

  function updateToggle(id) {
    setToggle(id);
  }

  const handleClick = () => {
    window.location.href = `/admin/transactioninfo`;
  };

  const analysis = () => {
    window.location.href = `/admin/analysis`;
  };

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">Finance</h1>
        <div className='flex'>

          {/* card */}
          <div className='cardHolder h-28 w-60 rounded-md shadow-md ml-28 mt-8 flex cursor-pointer hover:scale-105 transition-transform ease-in-out' style={{ backgroundColor: '#EEEEEE' }}>

            {/* orange div */}
            <div className='flex w-2 rounded-s-lg' style={{ backgroundColor: '#00A410' }}></div>

            {/* title and icon container */}
            <div className='flex flex-col'>
              <div className='flex'>
                <div className='w-24 ml-4 mt-2 h-16 font-bold'>Net Profit</div>
                <div className='ml-16 mt-4 w-8 h-8'><BsCoin className='h-6 w-6' /></div>
              </div>
              <span className='font-bold ml-20 text-2xl'>1.3 M</span>
            </div>
          </div>

          {/* card */}
          <div className='cardHolder h-28 w-60 rounded-md shadow-md ml-28 mt-8 flex cursor-pointer hover:scale-105 transition-transform ease-in-out' style={{ backgroundColor: '#EEEEEE' }}>

            {/* orange div */}
            <div className='flex w-2 rounded-s-lg' style={{ backgroundColor: '#0038FF' }}></div>

            {/* title and icon container */}
            <div className='flex flex-col'>
              <div className='flex'>
                <div className='w-24 ml-4 mt-2 h-16 font-bold'>Total Revenue</div>
                <div className='ml-16 mt-4 w-8 h-8 '><PiTrendUpBold className='h-6 w-6' /></div>
              </div>
              <span className='font-bold ml-20 text-2xl'>3.5 M</span>
            </div>
          </div>

          {/* card */}
          <div className='cardHolder h-28 w-60 rounded-md shadow-md ml-28 mt-8 flex cursor-pointer hover:scale-105 transition-transform ease-in-out' style={{ backgroundColor: '#EEEEEE' }}>

            {/* orange div */}
            <div className='flex w-2 rounded-s-lg' style={{ backgroundColor: '#FF0000' }}></div>

            {/* title and icon container */}
            <div className='flex flex-col'>
              <div className='flex'>
                <div className='w-24 ml-4 mt-2 h-16 font-bold'>Total Expenses</div>
                <div className='ml-16 mt-4 w-8 h-8'><PiTrendDownBold className='h-6 w-6' /></div>
              </div>
              <span className='font-bold ml-20 text-2xl'>2.2 M</span>
            </div>
          </div>
        </div>

        {/* analytics */}
        <div onClick={analysis} className="flex mt-8 ml-28 h-11 w-36 rounded-lg shadow-lg bg-orange font-semibold text-lg pt-2 pl-4 cursor-pointer hover:scale-[102%] hover:bg-amber-500 transition-transform ease-in-out">Analytics<BsFillBarChartFill className="mt-1 ml-4" /></div>

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

        {/*transaction button container */}
        <div className="flex text-center ml-32 mt-4">

          {/* buttons */}
          <div onClick={() => updateToggle(2)} className={toggle === 2 ? "h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer" : "h-11 w-44 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"}>Payments recieved</div>
          <div onClick={() => updateToggle(3)} className={toggle === 3 ? "ml-1 h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer" : "h-11 w-44 ml-1 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"}>Expenses</div>
        </div>

        {/* Incomes */}
        <div className={toggle === 2 ? "details" : "details hidden"}>
          <div className='ml-32 mr-32 shadow-md overflow-auto '>
            <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
              <thead className='border-y-4 border-white drop-shadow '>
                <tr className=' bg-[#999999] text-white border-b-2 h-16 text-[18px] drop-shadow-md '>
                  <th className='px-3.5 w-24'></th>
                  <th className='px-3.5 w-30'>Payment ID</th>
                  <th className='px-3.5 w-30'>Date</th>
                  <th className='px-3.5 w-30'>Time</th>
                  <th className='px-3.5 w-30'>Amount</th>
                </tr>
              </thead>

              <tbody className=''>

                <tr onClick={handleClick} className='h-12 bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md' >
                  <td className='text-center  p-3 ' ><BsFillArrowLeftSquareFill className="ml-8" /></td>
                  <td>007</td>
                  <td>2023-01-07</td>
                  <td>08 : 00</td>
                  <td>5000</td>
                </tr>

                <tr className='h-12 bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3 ' ><BsFillArrowLeftSquareFill className="ml-8" /></td>
                  <td>006</td>
                  <td>2023-01-06</td>
                  <td>05 : 00</td>
                  <td>5000</td>
                </tr>

                <tr className='h-12 bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3 ' ><BsFillArrowLeftSquareFill className="ml-8" /></td>
                  <td>005</td>
                  <td>2023-01-05</td>
                  <td>10 : 00</td>
                  <td>5000</td>
                </tr>

                <tr className='h-12 bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3 ' ><BsFillArrowLeftSquareFill className="ml-8" /></td>
                  <td>004</td>
                  <td>2023-01-04</td>
                  <td>20 : 00</td>
                  <td>5000</td>
                </tr>

                <tr className='h-12 bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3 ' ><BsFillArrowLeftSquareFill className="ml-8" /></td>
                  <td>003</td>
                  <td>2023-01-03</td>
                  <td>16 : 00</td>
                  <td>10000</td>
                </tr>

              </tbody>

            </table>
          </div>
        </div>

        {/* Expenses */}
        <div className={toggle === 3 ? "details" : "details hidden"}>
          <div className='ml-32 mr-32 shadow-md overflow-auto '>
            <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
              <thead className='border-y-4 border-white drop-shadow '>
                <tr className=' bg-[#999999] text-white border-b-2 h-16 text-[18px] drop-shadow-md '>
                  <th className='px-3.5 w-24'></th>
                  <th className='px-3.5 w-30'>Payment ID</th>
                  <th className='px-3.5 w-30'>Date</th>
                  <th className='px-3.5 w-30'>Time</th>
                  <th className='px-3.5 w-30'>Amount</th>
                </tr>
              </thead>

              <tbody className=''>

                <tr className='h-12 bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md' >
                  <td className='text-center  p-3 ' ><BsFillArrowRightSquareFill className="ml-8" /></td>
                  <td>008</td>
                  <td>2023-01-08</td>
                  <td>13 : 00</td>
                  <td>72000</td>
                </tr>

                <tr className='h-12 bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3 ' ><BsFillArrowRightSquareFill className="ml-8" /></td>
                  <td>002</td>
                  <td>2023-01-02</td>
                  <td>15 : 00</td>
                  <td>72000</td>
                </tr>

                <tr className='h-12 bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3 ' ><BsFillArrowRightSquareFill className="ml-8" /></td>
                  <td>001</td>
                  <td>2023-01-01</td>
                  <td>12 : 00</td>
                  <td>64000</td>
                </tr>

              </tbody>

            </table>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Finance;
