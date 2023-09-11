import React, { useState, useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
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

function Employees() {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  const addEmp = () => {
    window.location.href = `/admin/addemployee`;
  };

  const handleClick = () => {
    window.location.href = `/admin/supportagent`;
  };
  const handleClickVC = () => {
    window.location.href = `/admin/VCoordinator`;
  };

  const [supAgent, setsupAgent] = useState([]);

  useEffect(() => {
    async function agentData() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/admin/employees/agent`
        );
        const data = await response.json();
        setsupAgent(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    agentData();
  });
  

  const [vehiCo, setvehiCo] = useState([]);

  useEffect(() => {
    async function vcData() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/admin/employees/vc`
        );
        const data = await response.json();
        setvehiCo(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    vcData();
  });

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">
          Employees
        </h1>

        {/* add employee button */}
        <div className="text-center ml-32 mr-32 mt-12">
          <div
            onClick={addEmp}
            className="flex float-right h-11 w-44 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-500 transition-transform ease-in-out"
          >
            <BsPlusCircleFill className="mt-1 ml-2 mr-2" />
            Add employee
          </div>
        </div>

        {/* filter and search button */}
        <div className="flex mt-16 ml-[40%]">
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

        {/*employees button container */}
        <div className="flex text-center ml-32 mt-4">
          {/* buttons */}
          <div
            onClick={() => updateToggle(1)}
            className={
              toggle === 1
                ? "h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer"
                : "h-11 w-44 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"
            }
          >
            Support Agent
          </div>
          <div
            onClick={() => updateToggle(2)}
            className={
              toggle === 2
                ? "ml-1 h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer"
                : "h-11 w-44 ml-1 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"
            }
          >
            Vehicle Coordinator
          </div>
        </div>

        {/* support agent table */}

        <div className={toggle === 1 ? "details" : "details hidden"}>
          <div className="ml-32 mr-32 shadow-md overflow-auto ">
            <table className="w-full text-center border-separate border-spacing-y-2 border border-slate-50 ">
              <thead className="border-y-4 border-white drop-shadow ">
                <tr className=" bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md ">
                  <th className="px-3.5 p-1 w-24 ">ID</th>
                  <th className="px-3.5 w-30">Name</th>
                  <th className="px-3.5 w-30">Email</th>
                  <th className="px-3.5 w-30">Address</th>
                  <th className="px-3.5 w-30">Contact</th>
                  <th className="px-3.5 w-30"></th>
                </tr>
              </thead>

              <tbody className="">
              {supAgent.map((agent) => (
                <tr
                  onClick={handleClick}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3">{agent.user_id}</td>
                  <td>{agent.user_name}</td>
                  <td>{agent.user_email}</td>
                  <td>{agent.address}</td>
                  <td>{agent.contact_number}</td>
                  <td>
                    <div className="flex ml-2 h-8 w-20 bg-orange rounded-md shadow-md">
                      <BsPencilFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                      <BsTrashFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                    </div>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* vehicle coordiator table */}

        <div className={toggle === 2 ? "details" : "details hidden"}>
          <div className="details ml-32 mr-32 shadow-md overflow-auto ">
            <table className="w-full text-center border-separate border-spacing-y-2 border border-slate-50 ">
              <thead className="border-y-4 border-white drop-shadow ">
                <tr className=" bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md ">
                  <th className="px-3.5 p-1 w-24 ">ID</th>
                  <th className="px-3.5 w-30">Name</th>
                  <th className="px-3.5 w-30">Email</th>
                  <th className="px-3.5 w-30">Address</th>
                  <th className="px-3.5 w-30">Contact</th>
                  <th className="px-3.5 w-30"></th>
                </tr>
              </thead>

              <tbody className="">
              {vehiCo.map((coordinator) => (
                <tr
                  onClick={handleClickVC}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3">{coordinator.user_id}</td>
                  <td>{coordinator.user_name}</td>
                  <td>{coordinator.user_email}</td>
                  <td>{coordinator.address}</td>
                  <td>{coordinator.contact_number}</td>
                  <td>
                    <div className="flex ml-2 h-8 w-20 bg-orange rounded-md shadow-md">
                      <BsPencilFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                      <BsTrashFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                    </div>
                  </td>
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

export default Employees;
