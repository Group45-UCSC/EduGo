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

function Drivers() {

  const dr = [
    {
      id: "001",
      name: "Ashan Dhanushka",
      address: "No.87 main street, Piliyandala",
      v_no: "PI - 1111"
    },
    {
      id: "002",
      name: "Sachintha Muthuhetti",
      address: "No.34/5 Mutuwal, Modara",
      v_no: "PX - 2222"
    },
    {
      id: "003",
      name: "ifas Rizwan",
      address: "No.23/5, maley street, colombo",
      v_no: "PI - 3333"
    },
    {
      id: "004",
      name: "Ridma Priyanjan",
      address: "No.7 School lane, Wijerama",
      v_no: "PX - 4444"
    },
    {
      id: "005",
      name: "Hiran Jayashanka",
      address: "No.2 Akbar street, Malabe",
      v_no: "PI - 5555"
    },
    {
      id: "006",
      name: "Nishantha Gamlath",
      address: "No.7 School Road, Raththanapitiya",
      v_no: "PI - 6666"
    },
    {
      id: "007",
      name: "Pasindu Gayashan",
      address: "No.22 Good shed road, Kohuwala",
      v_no: "PX - 7777"
    },
    {
      id: "008",
      name: "Gayan Anushka",
      address: "No.22 main street, Meepe",
      v_no: "PI - 8888"
    }
  ];

  const vh = [
    {
      id: "001",
      v_no: "PI - 9999",
      name: "Ashan Dhanushka",
      contact: "0711234567",
      address: "No.87 main street, Piliyandala" 
    },
    {
      id: "002",
      v_no: "PI - 1010",
      name: "Sachintha Muthuhetti",
      contact: "0757676763",
      address: "No.34/5 Mutuwal, Modara" 
    },
    {
      id: "003",
      v_no: "PX - 1111",
      name: "Nifas Rizwan",
      contact: "0710912873",
      address: "No.23/5, maley street, colombo" 
    },
    {
      id: "004",
      v_no: "PX - 1212",
      name: "Ridma Priyanjan",
      contact: "0778765432",
      address: "No.7 School lane, Wijerama" 
    },
    {
      id: "005",
      v_no: "PI - 1313",
      name: "Hiran Jayashanka",
      contact: "0712342345",
      address: "No.2 Akbar street, Malabe" 
    },
    {
      id: "006",
      v_no: "PI - 1414",
      name: "Nishantha Gamlath",
      contact: "0729874567",
      address: "No.7 School Road, Raththanapitiya" 
    },
    {
      id: "007",
      v_no: "PX - 1515",
      name: "Pasindu Gayashan",
      contact: "0708765421",
      address: "No.22 Good shed road, Kohuwala" 
    },
    {
      id: "008",
      v_no: "PI - 1616",
      name: "Gayan Anushka",
      contact: "0770987654",
      address: "No.22 main street, Meepe" 
    }
  ];

  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  const handleClickD = () => {
    window.location.href = `/admin/driverinfo`;
  };
  const handleClickV = () => {
    window.location.href = `/admin/vehicleinfo`;
  };

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">Drivers and Vehicles</h1>


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
          <div onClick={() => updateToggle(1)} className={toggle === 1 ? "h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer" : "h-11 w-44 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"}>Vehicles</div>
          <div onClick={() => updateToggle(2)} className={toggle === 2 ? "ml-1 h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer" : "h-11 w-44 ml-1 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"}>Drivers</div>
        </div>

        {/* vehicle table */}

        <div className={toggle === 1 ? "details" : "details hidden"}>

          <div className='details ml-32 mr-32 shadow-md overflow-auto '>
            <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
              <thead className='border-y-4 border-white drop-shadow '>
                <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
                  <th className='px-3.5 p-1 w-24 '>ID</th>
                  <th className='px-3.5 w-30'>License Plate</th>
                  <th className='px-3.5 w-30'>Driver's Name</th>
                  <th className='px-3.5 w-30'>Contact</th>
                  <th className='px-3.5 w-30'>Start Location</th>
                </tr>
              </thead>

              <tbody className=''>
                {vh.map((item) => (
                <tr onClick={handleClickV} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3'>{item.id}</td>
                  <td>{item.v_no}</td>
                  <td>{item.name}</td>
                  <td>{item.contact}</td>
                  <td>{item.address}</td>
                </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>


        {/* drivers table */}

        <div className={toggle === 2 ? "details" : "details hidden"}>

          <div className='ml-32 mr-32 shadow-md overflow-auto '>
            <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
              <thead className='border-y-4 border-white drop-shadow '>
                <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
                  <th className='px-3.5 p-1 w-24 '>ID</th>
                  <th className='px-3.5 w-30'>Name</th>
                  <th className='px-3.5 w-30'>Address</th>
                  <th className='px-3.5 w-30'>Vehicle No</th>
                </tr>
              </thead>

              <tbody className=''>
                {dr.map((item) => (
                <tr onClick={handleClickD} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3'>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.v_no}</td>
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

export default Drivers;
