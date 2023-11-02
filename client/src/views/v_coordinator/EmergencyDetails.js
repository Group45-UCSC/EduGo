import React,{useState, useEffect} from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard } from "react-icons/ai";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/vc/dashboard", icon: <AiFillDashboard /> },
  { title: "Vehicles", path: "/vc/vehicles", icon: <BsFillCarFrontFill /> },
  { title: "School Rides", path: "/vc/rides", icon: <FaShippingFast /> },
  { title: "Emergency", path: "/vc/emergency", icon: <FaCarCrash /> },
];

function EmergencyDetails() {

     //frombackend

     const [emchildren, setemchildren] = useState([]);
     useEffect(() => {
       async function emchildrenList() {
         try {
           const response = await fetch(
             `http://localhost:5000/edugo/vc/emergencydetails/emergencychildren`
           );
           const data = await response.json();
           setemchildren(data);
         } catch (err) {
           console.error(err.message);
         }
       }
       emchildrenList();
     });

  const location = useLocation();
  const dataParam = new URLSearchParams(location.search).get("data");
  const item = JSON.parse(decodeURIComponent(dataParam));

  const handleClick = () => {
    window.location.href = `/vc/track`;
  };

  // Assuming "item.status" contains the status information
  const isStatusNotComplete = item.status !== "complete";

  return (
    <MainLayout data={sideNavBarLinks}>
    <div>

    <div className='absolute float-left'>
        {/* topic */}
        <div className='font-bold ml-20 mt-4 text-2xl'> 
          Emergency details
        </div>
          <div className='bg-slate-200 w-[600px] h-52 ml-20 mt-8 rounded-lg shadow-md '>
              <div className='font-bold text-[19px] mt-4 ml-8 pt-4'> 
                  Emergency Handle 
              </div>
                <div className='mt-4 ml-8 float-left '>
                  <p className='mb-1'>Vehicle : {item.vehicle_no}</p>
                  <p className='mb-1'>Type : {item.vehicle_type} </p>
                  <p className='mb-1'>Emergency : {item.situation}</p>
                  <p className='mb-1'>Status : {item.status}</p>
                </div>
                <div className='mt-4 ml-80 absolute float-right'>
                  <p className='mb-1 font-bold'>Date : {item.date}</p>
                </div>
          </div>  
        </div>
      
      
        {/* buttons */}
        <div className='absolute float-right mt-24  ml-[750px] mr-[200px]'>
        <button onClick={handleClick} className="bg-gradient-to-b from-amber-500 to-amber-300  w-48 h-9 ml-4 mt-2 mb-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-5 mt-1 ml-4 pl-1 absolute pr-1">
          <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
        </svg><b>Locate</b>
        </button>
          <button className="bg-gradient-to-b from-amber-500 to-amber-300  w-48 h-9 ml-4 mt-2 mb-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-5 mt-1 ml-1 pl-1 absolute pr-1">
                          <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                          <path fill-rule="evenodd" d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z" clip-rule="evenodd" />
                        </svg>
                  <b> Notify Parent</b>
          </button>
          <button className="bg-gradient-to-b from-amber-500 to-amber-300  w-48 h-9 ml-4 mt-2 mb-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  class="w-8 h-5 mt-1 ml-4 pl-1 absolute pr-1">
                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
              </svg>
                <b>Assign </b>
              </button>
        </div>

          {/* Conditional rendering of the form based on the status */}
          {isStatusNotComplete && (
                    <div className="ml-20 pt-[310px] ">
                      {/* Your form JSX here */}
                      <form className="">
                        <input type="text" placeholder="what is your action" className="w-[600px] h-[100px] pl-6  rounded-lg shadow-md drop-shadow-md"></input>
                        <button type="submit" className="bg-gradient-to-b from-amber-500 to-amber-300  w-32 h-9 ml-28 mt-2  rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer"> <b>SUBMIT</b></button>
                      </form>
                    </div>
                  )}
                  

        {/* Childern in that vehicle */}
        <div className='ml-20 pt-80 mt-4 mr-12 mb-4 overflow-auto w-[1000px] '>
        <table className=' border-separate border-spacing-y-2 border border-slate-50  w-[1000px]'>
          <thead className='border-y-4 border-white drop-shadow '>
            <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
              <th className='px-3.5 p-1 w-24 '>ID</th>
              <th className='px-3.5 w-30'>Name</th>
              {/* <th className='px-3.5 w-30'>Contact</th> */}
              <th className='px-3.5 w-30'>school</th>
              <th className='px-3.5 w-'>Action</th>  
            </tr>
          </thead>

          <tbody className=''>
          {emchildren.map((itemchildren) => ( 
            <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                <td className='text-center  p-3'>{itemchildren.child_id} </td>
                <td className='text-center'>{itemchildren.child_name}</td>
                {/* <td className='text-center'>{itemchildren.contact_no}</td> */}
                <td className='text-center'>{itemchildren.school_name}</td>
                <td className='text-center'>
                <button className="bg-gradient-to-b from-amber-500 to-amber-300  w-40 h-9 ml-4 mt-2 mb-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-5 mt-1 ml-1 pl-1 absolute pr-1">
                          <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                          <path fill-rule="evenodd" d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z" clip-rule="evenodd" />
                        </svg>
                  Notify Parent
                </button>
                </td>
            </tr>
            ))}
          </tbody>

        </table>
      </div>
        
    </div>
    </MainLayout>
  )
}

export default EmergencyDetails