import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard, AiFillCar } from "react-icons/ai";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
  MdLocationOn,
} from "react-icons/md";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import { useNavigate, NavLink } from "react-router-dom";

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

function Schools() {
  const userId = localStorage.getItem("userId");

  //get total ride details----------------------------------------
  const [allSchoolList, setSchoolList] = useState([]);
  const [regSchoolList, setRegSchoolList] = useState([]);

  useEffect(() => {
    async function getSchoolDetails() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/driver/ride/view/school/${userId}`
        );
        const data = await response.json();
        setSchoolList(data.schoolList);
        setRegSchoolList(data.regSchoolList);
      } catch (err) {
        console.error(err.message);
      }
    }

    getSchoolDetails();
  }, [userId]);
  //   const isBothRide =
  //   rideDataList.length > 0 && rideDataList[0].ride_type === "both";

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <h1 className="text-[#5a5c69] text-[28px]  leading-8 font-normal cursor-pointer">
          Schools
        </h1>
        <div className="flex justify-end w-full mb-4">
          <NavLink to="/driver/add/school">
            <button className="flex justify-center w-56 h-10 mr-12 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
              <div className="flex mt-2 gap-3 font-semibold">
                Add New School
              </div>
            </button>
          </NavLink>
        </div>
        <div className="h-[600px]  border-blue-500">
          <div className="mt-5 h-[500px]  overflow-y-auto p-5 ">
            <div className="bg-slate-300 h-8 flex mt-0 mb-4 items-center justify-between">
              <h1 className="text-xl font-bold text-center flex-1">
                Registered Schools :
              </h1>
              {/* {modalOpen1 && <Modal1 setModalOpen1={setModalOpen1} />} */}
            </div>
            {/* school list */}
            <div className="flex flex-col h-12 gap-4">
              {allSchoolList.map((school, index) => {
                const isRegistered = regSchoolList.some(
                  (regSchool) => regSchool.school_id === school.school_id
                );
                return (
                  <div
                    key={index}
                    className="z-0 w-[100%] rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
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
                    <div className="flex gap-1 w-1/3 leading-4">
                      <button
                        onClick={() => {
                          //   setModalOpen2(true);
                        }}
                        className="flex justify-center m-2  w-8 h-8  bg-orange hover:bg-[#b3913b] rounded-md cursor-pointer"
                      >
                        <div className="flex mt-2 gap-3 font-semibold">
                          <MdLocationOn className=" text-[20px]" />
                        </div>
                      </button>

                      {isRegistered ? (
                        <>
                          <div className="text-green-500">✔️</div>
                          <button
                            onClick={() => {
                              // Handle remove action here
                              // Call a function to remove the school from the registered list
                              // You can pass school.school_id as an argument to this function
                            }}
                            className="flex justify-center m-2 w-8 h-8 bg-red-500 hover:bg-red-700 rounded-md cursor-pointer"
                          >
                            <div className="flex mt-2 gap-3 font-semibold">
                              Remove
                            </div>
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="text-blue-500">+</div>
                          <button
                            onClick={() => {
                              // Handle add action here
                              // Call a function to add the school to the registered list
                              // You can pass school.school_id as an argument to this function
                            }}
                            className="flex justify-center m-2 w-8 h-8 bg-blue-500 hover:bg-blue-700 rounded-md cursor-pointer"
                          >
                            <div className="flex mt-2 gap-3 font-semibold">
                              Add
                            </div>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* end of school list */}
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Schools;
