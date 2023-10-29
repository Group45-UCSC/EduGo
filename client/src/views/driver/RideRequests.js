// import React from "react";
// import { useNavigate } from "react-router-dom";
// import MainLayout from "../../components/layout/MainLayout";
// import { AiFillDashboard, AiFillCar } from "react-icons/ai";
// import {
//   MdPayments,
//   MdSupportAgent,
//   MdOutlineRateReview,
// } from "react-icons/md";
// import { useState, useEffect } from "react";
// import swal from "sweetalert";

// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"; // Import the Google Maps components

// const containerStyle = {
//   width: "600px",
//   height: "280px",
// };

// const center = {
//   lat: 6.872718728491422,
//   lng: 79.88336081994609,
// };

// const sideNavBarLinks = [
//   { title: "Dashboard", path: "/driver/dashboard", icon: <AiFillDashboard /> },
//   { title: "School Ride", path: "/driver/ride", icon: <AiFillCar /> },
//   { title: "Finance", path: "/driver/finance", icon: <MdPayments /> },
//   { title: "Support", path: "/driver/support", icon: <MdSupportAgent /> },
//   {
//     title: "Feedback",
//     path: "/driver/feedback",
//     icon: <MdOutlineRateReview />,
//   },
// ];

// function RideRequests(props) {
//   //userID
//   const userId = localStorage.getItem("userId");
//   const navigate = useNavigate();

//   //google map handling------------------------------------------------------------------------------------------------------------------------------
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyBSRpk2O7ZkVtqQknrlERKR-DwpiRi8Z_U",
//   });

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   //popup modal for set times
//   const [modalOpen, setModalOpen] = useState(false);
//   const [requestShiftType, setRequestShiftType] = useState("");
//   const [requestRideId, setRequestRideId] = useState("");
//   const [requestChildId, setRequestChildId] = useState("");

//   function Modal({
//     setModalOpen,
//     requestShiftType,
//     requestRideId,
//     requestChildId,
//   }) {
//     // State to store input values
//     const [pickupTime, setPickupTime] = useState("");
//     const [dropTime, setDropTime] = useState("");
//     const [pickupTime2, setPickupTime2] = useState("");
//     const [dropTime2, setDropTime2] = useState("");

//     // Function to handle form submission
//     const handleSubmit = async (event) => {
//       event.preventDefault();

//       try {
//         // Create a request body with the input values
//         const body = {
//           pickupTime,
//           dropTime,
//           pickupTime2,
//           dropTime2,
//           requestRideId,
//           requestChildId,
//         };

//         // Send the data to the backend
//         const response = await fetch(
//           `http://localhost:5000/edugo/driver/ride/set/ridetime/`,
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(body),
//           }
//         );

//         if (response.ok) {
//           setModalOpen(false);
//           setRequestShiftType("");
//           setRequestRideId("");
//           setRequestChildId("");

//           swal({
//             title: "Successfully set the times and notified parent!",
//             icon: "success",
//             buttons: ["Okay", "View"],
//             dangerMode: true,
//           }).then((confirmed) => {
//             if (confirmed) {
//               //navigate to view ride page
//               navigate("/driver/ride/schools");
//             } else {
//               // recallData();
//             }
//           });
//         } else {
//           const errorData = await response.json();
//           swal(
//             "Error Occurred!",
//             `Error: ${errorData.error}`,
//             "Please try again or contact support agent",
//             "warning"
//           );
//         }
//       } catch (err) {
//         console.error(err.message);
//         swal("Error!", "Please try again or contact support agent", "warning");
//       }
//     };

