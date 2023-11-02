// import React, { useState, useEffect } from "react";
// import { AiFillDashboard } from "react-icons/ai";
// import { FaChild } from "react-icons/fa";
// import {
//   MdPayments,
//   MdSupportAgent,
//   MdOutlineRateReview,
// } from "react-icons/md";
// import { BsStar, BsStarFill } from "react-icons/bs";
// import MainLayout from "../../components/layout/MainLayout";
// import { NavLink, useLocation } from "react-router-dom";
// import user from "../../images/user.png";
// import swal from "sweetalert";

// const sideNavBarLinks = [
//   {
//     title: "Dashboard",
//     path: "/parent/dashboard",
//     icon: <AiFillDashboard />,
//   },
//   { title: "Children", path: "/parent/children", icon: <FaChild /> },
//   { title: "Payment", path: "/parent/payment", icon: <MdPayments /> },
//   { title: "Support", path: "/parent/support", icon: <MdSupportAgent /> },
//   {
//     title: "Feedback",
//     path: "/parent/feedback",
//     icon: <MdOutlineRateReview />,
//   },
// ];

// function ViewVehicle() {
//   // --------get child and vehicleData array from Addschool page--------------------------
//   const location = useLocation();
//   const childParam = new URLSearchParams(location.search).get("child");
//   const vehicleDataParam = new URLSearchParams(location.search).get("data");

//   const child = JSON.parse(decodeURIComponent(childParam));
//   const vehicleData = JSON.parse(decodeURIComponent(vehicleDataParam));

//   //-------Get reaching school list-----------------------------------------
//   const rideId = vehicleData.ride_id;
//   const [school, setSchool] = useState([]);

//   useEffect(() => {
//     async function schoolData() {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/edugo/parent/children/viewVehicle/viewSchool/${rideId}`
//         );
//         const data = await response.json();
//         setSchool(data);
//       } catch (err) {
//         console.error(err.message);
//       }
//     }

//     schoolData();
//   }, [rideId]);
//   //----Get driver reviews-----------------------------------------------------------

//   const driver_id = vehicleData.driver_id;

//   const [review, setReview] = useState([]);

//   useEffect(() => {
//     async function reviewData() {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/edugo/parent/children/viewVehicle/viewReview/${driver_id}`
//         );
//         const data = await response.json();
//         setReview(data);
//       } catch (err) {
//         console.error(err.message);
//       }
//     }

//     reviewData();
//   }, [driver_id]);

//   const [selectedShift, setSelectedShift] = useState(''); // State to store the selected shift

//   const handleShiftChange = (event) => {
//     setSelectedShift(event.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   const [modalOpen, setModalOpen] = useState(false);
//   function Modal({ setOpenModal }) {
//     return (
//       <div>
//         <form
//           className="bg-white p-0 px-60 rounded-lg "
//           onSubmit={handleSubmit}
//         >
//           <div className="fixed top-0 left-0 w-screen  bg-stone-900/75 flex justify-center items-center  h-screen bg-gradient-to-b from-opacity-70 to-opacity-30">
//             <div className="w-1/3  rounded-lg bg-white shadow-md flex flex-col p-5 ">
//               <div className="flex justify-end">
//                 <button
//                   className="text-2xl cursor-pointer "
//                   onClick={() => {
//                     setOpenModal(false);
//                   }}
//                 >
//                   X
//                 </button>
//               </div>
//               <div className="">
//                 <h1 className="text-[#5a5c69] text-[24px] leading-8 font-normal cursor-pointer text-center">
//                   Are you sure add this vehicle ?
//                 </h1>
//               </div>
//               <div className="flex justify-center items-center mt-5">
//                 <label>
//                   <input
//                     type="radio"
//                     name="shift"
//                     value="morning"
//                     checked={selectedShift === "morning"}
//                     onChange={handleShiftChange}
//                   />
//                   Morning
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="shift"
//                     value="afternoon"
//                     checked={selectedShift === "afternoon"}
//                     onChange={handleShiftChange}
//                   />
//                   Afternoon
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="shift"
//                     value="both"
//                     checked={selectedShift === "both"}
//                     onChange={handleShiftChange}
//                   />
//                   Both
//                 </label>
//               </div>
//               <div className="flex justify-center items-center mt-5">
//                 <NavLink
//                 to={`/parent/children/`}
//                 >
//                 <button
//                   className="w-36 h-12 mr-5 bg-orange rounded-lg text-xl cursor-pointer"
//                   onClick={() => {
//                     handleSelectRideClick();
//                     setOpenModal(false);
//                   }}
//                 >
//                   Submit
//                 </button>
//                 </NavLink>
//                 <button
//                   className="w-36 h-12  bg-orange rounded-lg text-xl cursor-pointer"
//                   onClick={() => {
//                     setOpenModal(false);
//                   }}
//                   id="cancelBtn"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }

