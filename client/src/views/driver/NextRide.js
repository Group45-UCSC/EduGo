// // import React from "react";
// // import MainLayout from "../../components/layout/MainLayout";
// // import { AiFillDashboard, AiFillCar } from "react-icons/ai";
// // import {
// //   MdPayments,
// //   MdSupportAgent,
// //   MdOutlineRateReview,
// // } from "react-icons/md";
// // import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// // const sideNavBarLinks = [
// //   { title: "Dashboard", path: "/driver/dashboard", icon: <AiFillDashboard /> },
// //   { title: "School Ride", path: "/driver/ride", icon: <AiFillCar /> },
// //   { title: "Finance", path: "/driver/finance", icon: <MdPayments /> },
// //   { title: "Support", path: "/driver/support", icon: <MdSupportAgent /> },
// //   {
// //     title: "Feedback",
// //     path: "/driver/feedback",
// //     icon: <MdOutlineRateReview />,
// //   },
// // ];
// // function NextRide() {
// //   const childName = [
// //     {
// //       id: 1,
// //       name: "K.L.M. Kavishka",
// //       image: require("../../images/child1.png"),
// //     },
// //     {
// //       id: 2,
// //       name: "A.D.K. Sethmi",
// //       image: require("../../images/child2.png"),
// //     },
// //     {
// //       id: 3,
// //       name: "K.S.S. Sampath",
// //       image: require("../../images/child3.png"),
// //     },
// //     {
// //       id: 4,
// //       name: "S.D.P. Nimasha",
// //       image: require("../../images/user.png"),
// //     },
// //   ];

// //   return (
// //     <div>
// //       <MainLayout data={sideNavBarLinks}>
// //         <div className="pt-[25px] px-[25px] ">
// //           <h1 className="text-[#5a5c69] text-[28px] mb-[10px] leading-8 font-normal cursor-pointer">
// //             Ride Routes and childrens
// //           </h1>

// //           <div className=" flex mb-3 gap-3">
// //             <div className=" w-1/2 h-[496px] bg-slate-200 rounded-md flex justify-center">
// //               <div className="w-[90%] h-[90%] mt-6  ">
// //                 <LoadScript googleMapsApiKey="AIzaSyBSRpk2O7ZkVtqQknrlERKR-DwpiRi8Z_U">
// //                   <GoogleMap
// //                     mapContainerStyle={{
// //                       width: "100%",
// //                       height: "100%",
// //                     }}
// //                     center={{
// //                       lat: 6.859187491255102,
// //                       lng: 79.90705190419602,
// //                     }}
// //                     zoom={15}
// //                   >
// //                     <Marker
// //                       position={{
// //                         lat: 6.857788390174558,
// //                         lng: 79.90866684346393,
// //                       }}
// //                     />
// //                   </GoogleMap>
// //                 </LoadScript>
// //               </div>
// //             </div>

// //               <div className=" w-1/2 h-[495px] bg-slate-200 rounded-md px-3 ">
// //                 <div className=" my-3 text-xl flex justify-center mt-5 mb-5 ">
// //                   <h1 className=" font-semibold text-slate-600">Today available Children</h1>
// //                 </div>
// //                 {childName.map((child, id) => (
// //                 <div className="border border-orange bg-slate-100 rounded-md p-2 mb-3">
// //                   <div className=" flex justify-start gap-5">
// //                     <img
// //                       src={child.image}
// //                       alt={id}
// //                       className="w-12 rounded-full"
// //                     ></img>
// //                     <h1 className=" w-[250px] text-lg text-slate-600 pt-1">
// //                       {child.name}
// //                     </h1>
// //                     <div className="flex justify-center gap-5">
// //                       <button className=" rounded-lg bg-green-600 w-20 ">
// //                         Pick
// //                       </button>
// //                       <button className=" rounded-lg bg-blue-600 w-20 ">
// //                         Drop
// //                       </button>
// //                       <button className=" rounded-lg bg-red-600  w-20 ">
// //                         Miss
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 ))}
// //               </div>

// //           </div>
// //         </div>
// //       </MainLayout>
// //     </div>
// //   );
// // }

// // export default NextRide;

// /* global google */
// import React, { useState, useEffect } from "react";
// import MainLayout from "../../components/layout/MainLayout";
// import { AiFillDashboard, AiFillCar } from "react-icons/ai";
// import {
//   MdPayments,
//   MdSupportAgent,
//   MdOutlineRateReview,
// } from "react-icons/md";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// import img from "../../images/placeholder.png";

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

