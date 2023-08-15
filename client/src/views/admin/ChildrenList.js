import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";
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

function AdminChildrenList() {

  const child = [
    {
      id: "001",
      name: "Sumudu Wijerathna",
      school: "Arawwala Central College",
      address: "No.23/4, Samagi Mawatha, Borella",
      contact: "0711234567",
      v_no: "NA - 1111"
    },
    {
      id: "002",
      name: "Buddhika Sachintha",
      school: "Kadawatha Parakrama College",
      address: "No.18 Good shed road, Pannipitiya",
      contact: "0768956423",
      v_no: "NA - 2222"
    },
    {
      id: "003",
      name: "Pawan Sachithra",
      school: "D.S Senanayaka college",
      address: "No.10, Sadaham Mawatha, Wellampitiya",
      contact: "0762222223",
      v_no: "NA - 3333"
    },
    {
      id: "004",
      name: "Kasuni Vimansa",
      school: "Devi Balika Vidyalaya",
      address: "No.12 main street, Piliyandala",
      contact: "0711936423",
      v_no: "NA - 4444"
    },
    {
      id: "005",
      name: "Harshi Sakunika",
      school: "Anula Vidyalaya, Nugegoda",
      address: "No.23/1,  Hokandara",
      contact: "0768123456",
      v_no: "NA - 5555"
    },
    {
      id: "006",
      name: "Kasun Jayalath",
      school: "Colombo Royal College",
      address: "N0.45/3, Mutuwal, Modara",
      contact: "0768123456",
      v_no: "NA - 6666"
    },
    {
      id: "007",
      name: "Rajith Hashan",
      school: "Pannipitiya Dharmapala College",
      address: "No.87 main street, Piliyandala",
      contact: "0712318987",
      v_no: "NA - 7777"
    }
  ];

  const parent = [
    {
      id: "008",
      name: "Gamini Wijerathna",
      email: "gamini@gmail.com",
      address: "No.23/4, Samagi Mawatha, Borella",
      contact: "0711234567",
      children: "1"
    },
    {
      id: "002",
      name: "Sidath Jayantha",
      email: "sidath@gmail.com",
      address: "No.18 Good shed road, Pannipitiya",
      contact: "0768956423",
      children: "2"
    },
    {
      id: "010",
      name: "Pathum Udara",
      email: "pathum@gmail.com",
      address: "No.10, Sadaham Mawatha, Wellampitiya",
      contact: "0762222223",
      children: "1"
    },
    {
      id: "011",
      name: "Isuri Vimansa",
      email: "isuri@gmail.com",
      address: "No.12 main street, Piliyandala",
      contact: "0711936423",
      children: "1"
    },
    {
      id: "012",
      name: "Shantha Bandara",
      email: "shantha@gmail.com",
      address: "No.23/1,  Hokandara",
      contact: "0768123456",
      children: "3"
    },
    {
      id: "013",
      name: "Pradeep Jayalath",
      email: "pradeep@gmail.com",
      address: "N0.45/3, Mutuwal, Modara",
      contact: "0768123456",
      children: "2"
    },
    {
      id: "014",
      name: "Pramuka Darshana",
      email: "pramuka@gmail.com",
      address: "No.87 main street, Piliyandala",
      contact: "0712318987",
      children: "1"
    }
  ];


  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  const handleClick = () => {
    window.location.href = `/admin/children`;
  };
  const handleClickP = () => {
    window.location.href = `/admin/parentsinfo`;
  };
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">Children and Parents</h1>

        {/* filter and search button */}
        <div className="flex mt-8 ml-[57%]">
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
          <div onClick={() => updateToggle(1)} className={toggle === 1 ? "h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer" : "h-11 w-44 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"}>Children</div>
          <div onClick={() => updateToggle(2)} className={toggle === 2 ? "ml-1 h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer" : "h-11 w-44 ml-1 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"}>Parents</div>
        </div>

        {/* children table container */}
        <div className={toggle === 1 ? "details" : "details hidden"}>

          <div className='ml-32 mr-32 shadow-md overflow-auto '>
            <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
              <thead className='border-y-4 border-white drop-shadow '>
                <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
                  <th className='px-3.5 p-1 w-24 '>ID</th>
                  <th className='px-3.5 w-30'>Name</th>
                  <th className='px-3.5 w-30'>School</th>
                  <th className='px-3.5 w-30'>Address</th>
                  <th className='px-3.5 w-30'>Contact</th>
                  <th className='px-3.5 w-30'>Vehicle No</th>
                </tr>
              </thead>

              <tbody className=''>
                {child.map((item) => (
                  <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.school}</td>
                    <td>{item.address}</td>
                    <td>{item.contact}</td>
                    <td>{item.v_no}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* parent table container */}
        <div className={toggle === 2 ? "details" : "details hidden"}>

          <div className='ml-32 mr-32 shadow-md overflow-auto '>
            <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
              <thead className='border-y-4 border-white drop-shadow '>
                <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
                  <th className='px-3.5 p-1 w-24 '>ID</th>
                  <th className='px-3.5 w-30'>Name</th>
                  <th className='px-3.5 w-30'>Email</th>
                  <th className='px-3.5 w-30'>Address</th>
                  <th className='px-3.5 w-30'>Contact</th>
                  <th className='px-3.5 w-30'>Children</th>
                </tr>
              </thead>

              <tbody className=''>
                {parent.map((item) => (
                  <tr onClick={handleClickP} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.contact}</td>
                    <td>{item.children}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>


      </MainLayout>
    </div>
  )
}

export default AdminChildrenList