//   // Get a reference to the button element by its ID
//   const handleSelectRideClick = () => {

//     if (!selectedShift) {
//       // Display a SweetAlert alert for the user
//       swal({
//         title: "Please select a shift (morning/afternoon/both)!",
//         icon: "warning", // You can change the icon to "error" for an error message
//         buttons: {
//           confirm: {
//             className:
//               "bg-orange text-white px-10 py-2 rounded-lg items-center hover:bg-gray",
//           },
//         },
//       });
//       return; // Do not proceed with the submission
//     }

//     const ride_id = vehicleData.ride_id;
//     const driver_id = vehicleData.driver_id;
//     const child_location = child.pickup_location;
//     const school = child.school_name;
//     const child_id = child.child_id;

//     console.log('Selected Shift:', selectedShift);

//     // Call the function when the button is clicked
//     handleSelectRide(ride_id, driver_id, child_location, school, child_id);
//   };

//   const userId = localStorage.getItem("userId");

//   const handleSelectRide = async (
//     ride_id,
//     driver_id,
//     child_location,
//     school,
//     child_id
//   ) => {
//     try {
//       const body = { ride_id, driver_id, child_location, school, child_id, selectedShift };

//       const response = await fetch(
//         `http://localhost:5000/edugo/parent/children/viewVehicle/rideRequest/${userId}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(body),
//         }
//       );

//       if (response.status === 200) {
//         console.log("Ride details uploaded successfully!");
//         swal({
//           title: "Requested for Driver!",
//           icon: "success",
//           buttons: {
//             confirm: {
//               className:
//                 "bg-orange text-white px-10 py-2 rounded-lg items-center hover:bg-gray ",
//             },
//           },
//         }).then(() => {
//           console.log(response);
//         });
//       } else {
//         // Handle the error here
//         console.error("Failed to upload ride details:", response.statusText);
//       }
//     } catch (err) {
//       console.error("Error:", err.message);
//     }
//   };

//   function RatingStars({ rating }) {
//     const filledStars = Math.floor(rating);
//     const partFilledStar = filledStars + 1;

//     const starFilledWidth = (starIndex) => {
//       if (starIndex + 1 <= filledStars) {
//         return "100%";
//       } else if (starIndex + 1 === partFilledStar) {
//         console.log();
//         return `${Math.floor((rating - filledStars) * 100)}%`;
//       } else {
//         return "0%";
//       }
//     };

//     return (
//       <div className="rating">
//         {Array(5)
//           .fill(0)
//           .map((star, index) => (
//             <div className="star" key={index}>
//               <div
//                 className="starFull"
//                 style={{
//                   width: starFilledWidth(index),
//                 }}
//               >
//                 <BsStarFill />
//               </div>
//               <div className="starEmpty">
//                 <BsStar />
//               </div>
//             </div>
//           ))}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <MainLayout data={sideNavBarLinks}>
//         <div className=" px-6 ">
//           <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
//             Vehicle Review <br></br>
//             {/* Child Id:{child.child_id} <br></br>
//             Driver Id: {vehicleData.driver_id} */}
//           </h1>
//           <div className="">
//             <div className="flex justify-end w-5/6 ml-24 mb-4">
//               <button
//                 className="flex justify-center w-56 h-10 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
//                 // onClick={handleSelectRideClick}

