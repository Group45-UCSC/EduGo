import React, { useState, useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
// import { AiOutlineSearch } from "react-icons/ai";
// import { BiFilterAlt } from "react-icons/bi";
import { AiFillDashboard } from "react-icons/ai";
import { BsCoin } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <AiFillDashboard /> },
  { title: "Employees", path: "/admin/employees", icon: <FaUserGroup /> },
  { title: "Drivers & Vehicles", path: "/admin/drivers", icon: <BsFillCarFrontFill /> },
  { title: "School Rides", path: "/admin/rides", icon: <FaShippingFast /> },
  { title: "Children & Parents", path: "/admin/childrenlist", icon: <FaChild /> },
  { title: "Finance", path: "/admin/finance", icon: <BsCoin /> },
];

function AdminChildrenList() {

  const [child, setChild] = useState([]);

  useEffect(() => {
    async function childList() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/admin/childrenlist/children`
        );
        const data = await response.json();
        setChild(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    childList();
  });

  const [parent, setParent] = useState([]);

  useEffect(() => {
    async function parentList() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/admin/childrenlist/parent`
        );
        const data = await response.json();
        setParent(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    parentList();
  });


  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }
  
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">Children and Parents</h1>

        {/* filter and search button */}
        {/* <div className="flex mt-8 ml-[57%]">
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
        </div> */}

        {/*employees button container */}
        <div className="flex text-center ml-32 mt-12">

          {/* buttons */}
          <div onClick={() => updateToggle(1)} className={toggle === 1 ? "h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer" : "h-11 w-44 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"}>Children</div>
          <div onClick={() => updateToggle(2)} className={toggle === 2 ? "ml-1 h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer" : "h-11 w-44 ml-1 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"}>Parents</div>
        </div>

        {/* children table container */}
        <div className={toggle === 1 ? "details" : "details hidden"}>

          <div className='ml-32 mr-32 mb-64 shadow-md overflow-auto '>
            <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
              <thead className='border-y-4 border-white drop-shadow '>
                <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
                  <th className='px-3.5 p-1 w-24 '>ID</th>
                  <th className='px-3.5 w-30'>Name</th>
                  <th className='px-3.5 w-30'>School</th>
                  <th className='px-3.5 w-30'>Address</th>
                  <th className='px-3.5 w-30'>Contact</th>
                  <th className='px-3.5 w-30'>Vehicle No</th>
                  <th className='px-3.5 w-30'> </th>
                </tr>
              </thead>

              <tbody className=''>
                {child.map((item) => (
                  <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'>{item.child_id}</td>
                    <td>{item.child_name}</td>
                    <td>{item.school_name}</td>
                    <td>{item.address}</td>
                    <td>{item.contact_number}</td>
                    <td>{item.vehicle_no}</td>

                    <NavLink
                  to={`/admin/children/${
                    item.child_id
                  }?data=${encodeURIComponent(
                    JSON.stringify(item)
                  )}`}
                >
                  <td><button className="bg-amber-600 h-8 w-16 rounded-md hover:bg-amber-400">View</button></td>
                  </NavLink>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* parent table container */}
        <div className={toggle === 2 ? "details" : "details hidden"}>

          <div className='ml-32 mr-32 mb-48 shadow-md overflow-auto '>
            <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
              <thead className='border-y-4 border-white drop-shadow '>
                <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
                  <th className='px-3.5 p-1 w-24 '>ID</th>
                  <th className='px-3.5 w-30'>Name</th>
                  <th className='px-3.5 w-30'>Email</th>
                  <th className='px-3.5 w-30'>Address</th>
                  <th className='px-3.5 w-30'>Contact</th>
                  <th className='px-3.5 w-30'>Children</th>
                  <th className='px-3.5 w-30'> </th>
                </tr>
              </thead>

              <tbody className=''>
                {parent.map((item) => (
                  <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'>{item.user_id}</td>
                    <td>{item.user_name}</td>
                    <td>{item.user_email}</td>
                    <td>{item.address}</td>
                    <td>{item.contact_number}</td>
                    <td>{item.num_of_registered_children}</td>

                    <NavLink
                  to={`/admin/parentsinfo/${
                    item.user_id
                  }?data=${encodeURIComponent(
                    JSON.stringify(item)
                  )}`}
                >
                  <td><button className="bg-amber-600 h-8 w-16 rounded-md hover:bg-amber-400">View</button></td>
                  </NavLink>
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