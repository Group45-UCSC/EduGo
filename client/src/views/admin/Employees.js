import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { BsPlusCircleFill } from "react-icons/bs";
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

        {/*employees button container */}
        <div className="flex text-center ml-32 mt-24">
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
                <tr
                  onClick={handleClick}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3"> 001</td>
                  <td>Ashan Dhanushka</td>
                  <td>ashan@gmail.com</td>
                  <td>No.87 main street, Piliyandala</td>
                  <td>0711234567</td>
                  <td>
                    <div className="flex ml-2 h-8 w-20 bg-orange rounded-md shadow-md">
                      <BsPencilFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                      <BsTrashFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                    </div>
                  </td>
                </tr>

                <tr
                  onClick={handleClick}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3"> 002</td>
                  <td>Sachintha Muthuhetti</td>
                  <td>sachintha@gmail.com</td>
                  <td>No.34/5 Mutuwal, Modara</td>
                  <td>0757676763</td>
                  <td>
                    <div className="flex ml-2 h-8 w-20 bg-orange rounded-md shadow-md">
                      <BsPencilFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                      <BsTrashFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                    </div>
                  </td>
                </tr>

                <tr
                  onClick={handleClick}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3"> 003</td>
                  <td>Nifas Rizwan</td>
                  <td>nifas@gmail.com</td>
                  <td>No.23/5, maley street, colombo</td>
                  <td>0710912873</td>
                  <td>
                    <div className="flex ml-2 h-8 w-20 bg-orange rounded-md shadow-md">
                      <BsPencilFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                      <BsTrashFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                    </div>
                  </td>
                </tr>

                <tr
                  onClick={handleClick}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3"> 004</td>
                  <td>Ridma Priyanjan</td>
                  <td>ridma@gmail.com</td>
                  <td>No.7 School lane, Wijerama</td>
                  <td>0778765432</td>
                  <td>
                    <div className="flex ml-2 h-8 w-20 bg-orange rounded-md shadow-md">
                      <BsPencilFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                      <BsTrashFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                    </div>
                  </td>
                </tr>

                <tr
                  onClick={handleClick}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3"> 005</td>
                  <td>Hiran Jayashanka</td>
                  <td>hiran@gmail.com</td>
                  <td>No.2 Akbar street, Malabe</td>
                  <td>0712342345</td>
                  <td>
                    <div className="flex ml-2 h-8 w-20 bg-orange rounded-md shadow-md">
                      <BsPencilFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                      <BsTrashFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                    </div>
                  </td>
                </tr>

                <tr
                  onClick={handleClick}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3"> 006</td>
                  <td>Nishantha Gamlath</td>
                  <td>nishantha@gmail.com</td>
                  <td>No.7 School Road, Raththanapitiya</td>
                  <td>0729874567</td>
                  <td>
                    <div className="flex ml-2 h-8 w-20 bg-orange rounded-md shadow-md">
                      <BsPencilFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                      <BsTrashFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                    </div>
                  </td>
                </tr>

                <tr
                  onClick={handleClick}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3"> 007</td>
                  <td>Pasindu Gayashan</td>
                  <td>pasindu@gmail.com</td>
                  <td>No.22 Good shed road, Kohuwala</td>
                  <td>0708765421</td>
                  <td>
                    <div className="flex ml-2 h-8 w-20 bg-orange rounded-md shadow-md">
                      <BsPencilFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                      <BsTrashFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                    </div>
                  </td>
                </tr>

                <tr
                  onClick={handleClick}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3"> 008</td>
                  <td>Gayan Anushka</td>
                  <td>gayan@gmail.com</td>
                  <td>No.22 main street, Meepe</td>
                  <td>0770987654</td>
                  <td>
                    <div className="flex ml-2 h-8 w-20 bg-orange rounded-md shadow-md">
                      <BsPencilFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                      <BsTrashFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                    </div>
                  </td>
                </tr>
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
                <tr
                  onClick={handleClickVC}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3"> 009</td>
                  <td>Ashan Dhanushka</td>
                  <td>ashan@gmail.com</td>
                  <td>No.87 main street, Piliyandala</td>
                  <td>0711234567</td>
                  <td>
                    <div className="flex ml-2 h-8 w-20 bg-orange rounded-md shadow-md">
                      <BsPencilFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                      <BsTrashFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                    </div>
                  </td>
                </tr>

                <tr
                  onClick={handleClickVC}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3"> 010</td>
                  <td>Sachintha Muthuhetti</td>
                  <td>sachintha@gmail.com</td>
                  <td>No.34/5 Mutuwal, Modara</td>
                  <td>0757676763</td>
                  <td>
                    <div className="flex ml-2 h-8 w-20 bg-orange rounded-md shadow-md">
                      <BsPencilFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                      <BsTrashFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                    </div>
                  </td>
                </tr>

                <tr
                  onClick={handleClickVC}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3"> 011</td>
                  <td>Nifas Rizwan</td>
                  <td>nifas@gmail.com</td>
                  <td>No.23/5, maley street, colombo</td>
                  <td>0710912873</td>
                  <td>
                    <div className="flex ml-2 h-8 w-20 bg-orange rounded-md shadow-md">
                      <BsPencilFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                      <BsTrashFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                    </div>
                  </td>
                </tr>

                <tr
                  onClick={handleClickVC}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3"> 012</td>
                  <td>Ridma Priyanjan</td>
                  <td>ridma@gmail.com</td>
                  <td>No.7 School lane, Wijerama</td>
                  <td>0778765432</td>
                  <td>
                    <div className="flex ml-2 h-8 w-20 bg-orange rounded-md shadow-md">
                      <BsPencilFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                      <BsTrashFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                    </div>
                  </td>
                </tr>

                <tr
                  onClick={handleClickVC}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3"> 013</td>
                  <td>Hiran Jayashanka</td>
                  <td>hiran@gmail.com</td>
                  <td>No.2 Akbar street, Malabe</td>
                  <td>0712342345</td>
                  <td>
                    <div className="flex ml-2 h-8 w-20 bg-orange rounded-md shadow-md">
                      <BsPencilFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                      <BsTrashFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                    </div>
                  </td>
                </tr>

                <tr
                  onClick={handleClickVC}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3"> 014</td>
                  <td>Nishantha Gamlath</td>
                  <td>nishantha@gmail.com</td>
                  <td>No.7 School Road, Raththanapitiya</td>
                  <td>0729874567</td>
                  <td>
                    <div className="flex ml-2 h-8 w-20 bg-orange rounded-md shadow-md">
                      <BsPencilFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                      <BsTrashFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                    </div>
                  </td>
                </tr>

                <tr
                  onClick={handleClickVC}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3"> 015</td>
                  <td>Pasindu Gayashan</td>
                  <td>pasindu@gmail.com</td>
                  <td>No.22 Good shed road, Kohuwala</td>
                  <td>0708765421</td>
                  <td>
                    <div className="flex ml-2 h-8 w-20 bg-orange rounded-md shadow-md">
                      <BsPencilFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                      <BsTrashFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                    </div>
                  </td>
                </tr>

                <tr
                  onClick={handleClickVC}
                  className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                >
                  <td className="text-center  p-3"> 016</td>
                  <td>Gayan Anushka</td>
                  <td>gayan@gmail.com</td>
                  <td>No.22 main street, Meepe</td>
                  <td>0770987654</td>
                  <td>
                    <div className="flex ml-2 h-8 w-20 bg-orange rounded-md shadow-md">
                      <BsPencilFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                      <BsTrashFill className="mt-2 ml-4 hover:scale-[110%] transition-transform ease-in-out" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Employees;
