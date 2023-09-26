import React, { useState, useEffect } from "react";
import VRmodal from "../../components/Model/VRmodal";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard } from "react-icons/ai";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/vc/dashboard", icon: <AiFillDashboard /> },
  { title: "Vehicles", path: "/vc/vehicles", icon: <BsFillCarFrontFill /> },
  { title: "School Rides", path: "/vc/rides", icon: <FaShippingFast /> },
  { title: "Emergency", path: "/vc/emergency", icon: <FaCarCrash/> },
];

function VRRequest() {

  //frombackend
  const [vrequest, setvrequest] = useState([]);
  useEffect(() => {
    async function vehiclerequest() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/vc/vrrequest/requestdetails`
        );
        const data = await response.json();
        setvrequest(data);
      } catch (err) {
        console.error(err.message);
      }
      }
      vehiclerequest();
  });

  const [showVRmodal, setshowVRmodal] = useState (false);
  const handleOnClose =() => setshowVRmodal(false)

  return (

    <MainLayout data={sideNavBarLinks}>

    <div>

    <h1 className='text-[26px] font-bold ml-12 mt-8'> 
      Vehicle Registration Requests 
    </h1>
        
            {/* table of children */}
            <div className='ml-12 mt-8 mr-20 mb-64 w-[1000px] shadow-md '>
            <table className='border-separate border-spacing-y-2 border border-slate-50 w-[1000px] '>
              <thead className='border-y-4 border-white drop-shadow  '>
                <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
                    <th className='px-3.5 w-40'>Type</th>
                  <th className='px-3.5 pt-2 pb-2 w-52 '>Driver's Name</th>
                  <th className='px-3.5 w-48'>NIC Number</th>
                  <th className='px-3.5 w-40'>Contact</th> 
                  <th className='px-3.5 w-30'></th>  
                </tr>
              </thead>

              <tbody className='shadow-md drop-shadow-md '>

              {vrequest.map((item) => ( 
                <tr className=' bg-[#D9D9D9]  hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md '>
                    <td className='text-center'>{item.vehicle_type}</td>
                    <td className='text-center pt-2 pb-2 '>{item.user_name}</td>
                    <td className='text-center'>{item.nic}</td>
                    <td className='text-center'>{item.contact_number}</td>
                    <td className='text-center'>
                      <button onClick={() =>setshowVRmodal(true)} className="bg-gradient-to-b from-amber-500 to-amber-300  w-40 h-9 ml-4 mt-2 mb-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer">Go to the form..</button>
                    </td> 
                </tr>
                ))}
              </tbody>

            </table>
      </div>

      <VRmodal onClose={handleOnClose} visible={showVRmodal}/>
</div> 
</MainLayout>
  )
}

export default VRRequest