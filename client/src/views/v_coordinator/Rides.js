import React, {useState} from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard } from "react-icons/ai";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/vc/dashboard", icon: <AiFillDashboard /> },
  { title: "Vehicles", path: "/vc/vehicles", icon: <BsFillCarFrontFill /> },
  { title: "School Rides", path: "/vc/rides", icon: <FaShippingFast /> },
  { title: "Emergency", path: "/vc/emergency", icon: <FaCarCrash /> },
];

function VcRides() {

    const [toggle, setToggle] = useState(1);
  
    function updateToggle(id) {
      setToggle(id);
    }
  
    const handleClick = () => {
      window.location.href = `/vc/ridesdetails`;
    };
    return (
      <div>
        <MainLayout data={sideNavBarLinks}>
  
        <h1 className='text-[26px] font-bold ml-32 mt-8'> 
          School Services 
        </h1>

        {/* search and filter */}
            <div>
            <div className='float-right '>
                <form action=''>
                <input type="text" placeholder='Search..' className=' mt-1 overflow-auto w-40 mr-32  border border-slate-400 pl-2 rounded-md'> 
                </input>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-10 stroke-slate-500 absolute -mt-8 ml-32 hover:cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </form>
            </div>
            <div className='float-right '>
                <form action=''>
                <input type="text" placeholder='Filter here' className=' mt-1 overflow-auto w-40 mr-8  border border-slate-400 pl-2 rounded-md '> 
                </input>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-10 stroke-slate-500 absolute -mt-8 ml-32 hover:cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z  " />
                </svg>
                </form>
            </div>
            </div>
  
        {/*employees button container */}
        <div className="flex text-center ml-32 mt-12">
            {/* buttons */}
            <div
              onClick={() => updateToggle(1)}
              className={
                toggle === 1
                  ? "h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer"
                  : "h-11 w-44 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"
              }
            >
              Ongoing rides 
            </div>
            <div
              onClick={() => updateToggle(2)}
              className={
                toggle === 2
                  ? "ml-1 h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer"
                  : "h-11 w-44 ml-1 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"
              }
            >
              All rides
            </div>
          </div>
  
  
        {/* rides table */}
        <div className={toggle === 2 ? "details" : "details hidden"}>
        <div className='ml-32 mr-32 shadow-md overflow-auto '>
          <table className='w-full text-center mb-5 border-separate border-spacing-y-2 border border-slate-50 '>
            <thead className='border-y-4 border-white drop-shadow '>
              <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
                <th className='px-3.5 p-1 w-24 '>ID</th>
                <th className='px-3.5 w-30'>Number plate</th>
                <th className='px-3.5 w-30'>Departure</th>
                <th className='px-3.5 w-30'>Destination</th>
                <th className='px-3.5 w-30'>Contact</th>
                <th className='px-3.5 w-30'>Status</th>  
              </tr>
            </thead>
  
            <tbody className=''>
              <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3'> 001</td>
                  <td>NA - 1111</td>
                  <td>Arawwala</td>
                  <td>Borella</td>
                  <td>0711234567</td>
                  <td>Completed</td>
              </tr>
              
              <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md' >
                <td className='text-center  p-3 ' >002</td>
                <td>NA - 2222</td>
                <td>Kadawatha</td>
                <td>Pannipitiya</td>
                <td>0768956423</td>
                <td>Completed</td>
              </tr>
  
              <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                <td className='text-center  p-3 ' >003</td>
                <td>NA - 3333</td>
                <td>Wellampitiya</td>
                <td>Borella</td>
                <td>0762222223</td>
                <td>Ongoing</td>
              </tr>
  
              <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                <td className='text-center  p-3 ' >004</td>
                <td>NA - 4444</td>
                <td>Hokandara</td>
                <td>Rajagiriya</td>
                <td>0711936423</td>
                <td>Completed</td>
              </tr>
  
              <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                <td className='text-center  p-3 ' >005</td>
                <td>NA - 5555</td>
                <td>Kaduwela</td>
                <td>Nugegoda</td>
                <td>0768123456</td>
                <td >Completed</td>
              </tr>
  
              <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                <td className='text-center  p-3 ' >006</td>
                <td>NA - 6666</td>
                <td>Hanwella</td>
                <td>Thimbirigasyaya</td>
                <td>0768123456</td>
                <td>Ongoing</td>
              </tr>
  
              <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                <td className='text-center  p-3 ' >007</td>
                <td>NA - 7777</td>
                <td>Kesbewa</td>
                <td>Nugegoda</td>
                <td>0712318987</td>
                <td>Completed</td>
              </tr>
  
              <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
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
        </div>
  
        <div className={toggle === 1 ? "details" : "details hidden"}>
        <div className='ml-32 mr-32 shadow-md overflow-auto '>
          <table className='w-full text-center mb-52 border-separate border-spacing-y-2 border border-slate-50 '>
            <thead className='border-y-4 border-white drop-shadow '>
              <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
                <th className='px-3.5 p-1 w-24 '>ID</th>
                <th className='px-3.5 w-30'>Number plate</th>
                <th className='px-3.5 w-30'>Departure</th>
                <th className='px-3.5 w-30'>Destination</th>
                <th className='px-3.5 w-30'>Contact</th>
                <th className='px-3.5 w-30'>Status</th>  
              </tr>
            </thead>
  
            <tbody className=''>
  
              <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                <td className='text-center  p-3 ' >003</td>
                <td>NA - 3333</td>
                <td>Wellampitiya</td>
                <td>Borella</td>
                <td>0762222223</td>
                <td>Ongoing</td>
              </tr>
  
              <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                <td className='text-center  p-3 ' >006</td>
                <td>NA - 6666</td>
                <td>Hanwella</td>
                <td>Thimbirigasyaya</td>
                <td>0768123456</td>
                <td>Ongoing</td>
              </tr>

              <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                <td className='text-center  p-3'> 010</td>
                <td > RR 8839</td>
                <td >Homagama</td>
                <td >Nugegoda</td>
                <td >0716548792</td>
                <td >OnGoing</td>
            </tr>

            </tbody>
  
          </table>
        </div>
        </div>
  
        </MainLayout>
      </div>
    );
  }
  
  export default VcRides;
  