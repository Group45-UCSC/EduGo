import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiOutlineClose } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useLocation, NavLink } from "react-router-dom";

import dlcard from "../../images/dlcard.jpg";
import VehiCarousel from "../../components/carousel/VehiCarousel";


import { AiFillDashboard } from "react-icons/ai";
import { BsCoin } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";

// Carouselimage
import vcv1 from"../../images/vcv1.jpg";
import vcv2 from"../../images/vcv2.jpg";
import vcv3 from"../../images/vcv3.jpg";
import vcv4 from"../../images/vcv4.jpg";
import vcv5 from"../../images/vcv5.jpg";
import vcv6 from"../../images/vcv6.jpg";

const CAROUSEL_DATA = [
    {
      image:vcv1,
      imageAlt:vcv1
    },
    {
      image:vcv2,
      imageAlt:vcv2
    },
    {
      image:vcv3,
      imageAlt:vcv3
    },
    {
      image:vcv4,
      imageAlt:vcv4
    },
    {
      image:vcv5,
      imageAlt:vcv5
    },
    {
      image:vcv6,
      imageAlt:vcv6
    }
  ]

const sideNavBarLinks = [
    { title: "Dashboard", path: "/admin/dashboard", icon: <AiFillDashboard /> },
    { title: "Employees", path: "/admin/employees", icon: <FaUserGroup /> },
    { title: "Drivers & Vehicles", path: "/admin/drivers", icon: <BsFillCarFrontFill /> },
    { title: "School Rides", path: "/admin/rides", icon: <FaShippingFast /> },
    { title: "Children & Parents", path: "/admin/childrenlist", icon: <FaChild /> },
    { title: "Finance", path: "/admin/finance", icon: <BsCoin /> },
];

function AdminVehicleInfo() {

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
                {/* topic */}
                <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">Vehicle Details</h1>

                <VehiCarousel data={CAROUSEL_DATA}/>

                {/* status & location */}
                <div className="ml-[35%]">
                    <h2 className='mt-8 ml-20 font-semibold text-[17px]'>Ride Status : Ongoing</h2>
                    <div onClick={showPopup} className='bg-gradient-to-b from-amber-500 to-amber-300 w-28 h-9 ml-28 mt-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[102%] trasition duration-300 ease-out  hover:cursor-pointer'>

                        <p className='flex pt-2 mt-4 text-[15px] ml-6 font-semibold'><FaMapMarkerAlt className="mt-1 mr-2" />Track</p>
                    </div>
                </div>

                {/* details container */}
                <div className="flex mt-8">

                    {/* vehicle details container */}
                    <div className='bg-slate-200 h-[480px] ml-16 w-[500px] mt-8 rounded-lg shadow-md'>
                    
                        <div className='mt-4 ml-8 leading-8 font-semibold'>
                            
                            <div className='font-bold text-[19px] pt-4 pb-2'>
                                Vehicle details
                            </div>
                            <p className='mb-1'>Type: {item.vehicle_type}</p>
                            <p className='mb-1'>Make: Toyota</p>
                            <p className='mb-1'>Model: {item.vehicle_model}</p>
                            <p className='mb-1'>Year: 2001</p>
                            <p className='mb-1'>License number: {item.vehicle_no}</p>
                            <p className='mb-1'>No. of seats: {item.num_of_seats}</p>
                            <p className='mb-1'>Engine Number: LH 1989</p>
                            <p className='mb-1'>Chassis Number: 1ABCD2EFGH14JKL</p>
                            <p className='mb-1'>Starting: Homagama</p>
                            <p className='mb-1'>Destination: Maharagama</p>
                            <p className='mb-1'>Start time: 06.00 AM</p>
                        </div>
                    
                    </div>

                    

                    {/* driver details container */}
                    <NavLink
                  to={`/admin/driverinfo/${
                    item.user_id
                  }?data=${encodeURIComponent(
                    JSON.stringify(item)
                  )}`}
                >
                    <div className='bg-slate-200 cursor-pointer h-[480px] ml-8 w-[500px] mt-8 rounded-lg shadow-md'>

                        <div className='mt-4 ml-8 leading-8 font-semibold'>
                            <div className='font-bold text-[19px] pt-4 pb-2'>
                                Driver's details
                            </div>
                            <p className='mb-1'>Name: {item.user_name}</p>
                            <p className='mb-1'>Email: {item.user_email}</p>
                            <p className='mb-1'>NIC: {item.nic}</p>
                            <p className='mb-1'>Contact: {item.contact_no}</p>
                            <p className='mb-1'>Address: {item.address}</p>
                            <p className='mb-1'>Birthday: 1998-01-01</p>
                            <p className='mb-1'>Service Registration: {item.registration_no}</p>
                            <p className='mb-1'>License Photo:</p>
                            <img src={dlcard} alt="school van" className="ml-[25%] h-[100px]"></img>

                        </div>
                    </div>
                    </NavLink>

                </div>

                {/* vehicle condition reports */}

                <h3 className="text-[#5a5c69] pt-[25px] px-[25px] text-[24px] leading-8 font-normal cursor-pointer">Condition checks</h3>

                <button className="h-12 w-60 ml-[20%] mt-8 font-semibold bg-gradient-to-b from-amber-500 to-amber-300  rounded-lg shadow-md">
                    Last Checked - 2023/08/26
                </button>
                <button className="h-12 w-60 ml-[20%]  mt-8 font-semibold bg-gradient-to-b from-amber-500 to-amber-300  rounded-lg shadow-md">
                    Next date - 2023/09/26
                </button>

                <div className="mt-4 ml-[20%] pl-8 pt-4 pb-3 mb-8 bg-[rgb(244,244,244)] w-[750px]  rounded-lg shadow-md drop-shadow-md">
                    <div className='grid grid-cols-2 gap-[0px]'>
                        <h1 className="font-bold p-1 text-[16px]">Checked Date:: 2023/06/26</h1>
                        <h1 className="font-bold p-1 text-[16px]">Coordinator:: Mr.Manjula Prabath</h1>
                        <h1 className="font-bold p-1 text-[16px]">Date for Completion:: 2023/09/26</h1>
                        <h1 className="font-bold p-1 text-[16px]">Status:: Failed</h1>
                    </div>
                    <form className="">
                        <div className=" mb-3">
                            <h1 className="font-bold p-1 mt-4 text-[16px] text-slate-800">Evaluation report</h1>
                            <div className="ml-4">
                                <p className=' text-green-700'><b> Exterior Condition</b> </p>
                                <p className=' text-red-700'> <b>Interior Condition</b></p>
                                <p className=' text-green-700'><b> Mechanical Condition</b></p>
                                <p className=' text-green-700'><b> Undercarriage and Suspension </b> </p>
                                <p className=' text-red-700'> <b> Documentation and Maintenance History</b></p>
                                <p className=' text-green-700'> <b> Brakes and Steeringn</b></p>
                                <p className=' text-red-700'> <b>Transmission and Drivetrain </b></p>
                                <p className=' text-green-700'> <b> Electrical and Electronics </b></p>
                            </div>
                        </div>
                        <input type="text" placeholder="Comment on the vehicle condition here..." className="w-[620px] h-[100px] pl-6 pt-1 pb-2 mb-3 rounded-lg shadow-md drop-shadow-md"></input>
                    </form>
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

export default AdminVehicleInfo