// const GOOGLE_MAPS_API_KEY = "AIzaSyAeTBd0rn-R-OfRQO5pjSR54cRxcuOAD6s"; //?

// function NextRide() {
//   // Define state to store child data
//   const [childData, setChildData] = useState([]); //?
//   // Fetch child data from the database using useEffect
//   // useEffect(() => {
//   //   // Use fetch or any other method to fetch child data from the database
//   //   // Replace the URL with the actual endpoint to fetch child data
//   //   fetch("/api/v1/childData")                                                            //?
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       // Update the childData state with the fetched data
//   //       setChildData(data);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error fetching child data:", error);
//   //     });
//   // }, []); // The empty array [] ensures that this effect runs only once on component mount

//   useEffect(() => {
//     //?
//     // Load the Google Maps script when the component mounts
//     loadGoogleMapsScript();
//   }, []);

//   function initMap() {
//     const map = new window.google.maps.Map(document.getElementById("map"), {
//       center: { lat: 7.8731, lng: 80.7718 },
//       zoom: 7,
//     });

//     // Call the function to fetch store data and display it on the map
//     getStores(map);
//   }

//   async function getStores(map) {
//     try {
//       console.log("fetch data");
//       const res = await fetch(
//         `http://localhost:5000/edugo/parent/children/view`
//       );
//       const data = await res.json();
//       console.log("fetch data", data);

//       const stores = data.data.map((store) => {
//         const latitude = store.latitude || 0; // Update with the correct data field
//         const longitude = store.longitude || 0; // Update with the correct data field

//         // Create a marker for each store
//         const marker = new google.maps.Marker({
//           position: { lat: latitude, lng: longitude },
//           map: map,
//           title: store.child_id,
//           icon: {
//             url: img, // Use the imported image variable
//             scaledSize: new google.maps.Size(32, 32), // Adjust the size as needed
//           },
//         });

//         // Create an info window to display the latitude when the marker is clicked
//         const infoWindow = new google.maps.InfoWindow({
//           content: `<div>Latitude: ${latitude}</div>`,
//         });

//         // Attach a click event listener to the marker to open the info window
//         marker.addListener("click", () => {
//           infoWindow.open(map, marker);
//         });
//       });
//     } catch (error) {
//       console.error("Error fetching store locations:", error);
//     }
//   }

//   const loadGoogleMapsScript = () => {
//     if (window.google && window.google.maps) {
//       // Google Maps API is already loaded
//       initMap();
//     } else {
//       // Load the Google Maps script
//       const googleMapsScript = document.createElement("script");
//       googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`;
//       googleMapsScript.async = true;
//       googleMapsScript.defer = true;
//       document.body.appendChild(googleMapsScript);
//       googleMapsScript.onload = initMap;
//     }
//   };

//   return (
//     <div>
//       <MainLayout data={sideNavBarLinks}>
//         <div className="pt-[25px] px-[25px] ">
//           <h1 className="text-[#5a5c69] text-[28px] mb-[10px] leading-8 font-normal cursor-pointer">
//             Ride Routes and children
//           </h1>

//           <div className=" flex mb-3 gap-3">
//             <div className="w-1/2 h-[496px] bg-slate-200 rounded-md flex justify-center">
//               <div className="w-[90%] h-[90%] mt-6" id="map"></div>
//             </div>

//             <div className="w-1/2 h-[495px] bg-slate-200 rounded-md px-3">
//               <div className="my-3 text-xl flex justify-center mt-5 mb-5 ">
//                 <h1 className="font-semibold text-slate-600">
//                   Today available Children
//                 </h1>
//               </div>
//               {/* Render child list */}
//               {childData.map((child, id) => (
//                 <div
//                   key={id}
//                   className="border border-orange bg-slate-100 rounded-md p-2 mb-3"
//                 >
//                   <div className="flex justify-start gap-5">
//                     <img
//                       src={child.image}
//                       alt={child.name}
//                       className="w-12 rounded-full"
//                     ></img>
//                     <h1 className="w-[250px] text-lg text-slate-600 pt-1">
//                       {child.name}
//                     </h1>
//                     <div className="flex justify-center gap-5">
//                       <button className="rounded-lg bg-green-600 w-20 ">
//                         Pick
//                       </button>
//                       <button className="rounded-lg bg-blue-600 w-20 ">
//                         Drop
//                       </button>
//                       <button className="rounded-lg bg-red-600  w-20 ">
//                         Miss
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </MainLayout>
//     </div>
//   );
// }

