import React, { useState } from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
import MainLayout from "../../components/layout/MainLayout";
import { FaRegCalendarMinus, FaChild } from "react-icons/fa";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import { AiFillDashboard } from "react-icons/ai";
import { NavLink } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

function Parent() {
  const sideNavBarLinks = [
    {
      title: "Dashboard",
      path: "/parent/dashboard",
      icon: <AiFillDashboard />,
    },
    { title: "Children", path: "/parent/children", icon: <FaChild /> },
    { title: "Payment", path: "/parent/payment", icon: <MdPayments /> },
    { title: "Support", path: "/parent/support", icon: <MdSupportAgent /> },
    {
      title: "Feedback",
      path: "/parent/feedback",
      icon: <MdOutlineRateReview />,
    },
  ];
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

  const child = [
    {
      id: 1,
      name: "R.B.S. Udayanga",
      image: require("../../images/user.png"),
      status: "On ride",
      pickupTime: " 7.10 AM",
    },
    {
      id: 2,
      name: "R.B.S. Udayanga",
      image: require("../../images/user.png"),
      status: "Not Ride",
      pickupTime: " 7.20 AM",
    },
  ];

  // const navigate = useNavigate();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [username, setUsername] = useState("");

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/edugo/user/isAuth", {
  //         method: "GET",
  //         credentials: "include", // This sends cookies along with the request
  //       });

  //       const data = await response.json();
  //       // console.log(data);
  //       if (response.status === 200) {  //&& data.valid
  //         setIsAuthenticated(true);
  //         setUsername(data.username);
  //       } else {
  //         // navigate("/login");
  //       }
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   };

  //   checkAuth();
  // }, [navigate]);

  // if (!isAuthenticated) {
  //   return <div>Loading...</div>;
  // }

  // const [name, setName] = useState("");
  // const navigate = useNavigate();

  // axios.defaults.withCredentials = true;

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/edugo/user/isAuth")
  //     .then((res) => {
  //       if (res.data.valid) {
  //         setName(res.data.username);
  //       } else {
  //         navigate("/login");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // });

  // useEffect(() => {
  //   const response = fetch("http://localhost:5000/edugo/user/isAuth", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   });

  //   if (response.data.valid) {
  //     setName(response.data.username);
  //   } else {
  //     navigate("/login");
  //   }

  //   console.log(response);
  // }, []);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  //notification popup modals
  function Modal({ setOpenModal, notification }) {
    return (
      <div>
        <div className="bg-white p-0 px-60 rounded-lg ">
          <div className="fixed top-0 left-0 w-screen  bg-stone-900/75 flex justify-center items-center  h-screen bg-gradient-to-b from-opacity-70 to-opacity-30">
            <div className="w-1/3  rounded-lg bg-white shadow-md flex flex-col p-5 ">
              <div className="flex justify-end">
                <button
                  className="text-2xl cursor-pointer "
                  onClick={() => {
                    setOpenModal(false);
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
                              setOpenModal(false);
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
                                  setOpenModal(false);
                                }}
                              >
                                Update
                              </button>
                            </NavLink>

                            <button
                              className="w-36 h-9 bg-orange rounded-lg text-xl cursor-pointer"
                              onClick={() => {
                                setOpenModal(false);
                              }}
                              id="cancelBtn"
                            >
                              Okay
                            </button>
                          </div>
                        );

                      case "studentAbsent":
                        return (
                          <NavLink to="/user/profile">
                            <div
                              className="w-36 h-9 bg-orange rounded-lg text-xl cursor-pointer"
                              onClick={() => {
                                setOpenModal(false);
                              }}
                            >
                              Got It
                            </div>
                          </NavLink>
                        );
                      case "rideRequest":
                        return (
                          <div className="flex justify-between gap-6">
                            <NavLink to="/user/profile">
                              <button
                                className="w-36 h-9 bg-orange rounded-lg text-xl cursor-pointer"
                                onClick={() => {
                                  setOpenModal(false);
                                }}
                              >
                                View
                              </button>
                            </NavLink>

                            <button
                              className="w-36 h-9 bg-orange rounded-lg text-xl cursor-pointer"
                              onClick={() => {
                                setOpenModal(false);
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
                            <NavLink to="/user/profile">
                              <button
                                className="w-36 h-9 bg-orange rounded-lg text-xl cursor-pointer"
                                onClick={() => {
                                  setOpenModal(false);
                                }}
                              >
                                View
                              </button>
                            </NavLink>

                            <button
                              className="w-36 h-9 bg-orange rounded-lg text-xl cursor-pointer"
                              onClick={() => {
                                setOpenModal(false);
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
                            <NavLink to="/user/profile">
                              <button
                                className="w-36 h-9 bg-orange rounded-lg text-xl cursor-pointer"
                                onClick={() => {
                                  setOpenModal(false);
                                }}
                              >
                                View
                              </button>
                            </NavLink>

                            <button
                              className="w-36 h-9 bg-orange rounded-lg text-xl cursor-pointer"
                              onClick={() => {
                                setOpenModal(false);
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
                            setOpenModal(false);
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

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className=" px-6">
          <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
            Dashboard
          </h1>

          <div className="grid grid-cols-2 grid-rows-3 gap-[80px] mt-[25px] pb-[15px]">
            {/* Registered Children */}
            <div className=" h-[110px] rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
              <div>
                <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px] pb-1">
                  Registered Children (3)
                </h1>
                <div className="text-[#B589DF] text-[12px] leading-[17px] font-bold">
                  <h2>R.B.S. Udayanga</h2>
                  <h2> L.L.A. Hansani</h2>
                  <h2>R.B.k Maduranga</h2>
                </div>
              </div>
              <FaRegCalendarMinus fontSize={28} color="" />
            </div>
            {/* Alerts */}
            <div className="grid row-span-3 rounded-[8px] bg-slate-200 ">
              <div className=" mb-1 p-3 flex justify-center">
                <div className="text-[20px] leading-[24px] font-bold text-[#5a5c69]">
                  {" "}
                  New Updates{" "}
                </div>
              </div>
              <div className="overflow-y-auto  px-5 my-3 mx-2 ">
                <div className="flex flex-col gap-4 h-[435px]">
                  {notifications.map((notifi) => (
                    <div
                      key={notifi.id}
                      className="h-20 w-full rounded-[8px] bg-slate-100 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
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
                      setOpenModal={setModalOpen}
                      notification={selectedNotification}
                    />
                  )}
                  {/* </button> */}
                </div>
              </div>
            </div>
            <div className="grid row-span-2 rounded-[8px] bg-slate-200">
              <div className=" mb-1 p-3 flex justify-center">
                <div className="text-[20px] leading-[24px] font-bold text-[#5a5c69]">
                  {" "}
                  New Updates{" "}
                </div>
              </div>
              {child.map((child) => (
                <div key={child.id} className="border flex h-[80px]">
                  <div>
                    <img
                      src={child.image}
                      alt="child_image"
                      className="w-14 border rounded-full p-[3px]"
                    />
                  </div>
                  <div>
                    {child.status === "On ride" ? (
                      child.status
                    ) : (
                      <span>Next pickedup time  {child.pickupTime}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Parent;
