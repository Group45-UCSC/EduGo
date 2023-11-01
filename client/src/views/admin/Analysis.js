import React, { useState, useEffect } from "react";
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


const sideNavBarLinks = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <FaBeer /> },
  { title: "Employees", path: "/admin/employees", icon: <FaBeer /> },
  { title: "Drivers", path: "/admin/drivers", icon: <FaBeer /> },
  { title: "School Rides", path: "/admin/rides", icon: <FaBeer /> },
  { title: "Children", path: "/admin/childrenlist", icon: <FaBeer /> },
  { title: "Finance", path: "/admin/finance", icon: <FaBeer /> },
];

function AdminAnalysis() {

  const [incExpdata, setIncExp] = useState([]);

  useEffect(() => {
    async function incomeExpense() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/admin/analysis/first`
        );
        const data = await response.json();
        setIncExp(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    incomeExpense();
  });

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
              data={incExpdata}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month_name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total_income" fill="#8884d8" />
              <Bar dataKey="total_expense" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* line chart container */}
        <div className="ml-16 mt-16 h-[600px] w-4/5">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={incExpdata}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month_name" />
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