//                 onClick={() => {
//                   setModalOpen(true);
//                 }}
//               >
//                 <div className="flex mt-2 gap-3 font-semibold">Select Ride</div>
//               </button>
//             </div>
//           </div>

//           <div className="flex gird grid-cols-3 grid-rows-1 gap-3 h-[180px] px-6">
//             <div className=" bg-slate-200 rounded-[8px] w-1/4 py-3 px-3">
//               <div className=" h-[160px] py-3 px-3">
//                 <div className="">
//                   <div className="flex justify-center">
//                     <img
//                       src={user}
//                       alt="user"
//                       className="bg-slate-300 w-20 cursor-pointer rounded-full p-1"
//                     ></img>
//                   </div>
//                 </div>
//                 <div className=" flex justify-center">
//                   <RatingStars rating={vehicleData.rating} />
//                 </div>
//                 <div className=" mt-3 flex justify-center">
//                   <h1>{vehicleData.dname}</h1>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-slate-200 rounded-[8px] w-1/4 py-3 px-3">
//               <div className=" h-[160px] ">
//                 <div className=" border-[1px] border-orange flex justify-center py-3 bg-slate-50 rounded-[4px]">
//                   <img
//                     src={vehicleData.image}
//                     alt="vehicleImage"
//                     className=" w-48  "
//                   ></img>
//                 </div>
//                 <div className="flex justify-center mt-2">
//                   <h1 className="">
//                     Condition : {vehicleData.condition_status}
//                   </h1>
//                 </div>
//               </div>
//             </div>
//             <div className=" w-1/2 bg-slate-200 rounded-[8px]">
//               <div className="grid grid-cols-2 grid-rows-2 h-[110px] mx-2 my-2 gap-2 text-sm ">
//                 <div className="p-3">
//                   <div className="mb-1">Ride ID : {vehicleData.ride_id}</div>
//                   <div className="mb-1">Type: {vehicleData.vehicle_type}</div>
//                   <div className="mb-1">
//                     Shift 1 start: {vehicleData.location_morning_ride}
//                   </div>
//                   <div className="">
//                     Shift 2 start: {vehicleData.location_noon_ride}
//                   </div>
//                 </div>
//                 <div className="p-3">
//                   <div className="mb-1">
//                     Childrens: {vehicleData.num_of_children}
//                   </div>
//                   <div className="mb-1">
//                     Number of availabe sheets:{" "}
//                     {vehicleData.num_of_seats - vehicleData.num_of_children}
//                   </div>
//                   <div className="mb-1">
//                     Pay rate: {vehicleData.payment_per_1km}
//                   </div>
//                 </div>
//               </div>
//               <div className=" h-12 flex justify-center ">
//                 <button className="flex justify-center w-56 h-10 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
//                   <div className="flex mt-2 gap-3 font-semibold">
//                     View Route
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="flex gird grid-cols-2 grid-rows-1 gap-3 h-[300px] px-6 my-3">
//             <div className="w-1/4 flex justify-center rounded-[8px] py-5 bg-slate-200 overflow-y-auto">
//               <div className="space-y-2 w-full px-3 ">
//                 {school.map((schoolItem, index) => (
//                   <div
//                     key={index}
//                     className=" p-1 flex justify-center rounded-md bg-orange"
//                   >
//                     {schoolItem.school}
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {/* ----------Driver reviews---------- */}
//             <div className="w-3/4 bg-slate-200 rounded-[8px]">
//               <div className=" mt-3">
//                 <div className=" h-6 mb-1 flex justify-center">
//                   <h1 className="text-xl font-semibold ">Driver Reviews</h1>
//                 </div>
//                 <div className=" px-3 mx-2 rounded-md h-[250px] overflow-y-auto">
//                   {review.map((reviewItem, index) => (
//                     <div
//                       key={index}
//                       className="rounded-[8px] bg-slate-100 mb-3 mt-3  border-[1px] border-orange  items-center justify-between px-[30px] py-3 cursor-pointer hover:shadow-lg transform hover:scale-[101%] transition duration-300 ease-out"
//                     >
//                       <div className="flex  w-full mb-3">
//                         <div className="flex justify-start gap-2 ">
//                           <img
//                             src={review.u_image}
//                             alt="user_image"
//                             className="bg-slate-300 w-8 cursor-pointer rounded-full p-1"
//                           ></img>
//                           <h1 className="mt-1">{review.u_name}</h1>
//                         </div>
//                         <div className="flex justify-end mt-2  ml-auto">
//                           <RatingStars rating={reviewItem.rating} />
//                         </div>
//                       </div>

