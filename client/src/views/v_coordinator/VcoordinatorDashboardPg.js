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

function VcoordinatorDashboardPg() {


   //vehicle ongoing count
   const [ongoingridecount, setongoingridecount] = useState([]);
   useEffect(() => {
     async function ongoingridecount() {
       try {
         const response = await fetch(
           `http://localhost:5000/edugo/vc/dashboard/ongoingridecount`
         );
         const data = await response.json();
         setongoingridecount(data);
       } catch (err) {
         console.error(err.message);
       }
     }
     ongoingridecount();
   });


      //vehicle emergency count
      const [emergencycount, setemergencycount] = useState([]);
      useEffect(() => {
        async function emergencycount() {
          try {
            const response = await fetch(
              `http://localhost:5000/edugo/vc/dashboard/emergencycount`
            );
            const data = await response.json();
            setemergencycount(data);
          } catch (err) {
            console.error(err.message);
          }
        }
        emergencycount();
      });


     //vehicle verify count
      const [verifycount, setverifycount] = useState([]);
      useEffect(() => {
        async function VerifyrequstCount() {
          try {
            const response = await fetch(
              `http://localhost:5000/edugo/vc/dashboard/verifycount`
            );
            const data = await response.json();
            setverifycount(data);
          } catch (err) {
            console.error(err.message);
          }
        }
        VerifyrequstCount();
      });

      //vehicle cc reuest count
      const [CCcount, setCCcount] = useState([]);
      useEffect(() => {
        async function ccrequestCount() {
          try {
            const response = await fetch(
              `http://localhost:5000/edugo/vc/dashboard/ccCount`
            );
            const data = await response.json();
            setCCcount(data);
          } catch (err) {
            console.error(err.message);
          }
        }
        ccrequestCount();
      });

      //nowemergencytble
      const [emergencynow, setemergencynow] = useState([]);
      useEffect(() => {
        async function emergencynow() {
          try {
            const response = await fetch(
              `http://localhost:5000/edugo/vc/dashboard/emergencynow`
            );
            const data = await response.json();
            setemergencynow(data);
          } catch (err) {
            console.error(err.message);
          }
        }
        emergencynow();
      });

  const handleClick = () => {
    window.location.href = `/vc/vrrequest`;
  };

  const handleClick2 = () => {
    window.location.href = `/vc/ccrequest`;
  };


  const handleClick4 = () => {
    window.location.href = `/vc/rides`;
  };

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>

 
      <div className="h-screen">
        <div>
          <h1 className='ml-12 mt-10 font-semibold text-[25px]'>
            Dashboard
          </h1>
      </div>

      {/*cards */}
      <div className='grid grid-cols-4 gap-[50px] mt-[35px] pb-[15px] ml-12 mr-16 w-[1050px] mb-10 shadow-md drop-shadow-md'>
        <div className='h-[100px] rounded-[8px] bg-[#EEEEEE] border-l-8 border-red-500 pl-6 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out shadow-md'>
          <div>

            <h2 className='text-[#fa3a3a] text-[18px] leading-[17px] font-bold'> 
              Emergency
            </h2>

            {emergencycount.map((items) => (
              <h1 className='text-[20px] leading-[24px] font-bold mt-[15px] ml-3'>{items.count}</h1>
              ))}

          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
          </svg>
        </div>

        <div onClick={handleClick4} className='h-[100px] rounded-[8px] bg-[#EEEEEE] border-l-8 border-[#FF9900] pl-6 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out shadow-md'>
          <div>

            <h2 className='text-[#2f6d21] text-[18px] leading-[17px] font-bold'> 
              Ongoing transports
            </h2>

            {ongoingridecount.map((item) => (
              <h1 className='text-[20px] leading-[24px] font-bold mt-[15px] ml-3'>{item.count}</h1>
              ))}

          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>

        </div>

        <div onClick={handleClick} className='h-[100px] rounded-[8px] bg-[#EEEEEE] border-l-8 border-[#FF9900] pl-6 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out shadow-md'>

          <div>

            <h2 className='text-[#000000] text-[18px] leading-[17px] font-bold'> 
              Vehicle Register Requests
            </h2>

            {verifycount.map((item) => (
              <h1 className='text-[20px] leading-[24px] font-bold mt-[15px] ml-3'>{item.count}</h1>
              ))}

          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
          </svg>


        </div>

        <div onClick={handleClick2}  className='h-[100px] rounded-[8px] bg-[#EEEEEE] border-l-8 border-[#FF9900] pl-6 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out shadow-md'>

          <div>
            
            <h2 className='text-[#000000] text-[18px] leading-[17px] font-bold'> 
              Condition Check
            </h2>

            {CCcount.map((item) => (
              <h1 className='text-[20px] leading-[24px] font-bold mt-[15px] ml-3'>{item.count}</h1>
              ))}

          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
          </svg>

        </div>

      </div>


{/* table of emergency-now*/}
<div className='ml-16 mt-3 mr-6 shadow-md w-[1000px]'>
<table className='border-separate border-spacing-y-2 border border-slate-50 w-[1000px]'>
  <thead className='border-y-4 border-white drop-shadow '>
    <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
      <th className='px-3.5 pt-2 pb-2  pl-8 '>Situation</th>
      <th className='px-3.5 '>Type</th>
      <th className='px-3.5'>Vehicle number</th>
      <th className='px-3.5'>Contact</th> 
      <th className='px-3.5 pl-12'></th>
    
    </tr>
  </thead>

  <tbody className='shadow-md drop-shadow-md '>
  {emergencynow.map((item) => ( 
    <tr className=' bg-[#D9D9D9]  hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md '>
        <td className='text-center pt-2 pb-2 '>{item.situation}</td>
        <td className='text-center'>{item.vehicle_type}</td>
        <td className='text-center'>{item.vehicle_no}</td>
        <td className='text-center'>{item.contact_number}</td>

        <NavLink
          to={`/vc/emergencydetails/${
            item.emergency_id
              }?data=${encodeURIComponent(
              JSON.stringify(item)
              )}`}
              >
                
        <td className='text-center'>
              <button className="bg-gradient-to-b from-amber-500 to-amber-300  w-40 h-9 ml-4 mt-2 mb-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[104%] trasition duration-300 ease-out  hover:cursor-pointer">View more...</button>
        </td>
        </NavLink>
    </tr>

     ))}
  </tbody>

</table>
</div>
</div> 
      </MainLayout>
    </div>
  );
}

export default VcoordinatorDashboardPg;