// export default NextRide;

/* global google */
import React, { useState, useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard, AiFillCar } from "react-icons/ai";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import img from "../../images/placeholder.png";

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

const GOOGLE_MAPS_API_KEY = "AIzaSyAeTBd0rn-R-OfRQO5pjSR54cRxcuOAD6s"; //?

function NextRide() {
  //userID
  const userId = localStorage.getItem("userId");

  // Define state to store child data
  const [childData, setChildData] = useState([]); //?
  // Fetch child data from the database using useEffect
  // useEffect(() => {
  //   // Use fetch or any other method to fetch child data from the database
  //   // Replace the URL with the actual endpoint to fetch child data
  //   fetch("/api/v1/childData")                                                            //?
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Update the childData state with the fetched data
  //       setChildData(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching child data:", error);
  //     });
  // }, []); // The empty array [] ensures that this effect runs only once on component mount
  useEffect(() => {
    async function getChildDetails() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/driver/ride/children/view/${userId}`
        );
        const data = await response.json();
        setChildData(data.childDataList);
      } catch (err) {
        console.error(err.message);
      }
    }
    getChildDetails();
    loadGoogleMapsScript();
  }, [userId]);

  // useEffect(() => {
  //   //?
  //   // Load the Google Maps script when the component mounts
  //   loadGoogleMapsScript();
  // }, []);

  function initMap() {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 7.8731, lng: 80.7718 },
      zoom: 7,
    });

    // Call the function to fetch store data and display it on the map
    getStores(map);
  }
  //get location details
  async function getStores(map) {
    try {
      console.log("fetch data");
      const res = await fetch(
        `http://localhost:5000/edugo/parent/children/map/${userId}`
      );
      const data = await res.json();
      console.log("fetch data", data);

      const stores = data.data.map((store) => {
        const latitude = store.latitude || 0; // Update with the correct data field
        const longitude = store.longitude || 0; // Update with the correct data field

        // Create a marker for each store
        const marker = new google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: map,
          title: store.child_id,
          icon: {
            url: img, // Use the imported image variable
            scaledSize: new google.maps.Size(32, 32), // Adjust the size as needed
          },
        });

        // Create an info window to display the latitude when the marker is clicked
        const infoWindow = new google.maps.InfoWindow({
          content: `<div>Latitude: ${latitude}</div>`,
        });

        // Attach a click event listener to the marker to open the info window
        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      });
    } catch (error) {
      console.error("Error fetching store locations:", error);
    }
  }

  const loadGoogleMapsScript = () => {
    if (window.google && window.google.maps) {
      // Google Maps API is already loaded
      initMap();
    } else {
      // Load the Google Maps script
      const googleMapsScript = document.createElement("script");
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`;
      googleMapsScript.async = true;
      googleMapsScript.defer = true;
      document.body.appendChild(googleMapsScript);
      googleMapsScript.onload = initMap;
    }
  };

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="pt-[25px] px-[25px] ">
          <h1 className="text-[#5a5c69] text-[28px] mb-[10px] leading-8 font-normal cursor-pointer">
            Ride Routes and children
          </h1>

          <div className=" flex mb-3 gap-3">
            <div className="w-1/2 h-[496px] bg-slate-200 rounded-md flex justify-center">
              <div className="w-[90%] h-[90%] mt-6" id="map"></div>
            </div>

            <div className="w-1/2 h-[495px] bg-slate-200 rounded-md px-3">
              <div className="my-3 text-xl flex justify-center mt-5 mb-5 ">
                <h1 className="font-semibold text-slate-600">
                  Today available Children
                </h1>
              </div>
              {/* Render child list */}
              {childData.map((child, id) => (
                <div
                  key={id}
                  className="border border-orange bg-slate-100 rounded-md p-2 mb-3"
                >
                  <div className="flex justify-start gap-5">
                    <img
                      src={child.image}
                      alt='img'
                      className="w-12 rounded-full"
                    ></img>
                    <h1 className="w-[250px] text-sm text-slate-600 pt-1">
                      {child.child_name} <br/>
                      {child.pickup_location} <br/>
                      {child.school_name} 
                    </h1>
                    <div className="flex justify-center gap-5">
                      <button className="rounded-lg bg-green-600 w-20 ">
                        Pick
                      </button>
                      <button className="rounded-lg bg-blue-600 w-20 ">
                        Drop
                      </button>
                      <button className="rounded-lg bg-red-600  w-20 ">
                        Miss
                      </button>
                    </div>
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

export default NextRide;
