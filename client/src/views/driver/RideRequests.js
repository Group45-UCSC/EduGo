import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard, AiFillCar } from "react-icons/ai";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import parentMap from "../../images/parentMap.png"

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
  },
  {
    id: 2,
    parentName: "K.L. Kasun",
    location: "No 45, Darmapala road, Maharagama",
    image: require("../../images/child2.png"),
    school: "CWW Kannangara Collage",
  },
];
function RideRequests() {
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="px-[25px] ">
          <h1 className="text-[#5a5c69] text-[28px]  leading-8 font-normal cursor-pointer">
            Ride Requests (2)
          </h1>
          <div>
            <div className="border px-3 w-full">
              {rideRequest.map((request, id) => (
                <div key={id} className="border h-[200px] flex ">
                  <img
                    src={request.image}
                    alt={request.id} className="bg-slate-300 w-32 h-[120px] cursor-pointer rounded-full p-1"
                  ></img>
                  <div>
                    <div className="border">{request.parentName}</div>
                    <div className="border">{request.location}</div>
                    <div className="border">{request.school}</div>
                  </div>
                  <img src={parentMap} alt={request.id} className=""></img>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default RideRequests;
