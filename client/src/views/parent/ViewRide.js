import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { FaChild } from "react-icons/fa";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import { BsStar, BsStarFill } from "react-icons/bs";
import MainLayout from "../../components/layout/MainLayout";
import user from "../../images/user.png";
import schoolVan from "../../images/schoolVan.jpeg";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/parent/dashboard", icon: <AiFillDashboard /> },
  { title: "Children", path: "/parent/children", icon: <FaChild /> },
  { title: "Payment", path: "/parent/payment", icon: <MdPayments /> },
  { title: "Support", path: "/parent/support", icon: <MdSupportAgent /> },
  {
    title: "Feedback",
    path: "/parent/feedback",
    icon: <MdOutlineRateReview />,
  },
];

function ViewRide() {
  //get child detail array
  const location = useLocation();
  const dataParam = new URLSearchParams(location.search).get("data");
  const child = JSON.parse(decodeURIComponent(dataParam));

  // --------------- Calculate Rating-------------------------//
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
  const userData = [
    {
      id: 1,
      rating: 3,
      name: "R.K.L Sandun",
      age: 32,
      driverId: "D101",
    },
  ];
  const vehicleData = [
    {
      id: 1,
      rating: 4,
      price: "RS. 380/KM",
      type: "Van",
      model: "Hiace",
      start: "Pannipitiya",
    },
  ];
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="pt-4 px-6 mb-2">
          <h1 className="text-[#5a5c69] text-[28px] mb-3 leading-8 font-normal cursor-pointer">
            View Ride <br></br>
            {child.id}
          </h1>
          <div className="flex justify-end w-5/6 ml-24 mb-4">
            <NavLink
              to={`/parent/children/addnewride/${
                child.id
              }?data=${encodeURIComponent(JSON.stringify(child))}`}
            >
              <button className="flex justify-center w-56 h-10 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                <div className="flex mt-2 gap-3 font-semibold">
                  Change Vehicle
                </div>
              </button>
            </NavLink>
          </div>
          <div className="grid grid-rows-2 grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-2  my-1">
            {/* --------------------Driver Details------------------------ */}
            <div className="h-[250px]">
              {userData.map((userData) => (
                <div className="w-full rounded-md bg-slate-200 h-[240px]  flex ">
                  <img
                    src={user}
                    alt="user"
                    className="bg-slate-300 mt-14 ml-12 w-36 h-36 cursor-pointer rounded-full p-1 border-2 border-orange"
                  />
                  <div className="  w-1/3 ml-20   mt-10    my-4">
                    <div className="justify-center p-2">
                      <span>{vehicleData.price}</span>
                      <h4 className="product-name">Type: {userData.name}</h4>
                      <p>Model: {userData.age}</p>
                      <p>Start: {userData.driverId}</p>
                      <br></br>
                      <RatingStars rating={userData.rating} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* -------------------------vehicle condition------------------------- */}
            <div className="bg-slate-200 rounded-md h-[500px] row-span-2">
              <div className=" grid gap-4 p-4  mt-5">
                <div className=" bg-slate-300 h-16 mt-4 flex justify-center">
                  <h1 className=" text-xl mt-4 font-bold">
                    Number of Childrens : 8
                  </h1>
                </div>
                <div className="bg-slate-300 h-40">
                  <h1 className=" text-lg mt-4 font-semibold ml-4">
                    Reachig Schools :
                  </h1>
                  <ul className=" ml-4">
                    <li>Ananda College</li>
                    <li>Mahamaya Balika College</li>
                    <li>C.W.W. Kannangara College</li>
                    <li>Ananda Balika College</li>
                  </ul>
                </div>
                <div className="bg-slate-300 h-16">
                  <div className="h-16 mt-1 flex justify-center">
                    <h1 className=" text-xl text-red-600 mt-4 font-bold">
                      RS 380/km
                    </h1>
                  </div>
                </div>
                <div className="bg-slate-300 h-16">
                  <div className="h-16 mt-1 flex justify-center gap-20">
                    <h1 className=" text-xl mt-4 font-bold">
                      Destination: 12km
                    </h1>
                    <h1 className=" text-xl  mt-4 font-bold">
                      Payment: RS 4380.00
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[240px] flex flex-col items-center justify-center">
              <div className="w-full rounded-md bg-slate-200 h-[240px] flex">
                <img
                  src={schoolVan}
                  alt="schoolVan"
                  className=" w-52 h-36 mt-14 ml-5"
                />
                <div className=" w-1/2 mt-10 mx-10  my-4">
                  <div>
                    {vehicleData.map((vehicleData) => (
                      <div className=" justify-center p-2">
                        <span>{vehicleData.price}</span>
                        <h4 className="product-name">
                          Type: {vehicleData.type}
                        </h4>
                        <p>Model: {vehicleData.model}</p>
                        <p>Start: {vehicleData.start}</p>
                        <br></br>
                        <RatingStars rating={vehicleData.rating} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default ViewRide;
