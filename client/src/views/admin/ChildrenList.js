import React, {useState} from "react";
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

function AdminChildrenList() {

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

        {/*employees button container */}
        <div className="flex text-center ml-32 mt-12">

          {/* buttons */}
          <div onClick={()=>updateToggle(1)} className={toggle === 1 ? "h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer" : "h-11 w-44 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"}>Children</div>
          <div onClick={()=>updateToggle(2)} className={toggle === 2 ? "ml-1 h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer" : "h-11 w-44 ml-1 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"}>Parents</div>
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
                <th className='px-3.5 w-30'>Dependents</th>  
              </tr>
            </thead>

            <tbody className=''>
            <tr onClick={handleClickP} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3'> 008</td>
                  <td>Gamini Wijerathna</td>
                  <td>Gamini@gmail.com</td>
                  <td>No.23/4, Samagi Mawatha, Borella</td>
                  <td>0711234567</td>
                  <td>1</td>
              </tr>
              
              <tr onClick={handleClickP} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md' >
                <td className='text-center  p-3 ' >009</td>
                <td>Sidath Jayantha</td>
                <td>sidath@gmail.com</td>
                <td>No.18 Good shed road, Pannipitiya</td>
                <td>0768956423</td>
                <td>2</td>
              </tr>

              <tr onClick={handleClickP} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                <td className='text-center  p-3 ' >010</td>
                <td>Pathum Udara</td>
                <td>pathum@gmail.com</td>
                <td>No.10, Sadaham Mawatha, Wellampitiya</td>
                <td>0762222223</td>
                <td>1</td>
              </tr>

              <tr onClick={handleClickP} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                <td className='text-center  p-3 ' >011</td>
                <td>Isuri Vimansa</td>
                <td>isuri@gmail.com</td>
                <td>No.12 main street, Piliyandala</td>
                <td>0711936423</td>
                <td>1</td>
              </tr>

              <tr onClick={handleClickP} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                <td className='text-center  p-3 ' >012</td>
                <td>Shantha Bandara</td>
                <td>shantha@gmail.com</td>
                <td>No.23/1,  Hokandara</td>
                <td>0768123456</td>
                <td>3</td>
              </tr>

              <tr onClick={handleClickP} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                <td className='text-center  p-3 ' >013</td>
                <td>Pradeep Jayalath</td>
                <td>pradeep@gmail.com</td>
                <td>N0.45/3, Mutuwal, Modara</td>
                <td>0768123456</td>
                <td>2</td>
              </tr>

              <tr onClick={handleClickP} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                <td className='text-center  p-3 ' >014</td>
                <td>Pramuka Darshana</td>
                <td>pramuka@gmail.com</td>
                <td>No.87 main street, Piliyandala</td>
                <td>0712318987</td>
                <td>1</td>
              </tr>

            </tbody>

          </table>
        </div>
      </div>
        
        
        </MainLayout>
        </div>
  )
}

export default AdminChildrenList