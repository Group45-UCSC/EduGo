import React, { useState, useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaChild, FaEye } from "react-icons/fa";
import {
  MdLocationOn,
  MdPersonAdd,
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import { AiFillDashboard } from "react-icons/ai";
import FormInput from "../../components/layout/FormInput";
import { NavLink } from "react-router-dom";

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

function Children() {
  const userId = localStorage.getItem("userId");

  const [children, setChildren] = useState([]);

  useEffect(() => {
    async function childrenData() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/parent/children/view/${userId}`
        );
        const data = await response.json();
        setChildren(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    childrenData();
  }, [userId]);

  const [modalOpen, setModalOpen] = useState(false);
  // Add children model load

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function Modal({ setOpenModal }) {
    return (
      <div>
        <form
          className="bg-white p-0 px-60 rounded-lg "
          onSubmit={handleSubmit}
        >
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
              <div className="">
                <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer text-center">
                  Register
                </h1>
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
                <FormInput></FormInput>
              </div>

              <div className="flex justify-center items-center mt-5">
                <button
                  className="w-36 h-12 mr-2 bg-orange rounded-lg text-xl cursor-pointer"
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  id="cancelBtn"
                >
                  Cancel
                </button>
                <button className="w-36 h-12 bg-orange rounded-lg text-xl cursor-pointer">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className=" px-6">
          <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
            Children
          </h1>
          <div className="mt-[0px] pb-[15px]">
            <div className="flex justify-end w-5/6 ml-24 mb-4">
              <NavLink to="/parent/children/addchild">
                <button
                  className="flex justify-center w-56 h-10 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                  // onClick={() => {
                  //   setModalOpen(true);
                  // }}
                >
                  <div className="flex mt-2 gap-3 font-semibold">
                    <MdPersonAdd className="text-[25px]" />
                    Add New Children
                  </div>
                </button>
              </NavLink>
            </div>
            {/*-----------------------------------Child detail boxes---------------------------------*/}
            <div className="flex justify-center">
              <div className="flex flex-col gap-4">
                {children.map((child, index) => (
                  <div
                    key={index}
                    className="  h-[150px] w-full rounded-[8px] bg-slate-200 border-l-[4px] border-orange  px-5 py-5 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                  >
                    <div className="flex  w-[950px] gap-3 ">
                      <div className="w-[110px] ">
                        <NavLink
                          to={`/parent/children/childrendetails/${
                            child.id
                          }?data=${encodeURIComponent(JSON.stringify(child))}`}
                        >
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                        alt="Profile"
                        className="w-20 h-25 rounded-full mr-3"
                      />
                        </NavLink>
                      </div>
                      <div className="w-[230px]  ">
                        <div className="leading-6 mt-5">
                          <div className="flex gap-1">
                            <h3 className="text-[16px] leading-[17px] font-semibold">
                              Name:
                            </h3>
                            <div className="text-[12px] font-semibold">
                              {child.child_name}
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <h3 className="text-[16px] leading-[17px] font-semibold">
                              School Name:
                            </h3>
                            <div className="text-[12px] font-semibold">
                              {child.school_name}
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <h3 className="text-[16px] leading-[17px] font-semibold">
                              School Ride:
                            </h3>
                            <div className="text-[12px] font-semibold">
                              {child.ride_status !== "notreg" ? (
                                <div>{child.ride_id}</div>
                              ) : (
                                <div>
                                  {child.request_status === "accepted" ? (
                                    <div>Accepted</div>
                                  ) : child.request_status === "reject" ? (
                                    <div>Rejected</div>
                                  ) : child.request_status === "pending" ? (
                                    <div>Pending</div>
                                  ) : (
                                    <div>No Ride ID</div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[420px] ml-40 flex justify-end pt-9">
                        {child.ride_status === "ride" && (
                          <div className=" flex gap-5">
                            <div className="font-bold text-[#16a34a] text-lg">
                              <h1>On Ride</h1>
                            </div>
                            <div className="">
                              <NavLink
                                to={`/parent/children/childlocation/${
                                  child.id
                                }?data=${encodeURIComponent(
                                  JSON.stringify(child)
                                )}`}
                              >
                                <button className="flex justify-center  w-36 h-10  bg-orange hover:bg-[#b3913b] rounded-md cursor-pointer">
                                  <div className="flex mt-2 gap-3 font-semibold">
                                    <MdLocationOn className=" text-[25px]" />
                                    Location
                                  </div>
                                </button>
                              </NavLink>
                            </div>
                            <div className="">
                              <NavLink
                                to={`/parent/children/viewride/${
                                  child.id
                                }?data=${encodeURIComponent(
                                  JSON.stringify(child)
                                )}`}
                              >
                                <button className="flex justify-center  w-40 h-10 bg-orange hover:bg-[#b3913b] rounded-md cursor-pointer">
                                  <div className="flex mt-2 gap-3 font-semibold">
                                    <FaEye fontSize={28} color="" />
                                    View Ride
                                  </div>
                                </button>
                              </NavLink>
                            </div>
                          </div>
                        )}

                        {child.ride_status === "notride" && (
                          <div className=" mr-24">
                            <h1 className=" text-xl font-bold text-slate-600">
                              Next Ride: 7.10 AM{" "}
                            </h1>
                          </div>
                        )}

                        {child.ride_status === "notreg" &&
                          (child.request_status === "pending" ? (
                            <label className="flex justify-center w-48 h-10 bg-orange hover:bg-[#b3913b] rounded-md cursor-pointer">
                              <div className="flex mt-2 gap-3 font-semibold">
                                {child.request_status}
                              </div>
                            </label>
                          ) : child.request_status === "reject" ? (
                            <label className="flex justify-center w-48 h-10 bg-orange hover:bg-[#b3913b] rounded-md cursor-pointer">
                              <div className="flex mt-2 gap-3 font-semibold">
                                {child.request_status}
                              </div>
                            </label>
                          ) : (
                            <div className="flex gap-5">
                              {/*---------------------Buttons-----------------------------*/}
                              <div className="">
                                <NavLink
                                  to={`/parent/children/addnewride/${
                                    child.id
                                  }?data=${encodeURIComponent(
                                    JSON.stringify(child)
                                  )}`}
                                >
                                  <button className="flex justify-center w-48 h-10 bg-orange hover:bg-[#b3913b] rounded-md cursor-pointer">
                                    <div className="flex mt-2 gap-3 font-semibold">
                                      Choose School Ride
                                    </div>
                                  </button>
                                </NavLink>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </MainLayout>
    </div>
  );
}

export default Children;
