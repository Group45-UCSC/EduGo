import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import schoolVan from"../../images/schoolVan.jpeg";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { AiFillDashboard } from "react-icons/ai";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/vc/dashboard", icon: <AiFillDashboard /> },
  { title: "Vehicles", path: "/vc/vehicles", icon: <BsFillCarFrontFill /> },
  { title: "School Rides", path: "/vc/rides", icon: <FaShippingFast /> },
  { title: "Emergency", path: "/vc/emergency", icon: <FaUserGroup /> },
];


function VehiclesDetails() {
  return (
    <MainLayout data={sideNavBarLinks}>
    <div>
          {/* topic */}
          <div className='font-bold ml-12 mt-4 text-2xl'>Vehicle Details</div>

{/* display image container */}
<div className="flex mt-8">
    <BsChevronLeft className="mt-14 ml-[30%] w-8 h-8"/>
      <img src={schoolVan} alt="school van" className="ml-12 max-h-[150px] max-w-[300px]"></img>
    <BsChevronRight className="mt-14 ml-12 w-8 h-8"/>
</div>

{/* all images container */}
<div className="flex mt-8">
    <img src={schoolVan} alt="school van" className="ml-[20%] h-[50px]"></img>
    <img src={schoolVan} alt="school van" className="ml-2 h-[50px]"></img>
    <img src={schoolVan} alt="school van" className="ml-2 h-[50px]"></img>
    <img src={schoolVan} alt="school van" className="ml-2 h-[50px]"></img>
    <img src={schoolVan} alt="school van" className="ml-2 h-[50px]"></img>
    <img src={schoolVan} alt="school van" className="ml-2 h-[50px]"></img>
    <img src={schoolVan} alt="school van" className="ml-2 h-[50px]"></img>
</div>

{/* details container */}
<div className="flex mt-8 mb-10">

    {/* vehicle details container */}
    <div className='bg-slate-200 h-[480px] ml-12 w-[350px] mt-8 rounded-lg shadow-md drop-shadow-md'>
    
        <div className='mt-4 ml-8 leading-8 font-semibold'>
        <div className='font-bold text-[19px] pt-3 pb-2'>
            Vehicle Details
        </div>
        <p className='mb-1'>Type: van</p>
        <p className='mb-1'>Make: Toyota</p>
        <p className='mb-1'>Model: Hiace Dolphin 2001</p>
        <p className='mb-1'>Year: 2001</p>
        <p className='mb-1'>License number: NA - 6111</p>
        <p className='mb-1'>Engine Number: LH 1989</p>
        <p className='mb-1'>Chassis Number: 1ABCD2EFGH14JKL</p>
        <p className='mb-1'>Starting: Homagama</p>
        <p className='mb-1'>Destination: Maharagama</p>
        <p className='mb-1'>Ride Status: Ongoing</p>
        <p className='mb-1'>Last checked:2023/06/27</p>
        </div>
    </div>

    {/* owner's details container */}
    <div className='bg-slate-200 h-[480px] ml-8 w-[350px] mt-8 rounded-lg shadow-md drop-shadow-md'>
    
        <div className='mt-4 ml-8 leading-8 font-semibold'>
        <div className='font-bold text-[19px] pt-3 pb-2'>
            Owner's Details
        </div>
        <p className='mb-1'>Name: Sandun Matheesha</p>
        <p className='mb-1'>NIC number:923678555V</p>
        <p className='mb-1'>Contact Number: 0778967543</p>
        <p className='mb-1'>Address:  12/4, pannipitiya</p>
        <p className='mb-1'>Birthday : 1992/02/23</p>     
        </div>
    </div>

    {/* driver details container */}
    <div className='bg-slate-200 h-[480px] ml-8 w-[350px] mt-8 rounded-lg shadow-md drop-shadow-md'>
    
        <div className='mt-4 ml-8 leading-8 font-semibold'>
        <div className='font-bold text-[19px] pt-3 pb-2'>
            Driver's Details
        </div>
        <p className='mb-1'>Name: Rasindu Vimanga</p>
        <p className='mb-1'>Email: rasindu@gmail.com</p>
        <p className='mb-1'>NIC: 980011234V</p>
        <p className='mb-1'>Contact: 077-1231234</p>
        <p className='mb-1'>Address: No:10, Queens Road, Colombo 03</p>
        <p className='mb-1'>Birthday: 1998-01-01</p>
        <p className='mb-1'>License Photo:</p>
        <img src={schoolVan} alt="school van" className="ml-[25%] h-[100px]"></img>
        
        </div>
    </div>

</div>

    </div>
    </MainLayout>
  )
}

export default VehiclesDetails