import React, { useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillCar } from "react-icons/ai";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// import { Cell, CartesianGrid } from 'recharts';
import { AiFillDashboard } from "react-icons/ai";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RiRefreshLine } from "react-icons/ri";
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
  "#FF2E63",
];

const childDetails = [
  {
    id: "C10005",
    name: "R.B.S.Udayanga",
    schoolName: "Royal Collage",
    paymentStatus: "Paid",
  },
  {
    id: "C10009",
    name: "L.L.A. Hansani",
    schoolName: "Sujatha collage",
    paymentStatus: "Paid",
  },
  {
    id: "C10011",
    name: "K.S.T. Gunawardhana ",
    schoolName: "Royal Collage",
    paymentStatus: "Pending",
  },
  {
    id: "C10011",
    name: "A.W.K.S. Jayasiri ",
    schoolName: "Royal Collage",
    paymentStatus: "Not Paid",
  },
  {
    id: "C10005",
    name: "R.B.S.Udayanga",
    schoolName: "Royal Collage",
    paymentStatus: "paid",
  },
  {
    id: "C10009",
    name: "L.L.A. Hansani",
    schoolName: "Sujatha collage",
    paymentStatus: "Not Paid",
  },
  {
    id: "C10011",
    name: "K.S.T. Gunawardhana ",
    schoolName: "Royal Collage",
    paymentStatus: "Paid",
  },
  {
    id: "C10011",
    name: "A.W.K.S. Jayasiri ",
    schoolName: "Royal Collage",
    paymentStatus: "Pending",
  },
  {
    id: "C10005",
    name: "R.B.S.Udayanga",
    schoolName: "Royal Collage",
    paymentStatus: "Not Paid",
  },
  {
    id: "C10009",
    name: "L.L.A. Hansani",
    schoolName: "Sujatha collage",
    paymentStatus: "Pending",
  },
  {
    id: "C10011",
    name: "K.S.T. Gunawardhana ",
    schoolName: "Royal Collage",
    paymentStatus: "Paid",
  },
  {
    id: "C10011",
    name: "A.W.K.S. Jayasiri ",
    schoolName: "Royal Collage",
    paymentStatus: "Pending",
  },
];

const sideNavBarLinks = [
  { title: "Dashboard", path: "/driver/dashboard", icon: <AiFillDashboard /> },
  { title: "School Ride", path: "/driver/ride", icon: <AiFillCar /> },
  { title: "Finance", path: "/driver/finance", icon: <MdPayments /> },
  { title: "Support", path: "/driver/support", icon: <MdSupportAgent /> },
  {
    title: "Feedback",
    path: "/driver/feedback",
    icon: <MdOutlineRateReview />,
  },
];

//for chart tooltip
function CustomTooltip({ active, payload }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const monthName = monthNames[data.month - 1];
    return (
      <div className="custom-tooltip">
        <p>{`${monthName}: ${data.total_income}`}</p>
      </div>
    );
  }
  return null;
}
//-------------------------------------------

