import VCmodal from "../../components/Model/VCmodal";
import React,{useState} from "react";
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

function CCRequest() {

  const [showVCmodal, setshowVCmodal] = useState (false);

  const handleOnClose =() => setshowVCmodal(false)


  return (

    <MainLayout data={sideNavBarLinks}>
    <div>
        
    <h1 className='text-[26px] font-bold ml-12 mt-8'> Vehicle Condition Requests </h1>
        
        <div className='ml-12 mt-8 mr-20 mb-64 w-[1000px] shadow-md'>
        <table className=' border-separate border-spacing-y-2 border border-slate-50 w-[1000px] '>
          <thead className='border-y-4 border-white drop-shadow '>
            <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
                <th className='px-3.5 w-40'>Type</th>
              <th className='px-3.5 pt-2 pb-2 w-52 '>Driver's Name</th>
              <th className='px-3.5 w-48'>NIC Number</th>
              <th className='px-3.5 w-40'>Contact</th> 
            
            </tr>
          </thead>

          <tbody className='shadow-md drop-shadow-md '>
            <tr className=' bg-[#D9D9D9]  hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md '>
                <td className='text-center'>Van</td>
                <td className='text-center pt-2 pb-2 '>Nishan Perera</td>
                <td className='text-center'>976543442V</td>
                <td className='text-center'>071-xxxxxxx</td>
                <td className='text-center'>
                  <button  onClick={() =>setshowVCmodal(true)} className="bg-gradient-to-b from-amber-500 to-amber-300  w-40 h-9 ml-4 mt-2 mb-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer">Request Form..</button>
                </td>
            </tr>
            
            <tr className=' bg-[#D9D9D9]  hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md' >
              <td className='text-center'>Bus</td>
              <td className='text-center pt-2 pb-2 '>Maduka Jayalath</td>
              <td className='text-center'>954678922V</td>
              <td className='text-center'>071-xxxxxxx</td>
              <td className='text-center'>
               <button  onClick={() =>setshowVCmodal(true)} className="bg-gradient-to-b from-amber-500 to-amber-300  w-40 h-9 ml-4 mt-2 mb-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer">Request Form..</button>
                </td>
            </tr>

            <tr className=' bg-[#D9D9D9]  hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                <td className='text-center'>Van</td>
              <td className='text-center pt-2 pb-2 '>Malshan Perera</td>
              <td className='text-center'>998674555V</td>
              <td className='text-center'>071-xxxxxxx</td>
              <td className='text-center'>
              <button  onClick={() =>setshowVCmodal(true)} className="bg-gradient-to-b from-amber-500 to-amber-300  w-40 h-9 ml-4 mt-2 mb-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer">Request Form..</button>
                </td>
            </tr>

            <tr className=' bg-[#D9D9D9]  hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
              <td className='text-center'>Van</td>
              <td className='text-center pt-2 pb-2 '>Bhawantha de Silva</td>
              <td className='text-center'>917865999V</td>
              <td className='text-center'>071-xxxxxxx</td>
              <td className='text-center'>
              <button  onClick={() =>setshowVCmodal(true)} className="bg-gradient-to-b from-amber-500 to-amber-300  w-40 h-9 ml-4 mt-2 mb-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer">Request Form..</button>
                </td>
            </tr>
          </tbody>

        </table>
    </div>

    <VCmodal onClose={handleOnClose} visible={showVCmodal}/>
    </div>

    </MainLayout>
  )
}

export default CCRequest