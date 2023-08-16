import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard, AiFillCar } from "react-icons/ai";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
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
const rideRequest = [
  {
    id: 1,
    parentName: "K.L. Hasindu",
    location: "No 45, Darmapala road, Maharagama",
    image: require("../../images/child1.png"),
    school: "Royal Collage",
    lat: 6.851556,
    lng: 79.919038,
  },
  {
    id: 2,
    parentName: "H.P. Hasini",
    location: "No 25/1, Darmapala road, Pannipitya",
    image: require("../../images/child2.png"),
    school: "Anula Collage",
    lat: 6.847198496442547,
    lng: 79.94801407997109,
  },
];
function RideRequests(props) {
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

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="px-[25px] ">
          <h1 className="text-[#5a5c69] text-[28px]  leading-8 font-normal cursor-pointer">
            Ride Requests (2)
          </h1>
          <div className="mt-3">
            <div className=" w-full gap-3">
              {rideRequest.map((request, id) => (
                <div
                  key={id}
                  className=" h-[300px]  flex bg-slate-200 mb-3 rounded-md"
                >
                  <div className="flex-col items-center justify-center">
                    <div className="flex justify-center py-3">
                      <img
                        src={request.image}
                        alt={request.id}
                        className="bg-slate-300 w-32 h-[120px] cursor-pointer rounded-full p-1"
                      ></img>
                    </div>
                    <div className="mt-3 ml-3 px-2 text-slate-600">
                      <div className="">{request.parentName}</div>
                      <div className="">{request.location}</div>
                      <div className="">{request.school}</div>
                      <div className=" flex justify-center gap-4 mt-3">
                        <button className="flex justify-center w-28 h-10 bg-green-600 rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                          <div className="flex mt-2 gap-3 font-semibold text-white">
                            Accept
                          </div>
                        </button>
                        <button className="flex justify-center w-28 h-10 bg-red-600 rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                          <div className="flex mt-2 gap-3 font-semibold text-white">
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
                        zoom={15}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                      >
                        {/* Child components, such as markers, info windows, etc. */}
                        <Marker
                          position={{
                            lat: 6.872815439336726,
                            lng: 79.88325353947194,
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
        </div>
      </MainLayout>
    </div>
  );
}

export default React.memo(RideRequests);
