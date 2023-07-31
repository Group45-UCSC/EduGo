import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";

const sideNavBarLinks = [
    { title: "Dashboard", path: "/admin/dashboard", icon: <FaBeer /> },
    { title: "Employees", path: "/admin/employees", icon: <FaBeer /> },
    { title: "Drivers", path: "/admin/drivers", icon: <FaBeer /> },
    { title: "School Rides", path: "/admin/rides", icon: <FaBeer /> },
    { title: "Children", path: "/admin/childrenlist", icon: <FaBeer /> },
    { title: "Finance", path: "/admin/finance", icon: <FaBeer /> },
  ];

function AdminParentsInfo() {
  return (
    <div>
        <MainLayout data={sideNavBarLinks}>
            <div>
            {/* topic */}
            <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">Parent's Details</h1>

            {/* image and details container */}
            <div className='flex'>

                {/* image */}
                <div className='bg-slate-200 ml-12 mt-8 w-40 h-40 rounded-full shadow-md'></div>

                {/* child's details */}
                <div className='bg-slate-200 h-80 ml-12 w-[450px] mt-8 rounded-lg shadow-md overflow-auto'>

                    <div className='ml-8 leading-8 font-semibold'>
                    <div className='font-bold text-[19px] pt-4 pb-2'>
                        Parent's details
                    </div>
                        <p className='mb-1'>ID: 002</p>
                        <p className='mb-1'>Name: Pamudu Kumarage</p>
                        <p className='mb-1'>Email: pamudu@gmail.com</p>
                        <p className='mb-1'>NIC: 951234678V</p>
                        <p className='mb-1'>Contact: 071-xxxxxxx</p>
                        <p className='mb-1'>Address: Pitipana, Homagama</p>
                        <p className='mb-1'>Dependents: 2</p>
                    </div>
                </div>

                {/* childrens details container */}
                <div className='bg-slate-200 w-80 h-80 ml-12 mt-8 rounded-lg shadow-md'>
                    
                    {/* title holder */}
                    <div className='font-bold mt-4 ml-3'>
                        Dependents' details
                    </div>

                    {/* rest of details */}
                    <div className='mt-4 ml-3 overflow-auto'>
                        <div className='mt-2 ml-4 p-2 w-64 h-16 font-serif cursor-pointer rounded-md bg-slate-50 shadow-md'>
                            <p>Name: Pasindu Sanjeewa</p>
                            <p>Vehicle: NA - 1111</p>
                        </div>
                        <div className='mt-2 ml-4 p-2 w-64 h-16 font-serif cursor-pointer rounded-md bg-slate-50 shadow-md'>
                            <p>Name: Kavindu Sanjeewa</p>
                            <p>Vehicle: NA - 1111</p>
                        </div>
                    </div>
                </div>

                {/* transaction details container */}
                </div>
                    <h3 className="text-[#5a5c69] pt-[25px] px-[25px] text-[24px] leading-8 font-normal cursor-pointer">Transaction Details</h3>
                    
                    {/* transactions table */}
                    <div className='ml-32 mt-4 mr-32 shadow-md overflow-auto '>
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
        </MainLayout>
    </div>
  )
}

export default AdminParentsInfo