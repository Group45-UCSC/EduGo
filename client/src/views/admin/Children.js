import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <FaBeer /> },
  { title: "Employees", path: "/admin/employees", icon: <FaBeer /> },
  { title: "Drivers", path: "/admin/drivers", icon: <FaBeer /> },
  { title: "School Rides", path: "/admin/rides", icon: <FaBeer /> },
  { title: "Children", path: "/admin/children", icon: <FaBeer /> },
  { title: "Finance", path: "/admin/finance", icon: <FaBeer /> },
];

function Children() {
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div>
        {/* topic */}
        <div className='font-bold ml-12 mt-4 text-2xl'>Children's details</div>

        {/* image and details container */}
        <div className='flex'>

            {/* image */}
            <div className='bg-slate-200 ml-12 mt-8 w-40 h-40 rounded-full shadow-md'></div>

            {/* child's details */}
            <div className='bg-gradient-to-b from-amber-500 to-amber-300 w-1/3 ml-24 mt-4 rounded-lg shadow'>

                {/* detail container */}
                <div className='ml-4 mt-4 text-lg'>
                    <p>ID : 001</p>
                    <p>Name : Charitha Bandaraadhikaram</p>
                    <p>Age : 16</p>
                    <p>School : Dharmapala College, Mahragama</p>
                    <p>Address : Pitipana, Homagama</p>

                </div>
                
            </div>

        </div>

        {/* parents vehicles and siblings detail container */}
        <div className='flex'>

            {/* parent's details container */}
            <div className='bg-slate-200 w-80 h-80 ml-12 mt-8 rounded-lg shadow-md'>
                
                {/* title holder */}
                <div className='font-bold mt-4 ml-3'>
                    Parent's details
                </div>

                {/* rest of details */}
                <div className='mt-4 ml-3'>
                    <p>Name: Gamini Pushpakumara</p>
                    <p>Email: gamini@gmail.com</p>
                    <p>NIC: 666666666V</p>
                    <p>Contact: 071-xxxxxxx</p>
                    <p>Address: Pitipana, Homagama</p>
                </div>
            </div>

            {/* Vehicle details container */}
            <div className='bg-slate-200 w-80 h-80 ml-12 mt-8 rounded-lg shadow-md'>
                
                {/* title holder */}
                <div className='font-bold mt-4 ml-3'>
                    Vehicle details
                </div>

                {/* rest of details */}
                <div className='mt-4 ml-3'>
                    <p>Type: van</p>
                    <p>Make: Toyota</p>
                    <p>Model: Hiace Dolphin 2001</p>
                    <p>License number: NA - 6111</p>
                    <p>Starting: Homagama</p>
                    <p>Destination: Maharagama</p>
                    <p>Ride status: Ongoing</p>
                    <p>Passenger status: Dropped</p>
                </div>
            </div>

            {/* Siblings details container */}
            <div className='bg-slate-200 w-80 h-80 ml-12 mt-8 rounded-lg shadow-md'>
                
                {/* title holder */}
                <div className='font-bold mt-4 ml-3'>
                    Sibling's details
                </div>

                {/* rest of details */}
                <div className='mt-4 ml-3'>
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

        </div>




    </div>
      </MainLayout>
    </div>
  );
}

export default Children;
