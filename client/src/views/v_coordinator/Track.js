import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import Vtracking from"../../images/Vtracking.png"
import { FaBeer } from "react-icons/fa";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/vc/dashboard", icon: <FaBeer /> },
  { title: "Vehicles", path: "/vc/vehicles", icon: <FaBeer /> },
  { title: "School Rides", path: "/vc/rides", icon: <FaBeer /> },
  { title: "Emergency", path: "/vc/emergency", icon: <FaBeer /> },
];

function Track() {
  return (
    <MainLayout data={sideNavBarLinks}>
    <div>
    <div className='font-bold ml-20 mt-4 text-2xl'>Vehicle Tracking</div>
        <img src={Vtracking} alt="trackingimg" className="w-[500px] mt-4 ml-12 float-left"/>

        <div className="map float-right mr-8 ml-1 mt-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9029768701894!2d79.85857797237188!3d6.902205493097086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sUniversity%20of%20Colombo%20School%20of%20Computing%20(UCSC)!5e0!3m2!1sen!2slk!4v1690785415194!5m2!1sen!2slk" title="map" className="w-[600px] h-[500px]"></iframe>
        </div> 
    </div>
    </MainLayout>
  )
}

export default Track