//                       <div>{reviewItem.feedback}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {modalOpen && <Modal setOpenModal={setModalOpen} />}
//       </MainLayout>
//     </div>
//   );
// }

// export default ViewVehicle;

import React, { useEffect, useState } from "react";
import { AiFillDashboard } from "react-icons/ai";
import { BsStar, BsStarFill } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import {
  MdOutlineRateReview,
  MdPayments,
  MdSupportAgent,
} from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import swal from "sweetalert";
import MainLayout from "../../components/layout/MainLayout";
import user from "../../images/user.png";

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

function ViewVehicle() {
  // --------get child and vehicleData array from Addschool page--------------------------
  const location = useLocation();
  const childParam = new URLSearchParams(location.search).get("child");
  const vehicleDataParam = new URLSearchParams(location.search).get("data");

  const child = JSON.parse(decodeURIComponent(childParam));
  const vehicleData = JSON.parse(decodeURIComponent(vehicleDataParam));

  //-------Get reaching school list-----------------------------------------
  const rideId = vehicleData.ride_id;
  const [school, setSchool] = useState([]);

  useEffect(() => {
    async function schoolData() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/parent/children/viewVehicle/viewSchool/${rideId}`
        );
        const data = await response.json();
        setSchool(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    schoolData();
  }, [rideId]);
  //----Get driver reviews-----------------------------------------------------------

  const driver_id = vehicleData.driver_id;

  const [review, setReview] = useState([]);

  useEffect(() => {
    async function reviewData() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/parent/children/viewVehicle/viewReview/${driver_id}`
        );
        const data = await response.json();
        setReview(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    reviewData();
  }, [driver_id]);

  const [selectedShift, setSelectedShift] = useState(""); // State to store the selected shift

  const handleShiftChange = (event) => {
    setSelectedShift(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [modalOpen, setModalOpen] = useState(false);
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
                <h1 className="text-[#5a5c69] text-[24px] leading-8 font-normal cursor-pointer text-center">
                  Are you sure add this vehicle ?
                </h1>
              </div>
              <div className="flex justify-center items-center mt-5">
                <label>
                  <input
                    type="radio"
                    name="shift"
                    value="morning"
                    checked={selectedShift === "morning"}
                    onChange={handleShiftChange}
                  />
                  Morning
                </label>
                <label>
                  <input
                    type="radio"
                    name="shift"
                    value="afternoon"
                    checked={selectedShift === "afternoon"}
                    onChange={handleShiftChange}
                  />
                  Afternoon
                </label>
                <label>
                  <input
                    type="radio"
                    name="shift"
                    value="both"
                    checked={selectedShift === "both"}
                    onChange={handleShiftChange}
                  />
                  Both
                </label>
              </div>
              <div className="flex justify-center items-center mt-5">
                {/* <NavLink
                to={`/parent/children/`}
                >
                <button
                  className="w-36 h-12 mr-5 bg-orange rounded-lg text-xl cursor-pointer"
                  onClick={() => {
                    handleSelectRideClick();
                    setOpenModal(false);
                  }}
                >
                  Submit
                </button>
                </NavLink> */}

                <button
                  className="w-36 h-12 mr-5 bg-orange rounded-lg text-xl cursor-pointer"
                  onClick={() => {
                    handleSelectRideClick();
                    setOpenModal(false);
                  }}
                >
                  Submit
                </button>
                {/* ------------------------------- */}
                <button
                  className="w-36 h-12  bg-orange rounded-lg text-xl cursor-pointer"
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  id="cancelBtn"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }

  // Get a reference to the button element by its ID
  const handleSelectRideClick = () => {
    if (!selectedShift) {
      // Display a SweetAlert alert for the user
      swal({
        title: "Please select a shift (morning/afternoon/both)!",
        icon: "warning", // You can change the icon to "error" for an error message
        buttons: {
          confirm: {
            className:
              "bg-orange text-white px-10 py-2 rounded-lg items-center hover:bg-gray",
          },
        },
      });
      return; // Do not proceed with the submission
    }

    const ride_id = vehicleData.ride_id;
    const driver_id = vehicleData.driver_id;
    const child_location = child.pickup_location;
    const school = child.school_name;
    const child_id = child.child_id;

    console.log("Selected Shift:", selectedShift);
    console.log(driver_id);

    // Call the function when the button is clicked
    handleSelectRide(ride_id, driver_id, child_location, school, child_id);
  };

  const userId = localStorage.getItem("userId");

  const handleSelectRide = async (
    ride_id,
    driver_id,
    child_location,
    school,
    child_id
  ) => {
    try {
      const body = {
        ride_id,
        driver_id,
        child_location,
        school,
        child_id,
        selectedShift,
      };

      const response = await fetch(
        `http://localhost:5000/edugo/parent/children/viewVehicle/rideRequest/${userId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      if (response.status === 200) {
        console.log("Ride details uploaded successfully!");
        swal({
          title: "Requested for Driver!",
          icon: "success",
          buttons: {
            confirm: {
              className:
                "bg-orange text-white px-10 py-2 rounded-lg items-center hover:bg-gray ",
            },
          },
        }).then(() => {
          console.log(response);
        });
      } else {
        // Handle the error here
        console.error("Failed to upload ride details:", response.statusText);
      }
    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  function RatingStars({ rating }) {
    const filledStars = Math.floor(rating);
    const partFilledStar = filledStars + 1;

    const starFilledWidth = (starIndex) => {
      if (starIndex + 1 <= filledStars) {
        return "100%";
      } else if (starIndex + 1 === partFilledStar) {
        console.log();
        return `${Math.floor((rating - filledStars) * 100)}%`;
      } else {
        return "0%";
      }
    };

    return (
      <div className="rating">
        {Array(5)
          .fill(0)
          .map((star, index) => (
            <div className="star" key={index}>
              <div
                className="starFull"
                style={{
                  width: starFilledWidth(index),
                }}
              >
                <BsStarFill />
              </div>
              <div className="starEmpty">
                <BsStar />
              </div>
            </div>
          ))}
      </div>
    );
  }

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className=" px-6 ">
          <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
            Vehicle Review <br></br>
            {/* Child Id:{child.child_id} <br></br>
            Driver Id: {vehicleData.driver_id} */}
          </h1>
          <div className="">
            <div className="flex justify-end w-5/6 ml-24 mb-4">
              <button
                className="flex justify-center w-56 h-10 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                // onClick={handleSelectRideClick}

                onClick={() => {
                  setModalOpen(true);
                }}
              >
                <div className="flex mt-2 gap-3 font-semibold">Select Ride</div>
              </button>
            </div>
          </div>

          <div className="flex gird grid-cols-3 grid-rows-1 gap-3 h-[180px] px-6">
            <div className=" bg-slate-200 rounded-[8px] w-1/4 py-3 px-3">
              <div className=" h-[160px] py-3 px-3">
                <div className="">
                  <div className="flex justify-center">
                    <img
                      src={user}
                      alt="user"
                      className="bg-slate-300 w-20 cursor-pointer rounded-full p-1"
                    ></img>
                  </div>
                </div>
                <div className=" flex justify-center">
                  <RatingStars rating={vehicleData.rating} />
                </div>
                <div className=" mt-3 flex justify-center">
                  <h1>{vehicleData.dname}</h1>
                </div>
              </div>
            </div>
            <div className="bg-slate-200 rounded-[8px] w-1/4 py-3 px-3">
              <div className=" h-[160px] ">
                <div className=" border-[1px] border-orange flex justify-center py-3 bg-slate-50 rounded-[4px]">
                  <img
                    src={vehicleData.image}
                    alt="vehicleImage"
                    className=" w-48  "
                  ></img>
                </div>
                <div className="flex justify-center mt-2">
                  <h1 className="">
                    Condition : {vehicleData.condition_status}
                    Driver Id : {vehicleData.driver_id}
                  </h1>
                </div>
              </div>
            </div>
            <div className=" w-1/2 bg-slate-200 rounded-[8px]">
              <div className="grid grid-cols-2 grid-rows-2 h-[110px] mx-2 my-2 gap-2 text-sm ">
                <div className="p-3">
                  <div className="mb-1">Ride ID : {vehicleData.ride_id}</div>
                  <div className="mb-1">Type: {vehicleData.vehicle_type}</div>
                  <div className="mb-1">
                    Shift 1 start: {vehicleData.location_morning_ride}
                  </div>
                  <div className="">
                    Shift 2 start: {vehicleData.location_noon_ride}
                  </div>
                </div>
                <div className="p-3">
                  <div className="mb-1">
                    Childrens: {vehicleData.num_of_children}
                  </div>
                  <div className="mb-1">
                    Number of availabe sheets:{" "}
                    {vehicleData.num_of_seats - vehicleData.num_of_children}
                  </div>
                  <div className="mb-1">
                    Pay rate: {vehicleData.payment_per_1km}
                  </div>
                </div>
              </div>
              <div className=" h-12 flex justify-center ">
                <button className="flex justify-center w-56 h-10 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                  <div className="flex mt-2 gap-3 font-semibold">
                    View Route
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex gird grid-cols-2 grid-rows-1 gap-3 h-[300px] px-6 my-3">
            <div className="w-1/4 flex justify-center rounded-[8px] py-5 bg-slate-200 overflow-y-auto">
              <div className="space-y-2 w-full px-3 ">
                {school.map((schoolItem, index) => (
                  <div
                    key={index}
                    className=" p-1 flex justify-center rounded-md bg-orange"
                  >
                    {schoolItem.school}
                  </div>
                ))}
              </div>
            </div>
            {/* ----------Driver reviews---------- */}
            <div className="w-3/4 bg-slate-200 rounded-[8px]">
              <div className=" mt-3">
                <div className=" h-6 mb-1 flex justify-center">
                  <h1 className="text-xl font-semibold ">Driver Reviews</h1>
                </div>
                <div className=" px-3 mx-2 rounded-md h-[250px] overflow-y-auto">
                  {review.map((reviewItem, index) => (
                    <div
                      key={index}
                      className="rounded-[8px] bg-slate-100 mb-3 mt-3  border-[1px] border-orange  items-center justify-between px-[30px] py-3 cursor-pointer hover:shadow-lg transform hover:scale-[101%] transition duration-300 ease-out"
                    >
                      <div className="flex  w-full mb-3">
                        <div className="flex justify-start gap-2 ">
                          {/* <img
                            src={review.u_image}
                            alt="user_image"
                            className="bg-slate-300 w-8 cursor-pointer rounded-full p-1"
                          ></img> */}
                          <img
                            src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                            alt="Profile"
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <h1 className="mt-1">{review.u_name}</h1>
                        </div>
                        <div className="flex justify-end mt-2  ml-auto">
                          <RatingStars rating={reviewItem.rating} />
                        </div>
                      </div>

                      <div>{reviewItem.feedback}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </MainLayout>
    </div>
  );
}

export default ViewVehicle;
