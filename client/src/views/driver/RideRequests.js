import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard, AiFillCar } from "react-icons/ai";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'; // Import the Google Maps components

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
    parentName: "K.L. Saman",
    location: "No 45, Darmapala road, Maharagama",
    image: require("../../images/child1.png"),
    school: "Royal Collage",
    lat:6.851556,
    lng:  79.919038,

  },
  {
    id: 2,
    parentName: "K.L. Kasun",
    location: "No 25/1, Darmapala road, Pannipitya",
    image: require("../../images/child2.png"),
    school: "Anula Collage",
    lat:6.847198496442547,
    lng:  79.94801407997109,
  },
];
function RideRequests(props) {
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
                <div key={id} className=" h-[300px]  flex bg-slate-200 mb-3 rounded-md">
                  <div className="flex-col items-center justify-center">
                    <div className="flex justify-center py-3">
                    <img
                      src={request.image}
                      alt={request.id}
                      className="bg-slate-300 w-32 h-[120px] cursor-pointer rounded-full p-1"
                    ></img></div>
                    <div className="mt-3 ml-3 px-2 text-slate-600">
                      <div className="">{request.parentName}</div>
                      <div className="">{request.location}</div>
                      <div className="">{request.school}</div>
                    </div>
                  </div>
                  
                  <div className="" style={{ position: 'relative', left: '120px', top:'10px' }}>
                  <Map
                    google={props.google}
                    zoom={14}
                    style={{ height: '280px', width: '600px'}}
                    initialCenter={{
                      lat:request.lat, 
                      lng: request.lng,
                    }}
                  >
                    <Marker position={{ lat:request.lat, lng:request.lng }} />
                  </Map>
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

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBSRpk2O7ZkVtqQknrlERKR-DwpiRi8Z_U',
})(RideRequests);
