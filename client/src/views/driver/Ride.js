import React from "react";
import { useState, useEffect } from "react";
import "../driver/Tabs.css";
import MainLayout from "../../components/layout/MainLayout";
import { NavLink } from "react-router-dom";
// import ChildDetails from "./ChildDetails";
import user from "../../images/user.png";
import { MdLocationOn } from "react-icons/md";
import { CiRead, CiShare1 } from "react-icons/ci";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { AiFillDashboard, AiOutlinePlus } from "react-icons/ai";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import { AiFillCar } from "react-icons/ai";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/driver/dashboard", icon: <AiFillDashboard /> },
  { title: "School Ride", path: "/driver/ride", icon: <AiFillCar /> },
  { title: "Finance", path: "/driver/finance", icon: <MdPayments /> },
  { title: "Support", path: "/driver/support", icon: <MdSupportAgent /> },
  {
    title: "Feedback",
    path: "/driver/feedback",
    icon: <MdOutlineRateReview />,
  },
];

function Ride() {
  //userID
  const userId = localStorage.getItem("userId");

  const [activeTab, setActiveTab] = useState("shift1"); // Default active tab is "Shift 1"

  //add new school modal
  // const [modalOpen1, setModalOpen1] = useState(false);
  // function Modal1({ setModalOpen1 }) {
  //   return (
  //     <div className="fixed top-0 left-0 w-screen h-screen bg-stone-900/75 flex justify-center items-center">
  //       <div className="w-[55%] h-[75%] z-20 rounded-lg bg-white shadow-md flex flex-col p-5 ">
  //         <div className="flex justify-between items-center p-4">
  //           <div className="ml-auto">
  //             <button
  //               className="text-2xl cursor-pointer "
  //               onClick={() => {
  //                 setModalOpen1(false);
  //               }}
  //             >
  //               X
  //             </button>
  //           </div>
  //         </div>
  //         <div>content</div>
  //         <div className="flex justify-center items-center mt-5">
  //           <button
  //             className="w-36 h-12 mr-2 bg-orange rounded-lg text-xl cursor-pointer"
  //             onClick={() => {
  //               setModalOpen1(false);
  //             }}
  //             id="addBtn"
  //           >
  //             Add
  //           </button>
  //           <button
  //             className="w-36 h-12 mr-2 bg-orange rounded-lg text-xl cursor-pointer"
  //             onClick={() => {
  //               setModalOpen1(false);
  //             }}
  //             id="cancelBtn"
  //           >
  //             Cancel
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // school location popup modal
  const [modalOpen2, setModalOpen2] = useState(false);
  function Modal2({ setModalOpen2 }) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-stone-900/75 flex justify-center items-center">
        <div className="w-[55%] h-[75%] rounded-lg bg-white shadow-md flex flex-col p-5 ">
          <div className="flex justify-between items-center p-4">
            <div className="ml-auto">
              <button
                className="text-2xl cursor-pointer "
                onClick={() => {
                  setModalOpen2(false);
                }}
              >
                X
              </button>
            </div>
          </div>
          <div className="w-[80%] h-[80%]">
            <LoadScript googleMapsApiKey="AIzaSyBSRpk2O7ZkVtqQknrlERKR-DwpiRi8Z_U">
              <GoogleMap
                mapContainerStyle={{
                  width: "100%",
                  height: "100%",
                }}
                center={{
                  lat: 6.905088215515232,
                  lng: 79.86112787997142,
                }}
                zoom={15}
              >
                <Marker
                  position={{
                    lat: 6.905088215515232,
                    lng: 79.86112787997142,
                  }}
                />
              </GoogleMap>
            </LoadScript>
          </div>
          <div className="flex justify-center items-center mt-5">
            {/* <button
              className="w-36 h-12 mr-2 bg-orange rounded-lg text-xl cursor-pointer"
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button> */}
          </div>
        </div>
      </div>
    );
  }

  //get total ride details----------------------------------------
  const [rideDataList, setRideDataList] = useState([]);
  const [schoolList, setSchoolList] = useState([]);
  const [childrenList, setChildrenList] = useState([]);

  useEffect(() => {
    async function getRideDetails() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/driver/ride/view/details/${userId}`
        );
        const data = await response.json();
        setRideDataList(data.rideDataList);
        setSchoolList(data.schoolList);
        setChildrenList(data.childrenList);
      } catch (err) {
        console.error(err.message);
      }
    }

    getRideDetails();
  }, [userId]);

  //-----------------------------------------------------------------------------------------------
  // Check if the ride_type is "both"
  const isBothRide =
    rideDataList.length > 0 && rideDataList[0].ride_type === "both";

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        {/* ------------------------------------------------------------------------------------------both shift------------------------------------------------------ */}
        {isBothRide ? (
          <>
            <h1 className="text-[#5a5c69] text-[28px] mb-3 leading-8 font-normal cursor-pointer">
              Ride Details
            </h1>
            <div>
              <button
                className={`mr-2 ${
                  activeTab === "shift1" ? "text-orange font-extrabold" : ""
                }`}
                onClick={() => setActiveTab("shift1")}
              >
                Morning Shift
              </button>
              <button
                className={`mr-2 ${
                  activeTab === "shift2" ? "text-orange font-extrabold" : ""
                }`}
                onClick={() => setActiveTab("shift2")}
              >
                Afternoon Shift
              </button>
            </div>
            <div className="flex justify-end w-full mb-4">
              <NavLink to="/driver/ride/riderequests">
                <button className="flex justify-center w-56 h-10 mr-12 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                  <div className="flex mt-2 gap-3 font-semibold">
                    Ride Requests
                  </div>
                </button>
              </NavLink>
            </div>
            {/* full box */}
            <div className="h-screen grid grid-cols-2 mb-10">
              {/* left column */}
              <div className=" grid grid-rows-6">
                {/* upper row */}
                <div className="row-span-2 mb-5 rounded-lg bg-slate-300">
                  {rideDataList.map((ride, index) => (
                    <div className="h-7 my-5 p-6 mx-10">
                      <h1 className="text-base text-black-600 font-bold">
                        <span className=" pr-20 text-[#5a5c69]">Ride Id :</span>{" "}
                        {ride.ride_id} <br></br>
                        {/* <span className=" pr-24 text-[#5a5c69]">Type : </span>
                    {ride.ride_type} <br></br> */}
                        {activeTab === "shift1" ? (
                          <div>
                            <span className="pr-8 text-[#5a5c69]">
                              Starts :
                            </span>
                            {ride.location_morning_ride} at{" "}
                            {ride.time_morning_ride}
                          </div>
                        ) : (
                          <div>
                            <span className="pr-8 text-[#5a5c69]">
                              Starts :
                            </span>
                            {ride.location_noon_ride} at {ride.time_noon_ride}
                          </div>
                        )}
                        {/* <span className=" pr-20 text-[#5a5c69]">PayRate:</span>{" "}
                    {ride.payment_per_1km}
                    <br></br> */}
                        {/* <span className=" pr-20 text-[#5a5c69]">
                      Distance:
                    </span>{" "}
                    {rideDetails.distance} */}
                      </h1>
                    </div>
                  ))}
                </div>
                {/* end of upper row */}
                {/* below row */}
                <div className="row-span-4 mt-5 overflow-y-auto p-5 ">
                  <div className="bg-slate-300 h-8 flex mt-0 mb-4 items-center justify-between">
                    <h1 className="text-xl font-bold text-center flex-1">
                      Reaching Schools :
                      {schoolList.filter((ride) => ride.school_id).length}
                    </h1>
                    <NavLink to="/driver/ride/schools">
                      {/* <button
                      onClick={() => {
                        setModalOpen1(true);
                      }}
                    > */}
                      <button>
                        <CiShare1 className="text-2xl ml-0 mr-1 mt-1 text-black font-extrabold hover:text-orange hover:cursor-pointer" />
                      </button>
                    </NavLink>
                    {/* {modalOpen1 && <Modal1 setModalOpen1={setModalOpen1} />} */}
                  </div>
                  {/* school list */}
                  <div className="flex flex-col h-12 gap-4">
                    {schoolList.map((school, index) => (
                      <div
                        key={index}
                        className="z-0 w-[100%] rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between py-3 px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                      >
                        <div className=" px-5 flex gap-1 w-1/3 leading-4">
                          <div className="text-[12px] font-semibold">
                            {school.school_id}
                          </div>
                        </div>
                        <div className="flex gap-1 w-1/3 leading-4">
                          <div className="text-[12px] font-semibold">
                            {school.school_name}
                          </div>
                        </div>
                        {/* <div className="flex gap-1 w-1/3 leading-4">
                          <button
                            onClick={() => {
                              setModalOpen2(true);
                            }}
                            className="flex justify-center m-2  w-8 h-8  bg-orange hover:bg-[#b3913b] rounded-md cursor-pointer"
                          >
                            <div className="flex mt-2 gap-3 font-semibold">
                              <MdLocationOn className=" text-[20px]" />
                            </div>
                          </button>
                          {modalOpen2 && (
                            <Modal2 setModalOpen2={setModalOpen2} />
                          )}
                        </div> */}
                      </div>
                    ))}
                  </div>
                  {/* end of school list */}
                </div>
                {/* end of below row */}
              </div>
              {/* end of left column */}
              {/* right column */}
              <div className="px-5">
                <div className="rounded-md row-span-2 h-screen overflow-y-auto">
                  <div className=" grid gap-4 px-4">
                    <div className=" bg-slate-300 h-8 flex mt-0 justify-center">
                      <h1 className=" text-xl font-bold">
                        Number of Childrens :{" "}
                        {activeTab === "shift1"
                          ? childrenList.filter(
                              (child) =>
                                child.ride_shift_type === "morning" ||
                                child.ride_shift_type === "both"
                            ).length
                          : childrenList.filter(
                              (child) =>
                                child.ride_shift_type === "afternoon" ||
                                child.ride_shift_type === "both"
                            ).length}
                      </h1>
                    </div>
                    {/* children list */}
                    <div className="flex flex-col gap-4">
                      {childrenList
                        .filter((child) =>
                          activeTab === "shift1"
                            ? child.ride_shift_type === "morning" ||
                              child.ride_shift_type === "both"
                            : child.ride_shift_type === "afternoon" ||
                              child.ride_shift_type === "both"
                        )
                        .map((child, index) => (
                          <NavLink
                            to={`/driver/ride/childDetails/${
                              child.child_id
                            }?data=${encodeURIComponent(
                              JSON.stringify(child)
                            )}`}
                          >
                            <div
                              key={index}
                              className="h-[60px] border w-[100%] rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                            >
                              <div className="">
                                <img
                                  src={user}
                                  alt="user"
                                  className="bg-slate-300 w-10 cursor-pointer rounded-full p-1"
                                />
                              </div>
                              <div className=" px-5 flex gap-1 w-1/3 leading-4">
                                <div className="text-[12px] font-semibold">
                                  {child.child_id}
                                </div>
                              </div>
                              <div className="flex gap-1 w-1/3 leading-4">
                                <div className="text-[12px] font-semibold">
                                  {child.child_name}
                                </div>
                              </div>
                              <div className="flex gap-1 w-1/3 leading-4">
                                <div className="text-[12px] font-semibold">
                                  {child.school_id}
                                </div>
                              </div>
                            </div>
                          </NavLink>
                        ))}
                    </div>
                    {/* end of children list */}
                  </div>
                </div>
              </div>
              {/* end of right column */}
            </div>
            {/* end of full box */}

            {/*------------------------------------------------------------------------------------------single shift---------------------------------------------------------------------------------------------- */}
          </>
        ) : (
          <>
            <h1 className="text-[#5a5c69] text-[28px] mb-3 leading-8 font-normal cursor-pointer">
              Ride Details
            </h1>

            <div className="flex justify-end w-full mb-4">
              <NavLink to="/driver/ride/riderequests">
                <button className="flex justify-center w-56 h-10 mr-12 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                  <div className="flex mt-2 gap-3 font-semibold">
                    Ride Requests
                  </div>
                </button>
              </NavLink>
            </div>
            {/* full box */}
            <div className="h-screen grid grid-cols-2 mb-10">
              {/* left column */}
              <div className=" grid grid-rows-6">
                {/* upper row */}
                <div className="row-span-2 mb-5 rounded-lg bg-slate-300">
                  {rideDataList.map((ride) => (
                    <div className="h-7 my-5 p-6 mx-10">
                      <h1 className="text-base text-black-600 font-bold">
                        <span className=" pr-20 text-[#5a5c69]">Ride Id :</span>{" "}
                        {ride.ride_id} <br></br>
                        {/* <span className=" pr-24 text-[#5a5c69]">Type : </span>
                    {ride.ride_type} <br></br> */}
                        {ride.ride_type === "morning" ? (
                          <div>
                            <span className=" pr-24 text-[#5a5c69]">
                              Type : Morning shift only
                            </span>
                            <span className="pr-8 text-[#5a5c69]">
                              Starts :
                            </span>
                            {ride.location_morning_ride} at{" "}
                            {ride.time_morning_ride}
                          </div>
                        ) : (
                          <div>
                            <span className=" pr-24 text-[#5a5c69]">
                              Type : Afternoon shift only
                            </span>
                            <span className="pr-8 text-[#5a5c69]">
                              Starts :
                            </span>
                            {ride.location_noon_ride} at {ride.time_noon_ride}
                          </div>
                        )}
                        {/* <span className=" pr-20 text-[#5a5c69]">PayRate:</span>{" "}
                    {ride.payment_per_1km}
                    <br></br> */}
                        {/* <span className=" pr-20 text-[#5a5c69]">
                      Distance:
                    </span>{" "}
                    {rideDetails.distance} */}
                      </h1>
                    </div>
                  ))}
                </div>
                {/* end of upper row */}
                {/* below row */}
                <div className="row-span-4 mt-5 overflow-y-auto p-5 ">
                  {/* <div className=" bg-slate-300 h-8 flex mt-0 mb-4 justify-center">
                <h1 className=" text-xl border font-bold">Reaching Schools : 8</h1>
                <AiOutlinePlus/>
              </div> */}
                  <div className="bg-slate-300 h-8 flex mt-0 mb-4 items-center justify-between">
                  <h1 className="text-xl font-bold text-center flex-1">
                      Reaching Schools :
                      {schoolList.filter((ride) => ride.school_id).length}
                    </h1>
                    <NavLink to="/driver/ride/schools">
                      <button>
                        <CiShare1 className="text-2xl ml-0 mr-1 text-black font-extrabold hover:text-orange hover:cursor-pointer" />
                      </button>
                    </NavLink>
                    {/* {modalOpen1 && <Modal1 setModalOpen1={setModalOpen1} />} */}
                  </div>
                  {/* school list */}
                  <div className="flex flex-col h-12 gap-4">
                    {schoolList.map((school, index) => (
                      <div
                        key={index}
                        className="z-0 w-[100%] rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between py-3 px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                      >
                        <div className=" px-5 flex gap-1 w-1/3 leading-4">
                          <div className="text-[12px] font-semibold">
                            {school.school_id}
                          </div>
                        </div>
                        <div className="flex gap-1 w-1/3 leading-4">
                          <div className="text-[12px] font-semibold">
                            {school.school_name}
                          </div>
                        </div>
                        {/* <div className="flex gap-1 w-1/3 leading-4">
                          <button
                            onClick={() => {
                              setModalOpen2(true);
                            }}
                            className="flex justify-center m-2  w-8 h-8  bg-orange hover:bg-[#b3913b] rounded-md cursor-pointer"
                          >
                            <div className="flex mt-2 gap-3 font-semibold">
                              <MdLocationOn className=" text-[20px]" />
                            </div>
                          </button>
                          {modalOpen2 && (
                            <Modal2 setModalOpen2={setModalOpen2} />
                          )}
                        </div> */}
                      </div>
                    ))}
                  </div>
                  {/* end of school list */}
                </div>
                {/* end of below row */}
              </div>
              {/* end of left column */}
              {/* right column */}
              <div className="px-5">
                <div className="rounded-md row-span-2 h-screen overflow-y-auto">
                  <div className=" grid gap-4 px-4">
                    <div className=" bg-slate-300 h-8 flex mt-0 justify-center">
                      <h1 className=" text-xl font-bold">
                        Number of Childrens :{rideDataList.num_of_children}
                      </h1>
                    </div>
                    {/* children list */}
                    <div className="flex flex-col gap-4">
                      {childrenList.map((child, index) => (
                        <NavLink
                          to={`/driver/ride/childDetails/${
                            child.child_id
                          }?data=${encodeURIComponent(JSON.stringify(child))}`}
                        >
                          <div
                            key={index}
                            className="h-[60px] border w-[100%] rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                          >
                            <div className="">
                              <img
                                src={user}
                                alt="user"
                                className="bg-slate-300 w-10 cursor-pointer rounded-full p-1"
                              />
                            </div>
                            <div className=" px-5 flex gap-1 w-1/3 leading-4">
                              <div className="text-[12px] font-semibold">
                                {child.child_id}
                              </div>
                            </div>
                            <div className="flex gap-1 w-1/3 leading-4">
                              <div className="text-[12px] font-semibold">
                                {child.child_name}
                              </div>
                            </div>
                            <div className="flex gap-1 w-1/3 leading-4">
                              <div className="text-[12px] font-semibold">
                                {child.school_id}
                              </div>
                            </div>
                          </div>
                        </NavLink>
                      ))}
                    </div>
                    {/* end of children list */}
                  </div>
                </div>
              </div>
              {/* end of right column */}
            </div>
            {/* end of full box */}
          </>
        )}
        ;
      </MainLayout>
    </div>
  );
}

export default Ride;
