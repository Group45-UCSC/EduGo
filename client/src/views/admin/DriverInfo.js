import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import driverpic from "../../images/driver1.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
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

function AdminDriverInfo() {

    const location = useLocation();
    const dataParam = new URLSearchParams(location.search).get("data");
    const item = JSON.parse(decodeURIComponent(dataParam));

    const [viewPopup, setViewPopup] = useState(false);

    function showPopup() {
        setViewPopup(true);
    }

    function hidePopup() {
        setViewPopup(false);
    }

    return (
        <div>
            <MainLayout data={sideNavBarLinks}>
                <div>
                    {/* topic */}
                    <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">Driver Details</h1>

                    {/* image and details container */}
                    <div className='flex'>

                        {/* image and tracking container */}
                        <div>

                            {/* image */}
                            <div className='bg-gradient-to-b from-amber-500 to-amber-300 ml-20 mt-8 w-44 h-44 mr-14 rounded-full shadow-md'><img src={driverpic} alt="driverpic" className="w-44 h-44 rounded-full shadow-md"></img></div>

                            {/* status & location */}
                            <div>
                                <h2 className='mt-8 ml-20 font-semibold text-[17px]'>Ride Status : Ongoing</h2>
                                <div onClick={showPopup} className='bg-gradient-to-b from-amber-500 to-amber-300 w-28 h-9 ml-28 mt-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[102%] trasition duration-300 ease-out  hover:cursor-pointer'>

                                    <p className='flex pt-2 mt-4 text-[15px] ml-6 font-semibold'><FaMapMarkerAlt className="mt-1 mr-2" />Track</p>
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
                                    <p className='mb-1'>ID: {item.user_id}</p>
                                    <p className='mb-1'>Name: {item.user_name}</p>
                                    <p className='mb-1'>Email: {item.user_email}</p>
                                    <p className='mb-1'>NIC: {item.nic}</p>
                                    <p className='mb-1'>Contact: {item.contact_number}</p>
                                    <p className='mb-1'>Address: {item.address}</p>
                                </div>
                            </div>

                            {/* Vehicle details container */}
                            <NavLink
                  to={`/admin/vehicleinfo/${
                    item.vehicle_id
                  }?data=${encodeURIComponent(
                    JSON.stringify(item)
                  )}`}
                >
                            <div className='bg-slate-200 cursor-pointer h-80 ml-12 w-[750px] mt-8 rounded-lg shadow-md'>

                                <div className='mt-4 ml-8 leading-8 font-semibold'>
                                    <div className='font-bold text-[19px] pt-4 pb-2'>
                                        Vehicle details
                                    </div>
                                    <p className='mb-1'>Type: {item.vehicle_type}</p>
                                    <p className='mb-1'>Make: {item.make}</p>
                                    <p className='mb-1'>Model: {item.vehicle_model}</p>
                                    <p className='mb-1'>License number: {item.vehicle_no}</p>
                                    <p className='mb-1'>Starting: Homagama</p>
                                    <p className='mb-1'>Destination: Maharagama</p>
                                    <p className='mb-1'>Start time: 06.00 AM</p>
                                </div>
                            </div>
                            </NavLink>
                        </div>
                    </div>

                </div>

                {/* popup */}
                {viewPopup && (
                    <div className="fixed top-0 left-0 translate-x-[-16px] w-[102.6%] h-full bg-stone-900/75">

                        {/* close button */}
                        <div onClick={hidePopup} className="flex w-16 h-12 bg-red-600 float-right mr-16 mt-4 text-white text-lg pt-2 pl-4 cursor-pointer hover:bg-red-700 shadow-lg">
                            <AiOutlineClose className="mt-2 ml-2" />
                        </div>

                        {/* map container */}
                        <div className="mt-16 ml-80 mr-16 bg-white h-[600px]">
                            <iframe
                                title="current location"
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.902932303563!2d79.85857797456966!3d6.902210818647488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sUniversity%20of%20Colombo%20School%20of%20Computing%20(UCSC)!5e0!3m2!1sen!2slk!4v1691084338803!5m2!1sen!2slk"
                            ></iframe>
                        </div>
                    </div>

                )}
            </MainLayout>
        </div>
    )
}

export default AdminDriverInfo