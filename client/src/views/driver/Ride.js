import React from "react";
import { useState } from "react";
import "../driver/Tabs.css";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import user from "../../images/user.png";
import { MdLocationOn } from "react-icons/md";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import ReactModal from "react-modal";
import { AiFillDashboard } from "react-icons/ai"
import {  MdPersonAdd, MdPayments, MdSupportAgent, MdOutlineRateReview } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/driver/dashboard", icon: <AiFillDashboard /> },
  { title: "School Ride", path: "/driver/ride", icon: <AiFillCar /> },
  { title: "Finance", path: "/driver/finance", icon: <MdPayments /> },
  { title: "Support", path: "/driver/support", icon: <MdSupportAgent /> },
  { title: "Feedback", path: "/driver/feedback", icon: <MdOutlineRateReview /> },
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

  const [modalOpen, setModalOpen] = useState(false);
  function Modal({ setOpenModal }) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-stone-900/75 flex justify-center items-center">
        <div className="w-[55%] h-[75%] rounded-lg bg-white shadow-md flex flex-col p-5 ">
          <div className="flex justify-between items-center p-4">
            <div className="ml-auto">
              <button
                className="text-2xl cursor-pointer "
                onClick={() => {
                  setOpenModal(false);
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

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div>
          <h1 className="text-[#5a5c69] text-[28px] mb-3 leading-8 font-normal cursor-pointer">
            Ride Details
          </h1>
          <div className="flex justify-end w-full mb-4">
            <NavLink to="/driver/rides/past">
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
              {/* below row */}
              <div className="row-span-4 mt-5 overflow-y-auto p-5">
                <div className=" bg-slate-300 h-8 flex mt-0 mb-4 justify-center">
                  <h1 className=" text-xl font-bold">Reaching Schools : 8</h1>
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
                        <button
                          onClick={() => {
                            setModalOpen(true);
                          }}
                          className="flex justify-center m-2  w-8 h-8  bg-orange hover:bg-[#b3913b] rounded-md cursor-pointer"
                        >
                          <div className="flex mt-2 gap-3 font-semibold">
                            <MdLocationOn className=" text-[20px]" />
                          </div>
                        </button>
                        {modalOpen && <Modal setOpenModal={setModalOpen} />}
                        {/*  */}
                        {/* {mapVisible && (
                          <div className="w-full h-96">
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
                        )} */}
                        {/*  */}
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
