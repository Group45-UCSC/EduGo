import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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
    name: "R.B.S. Udayanga",
    payment: 3500,
    date: "2023/7/12",
    period: 3
  },
  {
    name: "R.B.S. Udayanga",
    payment: 3600,
    date: "2023/7/12",
    period: 3
  },
  {
    name: "R.B.S. Udayanga",
    payment: 3500,
    date: "2023/7/12",
    period: 3
  },
  {
    name: "R.B.S. Udayanga",
    payment: 3500,
    date: "2023/7/12",
    period: 3
  },
  {
    name: "R.B.S. Udayanga",
    payment: 3500,
    date: "2023/7/12",
    period: 3
  },
];
const sideNavBarLinks = [
  { title: "Dashboard", path: "/driver/dashboard", icon: <FaBeer /> },
  { title: "School Ride", path: "/driver/ride", icon: <FaBeer /> },
  { title: "Finance", path: "/driver/finance", icon: <FaBeer /> },
  { title: "Support", path: "/driver/support", icon: <FaBeer /> },
  { title: "Feedback", path: "/driver/feedback", icon: <FaBeer /> },
];

function Finance() {
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="pt-[25px] px-[25px] ">
          <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
            My Income
          </h1>
          <div className="flex justify-end w-5/6 ml-44 mb-4">
              <button
                className="flex justify-center w-56 h-10 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                // onClick={() => {
                //   setModalOpen(true);
                // }}
              >
                <div className="flex mt-2 gap-3 font-semibold">
                  <AiOutlineFileAdd className="text-[25px]" />
                  Add Payment
                </div>
              </button>
            </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-3">
            <div className=" h-[200px]">
              {/* ----------Income box-------------- */}
              <div className=" w-full h-full rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                <div className=" h-[150px] w-full">
                  <h1 className="text-[24px] leading-[24px] font-semibold text-[#5a5c69] mt-[20px] mb-8">
                    Last Month Income
                  </h1>
                  <div className=" flex justify-center gap-32">
                    <div>
                      <h2 className=" text-orange text-[38px] leading-[17px] font-bold mb-3">
                        LKR 3400
                      </h2>

                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[200px]">
              {/* chart */}
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="income" fill=" rgb(51 65 85)" />

                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className=" col-span-2 h-[400px] mt-[-100px] mb-4">
              <div>
                <div className='float-right '>
                  <form action=''>
                    <input type="text" placeholder='Search..' className=' mt-1 overflow-auto w-40 mr-32  border border-slate-400 pl-2 rounded-md'>
                    </input>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-10 stroke-slate-500 absolute -mt-8 ml-32 hover:cursor-pointer">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </form>
                </div>
                <div className='float-right '>
                  <form action=''>
                    <input type="text" placeholder='Filter here' className=' mt-1 overflow-auto w-40 mr-8  border border-slate-400 pl-2 rounded-md '>
                    </input>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-10 stroke-slate-500 absolute -mt-8 ml-32 hover:cursor-pointer">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z  " />
                    </svg>
                  </form>
                </div>
                <table className="w-full border-separate border-spacing-y-2 border border-slate-50">
                  <thead className="border-y-4 border-white drop-shadow">
                    <tr className="bg-[#999999] text-white text-[18px] border-b-2 drop-shadow-md">
                      <th className="px-3.5 py-1 w-30">Child name</th>
                      <th className="px-3.5 w-30">payment</th>
                      <th className="px-3.5 w-30">Date</th>
                      <th className="px-3.5 w-30">For Period</th>

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
        </div>

      </MainLayout>
    </div>
  );
}

export default Finance;
