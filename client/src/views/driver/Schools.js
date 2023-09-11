import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard, AiFillCar } from "react-icons/ai";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
  MdLocationOn,
} from "react-icons/md";

import { TfiCheckBox } from "react-icons/tfi";

// import { BiSolidSelectMultiple } from "react-icons/bi";
import {
  RiAddBoxLine,
  RiCheckboxLine,
  RiCheckboxIndeterminateLine,
} from "react-icons/ri";

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

  //get total school details------------------------------------------------------------------------------------------------------------
  const [allSchoolList, setSchoolList] = useState([]);
  const [regSchoolList, setRegSchoolList] = useState([]);

  //   useEffect(() => {
  //     async function getSchoolDetails() {
  //       try {
  //         const response = await fetch(
  //           `http://localhost:5000/edugo/driver/ride/view/school/${userId}`
  //         );
  //         const data = await response.json();
  //         setSchoolList(data.schoolList);
  //         setRegSchoolList(data.regSchoolList);
  //       } catch (err) {
  //         console.error(err.message);
  //       }
  //     }

  //     getSchoolDetails();
  //   }, [userId]);

  async function getSchoolDetails(setSchoolList, setRegSchoolList, userId) {
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

  useEffect(() => {
    // Call getSchoolDetails from useEffect
    getSchoolDetails(setSchoolList, setRegSchoolList, userId);
  }, [userId]);

  //use when page must be reloaded with data
  const recallData = async () => {
    await getSchoolDetails(setSchoolList, setRegSchoolList, userId);
  };

  //submit selected new school-----------------------------------------------------------------------------------------------------------

  const handleSubmit = async (schoolId) => {
    // event.preventDefault();

    try {
      const body = { schoolId: schoolId };
      const response = await fetch(
        `http://localhost:5000/edugo/driver/ride/select/school/${userId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      if (response.status === 200) {
        swal({
          title: "Selected School is sucessfully added!",
          icon: "success",
          buttons: {
            confirm: {
              className:
                "bg-orange text-white px-10 py-2 rounded-lg items-center hover:bg-gray ",
            },
          },
        }).then(() => {
          // window.location.reload();
          recallData();
        });
      } else {
        console.log(response);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  //handle new school selecting option and alert display-------------------------------------------------------------------------------------------

  const handleAddClick = (schoolId) => {
    swal({
      title: "Are you sure?",
      text: "The selected school will be add to your school ride",
      icon: "warning",
      buttons: ["No, cancel!", "Yes, add it!"],
      dangerMode: true,
    }).then((confirmed) => {
      if (confirmed) {
        handleSubmit(schoolId);
      } else {
      }
    });
  };

  //remove selected school-----------------------------------------------------------------------------------------------------------

//   const handleRemove = async (schoolId) => {
//     // event.preventDefault();

//     try {
//       const body = { schoolId: schoolId };
//       const response = await fetch(
//         `http://localhost:5000/edugo/driver/ride/select/school/${userId}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(body),
//         }
//       );
//       if (response.status === 200) {
//         swal({
//           title: "Selected School is sucessfully added!",
//           icon: "success",
//           buttons: {
//             confirm: {
//               className:
//                 "bg-orange text-white px-10 py-2 rounded-lg items-center hover:bg-gray ",
//             },
//           },
//         }).then(() => {
//           // window.location.reload();
//           recallData();
//         });
//       } else {
//         console.log(response);
//       }
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

  //handle school removing option and alert display-------------------------------------------------------------------------------------------

  const handleRemoveClick = async (schoolId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/edugo/driver/ride/checkBeforeRemove/school/${userId},${schoolId}`
      );
      const data = await response.json();

      //check whether related school has childrens in this ride
      if (data === "can't delete") {
        handleRemove(schoolId);
      }
      //prevent the removing
      else {
        swal({
          title:
            "You can't remove this school from your ride!\n There are children of this school in your school ride\nPlaease Contact Support agent if need.",
          icon: "success",
          buttons: {
            confirm: {
              className:
                "bg-orange text-white px-10 py-2 rounded-lg items-center hover:bg-gray ",
            },
          },
        }).then(() => {
          // window.location.reload();
          // recallData();
        });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

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
                    className="z-0 w-[100%] rounded-[8px] bg-slate-200 border-t-[1.4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                  >
                    <div className=" px-5 flex gap-1 w-1/5 leading-4">
                      <div className="text-[12px] font-semibold">
                        {school.school_id}
                      </div>
                    </div>
                    <div className="flex gap-1 w-1/5 leading-4">
                      <div className="text-[12px] font-semibold">
                        {school.school_name}
                      </div>
                    </div>
                    <div className="flex gap-1 w-1/5 leading-4">
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
                    </div>

                    {isRegistered ? (
                      <>
                        {/* remove button------------------------------------------------------- */}
                        <div className="flex gap-1 w-1/5 leading-4">
                          <button
                            onClick={() => handleRemoveClick(school.school_id)}
                            className="flex justify-center m-2 w-8 h-8 bg-red-500 hover:bg-red-700 rounded-md cursor-pointer"
                          >
                            <div className="flex mt-2 gap-3 font-semibold">
                              <RiCheckboxIndeterminateLine />
                            </div>
                          </button>
                        </div>

                        {/* selected button----------------------------------------------- */}
                        <div className="flex gap-1 w-1/5 leading-4">
                          <button className="flex justify-center m-2 w-8 h-8 bg-green-300 rounded-md cursor-pointer">
                            <div className="flex mt-2 gap-3 font-semibold">
                              <TfiCheckBox />
                            </div>
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* add button---------------------------------------------------------------------- */}
                        <div className="flex gap-1 w-2/5 leading-4">
                          <button
                            onClick={() => handleAddClick(school.school_id)}
                            className="flex justify-center m-2 w-8 h-8 bg-blue-500 hover:bg-blue-700 rounded-md cursor-pointer"
                          >
                            <div className="flex mt-2 gap-3 font-semibold">
                              <RiAddBoxLine />
                            </div>
                          </button>
                        </div>
                        {/* ----------------------------------------------------------------------------------------- */}
                      </>
                    )}
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
