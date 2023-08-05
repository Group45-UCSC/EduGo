import React from "react";
import { useState } from "react";
import "../driver/Tabs.css";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/driver/dashboard", icon: <FaBeer /> },
  { title: "School Ride", path: "/driver/ride", icon: <FaBeer /> },
  { title: "Finance", path: "/driver/finance", icon: <FaBeer /> },
  { title: "Support", path: "/driver/support", icon: <FaBeer /> },
  { title: "Feedback", path: "/driver/feedback", icon: <FaBeer /> },
];

function Ride() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const data1 = [
    {
      id: "001",
      type: "Van",
      make: "Nissan",
      model: "Caravan",
      contact: "0716548792",
      departure: "Homagama",
    },
    {
      id: "002",
      type: "Van",
      make: "Nissan",
      model: "Hiace",
      contact: "0716548792",
      departure: "Colombo 07",
    },
    {
      id: "003",
      type: "Bus",
      make: "Toyota",
      model: "coster",
      contact: "0716548792",
      departure: "Kirulapone",
    },
    {
      id: "004",
      type: "Bus",
      make: "Mitshubishi",
      model: "Rosa",
      contact: "0716548792",
      departure: "Gampaha",
    },
  ];
  const data2 = [
    {
      id: "001",
      type: "Van",
      make: "Mazda",
      model: "Hiace",
      contact: "0716548792",
      departure: "Homagama",
    },
    {
      id: "002",
      type: "Van",
      make: "Toyota",
      model: "Hiace",
      contact: "0716548792",
      departure: "Colombo 07",
    },
    {
      id: "003",
      type: "Van",
      make: "Nissan",
      model: "Hiace",
      contact: "0716548792",
      departure: "Kirulapone",
    },
    {
      id: "004",
      type: "Bus",
      make: "Micro",
      model: "Kinglong",
      contact: "0716548792",
      departure: "Gampaha",
    },
  ];

  const rideDetails = [
    {
      id: "Rd001",
      type: "double-shifts",
      startTime1: "5.45 a.m.",
      startLocation1: "Pannipitiya",
      startTime2: "12.45 9.m.",
      startLocation2: "Kirulapone",
      paymentRate: "RS. 380/KM",
      distance: "35Km",
    },
  ];

  return (
    // <div>
    //   <MainLayout data={sideNavBarLinks}>
    //     <h1 className="text-[#5a5c69] text-[28px] pt-6 px-6 leading-8 font-normal cursor-pointer">
    //       School Ride
    //     </h1>
    //     <div className="flex flex-col relative my-5 mx-auto break-all p-5">
    //       <div className="flex">
    //         <button
    //           className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
    //           onClick={() => toggleTab(1)}
    //         >
    //           Current Rides
    //         </button>
    //         <button
    //           className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
    //           onClick={() => toggleTab(2)}
    //         >
    //           Past Rides
    //         </button>
    //       </div>

    //       <div className="content-tabs">
    //         <div
    //           className={
    //             toggleState === 1 ? "content  active-content" : "content"
    //           }
    //         >
    //           <h2>Current Rides</h2>
    //           <hr />
    //           <table className="w-full border-separate border-spacing-y-2 border border-slate-50">
    //             <thead className="border-y-4 border-white drop-shadow">
    //               <tr className="bg-[#999999] text-white text-[18px] border-b-2 drop-shadow-md">
    //                 <th className="px-3.5 py-1 w-24">ID</th>
    //                 <th className="px-3.5 w-30">Type</th>
    //                 <th className="px-3.5 w-30">Make</th>
    //                 <th className="px-3.5 w-30">Model</th>
    //                 <th className="px-3.5 w-30">Contact</th>
    //                 <th className="px-3.5 w-30">Departure</th>
    //               </tr>
    //             </thead>

    //             <tbody>
    //               {data1.map((item) => (
    //                 <tr
    //                   key={item.id}
    //                   className="bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
    //                 >
    //                   <td className="text-center p-3">{item.id}</td>
    //                   <td className="text-center">{item.type}</td>
    //                   <td className="text-center">{item.make}</td>
    //                   <td className="text-center">{item.model}</td>
    //                   <td className="text-center">{item.contact}</td>
    //                   <td className="text-center">{item.departure}</td>
    //                 </tr>
    //               ))}
    //             </tbody>
    //           </table>
    //         </div>

    //         <div
    //           className={
    //             toggleState === 2 ? "content  active-content" : "content"
    //           }
    //         >
    //           <h2>Past Rides</h2>
    //           <hr />
    //           <table className="w-full border-separate border-spacing-y-2 border border-slate-50">
    //             <thead className="border-y-4 border-white drop-shadow">
    //               <tr className="bg-[#999999] text-white text-[18px] border-b-2 drop-shadow-md">
    //                 <th className="px-3.5 py-1 w-24">ID</th>
    //                 <th className="px-3.5 w-30">Type</th>
    //                 <th className="px-3.5 w-30">Make</th>
    //                 <th className="px-3.5 w-30">Model</th>
    //                 <th className="px-3.5 w-30">Contact</th>
    //                 <th className="px-3.5 w-30">Departure</th>
    //               </tr>
    //             </thead>

    //             <tbody>
    //               {data2.map((item) => (
    //                 <tr
    //                   key={item.id}
    //                   className="bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
    //                 >
    //                   <td className="text-center p-3">{item.id}</td>
    //                   <td className="text-center">{item.type}</td>
    //                   <td className="text-center">{item.make}</td>
    //                   <td className="text-center">{item.model}</td>
    //                   <td className="text-center">{item.contact}</td>
    //                   <td className="text-center">{item.departure}</td>
    //                 </tr>
    //               ))}
    //             </tbody>
    //           </table>
    //         </div>
    //       </div>
    //     </div>
    //   </MainLayout>
    // </div>

    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="pt-4 px-6 mb-2">
          <h1 className="text-[#5a5c69] text-[28px] mb-3 leading-8 font-normal cursor-pointer">
            Ride Details
          </h1>
          <div className="flex justify-end w-5/6 ml-24 mb-4">
            <NavLink to="/parent/Children/addnewride">
              <button className="flex justify-center w-56 h-10 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                <div className="flex mt-2 gap-3 font-semibold">Past Rides</div>
              </button>
            </NavLink>
          </div>
          <div className="grid grid-rows-2 grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-2  my-1">
            {/* --------------------Driver Details------------------------ */}
            <div className="h-[250px] bg-slate-200">
              {rideDetails.map((rideDetails) => (
                <div className="h-7 my-5 p-6 mx-10">
                  <h1 className="text-base text-black-600 font-bold">
                    <span className=" pr-20 text-[#5a5c69]">Ride Id :</span>{" "}
                    {rideDetails.id} <br></br>
                    <span className=" pr-24 text-[#5a5c69]">Type : </span>
                    {rideDetails.type} <br></br>
                    <span className="  pr-8 text-[#5a5c69]">
                      Shift 01 Starts :
                    </span>
                    {rideDetails.startLocation1} at {rideDetails.startTime1}{" "}
                    <br></br>
                    <span className=" pr-8 text-[#5a5c69]">
                      Shift 02 Starts :
                    </span>
                    {rideDetails.startLocation2} at {rideDetails.startTime2}
                    <br></br>
                    <span className=" pr-20 text-[#5a5c69]">
                      PayRate:
                    </span>{" "}
                    {rideDetails.paymentRate}
                    <br></br>
                    <span className=" pr-20 text-[#5a5c69]">
                      Distance:
                    </span>{" "}
                    {rideDetails.distance}
                  </h1>
                </div>
              ))}
            </div>
            {/* -------------------------Children details------------------------- */}
            <div className="bg-slate-200 rounded-md h-[500px] row-span-2">
              <div className=" grid gap-4 p-4 ">
                <div className=" bg-slate-300 h-8 flex justify-center">
                  <h1 className=" text-xl font-bold">
                    Number of Childrens : 12
                  </h1>
                </div>
                
                <div className="bg-slate-300 h-16">
                  
                </div>
              </div>
            </div>
            <div className=" h-[240px] flex flex-col items-center justify-center">
              <div className="w-full rounded-md bg-slate-200 h-[240px] flex">
                <div className=" w-1/2 mt-10 mx-10  my-4">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Ride;
<div className="bg-slate-300 h-40">
                  <h1 className=" text-lg mt-4 font-semibold ml-4">
                    Reachig Schools :
                  </h1>
                  <ul className=" ml-4">
                    <li>Ananda College</li>
                    <li>Mahamaya Balika College</li>
                    <li>C.W.W. Kannangara College</li>
                    <li>Ananda Balika College</li>
                  </ul>
                </div>