//     return (
//       <div>
//         <div className="bg-white p-0 px-60 rounded-lg">
//           <div className="fixed top-0 left-0 w-screen  bg-stone-900/75 flex justify-center items-center  h-screen bg-gradient-to-b from-opacity-70 to-opacity-30">
//             <div className="w-2/5  rounded-lg bg-white shadow-md flex flex-col p-5 px-8 ">
//               <div className="flex justify-end">
//                 <button
//                   className="text-2xl cursor-pointer "
//                   onClick={() => {
//                     setModalOpen(false);
//                     setRequestShiftType("");
//                     setRequestChildId("");
//                     setRequestRideId("");
//                   }}
//                 >
//                   X
//                 </button>
//               </div>
//               {/* content */}
//               <div className="">
//                 {requestShiftType === "both" ? (
//                   <>
//                     <form action="">
//                       {/* onSubmit={handleSubmit} */}
//                       <div className="">
//                         {" "}
//                         <div className="border-yellow-400 border-2 py-1 my-5 flex justify-center items-center text-gray ">
//                           Morning Shift
//                         </div>
//                         <div className="flex justify-center items-center mt-5">
//                           <label htmlFor="pickupTime" className="w-[400px]">
//                             Pickup Time:
//                           </label>
//                           <input
//                             className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
//                             type="time"
//                             id="pickupTime"
//                             name="pickupTime"
//                             value={pickupTime}
//                             onChange={(e) => setPickupTime(e.target.value)}
//                           />
//                         </div>
//                         <div className="flex justify-center items-center mt-2">
//                           <label htmlFor="dropTime" className="w-[400px]">
//                             Estimate Drop Time at school:
//                           </label>
//                           <input
//                             className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
//                             type="time"
//                             id="dropTime"
//                             name="dropTime"
//                             value={dropTime}
//                             onChange={(e) => setDropTime(e.target.value)}
//                           />
//                         </div>
//                       </div>
//                       <div className="">
//                         {" "}
//                         <div className="border-yellow-400 border-2 py-1 my-5 mt-10 flex justify-center items-center text-gray ">
//                           Afternoon Shift
//                         </div>
//                         <div className="flex justify-center items-center mt-2">
//                           <label htmlFor="pickupTime2" className="w-[400px]">
//                             Pickup Time from school:
//                           </label>
//                           <input
//                             className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
//                             type="time"
//                             id="pickupTime2"
//                             name="pickupTime2"
//                             value={pickupTime2}
//                             onChange={(e) => setPickupTime2(e.target.value)}
//                           />
//                         </div>
//                         <div className="flex justify-center items-center mt-2">
//                           <label htmlFor="dropTime2" className="w-[400px]">
//                             Estimate Drop Time:
//                           </label>
//                           <input
//                             className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
//                             type="time"
//                             id="dropTime2"
//                             name="dropTime2"
//                             value={dropTime2}
//                             onChange={(e) => setDropTime2(e.target.value)}
//                           />
//                         </div>
//                       </div>
//                       <div className="flex justify-center items-center mt-10">
//                         <button
//                           type="submit"
//                           onClick={handleSubmit}
//                           className="w-36 h-12 bg-orange rounded-lg text-xl cursor-pointer"
//                         >
//                           Submit
//                         </button>
//                       </div>
//                     </form>
//                   </>
//                 ) : requestShiftType === "morning" ? (
//                   <>
//                     <form action="" onSubmit={handleSubmit}>
//                       <div className="">
//                         <div className="border-yellow-400 border-2 py-1 my-5 flex justify-center items-center text-gray ">
//                           Morning Shift
//                         </div>
//                         <div className="flex justify-center items-center mt-5">
//                           <label htmlFor="pickupTime" className="w-[400px]">
//                             Pickup Time:
//                           </label>
//                           <input
//                             className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
//                             type="time"
//                             id="pickupTime"
//                             name="pickupTime"
//                             value={pickupTime}
//                             onChange={(e) => setPickupTime(e.target.value)}
//                           />
//                         </div>

