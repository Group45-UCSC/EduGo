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

  const [statusType1, setStatusType1] = useState("pick");
  const [statusType2, setStatusType2] = useState("drop");

  //pickup button click
  const handlePickedClick = async (childId) => {
    try {
      const body = {
        childId: childId,
      };
      const response = await fetch(
        `http://localhost:5000/edugo/driver/ride/child/picked`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        setStatusType1("picked");
      } else {
        setStatusType1("pick");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  //dropped button click
  const handleDroppedClick = async (childId) => {
    try {
      const body = {
        childId: childId,
      };
      const response = await fetch(
        `http://localhost:5000/edugo/driver/ride/child/dropped`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        setStatusType2("dropped");
      } else {
        setStatusType2("drop");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  //End ride button click
  const handleEndRide = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/edugo/driver/ride/end/${userId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        setStatusType1("pick");
        setStatusType2("drop");
      } else {
      }
    } catch (err) {
      console.error(err.message);
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

            <div className="w-1/2 h-[495px] mb-28 bg-slate-200 rounded-md px-3">
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
                  <div className="flex justify-start gap-3">
                    
                    <h1 className="w-[250px] text-sm text-slate-600 pt-1">
                      {child.child_name} <br />
                      {child.pickup_location} <br />
                      {child.school_name}
                    </h1>
                    <div className="flex justify-center gap-3">
                      {/* <button className="rounded-lg bg-green-600 w-20 ">
                        Pick
                      </button> */}
                      <button
                        onClick={() => handlePickedClick(child.child_id)}
                        className="flex justify-center w-28 h-10 bg-green-600 rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                      >
                        <div className="flex mt-2 gap-3 font-semibold text-white">
                          {statusType1}
                        </div>
                      </button>
                      <button
                        onClick={() => handleDroppedClick(child.child_id)}
                        className="flex justify-center w-28 h-10 bg-blue-600 rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                      >
                        <div className="flex mt-2 gap-3 font-semibold text-white">
                          {statusType2}
                        </div>
                      </button>
                      {/* <button className="rounded-lg bg-blue-600 w-20 ">
                        Drop
                      </button> */}
                      {/* <button className="rounded-lg bg-red-600  w-20 ">
                        Miss
                      </button> */}
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={() => handleEndRide()}
                className="flex justify-center w-28 h-10 bg-red-600 rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
              >
                <div className="flex mt-2 gap-3 font-semibold text-white">
                  End Ride
                </div>
              </button>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default NextRide;
