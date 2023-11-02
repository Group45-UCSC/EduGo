import React from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import childpic from "../../images/child3.png";
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

function AdminChildren() {

    const location = useLocation();
    const dataParam = new URLSearchParams(location.search).get("data");
    const item = JSON.parse(decodeURIComponent(dataParam));

    const parent = () => {
        window.location.href = `/admin/ParentsInfo`;
      };
    
    const vehicle = () => {
        window.location.href = `/admin/VehicleInfo`;
      };

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div>
        {/* topic */}
        <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">Children's details</h1>

        {/* image and details container */}
        <div className='flex'>

            {/* image */}
            <div className='bg-slate-200 ml-12 mt-8 w-40 h-40 rounded-full shadow-md'><img src={childpic} alt="chilpic" className="w-40 h-40 rounded-full shadow-md"></img></div>

            {/* child's details */}
            <div className='bg-gradient-to-b from-amber-500 to-amber-300 w-1/3 ml-24 mt-4 rounded-lg shadow'>

                {/* detail container */}
                <div className='ml-4 mt-4 text-lg'>
                    <p>ID : {item.child_id}</p>
                    <p>Name : {item.child_name}</p>
                    <p>Age : {item.age}</p>
                    <p>School : {item.school_name}</p>
                    <p>Address : {item.address}</p>

                </div>
                
            </div>

        </div>

        {/* parents vehicles and siblings detail container */}
        <div className='flex'>

            {/* parent's details container */}
            <div onClick={parent} className='bg-slate-200 w-96 cursor-pointer h-80 ml-20 mt-8 rounded-lg shadow-md'>
                
                {/* title holder */}
                <div className='font-bold mt-4 ml-3'>
                    Parent's details
                </div>

                {/* rest of details */}
                <div className='mt-4 ml-3'>
                    <p>Name: {item.user_name}</p>
                    <p>Email: {item.user_email}</p>
                    <p>NIC: {item.nic}</p>
                    <p>Contact: {item.contact_number}</p>
                    <p>Address: {item.address}</p>
                </div>
            </div>

            {/* Vehicle details container */}
            <div onClick={vehicle} className='bg-slate-200 cursor-pointer w-96 h-80 ml-12 mt-8 rounded-lg shadow-md'>
                
                {/* title holder */}
                <div className='font-bold mt-4 ml-3'>
                    Vehicle details
                </div>

                {/* rest of details */}
                <div className='mt-4 ml-3'>
                    <p>Type: {item.vehicle_type}</p>
                    <p>Make: {item.make}</p>
                    <p>Model: {item.vehicle_model}</p>
                    <p>License number: {item.vehicle_no}</p>
                    <p>Morning ride: {item.location_morning_ride}</p>
                    <p>Noon ride: {item.location_noon_ride}</p>
                    <p>Ride status: {item.ride_type}</p>
                    <p>Passenger status: Dropped</p>
                </div>
            </div>

            

        </div>




    </div>
      </MainLayout>
    </div>
  );
}

export default AdminChildren;
