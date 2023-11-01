import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
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

function AdminEmergency() {

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
        <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">
          Emergency
        </h1>

        <div className="flex">
          {/* emergency details */}
          <div className="bg-slate-200 h-84 ml-12 w-[750px] mt-8 rounded-lg shadow-md overflow-auto leading-8 font-semibold">
            <div className="ml-8 mt-4 flex">
              <div className="flex-1">
                <p className="mb-1">Emergency: {item.situation}</p>
                <p className="mb-1">Status: {item.status}</p>
                <p className="mb-1">License No: {item.vehicle_no}</p>
                <p className="mb-1">Type: {item.vehicle_type}</p>
                <p className="mb-1">Contact: {item.contact_number}</p>
              </div>
              <div className="mr-16">
                <p className="mb-1">Make: {item.make}</p>
                <p className="mb-1">Model: {item.vehicle_model}</p>
                <p className="mb-1">No of Children: 12</p>
                <p className="mb-1">Date: {item.date}</p>
              </div>
            </div>
            <div className="ml-[30%]">Assigned Vehicle Coordinator : None</div>
            <div className="ml-8">
              Action taken: <br />
              <textarea className="w-4/5 ml-8"></textarea>
            </div>
          </div>

          {/* locate button */}
          <div>
            <div onClick={showPopup} className="flex mt-8 ml-12 h-11 w-32 rounded-lg shadow-lg bg-orange font-semibold text-lg pt-2 pl-5 cursor-pointer hover:scale-[102%] hover:bg-amber-500 transition-transform ease-in-out">
              Locate
              <FaMapMarkerAlt className="mt-1 ml-4" />
            </div>
          </div>
        </div>

        <h2 className="text-[#5a5c69] mt-12 px-[25px] text-[22px] leading-8 font-normal cursor-pointer">
          Children details
        </h2>

        {/* children details table */}
        <div className="ml-32 mt-4 mr-32 shadow-md overflow-auto ">
          <table className="w-full text-center border-separate border-spacing-y-2 border border-slate-50 ">
            <thead className="border-y-4 border-white drop-shadow ">
              <tr className=" bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md ">
                <th className="px-3.5 p-1 w-24 ">ID</th>
                <th className="px-3.5 w-30">Name</th>
                <th className="px-3.5 w-30">Destination</th>
                <th className="px-3.5 w-30">Parent Contact</th>
              </tr>
            </thead>

            <tbody className="">
              <tr className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md">
                <td className="text-center  p-3"> 001</td>
                <td>Kasun Nissanka</td>
                <td>Royal College</td>
                <td>0711234567</td>
              </tr>

              <tr className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md">
                <td className="text-center  p-3 ">002</td>
                <td>Sachith Kaluarachchi</td>
                <td>Royal College</td>
                <td>0768956423</td>
              </tr>

              <tr className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md">
                <td className="text-center  p-3 ">003</td>
                <td>Hasiru Maduranga</td>
                <td>Dharmapala College</td>
                <td>0762222223</td>
              </tr>

              <tr className=" bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md">
                <td className="text-center  p-3 ">004</td>
                <td>Isuru Darshana</td>
                <td>Dharmapala College</td>
                <td>0711936423</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* popup container */}

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
  );
}

export default AdminEmergency;
