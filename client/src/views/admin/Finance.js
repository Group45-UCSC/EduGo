import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";
import { PiTrendUpBold } from "react-icons/pi";
import { PiTrendDownBold } from "react-icons/pi";
import { BsFillBarChartFill } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <FaBeer /> },
  { title: "Employees", path: "/admin/employees", icon: <FaBeer /> },
  { title: "Drivers", path: "/admin/drivers", icon: <FaBeer /> },
  { title: "School Rides", path: "/admin/rides", icon: <FaBeer /> },
  { title: "Children", path: "/admin/childrenlist", icon: <FaBeer /> },
  { title: "Finance", path: "/admin/finance", icon: <FaBeer /> },
];

function Finance() {

  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  const handleClick = () => {
    window.location.href = `/admin/transactioninfo`;
  };

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
      <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">Finance</h1>
          <div className='flex'>

          {/* card */}
          <div className='cardHolder h-28 w-60 rounded-md shadow-md ml-28 mt-8 flex cursor-pointer hover:scale-105 transition-transform ease-in-out' style={{backgroundColor:'#EEEEEE'}}>
              
              {/* orange div */}
              <div className='flex w-2 rounded-s-lg' style={{backgroundColor:'#00A410'}}></div>
              
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
          <div className='cardHolder h-28 w-60 rounded-md shadow-md ml-28 mt-8 flex cursor-pointer hover:scale-105 transition-transform ease-in-out' style={{backgroundColor:'#EEEEEE'}}>
              
              {/* orange div */}
              <div className='flex w-2 rounded-s-lg' style={{backgroundColor:'#0038FF'}}></div>
              
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
          <div className='cardHolder h-28 w-60 rounded-md shadow-md ml-28 mt-8 flex cursor-pointer hover:scale-105 transition-transform ease-in-out' style={{backgroundColor:'#EEEEEE'}}>
              
              {/* orange div */}
              <div className='flex w-2 rounded-s-lg' style={{backgroundColor:'#FF0000'}}></div>
              
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
            <div className="flex mt-8 ml-28 h-11 w-36 rounded-lg shadow-lg bg-orange font-semibold text-lg pt-2 pl-4 cursor-pointer hover:scale-[102%] hover:bg-amber-500 transition-transform ease-in-out">Analytics<BsFillBarChartFill className="mt-1 ml-4"/></div>

            {/*transaction button container */}
            <div className="flex text-center ml-32 mt-12">

              {/* buttons */}
              <div onClick={()=>updateToggle(1)} className={toggle === 1 ? "h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer" : "h-11 w-44 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"}>All transactions</div>
              <div onClick={()=>updateToggle(2)} className={toggle === 2 ? "ml-1 h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer" : "h-11 w-44 ml-1 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"}>Income</div>
              <div onClick={()=>updateToggle(3)} className={toggle === 3 ? "ml-1 h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer" : "h-11 w-44 ml-1 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"}>Expense</div>
            </div>

          {/* transactions table */}
          <div className={toggle === 1 ? "details" : "details hidden"}>
            <div className='ml-32 mr-32 shadow-md overflow-auto '>
              <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
              <thead className='border-y-4 border-white drop-shadow '>
                <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
                  <th className='px-3.5 p-1 w-24 '>Transaction ID</th>
                  <th className='px-3.5 w-30'>Date</th>
                  <th className='px-3.5 w-30'>Time</th>
                  <th className='px-3.5 w-30'>Amount</th>
                  <th className='px-3.5 w-30'>Type</th>
                </tr>
              </thead>

              <tbody className=''>
                <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'> 008</td>
                    <td>2023-01-08</td>
                    <td>13 : 00</td>
                    <td>72000</td>
                    <td>Expense</td>
                </tr>
                
                <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md' >
                  <td className='text-center  p-3 ' >007</td>
                  <td>2023-01-07</td>
                  <td>08 : 00</td>
                  <td>5000</td>
                  <td>Income</td>
                </tr>

                <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3 ' >006</td>
                  <td>2023-01-06</td>
                  <td>05 : 00</td>
                  <td>5000</td>
                  <td>Income</td>
                </tr>

                <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3 ' >005</td>
                  <td>2023-01-05</td>
                  <td>10 : 00</td>
                  <td>5000</td>
                  <td>Income</td>
                </tr>

                <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3 ' >004</td>
                  <td>2023-01-04</td>
                  <td>20 : 00</td>
                  <td>5000</td>
                  <td>Income</td>
                </tr>

                <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3 ' >003</td>
                  <td>2023-01-03</td>
                  <td>16 : 00</td>
                  <td>10000</td>
                  <td>Income</td>
                </tr>

                <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3 ' >002</td>
                  <td>2023-01-02</td>
                  <td>15 : 00</td>
                  <td>72000</td>
                  <td>Expense</td>
                </tr>

                <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3 ' >001</td>
                  <td>2023-01-01</td>
                  <td>12 : 00</td>
                  <td>64000</td>
                  <td>Expense</td>
                </tr>
              </tbody>

            </table>
        </div>
        </div>

        {/* Incomes */}
        <div className={toggle === 2 ? "details" : "details hidden"}>
            <div className='ml-32 mr-32 shadow-md overflow-auto '>
              <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
              <thead className='border-y-4 border-white drop-shadow '>
                <tr className=' bg-[#999999] text-white border-b-2 h-16 text-[18px] drop-shadow-md '>
                  <th className='px-3.5 w-24'></th>
                  <th className='px-3.5 w-30'>Transaction ID</th>
                  <th className='px-3.5 w-30'>Date</th>
                  <th className='px-3.5 w-30'>Time</th>
                  <th className='px-3.5 w-30'>Amount</th>
                </tr>
              </thead>

              <tbody className=''>
                
                <tr className='h-12 bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md' >
                  <td className='text-center  p-3 ' ><BsFillArrowLeftSquareFill className="ml-8"/></td>
                  <td>007</td>
                  <td>2023-01-07</td>
                  <td>08 : 00</td>
                  <td>5000</td>
                </tr>

                <tr className='h-12 bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3 ' ><BsFillArrowLeftSquareFill className="ml-8"/></td>
                  <td>006</td>
                  <td>2023-01-06</td>
                  <td>05 : 00</td>
                  <td>5000</td>
                </tr>

                <tr className='h-12 bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3 ' ><BsFillArrowLeftSquareFill className="ml-8"/></td>
                  <td>005</td>
                  <td>2023-01-05</td>
                  <td>10 : 00</td>
                  <td>5000</td>
                </tr>

                <tr className='h-12 bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3 ' ><BsFillArrowLeftSquareFill className="ml-8"/></td>
                  <td>004</td>
                  <td>2023-01-04</td>
                  <td>20 : 00</td>
                  <td>5000</td>
                </tr>

                <tr className='h-12 bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3 ' ><BsFillArrowLeftSquareFill className="ml-8"/></td>
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
                  <th className='px-3.5 w-30'>Transaction ID</th>
                  <th className='px-3.5 w-30'>Date</th>
                  <th className='px-3.5 w-30'>Time</th>
                  <th className='px-3.5 w-30'>Amount</th>
                </tr>
              </thead>

              <tbody className=''>
                
                <tr className='h-12 bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md' >
                  <td className='text-center  p-3 ' ><BsFillArrowRightSquareFill className="ml-8"/></td>
                  <td>008</td>
                  <td>2023-01-08</td>
                  <td>13 : 00</td>
                  <td>72000</td>
                </tr>

                <tr className='h-12 bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3 ' ><BsFillArrowRightSquareFill className="ml-8"/></td>
                  <td>002</td>
                  <td>2023-01-02</td>
                  <td>15 : 00</td>
                  <td>72000</td>
                </tr>

                <tr className='h-12 bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3 ' ><BsFillArrowRightSquareFill className="ml-8"/></td>
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
