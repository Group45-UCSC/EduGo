import React from "react";
import { useState } from "react";
import "../driver/Tabs.css"
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";

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
    { id: "001", type: "Van", make: "Nissan", model: "Caravan", contact: "0716548792", departure: "Homagama" },
    { id: "002", type: "Van", make: "Nissan", model: "Hiace", contact: "0716548792", departure: "Colombo 07" },
    { id: "003", type: "Bus", make: "Toyota", model: "coster", contact: "0716548792", departure: "Kirulapone" },
    { id: "004", type: "Bus", make: "Mitshubishi", model: "Rosa", contact: "0716548792", departure: "Gampaha" },

  ];
  const data2 = [
    { id: "001", type: "Van", make: "Mazda", model: "Hiace", contact: "0716548792", departure: "Homagama" },
    { id: "002", type: "Van", make: "Toyota", model: "Hiace", contact: "0716548792", departure: "Colombo 07" },
    { id: "003", type: "Van", make: "Nissan", model: "Hiace", contact: "0716548792", departure: "Kirulapone" },
    { id: "004", type: "Bus", make: "Micro", model: "Kinglong", contact: "0716548792", departure: "Gampaha" },

  ];
  return (
    <div>
      <MainLayout data={sideNavBarLinks} >
                  <h1 className="text-[#5a5c69] text-[28px] pt-6 px-6 leading-8 font-normal cursor-pointer">
            School Ride
          </h1>
        <div className="flex flex-col relative my-50 mx-auto break-all p-20">
          
          <div className="flex">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Current Rides
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Past Rides
            </button>

          </div>

          <div className="content-tabs">
            <div
              className={toggleState === 1 ? "content  active-content" : "content"}
            >
              <h2>Current Rides</h2>
              <hr />
              <table className="w-full border-separate border-spacing-y-2 border border-slate-50">
                <thead className="border-y-4 border-white drop-shadow">
                  <tr className="bg-[#999999] text-white text-[18px] border-b-2 drop-shadow-md">
                    <th className="px-3.5 py-1 w-24">ID</th>
                    <th className="px-3.5 w-30">Type</th>
                    <th className="px-3.5 w-30">Make</th>
                    <th className="px-3.5 w-30">Model</th>
                    <th className="px-3.5 w-30">Contact</th>
                    <th className="px-3.5 w-30">Departure</th>
                  </tr>
                </thead>

                <tbody>
                  {data1.map((item) => (
                    <tr key={item.id} className="bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md">
                      <td className="text-center p-3">{item.id}</td>
                      <td className="text-center">{item.type}</td>
                      <td className="text-center">{item.make}</td>
                      <td className="text-center">{item.model}</td>
                      <td className="text-center">{item.contact}</td>
                      <td className="text-center">{item.departure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className={toggleState === 2 ? "content  active-content" : "content"}
            >
              <h2>Past Rides</h2>
              <hr />
              <table className="w-full border-separate border-spacing-y-2 border border-slate-50">
                <thead className="border-y-4 border-white drop-shadow">
                  <tr className="bg-[#999999] text-white text-[18px] border-b-2 drop-shadow-md">
                    <th className="px-3.5 py-1 w-24">ID</th>
                    <th className="px-3.5 w-30">Type</th>
                    <th className="px-3.5 w-30">Make</th>
                    <th className="px-3.5 w-30">Model</th>
                    <th className="px-3.5 w-30">Contact</th>
                    <th className="px-3.5 w-30">Departure</th>
                  </tr>
                </thead>

                <tbody>
                  {data2.map((item) => (
                    <tr key={item.id} className="bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md">
                      <td className="text-center p-3">{item.id}</td>
                      <td className="text-center">{item.type}</td>
                      <td className="text-center">{item.make}</td>
                      <td className="text-center">{item.model}</td>
                      <td className="text-center">{item.contact}</td>
                      <td className="text-center">{item.departure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Ride;
