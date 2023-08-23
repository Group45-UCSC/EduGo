import schoolVan from"../../images/schoolVan.jpeg"
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard } from "react-icons/ai";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/vc/dashboard", icon: <AiFillDashboard /> },
  { title: "Vehicles", path: "/vc/vehicles", icon: <BsFillCarFrontFill /> },
  { title: "School Rides", path: "/vc/rides", icon: <FaShippingFast /> },
  { title: "Emergency", path: "/vc/emergency", icon: <FaCarCrash /> },
];

function ConditionCheck() {
  return (
    <MainLayout data={sideNavBarLinks}>
    <div>
        {/* topic */}
        <div className='font-bold ml-12 mt-4 text-2xl'>
            Vehicle Condition Check
        </div>

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

        {/* firstsqure */}
        <div className="mt-6 ml-24 pl-8 pt-4 pb-3 grid grid-cols-2 gap-[250px] bg-[#F4F4F4] w-[950px] rounded-lg shadow-md drop-shadow-md">
            <div className="">
                <h1 className="font-bold p-1 text-[19px]"> Vehicle Details</h1> 
                <p className="p-1"> Type : van</p>
                <p className="p-1"> Make : Nissan</p>
                <p className="p-1"> Model : Hiace</p>
                <p className="p-1"> Year : 1981</p>
                <p className="p-1"> Contact : 071-xxxxxxx</p>
            </div>
            <div className="">
                <button className=" p-2 mb-3 font-semibold bg-gradient-to-b from-amber-500 to-amber-300 w-40  rounded-lg shadow-md hover:shadow-lg transform hover:scale-[102%] trasition duration-300 ease-out  hover:cursor-pointer" >Previous Reports</button>
                <p  className="p-1" > License Plate : 50 - 0591</p> 
                <p  className="p-1"> License Plate : 50 - 0591</p> 
                <p  className="p-1">Engine Number : LH 1989</p>
                <p  className="p-1">Chassis Number : xxxxxxxxx</p>
                <p  className="p-1">Address : 23/4, Pannipitiya</p>
                <p  className="p-1">Last checked : 2023/ 03 / 26</p> 
            </div>
        </div>

        {/* secondsqure */}
        <div className="mt-4 ml-24 pl-8 pt-4 pb-3 mb-8 bg-[#F4F4F4] w-[950px]  rounded-lg shadow-md drop-shadow-md">
            <h1 className="font-bold p-1 text-[19px]">Feedback Report</h1>
            <form className="">
                <input type="text" placeholder="Comment on the vehicle condition here..." className="w-[850px] h-[100px] pl-6 pt-1 pb-2 mb-3 rounded-lg shadow-md drop-shadow-md"></input>
                <button className="ml-[710px] p-2 mb-2 font-semibold bg-gradient-to-b from-amber-500 to-amber-300 w-32  rounded-lg shadow-md hover:shadow-lg transform hover:scale-[102%] trasition duration-300 ease-out  hover:cursor-pointer" >Submit</button>
            </form>
        </div>


    </div>
    </MainLayout>
  )
}

export default ConditionCheck