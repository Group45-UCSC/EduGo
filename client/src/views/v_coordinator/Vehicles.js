import React, { useState, useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard } from "react-icons/ai";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/vc/dashboard", icon: <AiFillDashboard /> },
  { title: "Vehicles", path: "/vc/vehicles", icon: <BsFillCarFrontFill /> },
  { title: "School Rides", path: "/vc/rides", icon: <FaShippingFast /> },
  { title: "Emergency", path: "/vc/emergency", icon: <FaCarCrash /> },
];

function Vehicles() {


  //frombackend

  const [vehiclels, setVehiclels] = useState([]);
  useEffect(() => {
    async function vehicleList() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/vc/vehicles/vehicle`
        );
        const data = await response.json();
        setVehiclels(data);
      } catch (err) {
        console.error(err.message);
      }
    }
    vehicleList();
  });

  return (
    <MainLayout data={sideNavBarLinks}>

          {/* topic */} 
          <div className="h-screen">
            <h1 className='text-[26px] font-bold ml-20 mt-8'> 
              Vehicle Details 
            </h1>

          {/* search and filter */}
          <div>

             {/* search */} 
            {/* <div className='float-right '>

              <form action=''>
                <input type="text" placeholder='Search..' className=' mt-1 overflow-auto w-40 mr-32  border border-slate-400 pl-2 rounded-md'> 
                </input>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-10 stroke-slate-500 absolute -mt-8 ml-32 hover:cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </form>

            </div> */}

            {/* filter */}   
            {/* <div className='float-right '>

              <form action=''>
                <input type="text" placeholder='Filter here' className=' mt-1 overflow-auto w-40 mr-8  border border-slate-400 pl-2 rounded-md '> 
                </input>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-10 stroke-slate-500 absolute -mt-8 ml-32 hover:cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z  " />
                </svg>
              </form>
              
            </div> */}

          </div>


          {/* vehicle table */}
          <div className='ml-20  mt-16 mr-12 shadow-md overflow-auto '>

            <table className='w-full border-separate border-spacing-y-2 border border-slate-50 '>
              <thead className='border-y-4 border-white drop-shadow '>
                <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
                  <th className='px-3.5 p-1 w-24 '>ID</th>
                  <th className='px-3.5 w-30'>Vehicle number</th>
                  <th className='px-3.5 w-30'>Make</th>
                  <th className='px-3.5 w-30'>Model</th>
                  <th className='px-3.5 w-30'>Contact</th>
                  <th className='px-3.5 w-30'>Departure</th>
                  <th className='px-3.5 w-30'></th>   
                </tr>
              </thead>

              <tbody className=''>
              {vehiclels.map((item) => ( 
                <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'> {item.vehicle_id} </td>
                    <td className='text-center'>{item.vehicle_no} </td>
                    <td className='text-center'> {item.vehicle_type} </td>
                    <td className='text-center'> {item.vehicle_model} </td>
                    <td className='text-center'> {item.contact_number}</td>
                    <td className='text-center'> {item.contact_number}</td>

                    <NavLink
                      to={`/vc/vehiclesdetails/${
                        item.vehicle_id
                      }?data=${encodeURIComponent(
                        JSON.stringify(item)
                      )}`}
                    >
                    <td className='text-center'> <button  className="bg-gradient-to-b from-amber-500 to-amber-300  w-40 h-9 ml-4 mt-1 mb-1 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer"> View more..</button></td>
                    </NavLink>

                </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
    </MainLayout>
  );
}

export default Vehicles;
