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

function AdminChildrenList() {

    const handleClick = () => {
        window.location.href = `/admin/children`;
      };
  return (
    <div>
        <MainLayout data={sideNavBarLinks}>
        <div className='font-bold ml-12 mt-4 text-2xl'>Children List</div>

      <div className='ml-32 mt-12 mr-32 shadow-md overflow-auto '>
        <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
          <thead className='border-y-4 border-white drop-shadow '>
            <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
              <th className='px-3.5 p-1 w-24 '>ID</th>
              <th className='px-3.5 w-30'>Name</th>
              <th className='px-3.5 w-30'>School</th>
              <th className='px-3.5 w-30'>Address</th>
              <th className='px-3.5 w-30'>Contact</th>
              <th className='px-3.5 w-30'>License plate</th>  
            </tr>
          </thead>

          <tbody className=''>
          <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                <td className='text-center  p-3'> 001</td>
                <td>Sumudu Wijerathna</td>
                <td>Arawwala Central College</td>
                <td>No.23/4, Samagi Mawatha, Borella</td>
                <td>0711234567</td>
                <td>NA - 1111</td>
            </tr>
            
            <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md' >
              <td className='text-center  p-3 ' >002</td>
              <td>Buddhika Sachintha</td>
              <td>Kadawatha Parakrama College</td>
              <td>No.18 Good shed road, Pannipitiya</td>
              <td>0768956423</td>
              <td>NA - 2222</td>
            </tr>

            <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
              <td className='text-center  p-3 ' >003</td>
              <td>Pawan Sachithra</td>
              <td>D.S Senanayaka college</td>
              <td>No.10, Sadaham Mawatha, Wellampitiya</td>
              <td>0762222223</td>
              <td>NA - 3333</td>
            </tr>

            <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
              <td className='text-center  p-3 ' >004</td>
              <td>Kasuni Vimansa</td>
              <td>Devi Balika Vidyalaya</td>
              <td>No.12 main street, Piliyandala</td>
              <td>0711936423</td>
              <td>NA - 4444</td>
            </tr>

            <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
              <td className='text-center  p-3 ' >005</td>
              <td>Harshi Sakunika</td>
              <td>Anula Vidyalaya, Nugegoda</td>
              <td>No.23/1,  Hokandara</td>
              <td>0768123456</td>
              <td>NA - 5555</td>
            </tr>

            <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
              <td className='text-center  p-3 ' >006</td>
              <td>Kasun Jayalath</td>
              <td>Colombo Royal College</td>
              <td>N0.45/3, Mutuwal, Modara</td>
              <td>0768123456</td>
              <td>NA - 6666</td>
            </tr>

            <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
              <td className='text-center  p-3 ' >007</td>
              <td>Rajith Hashan</td>
              <td>Pannipitiya Dharmapala College</td>
              <td>No.87 main street, Piliyandala</td>
              <td>0712318987</td>
              <td>NA - 7777</td>
            </tr>

          </tbody>

        </table>
      </div>
        
        
        </MainLayout>
        </div>
  )
}

export default AdminChildrenList