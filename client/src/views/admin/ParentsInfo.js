import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import parentpic from "../../images/parent1.png";
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

function AdminParentsInfo() {

    const location = useLocation();
    const dataParam = new URLSearchParams(location.search).get("data");
    const item = JSON.parse(decodeURIComponent(dataParam));

    const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

    const child = () => {
        window.location.href = `/admin/Children`;
      };
  return (
    <div>
        <MainLayout data={sideNavBarLinks}>
            <div>
            {/* topic */}
            <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">Parent's Details</h1>

            {/* image and details container */}
            <div className='flex'>

                {/* image */}
                <div className='bg-slate-200 ml-12 mt-8 w-40 h-40 rounded-full shadow-md'><img src={parentpic} alt="parentpic" className="w-40 h-40 rounded-full shadow-md"></img></div>

                {/* parent's details */}
                <div className='bg-slate-200 h-80 ml-12 w-[450px] mt-8 rounded-lg shadow-md overflow-auto'>

                    <div className='ml-8 leading-8 font-semibold'>
                    <div className='font-bold text-[19px] pt-4 pb-2'>
                        Parent's details
                    </div>
                        <p className='mb-1'>ID: {item.user_id}</p>
                        <p className='mb-1'>Name: {item.user_name}</p>
                        <p className='mb-1'>Email: {item.user_email}</p>
                        <p className='mb-1'>NIC: {item.nic}</p>
                        <p className='mb-1'>Contact: {item.contact_number}</p>
                        <p className='mb-1'>Address: {item.address}</p>
                        <p className='mb-1'>Children: {item.num_of_registered_children}</p>
                    </div>
                </div>

                {/* childrens details container */}
                <div className='bg-slate-200 w-80 h-80 ml-12 mt-8 rounded-lg shadow-md'>
                    
                    {/* title holder */}
                    <div className='font-bold mt-4 ml-3'>
                        Children's details
                    </div>

                    {/* rest of details */}
                    <div className='mt-4 ml-3 overflow-auto'>
                        <div onClick={child} className='mt-2 ml-4 p-2 w-64 h-16 font-serif cursor-pointer rounded-md bg-slate-50 shadow-md'>
                            <p>Name: Pasindu Sanjeewa</p>
                            <p>Vehicle: NA - 1111</p>
                        </div>
                        <div onClick={child} className='mt-2 ml-4 p-2 w-64 h-16 font-serif cursor-pointer rounded-md bg-slate-50 shadow-md'>
                            <p>Name: Kavindu Sanjeewa</p>
                            <p>Vehicle: NA - 1111</p>
                        </div>
                    </div>
                </div>

                {/* transaction details container */}
                </div>
                    <h3 className="text-[#5a5c69] pt-[25px] px-[25px] text-[24px] leading-8 font-normal cursor-pointer">Payment Details</h3>

                    {/*transaction button container */}
            <div className="flex text-center ml-32 mt-12">

{/* buttons */}
<div onClick={()=>updateToggle(1)} className={toggle === 1 ? "h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer" : "h-11 w-44 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"}>Paid</div>
<div onClick={()=>updateToggle(2)} className={toggle === 2 ? "ml-1 h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer" : "h-11 w-44 ml-1 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"}>Outstanding</div>
</div>
                    
                    {/* transactions table */}
                    <div className={toggle === 1 ? "details" : "details hidden"}>
                    <div className='ml-32 mr-32 shadow-md overflow-auto '>
                    <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
                    <thead className='border-y-4 border-white drop-shadow '>
                        <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
                        <th className='px-3.5 p-1 w-24 '>Transaction ID</th>
                        <th className='px-3.5 w-30'>Date</th>
                        <th className='px-3.5 w-30'>Amount(LKR)</th>
                        <th className='px-3.5 w-30'>Child ID</th>  
                        </tr>
                    </thead>

                    <tbody className=''>
                        <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                            <td className='text-center  p-3'> XX1</td>
                            <td>2023-01-01</td>
                            <td>5000</td>
                            <td>001</td>
                        </tr>
                        
                        <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md' >
                        <td className='text-center  p-3'> XX2</td>
                            <td>2023-01-05</td>
                            <td>5000</td>
                            <td>002</td>
                        </tr>

                        <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                        <td className='text-center  p-3'> XX3</td>
                            <td>2023-02-01</td>
                            <td>5000</td>
                            <td>001</td>
                        </tr>

                        <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                        <td className='text-center  p-3'> XX4</td>
                            <td>2023-01-05</td>
                            <td>5000</td>
                            <td>002</td>
                        </tr>
                    </tbody>

                    </table>
                </div>
                </div>

                {/* outstanding payments */}
                    
                    <div className={toggle === 2 ? "details" : "details hidden"}>
                    <div className='ml-32 mr-32 shadow-md overflow-auto '>
                    <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
                    <thead className='border-y-4 border-white drop-shadow '>
                        <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
                        <th className='px-3.5 p-1 w-24 '>Child ID</th>
                        <th className='px-3.5 w-30'>From</th>
                        <th className='px-3.5 w-30'>To</th>
                        <th className='px-3.5 w-30'>Amount(LKR)</th>
                        <th className='px-3.5 w-30'>Driver ID</th>  
                        </tr>
                    </thead>

                    <tbody className=''>
                        <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                            <td className='text-center  p-3'> XX1</td>
                            <td>2023-01-01</td>
                            <td>2023-01-31</td>
                            <td>5000</td>
                            <td>001</td>
                        </tr>
                        
                        <tr className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md' >
                        <td className='text-center  p-3'> XX2</td>
                            <td>2023-01-05</td>
                            <td>2023-02-05</td>
                            <td>5000</td>
                            <td>002</td>
                        </tr>
                    </tbody>

                    </table>
                </div>
                </div>
                
            </div>
        </MainLayout>
    </div>
  )
}

export default AdminParentsInfo