//                         <div className="flex justify-center items-center mt-2">
//                           <label htmlFor="dropTime" className="w-[400px]">
//                             Estimate Drop Time at school:
//                           </label>
//                           <input
//                             className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
//                             type="time"
//                             id="dropTime"
//                             name="dropTime"
//                             value={dropTime}
//                             onChange={(e) => setDropTime(e.target.value)}
//                           />
//                         </div>
//                       </div>
//                       <div className="flex justify-center items-center mt-10">
//                         <button
//                           type="submit"
//                           onClick={handleSubmit}
//                           className="w-36 h-12 bg-orange rounded-lg text-xl cursor-pointer"
//                         >
//                           Submit
//                         </button>
//                       </div>
//                     </form>
//                   </>
//                 ) : requestShiftType === "afternoon" ? (
//                   <>
//                     <form action="" onSubmit={handleSubmit}>
//                       <div className="">
//                         <div className="border-yellow-400 border-2 py-1 my-5 flex justify-center items-center text-gray ">
//                           Afternoon Shift
//                         </div>
//                         <div className="flex justify-center items-center mt-5">
//                           <label htmlFor="pickupTime" className="w-[400px]">
//                             Pickup Time at school:
//                           </label>
//                           <input
//                             className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
//                             type="time"
//                             id="pickupTime"
//                             name="pickupTime"
//                             value={pickupTime}
//                             onChange={(e) => setPickupTime(e.target.value)}
//                           />
//                         </div>
//                         <div className="flex justify-center items-center mt-2">
//                           <label htmlFor="dropTime" className="w-[400px]">
//                             Estimate Drop Time:
//                           </label>
//                           <input
//                             className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
//                             type="time"
//                             id="dropTime"
//                             name="dropTime"
//                             value={dropTime}
//                             onChange={(e) => setDropTime(e.target.value)}
//                           />
//                         </div>
//                       </div>
//                       <div className="flex justify-center items-center mt-10">
//                         <button
//                           type="submit"
//                           onClick={handleSubmit}
//                           className="w-36 h-12 bg-orange rounded-lg text-xl cursor-pointer"
//                         >
//                           Submit
//                         </button>
//                       </div>
//                     </form>
//                   </>
//                 ) : (
//                   <></>
//                 )}
//               </div>
//               {/* ...end of modal content */}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const handleAccept = async (
//     childId,
//     requestId,
//     schoolId,
//     rideId,
//     shiftType
//   ) => {
//     try {
//       const body = {
//         childId: childId,
//         requestId: requestId,
//         schoolId: schoolId,
//         rideId: rideId,
//       };
//       const response = await fetch(
//         `http://localhost:5000/edugo/driver/ride/request/accept/${userId}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(body),
//         }
//       );
//       if (response.status === 200) {
//         const data = await response.json();
//         swal({
//           title: "Sucessfully added this children to your ride!",
//           icon: "success",
//           buttons: {
//             confirm: {
//               className:
//                 "bg-orange text-white px-10 py-2 rounded-lg items-center hover:bg-gray ",
//             },
//           },
//         }).then(() => {
//           recallData();
//           setRequestShiftType(shiftType);
//           setRequestRideId(rideId);
//           setRequestChildId(childId);
//           setModalOpen(true);
//         });
//       } else {
//         const errorData = await response.json();
//         swal(
//           "Error Occurred!",
//           `Error: ${errorData.error}`,
//           "Please try again or contact support agent",
//           "warning"
//         );
//       }
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   //check school is reached or not before accepting---------------------------------------------------------------------------------------------------------------

//   const handleRequestCheck = async (
//     childId,
//     requestId,
//     schoolId,
//     rideId,
//     shiftType
//   ) => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/edugo/driver/ride/request/school/check/${userId},${schoolId}`
//       );
//       const data = await response.json();

//       //check whether related school has reached by this driver
//       if (data === "yes") {
//         handleAccept(childId, requestId, schoolId, rideId, shiftType);
//       } else {
//         swal({
//           title: "Your ride is not reached to requested school!",
//           icon: "warning",
//           buttons: ["Cancel!", "Add requested school!"],
//           dangerMode: true,
//         }).then((confirmed) => {
//           if (confirmed) {
//             //navigate to add school page
//             navigate("/driver/ride/schools");
//           } else {
//           }
//         });
//       }
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   //accept button click---------------------------------------------------------------------------------------------------------------
//   const handleAcceptClick = (
//     childId,
//     requestId,
//     schoolId,
//     rideId,
//     shiftType
//   ) => {
//     swal({
//       title: "Do you want to accept this request?",
//       icon: "warning",
//       buttons: ["No, cancel!", "Yes, accept it!"],
//       dangerMode: true,
//     }).then((confirmed) => {
//       if (confirmed) {
//         handleRequestCheck(childId, requestId, schoolId, rideId, shiftType);
//       } else {
//         // setRequestShiftType(shiftType);
//         // setRequestRideId(rideId);
//         // setRequestChildId(childId);
//         // setModalOpen(true);
//       }
//     });
//   };

