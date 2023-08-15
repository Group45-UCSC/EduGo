import React, { useState } from "react";
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

  const support = [
    {
      id: "001",
      name: "Ashan Dhanushka",
      email: "ashan@gmail.com",
      address: "No.87 main street, Piliyandala",
      contact: "0711234567"
    },
    {
      id: "002",
      name: "Sachintha Muthuhetti",
      email: "sachintha@gmail.com",
      address: "No.34/5 Mutuwal, Modara",
      contact: "0757676763"
    },
    {
      id: "003",
      name: "Nifas Rizwan",
      email: "nifas@gmail.com",
      address: "No.23/5, maley street, colombo",
      contact: "0710912873"
    },
    {
      id: "004",
      name: "Ridma Priyanjan",
      email: "ridma@gmail.com",
      address: "No.7 School lane, Wijerama",
      contact: "0778765432"
    },
    {
      id: "005",
      name: "Hiran Jayashanka",
      email: "hiran@gmail.com",
      address: "No.2 Akbar street, Malabe",
      contact: "0712342345"
    },
    {
      id: "006",
      name: "Nishantha Gamlath",
      email: "nishantha@gmail.com",
      address: "No.7 School Road, Raththanapitiya",
      contact: "0729874567"
    },
    {
      id: "007",
      name: "Pasindu Gayashan",
      email: "pasindu@gmail.com",
      address: "No.22 Good shed road, Kohuwala",
      contact: "0708765421"
    },
    {
      id: "008",
      name: "Gayan Anushka",
      email: "gayan@gmail.com",
      address: "No.22 main street, Meepe",
      contact: "0770987654"
    }
  ];

  const coordinator = [
    {
      id: "009",
      name: "Ashan Dhanushka",
      email: "ashan@gmail.com",
      address: "No.87 main street, Piliyandala",
      contact: "0711234567"
    },
    {
      id: "010",
      name: "Sachintha Muthuhetti",
      email: "sachintha@gmail.com",
      address: "No.34/5 Mutuwal, Modara",
      contact: "0757676763"
    },
    {
      id: "011",
      name: "Nifas Rizwan",
      email: "nifas@gmail.com",
      address: "No.23/5, maley street, colombo",
      contact: "0710912873"
    },
    {
      id: "012",
      name: "Ridma Priyanjan",
      email: "ridma@gmail.com",
      address: "No.7 School lane, Wijerama",
      contact: "0778765432"
    },
    {
      id: "013",
      name: "Hiran Jayashanka",
      email: "hiran@gmail.com",
      address: "No.2 Akbar street, Malabe",
      contact: "0712342345"
    },
    {
      id: "014",
      name: "Nishantha Gamlath",
      email: "nishantha@gmail.com",
      address: "No.7 School Road, Raththanapitiya",
      contact: "0729874567"
    },
    {
      id: "015",
      name: "Pasindu Gayashan",
      email: "pasindu@gmail.com",
      address: "No.22 Good shed road, Kohuwala",
      contact: "0708765421"
    },
    {
      id: "016",
      name: "Gayan Anushka",
      email: "gayan@gmail.com",
      address: "No.22 main street, Meepe",
      contact: "0770987654"
    }
  ];

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
              {support.map((item) => (
                <tr
                  onClick={handleClick}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3">{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.contact}</td>
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
              {coordinator.map((item) => (
                <tr
                  onClick={handleClickVC}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3">{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.contact}</td>
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
