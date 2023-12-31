import React, { useState, useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaHome, FaBus, FaUsers } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiOutlineChat } from "react-icons/hi";
import { MdOutlinePending, MdDoneAll } from "react-icons/md";
import { GoReport } from "react-icons/go";

import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  // CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

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

function SupAgentDashboardPg() {
  const [statusCounts, setStatusCounts] = useState({
    pendingCount: 0,
    completedCount: 0,
  });
  const [newComplaintCount, setNewComplaintCount] = useState(0);
  const [chatCount, setChatCount] = useState(0);

  useEffect(() => {
    async function fetchComplaintStatusCounts() {
      try {
        const response = await fetch(
          "http://localhost:5000/edugo/supAgent/supagentdashboardpg/complaintStatus"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const pendingCount = parseInt(data.pendingcount, 10);
        const completedCount = parseInt(data.completedcount, 10);
        setStatusCounts({ pendingCount, completedCount });
      } catch (error) {
        console.error("Error fetching complaint status counts:", error);
      }
    }

    fetchComplaintStatusCounts();
  });
  useEffect(() => {
    async function fetchNewComplaintCount() {
      try {
        const response = await fetch(
          "http://localhost:5000/edugo/supAgent/supagentdashboardpg/newcomplaintStatus"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const newCount = parseInt(data[0].newcount, 10);

        setNewComplaintCount(newCount);
      } catch (error) {
        console.error("Error fetching new complaint count:", error);
      }
    }

    fetchNewComplaintCount();
  }, []);

  useEffect(() => {
    async function fetchChatCount() {
      try {
        const response = await fetch(
          "http://localhost:5000/edugo/supAgent/supagentdashboardpg/chatCount"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const newCount = parseInt(data[0].user_count, 10);

        setChatCount(newCount);
      } catch (error) {
        console.error("Error fetching new complaint count:", error);
      }
    }

    fetchChatCount();
  }, []);

  const [selectedPeriod, setSelectedPeriod] = useState("This Week");
  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    // Perform any additional actions based on the selected period
  };
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-1 flex flex-col gap-5">
            <div className="">
              <Link to="/sup_agent/complaints">
                <div className="h-[120px] w-full rounded-[8px] bg-[#EEEEEE] border-l-8 border-[#22c55e]  flex items-center justify-between px-[2rem] cursor-pointer hover:shadow-lg transform hover:scale-[101%] trasition duration-300 ease-out shadow-md">
                  <GoReport className="text-5xl text-[#22c55e]" />
                  <div className="text-2xl flex-col">
                    <strong>New Complaints</strong>{" "}
                    <p className="ml-[2rem] mt-3 text-2xl font-semibold">
                      {newComplaintCount}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-span-1">
              <Link to="">
                <div className="h-[120px] w-full rounded-[8px] bg-[#EEEEEE] border-l-8 border-orange  flex items-center justify-between  px-[2rem] cursor-pointer hover:shadow-lg transform hover:scale-[101%] trasition duration-300 ease-out shadow-md">
                  <MdOutlinePending className="text-5xl text-orange" />
                  <div className="text-2xl flex-col">
                    <strong>Pending...</strong>{" "}
                    <p className="ml-[2rem] mt-3 text-2xl font-semibold">
                      {statusCounts.pendingCount}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-span-1">
              <Link to="">
                <div className="h-[120px] w-full rounded-[8px] bg-[#EEEEEE] border-l-8 border-[#0369a1] flex items-center justify-between  px-[2rem] cursor-pointer hover:shadow-lg transform hover:scale-[101%] trasition duration-300 ease-out shadow-md">
                  <MdDoneAll className="text-5xl text-[#0369a1]" />
                  <div className="text-2xl flex-col">
                    <strong>Completed Complaints</strong>{" "}
                    <p className="ml-[2rem] mt-3 text-2xl font-semibold">
                      {statusCounts.completedCount}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5">
          <div className="col-span-1">
            <Link to="/sup_agent/chat">
              <div className="h-[100px] w-full rounded-[8px] bg-[#EEEEEE] border-l-8 border-[#e11d48]  flex items-center justify-between gap-5 px-[2rem] cursor-pointer hover:shadow-lg transform hover:scale-[101%] trasition duration-300 ease-out shadow-md">
                <HiOutlineChat className="text-5xl text-[#e11d48]" />
                <div className="text-xl flex-col">
                  <strong>All Chats</strong>{" "}
                  <p className="ml-[2rem] mt-3 text-2xl font-semibold">
                    {chatCount}
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-span-1">
            <Link to="/sup_agent/chat">
              <div className="h-[100px] w-full rounded-[8px] bg-[#EEEEEE] border-l-8 border-gray  flex items-center justify-between gap-5 px-[2rem] cursor-pointer hover:shadow-lg transform hover:scale-[101%] trasition duration-300 ease-out shadow-md">
                <HiOutlineChat className="text-5xl text-gray" />
                <div className="text-xl flex-col">
                  <strong>Unread Chats</strong>{" "}
                  <p className="ml-[2rem] mt-3 text-2xl font-semibold"></p>
                </div>
              </div>
            </Link>
          </div>
          </div>

          <div className="">
            {/* <div className="col-span-1 "></div> */}
            <div className="col-span-2 flex flex-col gap-[5rem]">
              <div className="col-span-1 bg-[#1d1a49] pt-5 rounded-xl mb-8">
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
                  width={520}
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
          </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default SupAgentDashboardPg;
