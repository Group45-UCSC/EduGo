import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard, AiFillCar } from "react-icons/ai";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

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
function NextRide() {
  const childName = [
    {
      id: 1,
      name: "K.L.M. Kavishka",
      image: require("../../images/child1.png"),
    },
    {
      id: 2,
      name: "A.D.K. Pasindu",
      image: require("../../images/child2.png"),
    },
    {
      id: 3,
      name: "K.S.S. Sampath",
      image: require("../../images/child3.png"),
    },
  ];

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="pt-[25px] px-[25px] ">
          <h1 className="text-[#5a5c69] text-[28px] mb-[10px] leading-8 font-normal cursor-pointer">
            Ride Routes and childrens
          </h1>

          <div className=" flex mb-3 gap-3">
            <div className=" w-1/2 h-[496px] bg-slate-200 rounded-md flex justify-center">
              <div className="w-[90%] h-[90%] mt-6  ">
                <LoadScript googleMapsApiKey="AIzaSyBSRpk2O7ZkVtqQknrlERKR-DwpiRi8Z_U">
                  <GoogleMap
                    mapContainerStyle={{
                      width: "100%",
                      height: "100%",
                    }}
                    center={{
                      lat: 6.859187491255102,
                      lng: 79.90705190419602,
                    }}
                    zoom={15}
                  >
                    <Marker
                      position={{
                        lat: 6.857788390174558,
                        lng: 79.90866684346393,
                      }}
                    />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
            
              <div className=" w-1/2 h-[495px] bg-slate-200 rounded-md px-3 ">
                <div className=" my-3 text-xl flex justify-center mt-5 mb-5 ">
                  <h1 className=" font-semibold text-slate-600">Today availabel Children</h1>
                </div>
                {childName.map((child, id) => (
                <div className="border border-orange bg-slate-100 rounded-md p-2 mb-3">
                  <div className=" flex justify-start gap-5">
                    <img
                      src={child.image}
                      alt={id}
                      className="w-12 rounded-full"
                    ></img>
                    <h1 className=" w-[250px] text-lg text-slate-600 pt-1">
                      {child.name}
                    </h1>
                    <div className="flex justify-center gap-5">
                      <button className=" rounded-lg bg-green-600 w-20 ">
                        Pick
                      </button>
                      <button className=" rounded-lg bg-blue-600 w-20 ">
                        Drop
                      </button>
                      <button className=" rounded-lg bg-red-600  w-20 ">
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
