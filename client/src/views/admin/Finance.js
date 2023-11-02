import React, { useState, useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
// import { AiOutlineSearch } from "react-icons/ai";
// import { BiFilterAlt } from "react-icons/bi";

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

    //revenue count
  const [revenue, setRevcount] = useState([]);

  useEffect(() => {
    async function totalRev() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/admin/finance/revcount`
        );
        const data = await response.json();
        setRevcount(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    totalRev();
  });

//total expenses
const [expense, setExpcount] = useState([]);

  useEffect(() => {
    async function totalExp() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/admin/finance/expcount`
        );
        const data = await response.json();
        setExpcount(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    totalExp();
  });

  //total profit
const [profit, setProfit] = useState([]);

useEffect(() => {
  async function totalProfit() {
    try {
      const response = await fetch(
        `http://localhost:5000/edugo/admin/finance/profitcount`
      );
      const data = await response.json();
      setProfit(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  totalProfit();
});

//income table
const [income, setIncome] = useState([]);

useEffect(() => {
  async function revIncomeData() {
    try {
      const response = await fetch(
        `http://localhost:5000/edugo/admin/finance/income`
      );
      const data = await response.json();
      setIncome(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  revIncomeData();
});

//income table
const [expenseAmount, setExpense] = useState([]);

useEffect(() => {
  async function revExpenseData() {
    try {
      const response = await fetch(
        `http://localhost:5000/edugo/admin/finance/expense`
      );
      const data = await response.json();
      setExpense(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  revExpenseData();
});


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
              {profit.map((item, index) => (
              <span className='font-bold ml-20 text-2xl'>{item.totalprofit}</span>
              ))}
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
              {revenue.map((item, index) => (
              <span className='font-bold ml-20 text-2xl'>{item.totalrev}</span>
              ))}
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
              {expense.map((item, index) => (
              <span className='font-bold ml-20 text-2xl'>{item.totalexp}</span>
              ))}
            </div>
          </div>
        </div>

        {/* analytics */}
        <div onClick={analysis} className="flex mt-8 ml-28 h-11 w-36 rounded-lg shadow-lg bg-orange font-semibold text-lg pt-2 pl-4 cursor-pointer hover:scale-[102%] hover:bg-amber-500 transition-transform ease-in-out">Analytics<BsFillBarChartFill className="mt-1 ml-4" /></div>

        {/* filter and search button
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
        </div> */}

        {/*transaction button container */}
        <div className="flex text-center ml-32 mt-12">

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

              {income.map((item) => (
                <tr onClick={handleClick} className='h-12 bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md' >
                  <td className='text-center  p-3 ' ><BsFillArrowLeftSquareFill className="ml-8" /></td>
                  <td>{item.income_id}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}
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
                  <th className='px-3.5 w-30'>Driver</th>
                  <th className='px-3.5 w-30'>Amount</th>
                </tr>
              </thead>

              <tbody className=''>

              {expenseAmount.map((item) => (
                <tr className='h-12 bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md' >
                  <td className='text-center  p-3 ' ><BsFillArrowRightSquareFill className="ml-8" /></td>
                  <td>{item.expense_id}</td>
                  <td>{item.date}</td>
                  <td>{item.user_id}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}

              </tbody>

            </table>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Finance;