function Finance() {
  //userID
  const userId = localStorage.getItem("userId");

  //get last month total income---------------------------------------
  const [lastMonthIncome, setLastMonthIncome] = useState("");

  useEffect(() => {
    async function getLatMonthIncome() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/driver/income/view/lastmonth/${userId}`
        );
        // console.log(response);
        const data = await response.json();
        setLastMonthIncome(data.income);
      } catch (err) {
        console.error(err.message);
      }
    }

    getLatMonthIncome();
  }, [userId]);

  //get income view table-----------------------------------------------------------
  const [incomeDetails, setIncomeDetails] = useState([]);

  useEffect(() => {
    async function incomeData() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/driver/income/view/totaldetails/${userId}`
        );
        const data = await response.json();
        setIncomeDetails(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    incomeData();
  }, [userId]);

  // Format the date before displaying
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  //-------------------------------------

  // Create states for "From" and "To" dates
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  // Modify the filtering logic for the table
  const filteredIncomeDetails = incomeDetails.filter((income) => {
    const incomeDate = new Date(income.date);
    if (fromDate && toDate) {
      return incomeDate >= fromDate && incomeDate <= toDate;
    } else if (fromDate) {
      return incomeDate >= fromDate;
    } else if (toDate) {
      return incomeDate <= toDate;
    }
    return true; // If no date range is specified, return all rows
  });

  //to convert month number to month name
  const getMonthName = (monthNumber) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return monthNames[monthNumber - 1] || "Invalid Month";
  };

  //refresh button working
  const resetTable = async () => {
    setFromDate(null);
    setToDate(null);

    // Fetch the original data or re-fetch the data from API
    try {
      const response = await fetch(
        `http://localhost:5000/edugo/driver/income/view/totaldetails/${userId}`
      );
      const data = await response.json();
      setIncomeDetails(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  //-------------------------------------------------------------------

  // State to hold the data for the pie chart-------------------------------
  const [pieChartData, setPieChartData] = useState([]);
  // console.log(pieChartData);

  useEffect(() => {
    async function fetchPieChartData() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/driver/income/view/chart/${userId}`
        );
        const data = await response.json();

        // Assuming that 'data' is an array of objects with 'month' and 'total_income'
        const parsedData = data.map((entry) => ({
          month: parseInt(entry.month),
          total_income: parseFloat(entry.total_income), // Assuming it's a number
        }));

        setPieChartData(parsedData);
      } catch (err) {
        console.error(err.message);
      }
    }

    fetchPieChartData();
  }, [userId]);

  //----------------------------------------------------------------------

  //get children list ----------------------------------------------------
  const [childFeeData, setchildFeeData] = useState([]);

  useEffect(() => {
    async function childFeeList() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/driver/income/view/childrenfees/${userId}`
        );
        const data = await response.json();
        setchildFeeData(data);
        // console.log(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    childFeeList();
  }, [userId]);

  //drop down filter for the children list
  const [filterValue, setFilterValue] = useState("All");

  const filteredChildren =
    filterValue === "All"
      ? childFeeData
      : childFeeData.filter(
          (child) => child.last_payment_status === filterValue
        );
  //-------------------------------------------------------------

  //for display the current month name
  const currentDate = new Date();
  const currentMonthName = format(currentDate, "MMMM"); // 'MMMM' format gives you the full month name

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
          My Income
        </h1>
        <div className="flex justify-end w-full mb-4">
          <NavLink to="/driver/finance/deposits">
            <button className="flex justify-center w-56 h-10 mr-12 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
              <div className="flex mt-2 gap-3 font-semibold">
                Collected Ride Payments
              </div>
            </button>
          </NavLink>
        </div>
        {/* full box */}
        <div className="h-screen grid gap-3 grid-cols-5 mb-10">
          {/* left column */}
          <div className="col-span-3 grid grid-cols-2 grid-rows-2 gap-6 mt-3">
            {/* <div className="w-full grid grid-cols-3"> */}
            {/*Income box*/}

            <div className="w-[70%] ml-0 h-[200px]">
              <div className=" h-full rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                <div className=" h-[150px] w-full">
                  <h1 className="text-[24px] leading-[24px] font-semibold text-[#5a5c69] mt-[20px] mb-8">
                    Last Month Income
                  </h1>
                  <div className=" flex justify-center gap-32">
                    <div>
                      <h2 className=" text-orange text-[28px] leading-[17px] ml-[-14px] font-bold mb-3">
                        LKR {lastMonthIncome}.00
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end of Income box*/}
            {/* chart */}
            <div className="w-[130%] ml-[-100px] h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="total_income"
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  {/* <Tooltip
                    formatter={(value, name) => [value, "Total Income"]}
                  /> */}
                  <Tooltip content={<CustomTooltip />} />
                  {/* <Legend /> */}
                </PieChart>
              </ResponsiveContainer>
              <div className="text-center mt-3 text-lg">
                Last 6 months income
              </div>
            </div>
            {/* end of chart */}

            {/* <div className="w-[130%] ml-[-120px] h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="income" fill=" rgb(51 65 85)" />
                </BarChart>
              </ResponsiveContainer> */}
            {/* </div> */}

            {/* </div> */}

            {/* table */}
            <div className=" col-span-2 h-[400px] mt-[-100px] mb-4 ">
              <div>
                {/* <div className="float-right ">
                  <form action="">
                    <input
                      type="text"
                      placeholder="Search.."
                      className=" mt-1 overflow-auto w-40 mr-32  border border-slate-400 pl-2 rounded-md"
                    ></input>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-10 stroke-slate-500 absolute -mt-8 ml-32 hover:cursor-pointer"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </form>
                </div>
                <div className="float-right ">
                  <form action="">
                    <input
                      type="text"
                      placeholder="Filter here"
                      className=" mt-1 overflow-auto w-40 mr-8  border border-slate-400 pl-2 rounded-md "
                    ></input>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-10 stroke-slate-500 absolute -mt-8 ml-32 hover:cursor-pointer"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z  "
                      />
                    </svg>
                  </form>
                </div> */}
                {incomeDetails.length > 0 ? (
                  <div className="px-2">
                    <form action="">
                      <div className="flex items-center justify-between pr-10 pl-4">
                        <DatePicker
                          selected={fromDate}
                          onChange={(date) => setFromDate(date)}
                          placeholderText="From Date"
                          maxDate={new Date()} // This restricts dates in the future
                          className="mt-1 py-1 overflow-auto w-[260px] border border-slate-400 pl-2 rounded-md"
                        />
                        <DatePicker
                          selected={toDate}
                          onChange={(date) => setToDate(date)}
                          placeholderText="To Date"
                          maxDate={new Date()} // This restricts dates in the future
                          className="mt-1 py-1 overflow-auto w-[260px] border border-slate-400 pl-2 rounded-md"
                        />
                        <button
                          type="button"
                          onClick={resetTable}
                          className="ml-2 scale-125 text-gray-500 hover:text-red-500"
                        >
                          <RiRefreshLine size={20} />
                        </button>
                      </div>
                    </form>
                  </div>
                ) : null}

                <div className=" p-3 mt-2 h-[400px] overflow-y-auto ">
                  <table className="w-full border-separate border-spacing-y-2 border border-slate-50 ">
                    <thead className="border-y-4 border-white drop-shadow">
                      <tr className="bg-[#999999] text-white text-[18px] border-b-2 drop-shadow-md">
                        {/* <th className="px-3.5 py-1 w-30">Payment Id</th> */}
                        <th className="px-3.5 w-30">Date</th>
                        <th className="px-3.5 w-30">Amount</th>
                        <th className="px-3.5 w-30">Month</th>
                        <th className="px-3.5 w-30">More</th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredIncomeDetails.map((income) => (
                        <tr
                          key={income.income_id}
                          className="bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                        >
                          <td className="text-center p-3">
                            {formatDate(income.date)}
                          </td>
                          <td className="text-center">{income.amount}</td>
                          <td className="text-center">
                            {getMonthName(parseInt(income.month))}
                          </td>

                          <td className="text-center">view</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* left column */}
          {/* right column */}
          <div className="col-span-2 rounded-md h-[550px] ">
            <div className=" mt-8">
              <div className="h-8 mb-3 flex justify-center">
                <h1 className="text-xl font-bold ">
                  Payment Details - {currentMonthName}
                </h1>
              </div>
              <div className="mb-1 mt-1 flex justify-end mr-5">
                <select
                  className="px-2 py-[2px] rounded-md border border-gray"
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                  <option value="Not Paid">Not Paid</option>
                </select>
              </div>
              <div className=" px-3 mx-2 rounded-md h-[660px] overflow-y-auto">
                {filteredChildren.map((child, index) => (
                  <div key={index}>
                    {(() => {
                      switch (child.last_payment_status) {
                        case "Paid":
                          return (
                            <div className="rounded-[8px] bg-[#c8eac8] mb-3 mt-3  border-[1px] border-[#389438]  items-center justify-between px-[30px] py-1 cursor-pointer hover:shadow-lg transform hover:scale-[101%] transition duration-300 ease-out">
                              <div className="flex  justify-between w-full mb-1">
                                <div className="flex  justify-start gap-2 ">
                                  <h1 className="mt-1 text-sm">
                                    {child.child_name}
                                  </h1>
                                </div>
                                <div className="flex  justify-end gap-2 ">
                                  <h1 className="mt-1 text-[#428a42]">
                                    {child.last_payment_status}
                                  </h1>
                                </div>
                              </div>
                              <div className="text-slate-600 text-xs ">
                                {child.child_id}
                              </div>
                            </div>
                          );
                        case "Pending":
                          return (
                            <div className="rounded-[8px] bg-[#fff2cc] mb-3 mt-3  border-[1px] border-orange  items-center justify-between px-[30px] py-1 cursor-pointer hover:shadow-lg transform hover:scale-[101%] transition duration-300 ease-out">
                              <div className="flex  justify-between w-full mb-1">
                                <div className="flex  justify-start gap-2 ">
                                  <h1 className="mt-1 text-sm">
                                    {child.child_name}
                                  </h1>
                                </div>
                                <div className="flex  justify-end gap-2 ">
                                  <h1 className="mt-1 text-[#e67300]">
                                    {child.last_payment_status}
                                  </h1>
                                </div>
                              </div>
                              <div className="text-slate-600 text-xs">
                                {child.child_id}
                              </div>
                            </div>
                          );

                        case "Not Paid":
                          return (
                            <div className="rounded-[8px] bg-[#ffd9dc] mb-3 mt-3  border-[1px] border-[#df2020]  items-center justify-between px-[30px] py-1 cursor-pointer hover:shadow-lg transform hover:scale-[101%] transition duration-300 ease-out">
                              <div className="flex  justify-between w-full mb-1">
                                <div className="flex  justify-start gap-2 ">
                                  <h1 className="mt-1 text-sm">
                                    {child.child_name}
                                  </h1>
                                </div>
                                <div className="flex  justify-end gap-2 ">
                                  <h1 className="mt-1 text-[#ff0000]">
                                    {child.last_payment_status}
                                  </h1>
                                </div>
                              </div>
                              <div className="text-slate-600 text-xs ">
                                {child.child_id}
                              </div>
                            </div>
                          );
                        default:
                          break;
                      }
                    })()}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* end of right column */}
        </div>
        {/* end of full box */}
      </MainLayout>
    </div>
  );
}

export default Finance;
