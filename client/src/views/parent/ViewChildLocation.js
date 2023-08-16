import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import user from "../../images/user.png";
import { NavLink } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { FaChild, FaEye } from "react-icons/fa";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import { useLocation } from "react-router-dom";
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'; // Import the Google Maps components
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "700px",
  height: "350px",
};

const center = {
  lat: 6.872718728491422,
  lng:  79.88336081994609,
};

function ViewChildLocation(props) {
  const location = useLocation();
  const dataParam = new URLSearchParams(location.search).get("data");
  const child = JSON.parse(decodeURIComponent(dataParam));

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

  // const childDetails = [
  //   {
  //     name: "R.B.S.Udayanga",
  //     schoolName: "Royal Collage",
  //     schoolRide: "R103",
  //   },

  // ];
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="px-6">
          <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
            Ongoing Location
          </h1>
          <div className="mt-[25px] pb-[15px]">
            <div className="flex justify-center">
              <div className="flex flex-col gap-4">
                {/* {childDetails.map((child, index) => ( */}
                <div className="h-[150px] w-[1000px] rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                  <div className="">
                    <img
                      src={user}
                      alt="user"
                      className="bg-slate-300 w-32 cursor-pointer rounded-full p-1"
                    />
                  </div>
                  <div className="w-1/3">
                    <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px] pb-1">
                      Child Details
                    </h1>
                    <div className="leading-6">
                      <div className="flex gap-1">
                        <h3 className="text-[16px] leading-[17px] font-semibold">
                          Name:
                        </h3>
                        <div className="text-[12px] font-semibold">
                          {child.name}
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <h3 className="text-[16px] leading-[17px] font-semibold">
                          School Name:
                        </h3>
                        <div className="text-[12px] font-semibold">
                          {child.schoolName}
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <h3 className="text-[16px] leading-[17px] font-semibold">
                          School Ride:
                        </h3>
                        <div className="text-[12px] font-semibold">
                          {child.schoolRide}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="font-bold text-[#16a34a] text-lg">
                    <h1>On Ride</h1>
                  </div>
                  <div className=" flex gap-5">
                    {/*---------------------Buttons-----------------------------*/}

                    <div className="">
                      <NavLink to="/parent/children/viewride">
                        <button
                          className="flex justify-center  w-40 h-10 bg-orange hover:bg-[#b3913b] rounded-md cursor-pointer"
                          // onClick={() => {
                          //   setModalOpen(true);
                          // }}
                        >
                          <div className="flex mt-2 gap-3 font-semibold">
                            <FaEye fontSize={28} color="" />
                            View Ride
                          </div>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
                {/* ))} */}
              </div>
            </div>

            {/* Location View */}
            <div className="flex justify-center mt-5  gap-3">
              <div className=" w-2/3 h-[434px]  border border-orange shadow-lg cursor-pointer rounded-[4px]">
                <div className="bg-white flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px] rounded-[4px]">
                  <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
                    Ongoing Location {isLoaded}
                  </h2>
                </div>
                <div className="" style={{ position: "relative", left: "20px", top: "0", margin: "0 0 20px " }}>
                {isLoaded && (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                  >
                    {/* Child components, such as markers, info windows, etc. */}
                                  {/* Add a Marker at the desired location */}
              <Marker position={{ lat: 6.872815439336726, lng: 79.88325353947194 }} />
               
                  </GoogleMap>
                  )}
                </div>

              </div>
              <div className="w-1/3 px-3 bg-slate-200 rounded-md">
                <div className=" mt-5">
                  <div className="flex">
                    <div className="pt-2 text-lg text-slate-600">
                      Pickup Status :
                    </div>{" "}
                    <div className="p-2 text-lg font-semibold text-blue-600">
                      {child.pickupStatus}
                    </div>
                  </div>
                  <div className=" mt-5 flex justify-center">
                    {child.pickupStatus === "Picked up" && (
                      <div className="text-slate-600">
                        Picked Time : 6.50 AM
                      </div>
                    )}
                    {child.pickupStatus === "Not Yet" && (
                      <div>Estimate Pick Time : 7.00 AM</div>
                    )}
                    {child.pickupStatus === "Missed" && (
                      <div>
                        <button className="flex justify-center w-44 h-10 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                          <div className="flex mt-2 gap-3 font-semibold">
                            Pickup Request
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className=" mt-5">
                  <div className="flex">
                    <div className="pt-2 text-lg text-slate-600">
                      Droped Status :
                    </div>{" "}
                    <div className="p-2 text-lg font-semibold text-blue-600">
                      {/* {child.pickupStatus} */} Not Yet
                    </div>
                  </div>
                  {/* <div className=" mt-5 flex justify-center">
                    {child.pickupStatus === "Picked up" && (
                      <div className="text-slate-600">
                        Droped Time : 1.50 AM
                      </div>
                    )}
                    {child.pickupStatus === "Not Yet" && (
                      <div className="text-slate-600">
                        Estimate Time : 2.10 AM
                      </div>
                    )}
                    {child.pickupStatus === "Missed" && (
                      <div className="text-slate-600">
                        Estimate Time : 2.10 AM
                      </div>
                    )}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default React.memo(ViewChildLocation)

