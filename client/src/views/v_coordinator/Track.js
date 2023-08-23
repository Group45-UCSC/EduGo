import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import Vtracking from"../../images/Vtracking.png"
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

function Track() {
  return (
    <MainLayout data={sideNavBarLinks}>
    <div className="">

    <div className='font-bold ml-20 mt-4 text-2xl'>
      <h1>Vehicle Tracking</h1>
    </div>

    <div className="grid grid-cols-2 gap-[50px] mb-12">
      <img src={Vtracking} alt="trackingimg" className="w-[500px] mt-4 ml-12"/>

      <div className="map  mr-8 ml-1 mt-12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9029768701894!2d79.85857797237188!3d6.902205493097086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sUniversity%20of%20Colombo%20School%20of%20Computing%20(UCSC)!5e0!3m2!1sen!2slk!4v1690785415194!5m2!1sen!2slk" title="map" className="w-[550px] h-[450px]">
        </iframe>
      </div> 
    </div>

    </div>
    </MainLayout>
  )
}

export default Track