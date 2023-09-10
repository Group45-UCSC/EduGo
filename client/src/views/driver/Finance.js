import React, { useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillCar } from "react-icons/ai";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
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

const data = [
  {
    name: 0,
    income: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 1,
    income: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 2,
    income: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 3,
    income: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 4,
    income: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 5,
    income: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 6,
    income: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const tabeldata = [
  {
    name: "pId005",
    payment: 35000,
    date: "2023/1/12",
    period: "2022 Nov/Dec",
  },
  {
    name: "pId018",
    payment: 46000,
    date: "2023/3/12",
    period: "2023 Jan/Feb",
  },
  {
    name: "pId025",
    payment: 29500,
    date: "2023/4/12",
    period: "2023 March",
  },
  {
    name: "pId032",
    payment: 23500,
    date: "2023/6/12",
    period: "2023 April/May",
  },
  {
    name: "pId041",
    payment: 24100,
    date: "2023/8/6",
    period: "2023 June",
  },
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

function Finance() {
  //userID
  const userId = localStorage.getItem("userId");

  //get last month total income
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

  const [filterValue, setFilterValue] = useState("All");

  const filteredChildren =
    filterValue === "All"
      ? childDetails
      : childDetails.filter((child) => child.paymentStatus === filterValue);

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

            <div className="w-[130%] ml-[-120px] h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="income" fill=" rgb(51 65 85)" />
                </BarChart>
              </ResponsiveContainer>
              {/* </div> */}
              {/* end of chart */}
            </div>

            {/* table */}
            <div className=" col-span-2 h-[400px] mt-[-100px] mb-4">
              <div>
                <div className="float-right ">
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
                </div>
                <table className="w-full border-separate border-spacing-y-2 border border-slate-50">
                  <thead className="border-y-4 border-white drop-shadow">
                    <tr className="bg-[#999999] text-white text-[18px] border-b-2 drop-shadow-md">
                      <th className="px-3.5 py-1 w-30">Payment Id</th>
                      <th className="px-3.5 w-30">Amount</th>
                      <th className="px-3.5 w-30">Date</th>
                      <th className="px-3.5 w-30">period</th>
                    </tr>
                  </thead>

                  <tbody>
                    {tabeldata.map((item) => (
                      <tr
                        key={item.id}
                        className="bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                      >
                        <td className="text-center p-3">{item.name}</td>
                        <td className="text-center">{item.payment}</td>
                        <td className="text-center">{item.date}</td>
                        <td className="text-center">{item.period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                      switch (child.paymentStatus) {
                        case "Paid":
                          return (
                            <div className="rounded-[8px] bg-[#c8eac8] mb-3 mt-3  border-[1px] border-[#389438]  items-center justify-between px-[30px] py-1 cursor-pointer hover:shadow-lg transform hover:scale-[101%] transition duration-300 ease-out">
                              <div className="flex  justify-between w-full mb-1">
                                <div className="flex  justify-start gap-2 ">
                                  <h1 className="mt-1 text-sm">{child.name}</h1>
                                </div>
                                <div className="flex  justify-end gap-2 ">
                                  <h1 className="mt-1 text-[#428a42]">
                                    {child.paymentStatus}
                                  </h1>
                                </div>
                              </div>
                              <div className="text-slate-600 text-xs ">
                                {child.id}
                              </div>
                            </div>
                          );
                        case "Pending":
                          return (
                            <div className="rounded-[8px] bg-[#fff2cc] mb-3 mt-3  border-[1px] border-orange  items-center justify-between px-[30px] py-1 cursor-pointer hover:shadow-lg transform hover:scale-[101%] transition duration-300 ease-out">
                              <div className="flex  justify-between w-full mb-1">
                                <div className="flex  justify-start gap-2 ">
                                  <h1 className="mt-1 text-sm">{child.name}</h1>
                                </div>
                                <div className="flex  justify-end gap-2 ">
                                  <h1 className="mt-1 text-[#e67300]">
                                    {child.paymentStatus}
                                  </h1>
                                </div>
                              </div>
                              <div className="text-slate-600 text-xs">
                                {child.id}
                              </div>
                            </div>
                          );

                        case "Not Paid":
                          return (
                            <div className="rounded-[8px] bg-[#ffd9dc] mb-3 mt-3  border-[1px] border-[#df2020]  items-center justify-between px-[30px] py-1 cursor-pointer hover:shadow-lg transform hover:scale-[101%] transition duration-300 ease-out">
                              <div className="flex  justify-between w-full mb-1">
                                <div className="flex  justify-start gap-2 ">
                                  <h1 className="mt-1 text-sm">{child.name}</h1>
                                </div>
                                <div className="flex  justify-end gap-2 ">
                                  <h1 className="mt-1 text-[#ff0000]">
                                    {child.paymentStatus}
                                  </h1>
                                </div>
                              </div>
                              <div className="text-slate-600 text-xs ">
                                {child.id}
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
