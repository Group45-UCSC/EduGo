import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  LineChart,
  Line,
} from "recharts";

const data = [
  {
    name: "February",
    income: 5000000,
    expense: 3000000,
    profit: 2000000,
  },
  {
    name: "March",
    income: 4000000,
    expense: 2900000,
    profit: 1100000,
  },
  {
    name: "April",
    income: 5000000,
    expense: 3700000,
    profit: 1300000,
  },
  {
    name: "May",
    income: 4000000,
    expense: 2500000,
    profit: 1500000,
  },
  {
    name: "June",
    income: 4500000,
    expense: 2900000,
    profit: 1600000,
  },
  {
    name: "July",
    income: 5000000,
    expense: 2800000,
    profit: 2200000,
  },
];

const sideNavBarLinks = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <FaBeer /> },
  { title: "Employees", path: "/admin/employees", icon: <FaBeer /> },
  { title: "Drivers", path: "/admin/drivers", icon: <FaBeer /> },
  { title: "School Rides", path: "/admin/rides", icon: <FaBeer /> },
  { title: "Children", path: "/admin/childrenlist", icon: <FaBeer /> },
  { title: "Finance", path: "/admin/finance", icon: <FaBeer /> },
];

function AdminAnalysis() {
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">
          Analytics
        </h1>

        {/* bar graph container */}
        <div className="ml-16 mt-8 h-[600px] w-4/5">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#8884d8" />
              <Bar dataKey="expense" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* line chart container */}
        <div className="ml-16 mt-16 h-[600px] w-4/5">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="profit"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </MainLayout>
    </div>
  );
}

export default AdminAnalysis;
