import React, { useState, useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard, AiFillCar } from "react-icons/ai";
import { FaRegCalendarMinus, FaEllipsisV } from "react-icons/fa";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import schoolVan from "../../images/schoolVan.jpeg";
import schoolbusImg from "../../images/schoolBus.jpg";


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { NavLink } from "react-router-dom";

const data = [
  {
    name: "0",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "1",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "3",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "4",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "5",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "6",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
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

function DriverDashboardPg() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [hasRide, setHasRide] = useState(false); //find ride has or not
  const [hasVehicle, setHasVehicle] = useState(false); //find vehicle has or not

  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");

  useEffect(() => {
    // Fetch data from the backend to check if the driver has a ride
    fetch(`http://localhost:5000/edugo/driver/dashboard/hasride/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHasRide(data.hasRide);
        setHasVehicle(data.hasVehicle);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  //notification popup modals
  function Modal({ setModalOpen, notification }) {
    return (
      <div>
        <div className="bg-white p-0 px-60 rounded-lg ">
          <div className="fixed top-0 left-0 w-screen  bg-stone-900/75 flex justify-center items-center  h-screen bg-gradient-to-b from-opacity-70 to-opacity-30">
            <div className="w-1/3  rounded-lg bg-white shadow-md flex flex-col p-5 ">
              <div className="flex justify-end">
                <button
                  className="text-2xl cursor-pointer "
                  onClick={() => {
                    setModalOpen(false);
                  }}
                >
                  X
                </button>
              </div>
              {/* content */}
              <div className="">
                <p>
                  {notification.Message}
                  <br />
                  <br />
                  <div className="text-slate-500 text-sm">
                    {" "}
                    Received on {notification.Date} at {"  "}
                    {notification.Time}
                  </div>
                </p>

                {/* end of content */}

                <div className="flex justify-center items-center mt-5">
                  {(() => {
                    switch (notification.type) {
                      case "vehicle":
                        return (
                          <div
                            className="w-36 h-9 bg-orange rounded-lg text-xl cursor-pointer"
                            onClick={() => {
                              setModalOpen(false);
                            }}
                            id="cancelBtn"
                          >
                            Okay
                          </div>
                        );

                      case "profile":
                        return (
                          <div className="flex justify-between gap-6">
                            <NavLink to="/user/profile">
                              <button
                                className="w-36 h-9 bg-orange rounded-lg text-xl cursor-pointer"
                                onClick={() => {
                                  setModalOpen(false);
                                }}
                              >
                                Update
                              </button>
                            </NavLink>

                            <button
                              className="w-36 h-9 bg-orange rounded-lg text-xl cursor-pointer"
                              onClick={() => {
                                setModalOpen(false);
                              }}
                              id="cancelBtn"
                            >
                              Okay
                            </button>
                          </div>
                        );

                      case "studentAbsent":
                        return (
                          <NavLink to="/driver/nextride">
                            <div
                              className="w-36 h-9 bg-orange rounded-lg text-xl cursor-pointer"
                              onClick={() => {
                                setModalOpen(false);
                              }}
                            >
                              Got It
                            </div>
                          </NavLink>
                        );
                      case "rideRequest":
                        return (
                          <div className="flex justify-between gap-6">
                            <NavLink to="/driver/ride/riderequests">
                              <button
                                className="w-36 h-9 bg-orange rounded-lg text-xl cursor-pointer"
                                onClick={() => {
                                  setModalOpen(false);
                                }}
                              >
                                View
                              </button>
                            </NavLink>

                            <button
                              className="w-36 h-9 bg-orange rounded-lg text-xl cursor-pointer"
                              onClick={() => {
                                setModalOpen(false);
                              }}
                              id="cancelBtn"
                            >
                              Reject
                            </button>
                          </div>
                        );
                      case "missedRequest":
                        return (
                          <div className="flex justify-between gap-6">
                            <NavLink to="/driver/ride/riderequests">
                              <button
                                className="w-36 h-9 bg-orange rounded-lg text-xl cursor-pointer"
                                onClick={() => {
                                  setModalOpen(false);
                                }}
                              >
                                View
                              </button>
                            </NavLink>

                            <button
                              className="w-36 h-9 bg-orange rounded-lg text-xl cursor-pointer"
                              onClick={() => {
                                setModalOpen(false);
                              }}
                              id="cancelBtn"
                            >
                              Reject
                            </button>
                          </div>
                        );
                      case "chat":
                        return (
                          <div className="flex justify-between gap-6">
                            <NavLink to="/driver/support">
                              <button
                                className="w-36 h-9 bg-orange rounded-lg text-xl cursor-pointer"
                                onClick={() => {
                                  setModalOpen(false);
                                }}
                              >
                                View
                              </button>
                            </NavLink>

                            <button
                              className="w-36 h-9 bg-orange rounded-lg text-xl cursor-pointer"
                              onClick={() => {
                                setModalOpen(false);
                              }}
                              id="cancelBtn"
                            >
                              Okay
                            </button>
                          </div>
                        );
                      default:
                        <button
                          className="w-36 h-12 bg-orange rounded-lg text-xl cursor-pointer"
                          onClick={() => {
                            setModalOpen(false);
                          }}
                          id="cancelBtn"
                        >
                          Ok
                        </button>;
                        break;
                    }
                  })()}
                </div>
                {/* <button className="w-36 h-12 bg-orange rounded-lg text-xl cursor-pointer">
                  Submit
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const notifications = [
    {
      id: 1,
      type: "vehicle",
      Date: "2023/07/30",
      Time: "8.50 a.m.",
      From: "Vehicle coordinator",
      Message:
        "Your vehicle Condition verification is reach to out of date! Please check it for the continous riding.",
    },
    {
      id: 2,
      type: "rideRequest",
      Date: "2023/07/25",
      Time: "4.45 p.m.",
      From: "ParentId",
      Message: "New Student ride request",
    },
    {
      id: 3,
      type: "studentAbsent",
      Date: "2023/08/05",
      Time: "6.05 a.m.",
      From: "ParentId:p002",
      Message: "ChildId:c005 is not attending today",
    },
    {
      id: 4,
      type: "chat",
      Date: "2023/08/03",
      Time: "2.35 p.m.",
      From: "support agent",
      Message: "New message received",
    },
    {
      id: 5,
      type: "profile",
      Date: "2023/07/03",
      Time: "9.35 p.m.",
      From: "vehicle coordinator",
      Message: "Your driving License expires soon",
    },
    {
      id: 6,
      type: "missedRequest",
      Date: "2023/08/05",
      Time: "6.24 a.m.",
      From: "parentId:p007",
      Message: "Request to pickup missed child: C004",
    },
  ];

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <h1 className="text-[#5a5c69] text-[28px] mb-3 leading-8 font-normal cursor-pointer">
          Dashboard
        </h1>

        {/* check if ride is available or not */}
        {hasRide ? (
          <>
            <div className="grid grid-cols-5 h-screen gap-4">
              {/* left side column */}
              <div className="leftside col-span-3">
                {/* upper row */}
                <div className="w-full h-2/6 grid grid-cols-2 gap-4">
                  {/* next ride box */}
                  <NavLink to="/driver/nextride">
                    <div className=" h-[180px] rounded-[8px] bg-slate-100 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                      <div>
                        <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px] pb-1">
                          Your Next Ride is on
                        </h1>
                        <h2 className="text-[#B589DF] text-[12px] leading-[17px] font-bold">
                          Tomorrow at 5.45 a.m
                        </h2>
                        <h2 className="text-[#B589DF] text-[12px] leading-[17px] font-bold">
                          From Homagama
                        </h2>
                      </div>
                      <FaRegCalendarMinus fontSize={28} color="" />
                    </div>
                  </NavLink>
                  {/* end of next ride box */}
                  {/* vehicle box */}
                  <NavLink to="/driver/vehicle">
                    <div className=" h-[180px] rounded-[8px] bg-slate-100 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                      <div>
                        <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px] pb-1">
                          Vehicle
                        </h1>
                        <div className="flex gap-x-20">
                          <div className="w-40 ">
                            <img
                              src={schoolVan}
                              alt="schoolVan"
                              className="border-2 border-gray"
                            ></img>
                          </div>
                          <div className="">
                            <h2 className="font-medium">PJ-4893</h2>
                            <h2>VID3001</h2>
                          </div>
                        </div>
                      </div>
                      <FaRegCalendarMinus fontSize={28} color="" />
                    </div>
                  </NavLink>
                  {/* end of vehicle box */}
                </div>
                {/* end of upper row */}
                {/* below row */}
                <div className="w-full h-4/6">
                  {/* chart */}
                  <div className=" bg-white shadow-md cursor-pointer rounded-[4px]">
                    <div className="bg-[#F8F9FC]  flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
                      <h2 className="text-orange text-[16px] leading-[19px] font-bold">
                        Earnings Overview
                      </h2>
                      <FaEllipsisV color="gray" className="cursor-pointer" />
                    </div>
                    <div className="w-full">
                      <LineChart
                        width={700}
                        height={300}
                        data={data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="pv"
                          stroke="#8884d8"
                          activeDot={{ r: 8 }}
                        />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                      </LineChart>
                    </div>
                  </div>
                  {/* end of chart */}
                </div>
                {/* end of below row */}
              </div>
              {/* end of left side column */}
              {/* right column */}
              <div className="col-span-2 mt-[-27px] rounded-md text-center">
                <div className="text-orange leading-4 text-lg font-bold mb-3">
                  New Updates
                </div>
                {/* notifi box */}
                <div className="flex flex-col gap-4">
                  {notifications.map((notifi) => (
                    <div
                      key={notifi.id}
                      className="h-20 w-[95%] rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                      onClick={() => {
                        setSelectedNotification(notifi);
                        setModalOpen(true);
                      }}
                    >
                      <div className="w-full">
                        <div className=" text-left">{notifi.Message}</div>
                        <div className=" flex justify-between mt-4">
                          <div className="text-blue-800 text-xs">
                            {notifi.Date}
                          </div>
                          <div className="justify-end text-xs text-slate-600">
                            {notifi.Time}
                          </div>
                        </div>
                      </div>
                    </div>
                    // </div>
                  ))}
                  {modalOpen && selectedNotification && (
                    <Modal
                      setModalOpen={setModalOpen}
                      notification={selectedNotification}
                    />
                  )}
                  {/* </button> */}
                </div>
                {/* end of notify box */}
              </div>
              {/* end of right column */}
            </div>
          </>
        ) : (
          // if not ride is available
          <div className="text-center mt-10">
            <div className=" grid grid-cols-2 mb-5">
              {/* left column */}
              <div className="leftside bg-white">
                <img src={schoolbusImg} alt="img" className="ml-4 w-full" />
              </div>
              {/* end of left column */}
              {/* right column */}
              <div className="rightside mt-12">
                {/* text section */}
                <div className="w-full h-3/5 p-10 text-center">
                  <h1 className="text-orange text-4xl mb-3 leading-15 ">
                    Hello {userName} , Welcome to the Edugo!{" "}
                  </h1>
                  <br></br>
                  <div className="text-[#5a5c69] text-2xl mt-4">
                    Begin your career as a Edugo Driver and enjoy best school
                    hiring experience with awesome income.
                  </div>
                  <br></br>
                  <div className="text-[#5a5c69] text-lg mt-5">
                    So, Hurry up to add your ride now!
                  </div>
                </div>
                {/* end of text section */}
                {/* button section */}
                <div className="w-full h-2/5 flex justify-center">
                  <NavLink to="/driver/vehicle/add">
                  <button className="flex justify-center w-80 h-12 mt-12 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                    <div className="flex py-3 gap-3 font-semibold">
                      Add School Ride
                    </div>
                  </button>
                  </NavLink>
                </div>
                {/* end of button section */}
              </div>
              {/* end of right column */}
            </div>
          </div>
        )}
      </MainLayout>
      {/* {modalOpen && <Modal setOpenModal={setModalOpen} />} */}
    </div>
  );
}

export default DriverDashboardPg;
