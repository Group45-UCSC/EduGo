import React from "react";
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

function Vehicles() {



  // all vehicle details

  const vehicle = [
    {
      id: "001",
      type: "van",
      make: "Toyota",
      model: "Hiace Dolphin 2001",
      contact: "0711234567",
      departure:"Homagama",
    },

    {
      id: "002",
      type: "van",
      make: "Toyota",
      model: "Hiace Dolphin 2001",
      contact: "0711234567",
      departure:"Homagama",
    },

    {
      id: "003",
      type: "van",
      make: "Toyota",
      model: "Hiace Dolphin 2001",
      contact: "0711234567",
      departure:"Homagama",
    },

    {
      id: "004",
      type: "van",
      make: "Toyota",
      model: "Hiace Dolphin 2001",
      contact: "0711234567",
      departure:"Homagama",
    },

    {
      id: "005",
      type: "van",
      make: "Toyota",
      model: "Hiace Dolphin 2001",
      contact: "0711234567",
      departure:"Homagama",
    },

    {
      id: "006",
      type: "van",
      make: "Toyota",
      model: "Hiace Dolphin 2001",
      contact: "0711234567",
      departure:"Homagama",
    },

    {
      id: "007",
      type: "van",
      make: "Toyota",
      model: "Hiace Dolphin 2001",
      contact: "0711234567",
      departure:"Homagama",
    },

    {
      id: "008",
      type: "van",
      make: "Toyota",
      model: "Hiace Dolphin 2001",
      contact: "0711234567",
      departure:"Homagama",
    }
  ];




  // redirect the page
  const handleClick = () => {
    window.location.href = `/vc/vehiclesdetails`;
  };

  return (
    <MainLayout data={sideNavBarLinks}>

          {/* topic */} 
          <div>
            <h1 className='text-[26px] font-bold ml-32 mt-8'> 
              Vehicle Details 
            </h1>

          {/* search and filter */}
          <div>

             {/* search */} 
            <div className='float-right '>

              <form action=''>
                <input type="text" placeholder='Search..' className=' mt-1 overflow-auto w-40 mr-32  border border-slate-400 pl-2 rounded-md'> 
                </input>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-10 stroke-slate-500 absolute -mt-8 ml-32 hover:cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </form>

            </div>

            {/* filter */}   
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


          {/* vehicle table */}
          <div className='ml-32  mb-12  mt-16 mr-32 shadow-md overflow-auto '>

            <table className='w-full border-separate border-spacing-y-2 border border-slate-50 '>
              <thead className='border-y-4 border-white drop-shadow '>
                <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
                  <th className='px-3.5 p-1 w-24 '>ID</th>
                  <th className='px-3.5 w-30'>Type</th>
                  <th className='px-3.5 w-30'>Make</th>
                  <th className='px-3.5 w-30'>Model</th>
                  <th className='px-3.5 w-30'>Contact</th>
                  <th className='px-3.5 w-30'>Departure</th>  
                </tr>
              </thead>

              <tbody className=''>
              {vehicle.map((item) => ( 
                <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'> {item.id}</td>
                    <td className='text-center'>{item.type} </td>
                    <td className='text-center'> {item.make} </td>
                    <td className='text-center'> {item.model} </td>
                    <td className='text-center'> {item.contact}</td>
                    <td className='text-center'> {item.departure} </td>
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
