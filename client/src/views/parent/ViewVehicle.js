import React, { useState } from "react";
import { AiFillDashboard } from "react-icons/ai";
import { FaChild } from "react-icons/fa";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import { BsStar, BsStarFill } from "react-icons/bs";
import MainLayout from "../../components/layout/MainLayout";
import { useLocation } from "react-router-dom";
import user from "../../images/user.png";

function ViewVehicle() {
  const location = useLocation();

  const dataParam = new URLSearchParams(location.search).get("data");
  const vehicleData = JSON.parse(decodeURIComponent(dataParam));

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
                <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer text-center">
                  Register
                </h1>
              </div>

              <div className="flex justify-center items-center mt-5">
                <button
                  className="w-36 h-12 mr-2 bg-orange rounded-lg text-xl cursor-pointer"
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  id="cancelBtn"
                >
                  Cancel
                </button>
                <button className="w-36 h-12 bg-orange rounded-lg text-xl cursor-pointer">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
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
  const reviews = [
    {
      id: 1,
      u_image: require("../../images/user.png"),
      u_name: "K.L Kumarasiri",
      rating: 3,
      review:
        "Saman is a very responsible and safe driver. My child enjoys the ride every day!",
    },
    {
      id: 2,
      u_image: require("../../images/user.png"),
      u_name: "M.N. Pasindu Yasith",
      rating: 4,
      review:
        "Saman is fantastic! She always arrives on time, and my kid feels safe and comfortable during the journey.",
    },
    {
      id: 3,
      u_image: require("../../images/user.png"),
      u_name: "M.N. Pasindu Yasith",
      rating: 2,
      review:
        "Saman is okay, but sometimes he's a little late. Overall, the service is satisfactory.",
    },
    {
      id: 4,
      u_image: require("../../images/user.png"),
      u_name: "M.N. Pasindu Yasith",
      rating: 4,
      review:
        "Saman is an amazing driver! She is patient, friendly, and goes the extra mile to ensure the children are happy.",
    },
    {
      id: 5,
      u_image: require("../../images/user.png"),
      u_name: "M.N. Pasindu Yasith",
      rating: 1,
      review:
        "I had a terrible experience with Saman. He drove recklessly and didn't seem to care about the safety of the children. I would not recommend her as a school driver.",
    },
    {
      id: 6,
      u_image: require("../../images/user.png"),
      u_name: "M.N. Pasindu Yasith",
      rating: 3,
      review: "Saman is fantastic! She always arrives on time",
    },
    {
      id: 7,
      u_image: require("../../images/user.png"),
      u_name: "M.N. Pasindu Yasith",
      rating: 2,
      review:
        "Saman is okay, but sometimes he's a little late. Overall, the service is satisfactory.",
    },
    {
      id: 8,
      u_image: require("../../images/user.png"),
      u_name: "M.N. Pasindu Yasith",
      rating: 4,
      review:
        "Saman is an amazing driver! He is patient, friendly, and goes the extra mile to ensure the children are happy.",
    },
  ];
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className=" px-6 ">
          <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
            Vehicle Review
          </h1>
          <div className="">
            <div className="flex justify-end w-5/6 ml-24 mb-4">
              <button
                className="flex justify-center w-56 h-10 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                <div className="flex mt-2 gap-3 font-semibold">
                  Select Ride
                </div>
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
                  <h1 className="">Condition : {vehicleData.type}</h1>
                </div>
              </div>
            </div>
            <div className=" w-1/2 bg-slate-200 rounded-[8px]">
              <div className="grid grid-cols-2 grid-rows-2 h-[110px] mx-2 my-2 gap-2 text-sm ">
                <div className="p-3">
                  <div className="mb-1">Ride ID : {vehicleData.id}</div>
                  <div className="mb-1">Type: {vehicleData.type}</div>
                  <div className="mb-1">Shift 1 start: xxxx</div>
                  <div className="">Shift 2 start: xxxx</div>
                </div>
                <div className="p-3">
                  <div className="mb-1">Childrens: {vehicleData.children}</div>
                  <div className="mb-1">
                    Number of availabe sheets:{" "}
                    {vehicleData.sheets - vehicleData.children}
                  </div>
                  <div className="mb-1">Pay rate: {vehicleData.price}</div>
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
                {vehicleData.school.map((school, index) => (
                  <div
                    key={index}
                    className=" p-1 flex justify-center rounded-md bg-orange"
                  >
                    {school}
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
                <div className=" px-3 mx-2 rounded-md h-[250px] overflow-y-auto" >
                  {reviews.map((review, index) => (
                    <div key={index} className="rounded-[8px] bg-slate-100 mb-3 mt-3  border-[1px] border-orange  items-center justify-between px-[30px] py-3 cursor-pointer hover:shadow-lg transform hover:scale-[101%] transition duration-300 ease-out">
                      <div className="flex  w-full mb-3">
                        <div className="flex justify-start gap-2 ">
                          <img src={review.u_image} alt="user_image" className="bg-slate-300 w-8 cursor-pointer rounded-full p-1"></img>
                          <h1 className="mt-1">{review.u_name}</h1>

                        </div>
                        <div className="flex justify-end mt-2  ml-auto">
                          <RatingStars rating={review.rating} />
                        </div>
                      </div>

                      <div>
                        {review.review}
                      </div>

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