//   //handle request reject option------------------------------------------------------------------------------------------------------
//   const handleReject = async (childId, requestId) => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/edugo/driver/ride/request/reject/${childId},${requestId}`,
//         {
//           method: "PUT", // Use the update HTTP method
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       if (response.status === 200) {
//         swal({
//           title: "Selected ride request is rejected!",
//           icon: "success",
//           buttons: {
//             confirm: {
//               className:
//                 "bg-orange text-white px-10 py-2 rounded-lg items-center hover:bg-gray ",
//             },
//           },
//         }).then(() => {
//           recallData();
//         });
//       } else {
//         const errorData = await response.json();
//         swal(
//           "Error Occurred!",
//           `Error: ${errorData.error}`,
//           "Please try again or contact support agent",
//           "warning"
//         );
//       }
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   //reject button click---------------------------------------------------------------------------------------------------------------
//   const handleRejectClick = (childId, requestId) => {
//     swal({
//       title: "Do you want to reject this request?",
//       icon: "warning",
//       buttons: ["No, cancel!", "Yes, reject it!"],
//       dangerMode: true,
//     }).then((confirmed) => {
//       if (confirmed) {
//         handleReject(childId, requestId);
//       } else {
//       }
//     });
//   };

//   //get ride request data------------------------------------------------------------------------------------------------------------
//   const [rideRequestData, setRideRequestData] = useState([]);

//   //view ride requests
//   async function viewRideRequests(setRideRequestData, userId) {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/edugo/driver/ride/requests/view/${userId}`
//       );
//       const data = await response.json();
//       setRideRequestData(data);
//     } catch (err) {
//       console.error(err.message);
//     }
//   }

//   useEffect(() => {
//     viewRideRequests(setRideRequestData, userId);
//   }, [userId]);

//   // recall the get ride request data ----------------------------------------------------------------------------------
//   const recallData = async () => {
//     await viewRideRequests(setRideRequestData, userId);
//   };

//   //-----------------------------------------------------------------------------------------------------------------------------------
//   return (
//     <div>
//       <MainLayout data={sideNavBarLinks}>
//         <div className="px-[25px] ">
//           <h1 className="text-[#5a5c69] text-[28px]  leading-8 font-normal cursor-pointer">
//             Ride Requests{" "}
//             {rideRequestData.filter((ride) => ride.request_id).length}
//           </h1>
//           <div className="mt-3">
//             <div className=" w-full gap-3">
//               {rideRequestData.map((request, id) => (
//                 <div
//                   key={id}
//                   className=" h-[300px]  flex bg-slate-200 mb-3 rounded-md"
//                 >
//                   <div className="flex-col items-center justify-center">
//                     <div className="flex justify-center py-3">
//                       <img
//                         // src={request.image}
//                         alt={request.request_id}
//                         className="bg-slate-300 w-32 h-[100px] cursor-pointer rounded-full p-1"
//                       ></img>
//                     </div>
//                     <div className="mt-3 ml-3 px-2 text-slate-600">
//                       <div className="">{request.child_name}</div>
//                       <div className="">{request.pickup_location}</div>
//                       <div className="">{request.school_name}</div>
//                       <div className="">
//                         {request.ride_shift_type === "both"
//                           ? "Both Morning and Afternoon shifts"
//                           : request.ride_shift_type === "morning"
//                           ? "Morning shift only"
//                           : "Afternoon Shift only"}
//                       </div>

//                       <div className=" flex justify-center gap-4 mt-3">
//                         <button
//                           onClick={() =>
//                             handleAcceptClick(
//                               request.child_id,
//                               request.request_id,
//                               request.school_id,
//                               request.ride_id,
//                               request.ride_shift_type
//                             )
//                           }
//                           className="flex justify-center w-28 h-10 bg-green-600 rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
//                         >
//                           <div className="flex mt-2 gap-3 font-semibold text-white">
//                             Accept
//                           </div>
//                         </button>
//                         <button className="flex justify-center w-28 h-10 bg-red-600 rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
//                           <div
//                             onClick={() =>
//                               handleRejectClick(
//                                 request.child_id,
//                                 request.request_id
//                               )
//                             }
//                             className="flex mt-2 gap-3 font-semibold text-white"
//                           >
//                             Reject
//                           </div>
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   <div
//                     className=""
//                     style={{ position: "relative", left: "160px", top: "10px" }}
//                   >
//                     {isLoaded && (
//                       <GoogleMap
//                         mapContainerStyle={containerStyle}
//                         center={center}
//                         zoom={7}
//                         onLoad={onLoad}
//                         onUnmount={onUnmount}
//                       >
//                         {/* Child components, such as markers, info windows, etc. */}
//                         <Marker
//                           position={{
//                             lat: request.latitude,        
//                             lng: request.longitude
//                           }}
//                         />
//                         <></>
//                       </GoogleMap>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {modalOpen && (
//             <Modal
//               setModalOpen={setModalOpen}
//               requestShiftType={requestShiftType}
//               requestRideId={requestRideId}
//               requestChildId={requestChildId}
//             />
//           )}
//         </div>
//       </MainLayout>
//     </div>
//   );
// }

// export default React.memo(RideRequests);






import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard, AiFillCar } from "react-icons/ai";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import { useState, useEffect } from "react";
import swal from "sweetalert";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"; // Import the Google Maps components

