import React, { useState, useEffect } from "react";
import VCmodal from "../../components/Model/VCmodal";
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

function CCRequest() {

    //frombackend
    const [ccrequestls, setccrequestls] = useState([]);
    useEffect(() => {
      async function ccrequestList() {
        try {
          const response = await fetch(
            `http://localhost:5000/edugo/vc/ccrequest/ccrequestls`
          );
          const data = await response.json();
          setccrequestls(data);
        } catch (err) {
          console.error(err.message);
        }
        }
        ccrequestList();
    });

  const [showVCmodal, setshowVCmodal] = useState (false);

  const handleOnClose =() => setshowVCmodal(false)


  return (

    <MainLayout data={sideNavBarLinks}>
    <div>
        
    <h1 className='text-[26px] font-bold ml-12 mt-8'> 
        Vehicle Condition Notifications 
    </h1>
        
        <div className='ml-12 mt-8 mr-20 mb-64 w-[1000px] shadow-md'>
        <table className=' border-separate border-spacing-y-2 border border-slate-50 w-[1000px] '>
          <thead className='border-y-4 border-white drop-shadow '>
            <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
              <th className='px-3.5 w-40'>Type</th>
              <th className='px-3.5 pt-2 pb-2 w-52 '>Driver's Name</th>
              <th className='px-3.5 w-48'>NIC Number</th>
              <th className='px-3.5 w-40'>Contact</th>
              <th className='px-3.5 w-30'></th>   
            </tr>
          </thead>

          <tbody className='shadow-md drop-shadow-md '>
          {ccrequestls.map((item) => ( 
            <tr className=' bg-[#D9D9D9]  hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md '>
                <td className='text-center'> {item.vehicle_type} </td>
                <td className='text-center pt-2 pb-2 '> {item.user_name} </td>
                <td className='text-center'> {item.nic} </td>
                <td className='text-center'> {item.contact_number}  </td>

                <NavLink
                      to={`../components/model/ccmodal/${
                        item.ride_id
                      }?data=${encodeURIComponent(
                        JSON.stringify(item)
                      )}`}
                    >

                <td className='text-center'>
                  <button  onClick={() =>setshowVCmodal(true)} className="bg-gradient-to-b from-amber-500 to-amber-300  w-40 h-9 ml-4 mt-2 mb-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer">See more..</button>
                </td>
                </NavLink>
            </tr>
          ))}
          </tbody>

        </table>
    </div>

    <VCmodal onClose={handleOnClose} visible={showVCmodal}/>
    </div>

    </MainLayout>
  )
}

export default CCRequest