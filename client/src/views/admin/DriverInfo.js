import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa"

const sideNavBarLinks = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <FaBeer /> },
  { title: "Employees", path: "/admin/employees", icon: <FaBeer /> },
  { title: "Drivers", path: "/admin/drivers", icon: <FaBeer /> },
  { title: "School Rides", path: "/admin/rides", icon: <FaBeer /> },
  { title: "Children", path: "/admin/childrenlist", icon: <FaBeer /> },
  { title: "Finance", path: "/admin/finance", icon: <FaBeer /> },
];

function AdminDriverInfo() {
  return (
    <div>
        <MainLayout data={sideNavBarLinks}>
            <div>
            {/* topic */}
            <div className='font-bold ml-12 mt-4 text-2xl'>Driver Details</div>

            {/* image and details container */}
            <div className='flex'>

                {/* image and tracking container */}
                <div>

                {/* image */}
                <div className='bg-gradient-to-b from-amber-500 to-amber-300 ml-20 mt-8 w-44 h-44 mr-14 rounded-full shadow-md'></div>

                {/* status & location */}
                <div>
                    <h2 className='mt-8 ml-20 font-semibold text-[17px]'>Ride Status : Ongoing</h2>
                    <div className='bg-gradient-to-b from-amber-500 to-amber-300 w-28 h-9 ml-28 mt-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[102%] trasition duration-300 ease-out  hover:cursor-pointer'>
                        
                        <p className='flex pt-2 mt-4 text-[15px] ml-6 font-semibold'><FaMapMarkerAlt className="mt-1 mr-2"/>Track</p>
                    </div>
                </div>

                </div>

                {/* Driver's and vehicles detail container */}
                <div className="DetailContainer">

                {/* driver's details container */}
                <div className='bg-slate-200 h-72 ml-12 w-[750px] mt-8 rounded-lg shadow-md'>

                    <div className='mt-4 ml-8 leading-8 font-semibold'>
                    <div className='font-bold text-[19px] pt-4 pb-2'>
                        Driver details
                    </div>
                        <p className='mb-1'>ID: 002</p>
                        <p className='mb-1'>Name: Sachithra Dissanayake</p>
                        <p className='mb-1'>Email: Sachithra@gmail.com</p>
                        <p className='mb-1'>NIC: 951234678V</p>
                        <p className='mb-1'>Contact: 071-xxxxxxx</p>
                        <p className='mb-1'>Address: Pitipana, Homagama</p>
                    </div>
                </div>

                {/* Vehicle details container */}
                <div className='bg-slate-200 h-80 ml-12 w-[750px] mt-8 rounded-lg shadow-md'>
                
                    <div className='mt-4 ml-8 leading-8 font-semibold'>
                    <div className='font-bold text-[19px] pt-4 pb-2'>
                        Vehicle details
                    </div>
                    <p className='mb-1'>Type: van</p>
                    <p className='mb-1'>Make: Toyota</p>
                    <p className='mb-1'>Model: Hiace Dolphin 2001</p>
                    <p className='mb-1'>License number: NA - 6111</p>
                    <p className='mb-1'>Starting: Homagama</p>
                    <p className='mb-1'>Destination: Maharagama</p>
                    <p className='mb-1'>Start time: 06.00 AM</p>
                    </div>
                </div>
                </div>
        </div>

        </div>
        </MainLayout>
    </div>
  )
}

export default AdminDriverInfo