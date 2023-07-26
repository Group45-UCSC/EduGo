import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <FaBeer /> },
  { title: "Employees", path: "/admin/employees", icon: <FaBeer /> },
  { title: "Drivers", path: "/admin/drivers", icon: <FaBeer /> },
  { title: "School Rides", path: "/admin/rides", icon: <FaBeer /> },
  { title: "Children", path: "/admin/childrenlist", icon: <FaBeer /> },
  { title: "Finance", path: "/admin/finance", icon: <FaBeer /> },
];

function AdminDashboardPg() {
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>

      <div className='font-bold ml-12 mt-8 text-2xl'>Dashboard</div>
          <div className='flex'>

          {/* card */}
          <div className='cardHolder h-28 w-60 rounded-md shadow-md ml-12 mt-8 flex cursor-pointer hover:scale-105 transition-transform ease-in-out' style={{backgroundColor:'#EEEEEE'}}>
              
              {/* orange div */}
              <div className='flex w-2 rounded-s-lg' style={{backgroundColor:'#FF9900'}}></div>
              
              {/* title and icon container */}
              <div className='flex flex-col'>
                  <div className='flex'>
                      <div className='w-24 ml-4 mt-2 h-16 font-bold'>Total Vehicles</div>
                      <div className='ml-16 mt-4 w-8 h-8'><FaBusAlt className='h-6 w-6' /></div>
                  </div>
                  <span className='font-bold ml-24 text-xl'>34</span>
              </div>
          </div>

          {/* card */}
          <div className='cardHolder h-28 w-60 rounded-md shadow-md ml-12 mt-8 flex cursor-pointer hover:scale-105 transition-transform ease-in-out' style={{backgroundColor:'#EEEEEE'}}>
              
              {/* orange div */}
              <div className='flex w-2 rounded-s-lg' style={{backgroundColor:'#FF9900'}}></div>
              
              {/* title and icon container */}
              <div className='flex flex-col'>
                  <div className='flex'>
                      <div className='w-24 ml-4 mt-2 h-16 font-bold'>Total Children</div>
                      <div className='ml-16 mt-4 w-8 h-8'><FaChild className='h-6 w-6' /></div>
                  </div>
                  <span className='font-bold ml-24 text-xl'>415</span>
              </div>
          </div>

          {/* card */}
          <div className='cardHolder h-28 w-60 rounded-md shadow-md ml-12 mt-8 flex cursor-pointer hover:scale-105 transition-transform ease-in-out' style={{backgroundColor:'#EEEEEE'}}>
              
              {/* orange div */}
              <div className='flex w-2 rounded-s-lg' style={{backgroundColor:'#FF9900'}}></div>
              
              {/* title and icon container */}
              <div className='flex flex-col'>
                  <div className='flex'>
                      <div className='w-24 ml-4 mt-2 h-16 font-bold'>Registered Users</div>
                      <div className='ml-16 mt-4 w-8 h-8'><FaUserGroup className='h-6 w-6' /></div>
                  </div>
                  <span className='font-bold ml-24 text-xl'>356</span>
              </div>
          </div>

          {/* card */}
          <div className='cardHolder h-28 w-60 rounded-md shadow-md ml-12 mt-8 flex cursor-pointer hover:scale-105 transition-transform ease-in-out' style={{backgroundColor:'#EEEEEE'}}>
              
              {/* orange div */}
              <div className='flex w-2 rounded-s-lg' style={{backgroundColor:'#FF9900'}}></div>
              
              {/* title and icon container */}
              <div className='flex flex-col'>
                  <div className='flex'>
                      <div className='w-24 ml-4 mt-2 h-16 font-bold'>Ongoing Rides</div>
                      <div className='ml-16 mt-4 w-8 h-8'><FaShippingFast className='h-6 w-6' /></div>
                  </div>
                  <span className='font-bold ml-24 text-xl'>10</span>
              </div>
          </div>
          </div>
      </MainLayout>
    </div>
  );
}

export default AdminDashboardPg;
