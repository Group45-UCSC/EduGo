import React from "react";
import { useState } from "react";
import "../driver/Tabs.css";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import user from "../../images/user.png";
import { MdLocationOn } from "react-icons/md";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/driver/dashboard", icon: <FaBeer /> },
  { title: "School Ride", path: "/driver/ride", icon: <FaBeer /> },
  { title: "Finance", path: "/driver/finance", icon: <FaBeer /> },
  { title: "Support", path: "/driver/support", icon: <FaBeer /> },
  { title: "Feedback", path: "/driver/feedback", icon: <FaBeer /> },
];

function Ride() {
  const childDetails = [
    {
      id: "C10005",
      name: "R.B.S.Udayanga",
      schoolName: "Royal Collage",
    },
    {
      id: "C10009",
      name: "L.L.A. Hansani",
      schoolName: "Sujatha collage",
    },
    {
      id: "C10011",
      name: "K.S.T. Gunawardhana ",
      schoolName: "Royal Collage",
    },
    {
      id: "C10011",
      name: "A.W.K.S. Jayasiri ",
      schoolName: "Royal Collage",
    },
    {
      id: "C10005",
      name: "R.B.S.Udayanga",
      schoolName: "Royal Collage",
    },
    {
      id: "C10009",
      name: "L.L.A. Hansani",
      schoolName: "Sujatha collage",
    },
    {
      id: "C10011",
      name: "K.S.T. Gunawardhana ",
      schoolName: "Royal Collage",
    },
    {
      id: "C10011",
      name: "A.W.K.S. Jayasiri ",
      schoolName: "Royal Collage",
    },
    {
      id: "C10005",
      name: "R.B.S.Udayanga",
      schoolName: "Royal Collage",
    },
    {
      id: "C10009",
      name: "L.L.A. Hansani",
      schoolName: "Sujatha collage",
    },
    {
      id: "C10011",
      name: "K.S.T. Gunawardhana ",
      schoolName: "Royal Collage",
    },
    {
      id: "C10011",
      name: "A.W.K.S. Jayasiri ",
      schoolName: "Royal Collage",
    },
  ];

  const schools = [
    {
      id: "sch009",
      schoolName: "Royal Collage",
    },
    {
      id: "sch004",
      schoolName: "Sujatha collage",
    },
    {
      id: "sch108",
      schoolName: "Royal Collage",
    },
    {
      id: "sch002",
      schoolName: "Royal Collage",
    },
    {
      id: "sch041",
      schoolName: "Royal Collage",
    },
    {
      id: "sch008",
      schoolName: "Sujatha collage",
    },
    {
      id: "sch010",
      schoolName: "Royal Collage",
    },
    {
      id: "sch082",
      schoolName: "Royal Collage",
    },
  ];

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

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

    // <div>
    //   <MainLayout data={sideNavBarLinks}>
    //     <div className="pt-4 px-6 mb-2">
    //       <h1 className="text-[#5a5c69] text-[28px] mb-3 leading-8 font-normal cursor-pointer">
    //         Ride Details
    //       </h1>
    //       <div className="flex justify-end w-5/6 ml-24 mb-4">
    //         <NavLink to="/parent/Children/addnewride">
    //           <button className="flex justify-center w-56 h-10 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
    //             <div className="flex mt-2 gap-3 font-semibold">Past Rides</div>
    //           </button>
    //         </NavLink>
    //       </div>
    //       <div className="grid grid-rows-2 grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-2  my-1">
    //         {/* --------------------Driver Details------------------------ */}
    //         <div className="h-[250px] bg-slate-200">
    //           {rideDetails.map((rideDetails) => (
    //             <div className="h-7 my-5 p-6 mx-10">
    //               <h1 className="text-base text-black-600 font-bold">
    //                 <span className=" pr-20 text-[#5a5c69]">Ride Id :</span>{" "}
    //                 {rideDetails.id} <br></br>
    //                 <span className=" pr-24 text-[#5a5c69]">Type : </span>
    //                 {rideDetails.type} <br></br>
    //                 <span className="  pr-8 text-[#5a5c69]">
    //                   Shift 01 Starts :
    //                 </span>
    //                 {rideDetails.startLocation1} at {rideDetails.startTime1}{" "}
    //                 <br></br>
    //                 <span className=" pr-8 text-[#5a5c69]">
    //                   Shift 02 Starts :
    //                 </span>
    //                 {rideDetails.startLocation2} at {rideDetails.startTime2}
    //                 <br></br>
    //                 <span className=" pr-20 text-[#5a5c69]">PayRate:</span>{" "}
    //                 {rideDetails.paymentRate}
    //                 <br></br>
    //                 <span className=" pr-20 text-[#5a5c69]">
    //                   Distance:
    //                 </span>{" "}
    //                 {rideDetails.distance}
    //               </h1>
    //             </div>
    //           ))}
    //         </div>
    //         {/* -------------------------children details------------------------- */}
    //         <div className="rounded-md row-span-2 h-screen overflow-y-auto">
    //           <div className=" grid gap-4 px-4 h-screen">
    //             <div className=" bg-slate-300 h-8 flex mt-0 justify-center">
    //               <h1 className=" text-xl font-bold">
    //                 Number of Childrens : 12
    //               </h1>
    //             </div>
    //             <div className="flex flex-col gap-4">
    //               {childDetails.map((child, index) => (
    //                 <div
    //                   key={index}
    //                   className="h-[60px] w-[100%] rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
    //                 >
    //                   <div className="">
    //                     <img
    //                       src={user}
    //                       alt="user"
    //                       className="bg-slate-300 w-10 cursor-pointer rounded-full p-1"
    //                     />
    //                   </div>
    //                   <div className="w-1/3">
    //                     <div className="leading-4">
    //                       <div className="flex gap-1">
    //                         <div className="text-[12px] font-semibold">
    //                           {child.id}
    //                         </div>
    //                       </div>
    //                       <div className="flex gap-1">
    //                         <div className="text-[12px] font-semibold">
    //                           {child.name}
    //                         </div>
    //                       </div>
    //                       <div className="flex gap-1">
    //                         <div className="text-[12px] font-semibold">
    //                           {child.schoolName}
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className=" flex gap-5">
    //                     {/*---------------------Buttons-----------------------------*/}
    //                     <div className="">
    //                       <NavLink to="/parent/children/childlocation">
    //                         <button className="flex justify-center  w-16 h-10  bg-orange hover:bg-[#b3913b] rounded-md cursor-pointer">
    //                           <div className="flex mt-2 gap-3 font-semibold">
    //                             <MdLocationOn className=" text-[25px]" />
    //                           </div>
    //                         </button>
    //                       </NavLink>
    //                     </div>
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //         <div className=" h-[500px] flex flex-col items-center justify-center">
    //           <div className="w-full rounded-md row-span-2 overflow-y-auto">
    //             <div className=" grid gap-1 p-4 h-screen">
    //               <div className=" bg-slate-300 h-8 flex mt-0 border justify-center">
    //                 <h1 className=" text-xl font-bold">Reaching Schools : 8</h1>
    //               </div>
    //               <div className="flex flex-col gap-4">
    //                 {schools.map((school, index) => (
    //                   <div
    //                     key={index}
    //                     className="h-[60px] w-[100%] rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
    //                   >
    //                     <div className="w-1/3">
    //                       <div className="leading-4">
    //                         <div className="flex gap-1">
    //                           <div className="text-[12px] font-semibold">
    //                             {school.id}
    //                           </div>
    //                         </div>
    //                         <div className="flex gap-1">
    //                           <div className="text-[12px] font-semibold">
    //                             {school.schoolName}
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </MainLayout>
    // </div>

    <div>
      <MainLayout data={sideNavBarLinks}>
        <div>
          <h1 className="text-[#5a5c69] text-[28px] mb-3 leading-8 font-normal cursor-pointer">
            Ride Details
          </h1>
          <div className="flex justify-end w-full mb-4">
            <NavLink to="/parent/Children/addnewride">
              <button className="flex justify-center w-56 h-10 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                <div className="flex mt-2 gap-3 font-semibold">Past Rides</div>
              </button>
            </NavLink>
          </div>
          {/*  */}
          <div className="h-screen grid grid-cols-2">
            {/* left */}
            <div className=" grid grid-rows-6">
              {/* upper row */}
              <div className="row-span-2 mb-5 rounded-lg bg-slate-300">
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
                    <span className=" pr-20 text-[#5a5c69]">PayRate:</span>{" "}
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
{/* below row */}
              <div className="row-span-4 mt-5 overflow-y-auto p-5">
              <div className=" bg-slate-300 h-8 flex mt-0 mb-4 justify-center">
                    <h1 className=" text-xl font-bold"> 
                      Reaching Schools : 8
                    </h1>
                  </div>
                <div className="flex flex-col h-12 gap-4">
                  {schools.map((school, index) => (
                    <div
                      key={index}
                      className="w-[100%] rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                    >
                      <div className=" px-5 flex gap-1 w-1/3 leading-4">
                        <div className="text-[12px] font-semibold">
                          {school.id}
                        </div>
                      </div>
                      <div className="flex gap-1 w-1/3 leading-4">
                        <div className="text-[12px] font-semibold">
                          {school.schoolName}
                        </div>
                      </div>
                      <div className="flex gap-1 w-1/3 leading-4">
                        <NavLink to="/parent/children/childlocation">
                          <button className="flex justify-center m-2  w-8 h-8  bg-orange hover:bg-[#b3913b] rounded-md cursor-pointer">
                            <div className="flex mt-2 gap-3 font-semibold">
                              <MdLocationOn className=" text-[20px]" />
                            </div>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* right */}
            <div className=" px-5">
              <div className="rounded-md row-span-2 h-screen overflow-y-auto">
                <div className=" grid gap-4 px-4 h-screen">
                  <div className=" bg-slate-300 h-8 flex mt-0 justify-center">
                    <h1 className=" text-xl font-bold">
                      Number of Childrens : 12
                    </h1>
                  </div>
                  <div className="flex flex-col gap-4">
                    {childDetails.map((child, index) => (
                      <div
                        key={index}
                        className="h-[60px] w-[100%] rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                      >
                        <div className="">
                          <img
                            src={user}
                            alt="user"
                            className="bg-slate-300 w-10 cursor-pointer rounded-full p-1"
                          />
                        </div>
                        {/* <div className="w-1/3"> */}
                        {/* <div className="leading-4"> */}
                        <div className=" px-5 flex gap-1 w-1/3 leading-4">
                          <div className="text-[12px] font-semibold">
                            {child.id}
                          </div>
                        </div>
                        <div className="flex gap-1 w-1/3 leading-4">
                          <div className="text-[12px] font-semibold">
                            {child.name}
                          </div>
                        </div>
                        <div className="flex gap-1 w-1/3 leading-4">
                          <div className="text-[12px] font-semibold">
                            {child.schoolName}
                          </div>
                          {/* </div> */}
                          {/* </div> */}
                        </div>
                        {/* <div className=" flex gap-5">
                          <div className="">
                            <NavLink to="/parent/children/childlocation">
                              <button className="flex justify-center  w-16 h-10  bg-orange hover:bg-[#b3913b] rounded-md cursor-pointer">
                                <div className="flex mt-2 gap-3 font-semibold">
                                  <MdLocationOn className=" text-[25px]" />
                                </div>
                              </button>
                            </NavLink>
                          </div>
                        </div> */}
                      </div>
                    ))}
                  </div>
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