const containerStyle = {
  width: "600px",
  height: "280px",
};

const center = {
  lat: 6.872718728491422,
  lng: 79.88336081994609,
};

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

function RideRequests(props) {
  //userID
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  //google map handling------------------------------------------------------------------------------------------------------------------------------
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBSRpk2O7ZkVtqQknrlERKR-DwpiRi8Z_U",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  //popup modal for set times
  const [modalOpen, setModalOpen] = useState(false);
  const [requestShiftType, setRequestShiftType] = useState("");
  const [requestRideId, setRequestRideId] = useState("");
  const [requestChildId, setRequestChildId] = useState("");

  function Modal({
    setModalOpen,
    requestShiftType,
    requestRideId,
    requestChildId,
  }) {
    // State to store input values
    const [pickupTime, setPickupTime] = useState("");
    const [dropTime, setDropTime] = useState("");
    const [pickupTime2, setPickupTime2] = useState("");
    const [dropTime2, setDropTime2] = useState("");

    // Function to handle form submission
    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        // Create a request body with the input values
        const body = {
          pickupTime,
          dropTime,
          pickupTime2,
          dropTime2,
          requestRideId,
          requestChildId,
        };

        // Send the data to the backend
        const response = await fetch(
          `http://localhost:5000/edugo/driver/ride/set/ridetime/`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          }
        );

        if (response.ok) {
          setModalOpen(false);
          setRequestShiftType("");
          setRequestRideId("");
          setRequestChildId("");

          swal({
            title: "Successfully set the times and notified parent!",
            icon: "success",
            buttons: ["Okay", "View"],
            dangerMode: true,
          }).then((confirmed) => {
            if (confirmed) {
              //navigate to view ride page
              navigate("/driver/ride/schools");
            } else {
              // recallData();
            }
          });
        } else {
          const errorData = await response.json();
          swal(
            "Error Occurred!",
            `Error: ${errorData.error}`,
            "Please try again or contact support agent",
            "warning"
          );
        }
      } catch (err) {
        console.error(err.message);
        swal("Error!", "Please try again or contact support agent", "warning");
      }
    };

    return (
      <div>
        <div className="bg-white p-0 px-60 rounded-lg">
          <div className="fixed top-0 left-0 w-screen  bg-stone-900/75 flex justify-center items-center  h-screen bg-gradient-to-b from-opacity-70 to-opacity-30">
            <div className="w-2/5  rounded-lg bg-white shadow-md flex flex-col p-5 px-8 ">
              <div className="flex justify-end">
                <button
                  className="text-2xl cursor-pointer "
                  onClick={() => {
                    setModalOpen(false);
                    setRequestShiftType("");
                    setRequestChildId("");
                    setRequestRideId("");
                  }}
                >
                  X
                </button>
              </div>
              {/* content */}
              <div className="">
                {requestShiftType === "both" ? (
                  <>
                    <form action="">
                      {/* onSubmit={handleSubmit} */}
                      <div className="">
                        {" "}
                        <div className="border-yellow-400 border-2 py-1 my-5 flex justify-center items-center text-gray ">
                          Morning Shift
                        </div>
                        <div className="flex justify-center items-center mt-5">
                          <label htmlFor="pickupTime" className="w-[400px]">
                            Pickup Time:
                          </label>
                          <input
                            className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                            type="time"
                            id="pickupTime"
                            name="pickupTime"
                            value={pickupTime}
                            onChange={(e) => setPickupTime(e.target.value)}
                          />
                        </div>
                        <div className="flex justify-center items-center mt-2">
                          <label htmlFor="dropTime" className="w-[400px]">
                            Estimate Drop Time at school:
                          </label>
                          <input
                            className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                            type="time"
                            id="dropTime"
                            name="dropTime"
                            value={dropTime}
                            onChange={(e) => setDropTime(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="">
                        {" "}
                        <div className="border-yellow-400 border-2 py-1 my-5 mt-10 flex justify-center items-center text-gray ">
                          Afternoon Shift
                        </div>
                        <div className="flex justify-center items-center mt-2">
                          <label htmlFor="pickupTime2" className="w-[400px]">
                            Pickup Time from school:
                          </label>
                          <input
                            className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                            type="time"
                            id="pickupTime2"
                            name="pickupTime2"
                            value={pickupTime2}
                            onChange={(e) => setPickupTime2(e.target.value)}
                          />
                        </div>
                        <div className="flex justify-center items-center mt-2">
                          <label htmlFor="dropTime2" className="w-[400px]">
                            Estimate Drop Time:
                          </label>
                          <input
                            className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                            type="time"
                            id="dropTime2"
                            name="dropTime2"
                            value={dropTime2}
                            onChange={(e) => setDropTime2(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex justify-center items-center mt-10">
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          className="w-36 h-12 bg-orange rounded-lg text-xl cursor-pointer"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </>
                ) : requestShiftType === "morning" ? (
                  <>
                    <form action="" onSubmit={handleSubmit}>
                      <div className="">
                        <div className="border-yellow-400 border-2 py-1 my-5 flex justify-center items-center text-gray ">
                          Morning Shift
                        </div>
                        <div className="flex justify-center items-center mt-5">
                          <label htmlFor="pickupTime" className="w-[400px]">
                            Pickup Time:
                          </label>
                          <input
                            className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                            type="time"
                            id="pickupTime"
                            name="pickupTime"
                            value={pickupTime}
                            onChange={(e) => setPickupTime(e.target.value)}
                          />
                        </div>

                        <div className="flex justify-center items-center mt-2">
                          <label htmlFor="dropTime" className="w-[400px]">
                            Estimate Drop Time at school:
                          </label>
                          <input
                            className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                            type="time"
                            id="dropTime"
                            name="dropTime"
                            value={dropTime}
                            onChange={(e) => setDropTime(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex justify-center items-center mt-10">
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          className="w-36 h-12 bg-orange rounded-lg text-xl cursor-pointer"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </>
                ) : requestShiftType === "afternoon" ? (
                  <>
                    <form action="" onSubmit={handleSubmit}>
                      <div className="">
                        <div className="border-yellow-400 border-2 py-1 my-5 flex justify-center items-center text-gray ">
                          Afternoon Shift
                        </div>
                        <div className="flex justify-center items-center mt-5">
                          <label htmlFor="pickupTime" className="w-[400px]">
                            Pickup Time at school:
                          </label>
                          <input
                            className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                            type="time"
                            id="pickupTime"
                            name="pickupTime"
                            value={pickupTime}
                            onChange={(e) => setPickupTime(e.target.value)}
                          />
                        </div>
                        <div className="flex justify-center items-center mt-2">
                          <label htmlFor="dropTime" className="w-[400px]">
                            Estimate Drop Time:
                          </label>
                          <input
                            className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                            type="time"
                            id="dropTime"
                            name="dropTime"
                            value={dropTime}
                            onChange={(e) => setDropTime(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex justify-center items-center mt-10">
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          className="w-36 h-12 bg-orange rounded-lg text-xl cursor-pointer"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <></>
                )}
              </div>
              {/* ...end of modal content */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleAccept = async (
    childId,
    requestId,
    schoolId,
    rideId,
    shiftType
  ) => {
    try {
      const body = {
        childId: childId,
        requestId: requestId,
        schoolId: schoolId,
        rideId: rideId,
      };
      const response = await fetch(
        `http://localhost:5000/edugo/driver/ride/request/accept/${userId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        swal({
          title: "Sucessfully added this children to your ride!",
          icon: "success",
          buttons: {
            confirm: {
              className:
                "bg-orange text-white px-10 py-2 rounded-lg items-center hover:bg-gray ",
            },
          },
        }).then(() => {
          recallData();
          setRequestShiftType(shiftType);
          setRequestRideId(rideId);
          setRequestChildId(childId);
          setModalOpen(true);
        });
      } else {
        const errorData = await response.json();
        swal(
          "Error Occurred!",
          `Error: ${errorData.error}`,
          "Please try again or contact support agent",
          "warning"
        );
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  //check school is reached or not before accepting---------------------------------------------------------------------------------------------------------------

  const handleRequestCheck = async (
    childId,
    requestId,
    schoolId,
    rideId,
    shiftType
  ) => {
    try {
      const response = await fetch(
        `http://localhost:5000/edugo/driver/ride/request/school/check/${userId},${schoolId}`
      );
      const data = await response.json();

      //check whether related school has reached by this driver
      if (data === "yes") {
        handleAccept(childId, requestId, schoolId, rideId, shiftType);
      } else {
        swal({
          title: "Your ride is not reached to requested school!",
          icon: "warning",
          buttons: ["Cancel!", "Add requested school!"],
          dangerMode: true,
        }).then((confirmed) => {
          if (confirmed) {
            //navigate to add school page
            navigate("/driver/ride/schools");
          } else {
          }
        });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  //accept button click---------------------------------------------------------------------------------------------------------------
  const handleAcceptClick = (
    childId,
    requestId,
    schoolId,
    rideId,
    shiftType
  ) => {
    swal({
      title: "Do you want to accept this request?",
      icon: "warning",
      buttons: ["No, cancel!", "Yes, accept it!"],
      dangerMode: true,
    }).then((confirmed) => {
      if (confirmed) {
        handleRequestCheck(childId, requestId, schoolId, rideId, shiftType);
      } else {
        // setRequestShiftType(shiftType);
        // setRequestRideId(rideId);
        // setRequestChildId(childId);
        // setModalOpen(true);
      }
    });
  };

  //handle request reject option------------------------------------------------------------------------------------------------------
  const handleReject = async (childId, requestId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/edugo/driver/ride/request/reject/${childId},${requestId}`,
        {
          method: "PUT", // Use the update HTTP method
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        swal({
          title: "Selected ride request is rejected!",
          icon: "success",
          buttons: {
            confirm: {
              className:
                "bg-orange text-white px-10 py-2 rounded-lg items-center hover:bg-gray ",
            },
          },
        }).then(() => {
          recallData();
        });
      } else {
        const errorData = await response.json();
        swal(
          "Error Occurred!",
          `Error: ${errorData.error}`,
          "Please try again or contact support agent",
          "warning"
        );
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  //reject button click---------------------------------------------------------------------------------------------------------------
  const handleRejectClick = (childId, requestId) => {
    swal({
      title: "Do you want to reject this request?",
      icon: "warning",
      buttons: ["No, cancel!", "Yes, reject it!"],
      dangerMode: true,
    }).then((confirmed) => {
      if (confirmed) {
        handleReject(childId, requestId);
      } else {
      }
    });
  };

  //get ride request data------------------------------------------------------------------------------------------------------------
  const [rideRequestData, setRideRequestData] = useState([]);

  async function viewRideRequests(setRideRequestData, userId) {
    try {
      const response = await fetch(
        `http://localhost:5000/edugo/driver/ride/requests/view/${userId}`
      );
      const data = await response.json();
      console.log("fetch2 data" , data)

      setRideRequestData(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    viewRideRequests(setRideRequestData, userId);
  }, [userId]);

  // recall the get ride request data ----------------------------------------------------------------------------------
  const recallData = async () => {
    await viewRideRequests(setRideRequestData, userId);
  };

  //--------------------------------------------------------------------------------------------------------------------------------


  //-----------------------------------------------------------------------------------------------------------------------------------
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="px-[25px] ">
          <h1 className="text-[#5a5c69] text-[28px]  leading-8 font-normal cursor-pointer">
            Ride Requests{" "}
            {rideRequestData.filter((ride) => ride.request_id).length}
          </h1>
          <div className="mt-3">
            <div className=" w-full gap-3">
              {rideRequestData.map((request, id) => (
                <div
                  key={id}
                  className=" h-[300px]  flex bg-slate-200 mb-3 rounded-md"
                >
                  <div className="flex-col items-center justify-center">
                    <div className="flex justify-center py-3">
                      <img
                        // src={request.image}
                        alt={request.request_id}
                        className="bg-slate-300 w-32 h-[100px] cursor-pointer rounded-full p-1"
                      ></img>
                    </div>

                    <div className="mt-3 ml-3 px-2 text-slate-600">
                      <div className="">{request.child_name}</div>
                      <div className="">{request.pickup_location}</div>
                      <div className="">{request.school_name}</div>
                      <div className="">
                        {request.ride_shift_type === "both"
                          ? "Both Morning and Afternoon shifts"
                          : request.ride_shift_type === "morning"
                          ? "Morning shift only"
                          : "Afternoon Shift only"}
                      </div>

                      <div className=" flex justify-center gap-4 mt-3">
                        <button
                          onClick={() =>
                            handleAcceptClick(
                              request.child_id,
                              request.request_id,
                              request.school_id,
                              request.ride_id,
                              request.ride_shift_type
                            )
                          }
                          className="flex justify-center w-28 h-10 bg-green-600 rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                        >
                          <div className="flex mt-2 gap-3 font-semibold text-white">
                            Accept
                          </div>
                        </button>
                        <button className="flex justify-center w-28 h-10 bg-red-600 rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                          <div
                            onClick={() =>
                              handleRejectClick(
                                request.child_id,
                                request.request_id
                              )
                            }
                            className="flex mt-2 gap-3 font-semibold text-white"
                          >
                            Reject
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className=""
                    style={{ position: "relative", left: "160px", top: "10px" }}
                  >
                    {isLoaded && (
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={7}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                      >
                        {/* Child components, such as markers, info windows, etc. */}
                        <Marker
                          position={{
                            lat: request.latitude,        
                            lng: request.longitude
                          }}
                        />
                        <></>
                      </GoogleMap>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {modalOpen && (
            <Modal
              setModalOpen={setModalOpen}
              requestShiftType={requestShiftType}
              requestRideId={requestRideId}
              requestChildId={requestChildId}
            />
          )}
        </div>
      </MainLayout>
    </div>
  );
}

export default React.memo(RideRequests);
