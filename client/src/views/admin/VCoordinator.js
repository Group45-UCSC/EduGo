import React, {useState} from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiOutlineClose } from "react-icons/ai";
import VehiCarousel from "../../components/carousel/VehiCarousel";
import vcpic from "../../images/vc1.png";

import { AiFillDashboard } from "react-icons/ai";
import { BsCoin } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { useLocation } from "react-router-dom";

// Carouselimage
import vcv1 from"../../images/vcv1.jpg";
import vcv2 from"../../images/vcv2.jpg";
import vcv3 from"../../images/vcv3.jpg";
import vcv4 from"../../images/vcv4.jpg";
import vcv5 from"../../images/vcv5.jpg";
import vcv6 from"../../images/vcv6.jpg";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <AiFillDashboard /> },
  { title: "Employees", path: "/admin/employees", icon: <FaUserGroup /> },
  { title: "Drivers & Vehicles", path: "/admin/drivers", icon: <BsFillCarFrontFill /> },
  { title: "School Rides", path: "/admin/rides", icon: <FaShippingFast /> },
  { title: "Children & Parents", path: "/admin/childrenlist", icon: <FaChild /> },
  { title: "Finance", path: "/admin/finance", icon: <BsCoin /> },
];

function AdminVCoordinator() {

    const location = useLocation();
    const dataParam = new URLSearchParams(location.search).get("data");
    const coordinator = JSON.parse(decodeURIComponent(dataParam));

  const [viewPopup, setViewPopup] = useState(false);

  function showPopup() {
    setViewPopup(true);
  }

  function hidePopup() {
    setViewPopup(false);
  }

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

  const emergency = () => {
    window.location.href = `/admin/emergency`;
  };

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div>
            {/* topic */}
            <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">Vehicle Coordinator</h1>

            {/* image and details container */}
            <div className='flex'>

                {/* image */}
                <div className='bg-gradient-to-b from-amber-500 to-amber-300 ml-20 mt-8 w-52 h-52 mr-14 rounded-full shadow-md'><img src={vcpic} alt="vcpic" className="w-52 h-52 rounded-full shadow-md"></img></div>

                  {/* driver's details container */}
                  <div className='bg-slate-200 h-64 ml-12 w-[750px] mt-8 rounded-lg shadow-md'>

                      <div className='mt-4 ml-8 leading-8 font-semibold'>
                        <p className='mb-1'>ID: {coordinator.user_id}</p>
                        <p className='mb-1'>Name: {coordinator.user_name}</p>
                        <p className='mb-1'>Email: {coordinator.user_email}</p>
                        <p className='mb-1'>NIC: {coordinator.nic}</p>
                        <p className='mb-1'>Contact: {coordinator.contact_number}</p>
                        <p className='mb-1'>Address: {coordinator.address}</p>
                      </div>
                  </div>
          </div>

           {/* cards container */}
        <div className="flex font-semibold w-full pl-[15%]">

          {/* cards */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-200 h-64 w-[25%] ml-[10%] mt-8 rounded-2xl shadow-lg">
            <p className="mt-4 ml-4">Handled emergencies :</p>
            <p className="mt-4 text-3xl float-right mr-8">08</p>

            <div className="mt-16 text-sm">
            <div onClick={emergency} className="mt-2 ml-4 p-2 w-56 h-16 cursor-pointer rounded-md bg-slate-100 shadow-md">
              <p>Emergency ID : 012</p>
              <p>Date : 2023/07/10</p>
            </div>
            <div onClick={emergency} className="mt-2 ml-4 p-2 w-56 h-16 cursor-pointer rounded-md bg-slate-100 shadow-md">
              <p>Emergency ID : 015</p>
              <p>Date : 2023/07/20</p>
            </div>
            </div>

          </div>

          <div className="bg-gradient-to-br from-amber-500 to-amber-200 h-64 w-[25%] ml-[12%] mt-8 rounded-2xl shadow-lg">
            <p className="mt-4 ml-4">Conducted checks :</p>
            <p className="mt-4 text-3xl float-right mr-8">07</p>

            <div className="mt-16 text-sm">
            <div onClick={showPopup} className="mt-2 ml-4 p-2 w-56 h-16 cursor-pointer rounded-md bg-slate-100 shadow-md">
              <p>Vehicle : PL - 1854</p>
              <p>Date : 2023/07/25</p>
            </div>
            <div onClick={showPopup} className="mt-2 ml-4 p-2 w-56 h-16 cursor-pointer rounded-md bg-slate-100 shadow-md">
              <p>Vehicle : PL - 2214</p>
              <p>Date : 2023/07/29</p>
            </div>
            </div>

          </div>

        </div>

        </div>


        {/* popup container */}

        {viewPopup && (
          <div className="fixed top-0 left-0 translate-x-[-16px] w-[102.6%] h-full overflow-auto bg-stone-900/75">
            {/* close button */}
            <div
              onClick={hidePopup}
              className="flex w-16 h-12 bg-red-600 float-right mr-16 mt-4 text-white text-lg pt-2 pl-4 cursor-pointer hover:bg-red-700 shadow-lg"
            >
              <AiOutlineClose className="mt-2 ml-2" />
            </div>

            {/* details container */}
            <div className="mt-16 ml-80 mr-16 bg-[#F4F4F4] rounded-lg shadow-lg drop-shadow-lg">

            <div className='font-bold ml-12 mt-4 pt-4 text-2xl'>Condition Check</div>
            <VehiCarousel data={CAROUSEL_DATA}/>

              {/* firstsqure */}
              <div className="mt-4 ml-[10%] pl-8 pt-4 pb-3 grid grid-cols-2 gap-[250px] bg-[#F4F4F4] w-[900px] rounded-lg shadow-md drop-shadow-md">
                <div className="">
                  <h1 className="font-bold p-1 text-[19px]">
                    {" "}
                    Vehicle Details
                  </h1>
                  <p className="p-1"> Type : van</p>
                  <p className="p-1"> Make : Nissan</p>
                  <p className="p-1"> Model : Hiace</p>
                  <p className="p-1"> Year : 1981</p>
                  <p className="p-1"> Contact : 071-xxxxxxx</p>
                </div>
                <div className="mt-8">
                  <p className="p-1"> License Plate : 50 - 0591</p>
                  <p className="p-1"> License Plate : 50 - 0591</p>
                  <p className="p-1">Engine Number : LH 1989</p>
                  <p className="p-1">Chassis Number : xxxxxxxxx</p>
                  <p className="p-1">Address : 23/4, Pannipitiya</p>
                  <p className="p-1">Last checked : 2023/ 03 / 26</p>
                </div>
              </div>
              <button className="h-12 w-60 ml-[40%] mt-8 font-semibold bg-gradient-to-b from-amber-500 to-amber-300  rounded-lg shadow-md hover:shadow-lg transform hover:scale-[102%] trasition duration-300 ease-out  hover:cursor-pointer">
                    Next date - 2023/04/26
                </button>

                {/* feedbacks */}
                <div className="mt-4 ml-[10%] pl-8 pt-4 pb-3 mb-8 bg-[#F4F4F4] w-[900px]  rounded-lg shadow-md drop-shadow-md">
            <h1 className="font-bold pt-1 text-[19px]">Previous Reports</h1>

            <div className="mt-4 ml-8 pl-8 pt-4 pb-3 mb-8 bg-[rgb(244,244,244)] w-[750px]  rounded-lg shadow-md drop-shadow-md">
            <div className='grid grid-cols-2 gap-[0px]'>
            <h1 className="font-bold p-1 text-[16px]">Checked Date:: 2023/03/26</h1>
            <h1 className="font-bold p-1 text-[16px]">Coordinator:: Mr.Manjula Prabath</h1>
            <h1 className="font-bold p-1 text-[16px]">Date for Completion:: 2023/04/26</h1>
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

          
            </div>
            </div>
          </div>
        )}
      </MainLayout>
    </div>
  )
}

export default AdminVCoordinator