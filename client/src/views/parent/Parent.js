import React, { useState, useEffect } from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
import MainLayout from "../../components/layout/MainLayout";
import { FaRegCalendarMinus, FaChild, FaEye } from "react-icons/fa";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import { AiFillDashboard } from "react-icons/ai";
import { NavLink } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
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

function Parent() {
  const userName = localStorage.getItem("userName");

  const notifications = [
    {
      id: 1,
      type: "payment",
      Date: "2023/07/30",
      From: "Vehicle coordinator",
      Message: "Your payment is verified.",
    },
    {
      id: 2,
      type: "rideRequest",
      Date: "2023/07/25",
      From: "ParentId",
      Message: "You missed ride",
    },
    {
      id: 3,
      type: "paymentReminder",
      Date: "2023/08/05",
      From: "ParentId:p002",
      Message: "You have to pay before 8/30",
    },
    {
      id: 4,
      type: "chat",
      Date: "2023/08/03",
      From: "support agent",
      Message: "New message received",
    },
    {
      id: 5,
      type: "profile",
      Date: "2023/07/03",
      From: "vehicle coordinator",
      Message: "Emergency occured",
    },
    {
      id: 6,
      type: "missedRequest",
      Date: "2023/08/05",
      From: "parentId:p007",
      Message: "Driver accepted your Ride Request",
    },
  ];

  // const child = [
  //   {
  //     id: 1,
  //     name: "R.B.S. Udayanga",
  //     image: require("../../images/user.png"),
  //     status: "On ride",
  //     pickupTime: " 7.10 AM",
  //   },
  //   {
  //     id: 2,
  //     name: "L.L.A Hansani",
  //     image: require("../../images/user.png"),
  //     status: "Not Ride",
  //     pickupTime: " 7.20 AM",
  //   },
  //   {
  //     id: 2,
  //     name: "R.B.K. Maduranga",
  //     image: require("../../images/user.png"),
  //     status: "Not Ride",
  //     pickupTime: " 6.50 AM",
  //   },
  // ];

  //user id
  const userId = localStorage.getItem("userId");

  const [children, setChildren] = useState([]);

  useEffect(() => {
    async function childrenData() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/parent/dashboard/children/${userId}`
        );
        const data = await response.json();
        setChildren(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    childrenData();
  }, [userId]);

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
                      case "payment":
                        return (
                          <div>
                            <button
                              className="w-36 h-9 bg-orange hover:bg-black hover:text-white rounded-lg text-xl cursor-pointer"
                              onClick={() => {
                                setOpenModal(false);
                              }}
                              id="cancelBtn"
                            >
                              Okay
                            </button>
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

                      case "paymentReminder":
                        return (
                          <NavLink to="/parent/payment">
                            <div>
                              <button
                                className="w-36 h-9 bg-orange hover:bg-black hover:text-white rounded-lg text-xl cursor-pointer"
                                onClick={() => {
                                  setOpenModal(false);
                                }}
                                id="cancelBtn"
                              >
                                Pay
                              </button>
                            </div>
                          </NavLink>
                        );
                      case "rideRequest":
                        return (
                          <div className="flex justify-between gap-6">
                            <NavLink to="/parent/children/childlocation">
                              <button
                                className="w-36 h-9 bg-orange hover:bg-black hover:text-white rounded-lg text-xl cursor-pointer"
                                onClick={() => {
                                  setOpenModal(false);
                                }}
                              >
                                View
                              </button>
                            </NavLink>

                            <button
                              className="w-36 h-9 bg-orange hover:bg-black hover:text-white rounded-lg text-xl cursor-pointer"
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
                            <NavLink to="/parent/children/viewride">
                              <button
                                className="w-36 h-9 bg-orange hover:bg-black hover:text-white rounded-lg text-xl cursor-pointer"
                                onClick={() => {
                                  setOpenModal(false);
                                }}
                              >
                                View
                              </button>
                            </NavLink>

                            <button
                              className="w-36 h-9 bg-orange hover:bg-black hover:text-white rounded-lg text-xl cursor-pointer"
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
                            <NavLink to="/parent/support">
                              <button
                                className="w-36 h-9 bg-orange hover:bg-black hover:text-white rounded-lg text-xl cursor-pointer"
                                onClick={() => {
                                  setOpenModal(false);
                                }}
                              >
                                View
                              </button>
                            </NavLink>

                            <button
                              className="w-36 h-9 bg-orange hover:bg-black hover:text-white rounded-lg text-xl cursor-pointer"
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
            Hello {userName}!{/* Dashboard */}
          </h1>

          <div className="grid grid-cols-2 grid-rows-3 gap-3 mt-[20px] pb-[12px]">
            {/* Registered Children */}
            <div className=" h-[160px] rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
              <div>
                <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69]  pb-5">
                  Registered Children
                </h1>
                <div className="text-[#B589DF] text-[12px] leading-[17px] font-bold">
                  {children.map((child) => (
                    <div key={child.child_id}>{child.child_name}</div>
                  ))}
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
            <div className="grid row-span-2 rounded-[8px] bg-slate-200 px-3">
              <div className=" mb-1 p-3 flex justify-center">
                <div className="text-[20px] leading-[24px] font-bold text-[#5a5c69]">
                  {" "}
                  Children Status{" "}
                </div>
              </div>
              {children.map((child) => (
                <div
                  key={child.child_id}
                  className="border border-orange rounded-[8px] flex h-[60px] px-3 py-2 gap-4 my-1 "
                >
                  <div className="">
                    <img
                      src={child.image}
                      alt="child_image"
                      className="w-12 border border-slate-400 rounded-full p-[3px]"
                    />
                  </div>
                  <div className="pt-3 w-[300px] text-slate-800 ">
                    {child.ride_status === "ride" ? (
                      <span className="font-bold text-green-600">Ride</span>
                    ) : child.ride_status === "notride" ? (
                      <span className="font-bold text-gray-400">
                        Not Ongoing Ride
                      </span>
                    ) : child.ride_status === "notreg" ? (
                      <span className="font-bold text-blue-600">
                        Not Registered
                      </span>
                    ) : (
                      <span className="font-bold text-gray-600">
                        Unknown Status
                      </span>
                    )}
                  </div>
                  {child.ride_status === "notride" && (
                    <NavLink to="/parent/children/childlocation">
                      <div className="border-2 border-white cursor-pointer rounded-md w-8 h-8 mt-3 pt-2 pl-[6px] ml-24">
                        <FaEye className="text-blue-700 hover:text-black"></FaEye>
                      </div>
                    </NavLink>
                  )}
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
