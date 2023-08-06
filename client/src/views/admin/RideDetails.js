import React from "react";
import MainLayout from "../../components/layout/MainLayout";
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

function AdminRideDetails() {
  return (
    <div>
        <MainLayout data={sideNavBarLinks}>
        <div>
        {/* topic */}
        <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">Ride details</h1>

        {/* image and details container */}
        <div className='flex'>

            {/* image */}
            <div className='bg-gradient-to-b from-amber-500 to-amber-300 ml-20 mt-8 w-44 h-44 mr-14 rounded-full shadow-md'></div>

            {/* Driver's and vehicles detail container */}
            <div className='flex '>
              {/* driver's details container */}
              <div className='bg-slate-200 w-[275px] h-80 ml-12 mt-8 rounded-lg shadow-md'>
                  <div className='font-bold text-[19px] mt-4 ml-8'>
                      Driver's details
                  </div>
                  <div className='mt-4 ml-8'>
                      <p className='mb-1'>ID: 002</p>
                      <p className='mb-1'>Name: Sachithra Dissanayake</p>
                      <p className='mb-1'>Email: Sachithra@gmail.com</p>
                      <p className='mb-1'>NIC: 951234678V</p>
                      <p className='mb-1'>Contact: 071-xxxxxxx</p>
                      <p className='mb-1'>Address: Pitipana, Homagama</p>
                  </div>
              </div>

              {/* Vehicle details container */}
              <div className='bg-slate-200 w-[275px] h-80 ml-12 mt-8 rounded-lg shadow-md '>
                <div className='font-bold text-[19px] mt-4 ml-8'>
                    Vehicle details
                </div>
                <div className='mt-4 ml-8'>
                  <p className='mb-1'>Type: van</p>
                  <p className='mb-1'>Make: Toyota</p>
                  <p className='mb-1'>Model: Hiace Dolphin 2001</p>
                  <p className='mb-1'>License number: NA - 6111</p>
                  <p className='mb-1'>Starting: Homagama</p>
                  <p className='mb-1'>Destination: Maharagama</p>
                  <p className='mb-1'>Start time: 06.00 AM</p>
                </div>
              </div>
            </div>
      </div>
      {/* status & location */}
      <div className='absolute -mt-24 overflow-auto'>
        <h2 className='ml-20 font-semibold text-[17px]'>Ride Status : Ongoing</h2>
        <div className='bg-gradient-to-b from-amber-500 to-amber-300 w-28 h-9 ml-28 mt-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[102%] trasition duration-300 ease-out  hover:cursor-pointer'>
          <div className='ml-4 mt-4 text-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 pt-1">
                <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
            <p className='text-[15px] absolute -mt-6 ml-8 font-semibold'>Track</p>
          </div>
        </div>
      </div>

      {/* table of children */}
      <div className='ml-32 mt-16 mr-32 shadow-md overflow-auto '>
        <table className='w-full border-separate border-spacing-y-2 border border-slate-50 '>
          <thead className='border-y-4 border-white drop-shadow '>
            <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
              <th className='px-3.5 p-1 w-24 '>ID</th>
              <th className='px-3.5 w-30'>Name</th>
              <th className='px-3.5 w-30'>Contact</th>
              <th className='px-3.5 w-30'>Destination</th>
              <th className='px-3.5 w-30'>Status</th>  
            </tr>
          </thead>

          <tbody className=''>
            <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                <td className='text-center  p-3'> 001</td>
                <td className='text-center'>Charitha Ruwindu</td>
                <td className='text-center'>0711234567</td>
                <td className='text-center'>royal College</td>
                <td className='text-center'>Picked</td>
            </tr>
            
            <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md' >
              <td className='text-center  p-3 ' >002</td>
              <td className='text-center'>Dewmini Rathnawardhana</td>
              <td className='text-center'>0768956423</td>
              <td className='text-center'>Meuseus College</td>
              <td className='text-center'>Dropped</td>
            </tr>

            <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
              <td className='text-center  p-3 ' >003</td>
              <td className='text-center'>Apsara Liyanage</td>
              <td className='text-center'>0762222223</td>
              <td className='text-center'>Meuseus College</td>
              <td className='text-center'>Absent</td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>
        </MainLayout>
    </div>
  )
}

export default AdminRideDetails