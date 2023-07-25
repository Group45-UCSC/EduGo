import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <FaBeer /> },
  { title: "Employees", path: "/admin/employees", icon: <FaBeer /> },
  { title: "Drivers", path: "/admin/drivers", icon: <FaBeer /> },
  { title: "School Rides", path: "/admin/rides", icon: <FaBeer /> },
  { title: "Children", path: "/admin/childrenlist", icon: <FaBeer /> },
  { title: "Finance", path: "/admin/finance", icon: <FaBeer /> },
];

function Rides() {
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>

      <div className='font-bold ml-12 mt-4 text-2xl'>School rides details</div>

      <div className='ml-32 mt-12 mr-32 shadow-md overflow-auto '>
        <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
          <thead className='border-y-4 border-white drop-shadow '>
            <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
              <th className='px-3.5 p-1 w-24 '>ID</th>
              <th className='px-3.5 w-30'>License plate</th>
              <th className='px-3.5 w-30'>Departure</th>
              <th className='px-3.5 w-30'>Destination</th>
              <th className='px-3.5 w-30'>Contact</th>
              <th className='px-3.5 w-30'>Status</th>  
            </tr>
          </thead>

          <tbody className=''>
            <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                <td className='text-center  p-3'> 001</td>
                <td>NA - 1111</td>
                <td>Arawwala</td>
                <td>Borella</td>
                <td>0711234567</td>
                <td>Completed</td>
            </tr>
            
            <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md' >
              <td className='text-center  p-3 ' >002</td>
              <td>NA - 2222</td>
              <td>Kadawatha</td>
              <td>Pannipitiya</td>
              <td>0768956423</td>
              <td>Completed</td>
            </tr>

            <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
              <td className='text-center  p-3 ' >003</td>
              <td>NA - 3333</td>
              <td>Wellampitiya</td>
              <td>Borella</td>
              <td>0762222223</td>
              <td>Ongoing</td>
            </tr>

            <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
              <td className='text-center  p-3 ' >004</td>
              <td>NA - 4444</td>
              <td>Hokandara</td>
              <td>Rajagiriya</td>
              <td>0711936423</td>
              <td>Completed</td>
            </tr>

            <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
              <td className='text-center  p-3 ' >005</td>
              <td>NA - 5555</td>
              <td>Kaduwela</td>
              <td>Nugegoda</td>
              <td>0768123456</td>
              <td >Completed</td>
            </tr>

            <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
              <td className='text-center  p-3 ' >006</td>
              <td>NA - 6666</td>
              <td>Hanwella</td>
              <td>Thimbirigasyaya</td>
              <td>0768123456</td>
              <td>Ongoing</td>
            </tr>

            <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
              <td className='text-center  p-3 ' >007</td>
              <td>NA - 7777</td>
              <td>Kesbewa</td>
              <td>Nugegoda</td>
              <td>0712318987</td>
              <td>Completed</td>
            </tr>

            <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
              <td className='text-center  p-3 ' >008</td>
              <td>NA - 8888</td>
              <td>Piliyandala</td>
              <td>Maharagama</td>
              <td>0776745432</td>
              <td>Completed</td>
            </tr>
          </tbody>

        </table>
      </div>

      </MainLayout>
    </div>
  );
}

export default Rides;
