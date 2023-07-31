import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import schoolVan from "../../images/schoolVan.jpeg"

const sideNavBarLinks = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <FaBeer /> },
  { title: "Employees", path: "/admin/employees", icon: <FaBeer /> },
  { title: "Drivers", path: "/admin/drivers", icon: <FaBeer /> },
  { title: "School Rides", path: "/admin/rides", icon: <FaBeer /> },
  { title: "Children", path: "/admin/childrenlist", icon: <FaBeer /> },
  { title: "Finance", path: "/admin/finance", icon: <FaBeer /> },
];

function AdminVehicleInfo() {
  return (
    <div>
        <MainLayout data={sideNavBarLinks}>
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
                <div className='bg-slate-200 h-[480px] ml-12 w-[500px] mt-8 rounded-lg shadow-md'>
                
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
        </MainLayout>
    </div>
  )
}

export default AdminVehicleInfo