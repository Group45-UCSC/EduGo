import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import schoolVan from "../../images/schoolVan.jpeg"
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

function AdminVehicleInfo() {
    const driver = () => {
        window.location.href = `/admin/driverinfo`;
      };
  return (
    <div>
        <MainLayout data={sideNavBarLinks}>
            {/* topic */}
            <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">Vehicle Details</h1>

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
            <div className="flex mt-8">

                {/* vehicle details container */}
                <div className='bg-slate-200 h-[480px] ml-16 w-[500px] mt-8 rounded-lg shadow-md'>
                
                    <div className='mt-4 ml-8 leading-8 font-semibold'>
                    <div className='font-bold text-[19px] pt-4 pb-2'>
                        Vehicle details
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
                    <p className='mb-1'>Start time: 06.00 AM</p>
                    <p className='mb-1'>Ride Status: Ongoing</p>
                    </div>
                </div>

                {/* driver details container */}
                <div onClick={driver} className='bg-slate-200 cursor-pointer h-[480px] ml-12 w-[500px] mt-8 rounded-lg shadow-md'>
                
                    <div className='mt-4 ml-8 leading-8 font-semibold'>
                    <div className='font-bold text-[19px] pt-4 pb-2'>
                        Driver's details
                    </div>
                    <p className='mb-1'>Name: Rasindu Vimanga</p>
                    <p className='mb-1'>Email: rasindu@gmail.com</p>
                    <p className='mb-1'>NIC: 980011234V</p>
                    <p className='mb-1'>Contact: 077-1231234</p>
                    <p className='mb-1'>Address: No:10, Queens Road, Colombo 03</p>
                    <p className='mb-1'>Birthday: 1998-01-01</p>
                    <p className='mb-1'>Service Registration: XXXXXX</p>
                    <p className='mb-1'>License Photo:</p>
                    <img src={schoolVan} alt="school van" className="ml-[25%] h-[100px]"></img>
                    
                    </div>
                </div>

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
            
        </MainLayout>
    </div>
  )
}

export default AdminVehicleInfo