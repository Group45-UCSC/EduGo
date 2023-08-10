import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaHome, FaBus, FaUsers } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiOutlineChat } from "react-icons/hi";
import {
  LineChart,
  Line,
  // CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";
// import Chat from "../../components/chat/chat";
const sideNavBarLinks = [
  { title: "Dashboard", path: "/sup_agent/dashboard", icon: <FaHome /> },
  { title: "Chat", path: "/sup_agent/chat", icon: <BsFillChatDotsFill /> },
  { title: "Parents", path: "/sup_agent/parents", icon: <FaUsers /> },
  { title: "Drivers", path: "/sup_agent/drivers", icon: <FaBus /> },
];
const data = [
  { day: "S", chats: 50 },
  { day: "M", chats: 95 },
  { day: "T", chats: 145 },
  { day: "W", chats: 110 },
  { day: "T", chats: 210 },
  { day: "F", chats: 190 },
  { day: "S", chats: 210 },
];
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#10b981] rounded-lg w-[3rem] p-[5px] flex justify-center items-center">
        <p className="text-white text-xl font-semibold ">{data.chats}</p>
      </div>
    );
  }
  return null;
};
const data1 = [
  { name: "Category A", value: Math.random() * 100 },
  { name: "Category B", value: Math.random() * 100 },
  { name: "Category C", value: Math.random() * 100 },
  { name: "Category D", value: Math.random() * 100 },
];
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

function SupAgentDashboardPg() {
  const [selectedPeriod, setSelectedPeriod] = useState("This Week");

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    // Perform any additional actions based on the selected period
  };
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="grid grid-cols-5 gap-2">
          <div className="col-span-3 flex flex-col gap-[5rem]">
            <div className="grid-cols-3  flex flex-row gap-5">
              <div className="h-[100px] w-full rounded-[8px] bg-[#EEEEEE] border-l-8 border-gray pl-4 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[101%] trasition duration-300 ease-out shadow-md">
                <HiOutlineChat className="text-5xl text-orange" />
                <div className="text-xl flex-col">
                  <strong>Chat Queue</strong>{" "}
                  <p className="ml-[2rem] mt-3 text-2xl font-semibold">6</p>
                </div>
              </div>
              <div className="h-[100px] w-full rounded-[8px] bg-[#EEEEEE] border-l-8 border-gray pl-6 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[101%] trasition duration-300 ease-out shadow-md">
                <HiOutlineChat className="text-5xl text-gray" />
                <div className="text-xl flex-col">
                  <strong>Missed Chats</strong>{" "}
                  <p className="ml-[2rem] mt-3 text-2xl font-semibold">12</p>
                </div>
              </div>
              <div className="h-[100px] w-full rounded-[8px] bg-[#EEEEEE] border-l-8 border-orange pl-6 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[101%] trasition duration-300 ease-out shadow-md">
                <HiOutlineChat className="text-5xl text-orange" />
                <div className="text-xl flex-col">
                  <strong>Chat Queue</strong>{" "}
                  <p className="ml-[2rem] mt-3 text-2xl font-semibold">6</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 bg-[#1d1a49] pt-5 rounded-xl mb-8">
              <div className="flex flex-row">
                <div className="pl-8 pb-5">
                  <p className="text-white text-xl font-semibold  pt-3">
                    {selectedPeriod}
                  </p>
                  <p className="text-[#94a3b8] text-sm ">Chat Volume</p>
                </div>
                <div className="ml-auto flex justify-end pr-5">
                  <select
                    className="text-white bg-[#1d1a49] border-none outline-none cursor-pointer"
                    value={selectedPeriod}
                    onChange={(e) => handlePeriodChange(e.target.value)}
                  >
                    <option value="This Week">This Week</option>
                    <option value="Last Week">Last Week</option>
                    <option value="Last Month">Last Month</option>
                  </select>
                </div>
              </div>
              <LineChart
                width={600}
                height={275}
                data={data}
                margin={{ top: 5, right: 40, left: 0, bottom: 5 }}
              >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="day" stroke="white" />
                <YAxis stroke="white" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line
                  type="natural"
                  dataKey="chats"
                  stroke="#82ca9d"
                  strokeWidth={2}
                />
              </LineChart>
            </div>
          </div>
          <div className="col-span-2 bg-[#fb923c] w-full h-1/2 rounded-xl flex justify-center items-center">
         
            <PieChart width={400} height={400}>
              <Pie
                data={data1}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label={(entry) => entry.name}
              >
                {data1.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default SupAgentDashboardPg;
