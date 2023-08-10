import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard, AiFillCar } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

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

const SliderData = [
  {
    image: require("../../images/vv_van1.png"),
    alt: "img1",
  },
  {
    id: 1,
    image: require("../../images/vv_van2.png"),
    alt: "img2",
  },
  {
    id: 1,
    image: require("../../images/vv_van3.png"),
    alt: "img3",
  },
];
const vehicleData = [
  {
    id: 1,
    rating: 4,
    price: "RS. 380/KM",
    type: "Van",
    vnumber: "PJ-0525",
    model: "Hiace",
    options: "AIR CONDITION, POWER STEERING, POWER MIRROR, POWER WINDOW",
    start: "Pannipitiya",
    shift1: "Pannipitiya at 5.45 a.m.",
    shift2: "Kirulapone at 12.45 a.m.",
    licenseEXP: "2024/8/10",
    dname: "L.A. Sarath kumara",
    status: "verified",
    school: [
      "Alexandra College",
      "Bishop's College",
      "C.W.W Kannangara College",
      "Isipathana College",
    ],
    children: 12,
    sheets: 15,
  },
];

function Vehicle() {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="px-6">
          <h1 className="text-[#5a5c69] text-[28px]  leading-8 font-normal cursor-pointer">
            Vehicle Details
          </h1>
          <div className=" h-12 flex justify-end">
                  <button className="flex justify-center w-40 h-10 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                    <div className="flex mt-2 gap-3 font-semibold text-xl"><FaRegEdit className="mt-1" />Edit</div>
                  </button>
                </div>
          <div className=" flex justify-center">
            <section className="relative w-2/3 h-[220px] flex justify-center items-center">
              <MdKeyboardArrowLeft
                className="absolute top-1/2 left-8 text-5xl text-black z-10 cursor-pointer select-none"
                onClick={prevSlide}
              />
              <MdKeyboardArrowRight
                className="absolute top-1/2 right-8 text-5xl text-black z-10 cursor-pointer select-none"
                onClick={nextSlide}
              />
              {SliderData.map((slide, index) => (
                <div
                  className={`transition-opacity duration-1000 ease ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                  key={index}
                >
                  {index === current && (
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className=" h-[200px] rounded-lg shadow-lg transform scale-108"
                    />
                  )}
                </div>
              ))}
            </section>
          </div>
          {vehicleData.map((vehicleData) => (
            <div className="flex mb-[10px] gap-2">
              <div className=" w-2/3 bg-slate-200 rounded-[8px]">
                <div className="grid grid-cols-2 grid-rows-2 h-[250px] mx-2 my-2 gap-2 text-sm ">
                  <div className="p-3 space-y-2">
                    <div >Ride ID : {vehicleData.id}</div>
                    <div>Type : {vehicleData.type}</div>
                    <div>Vehicle number :{vehicleData.vnumber}</div>
                    <div>Model : {vehicleData.model}</div>
                    <div className="flex">Options <div className="font-thin">: {vehicleData.options}</div></div>
                    <div>License expire date : {vehicleData.licenseEXP}</div>
                    <div>Vehicle Registration Number : D1203</div>
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="mb-1">Childrens: {vehicleData.children}</div>
                    <div className="mb-1">
                      Number of availabe sheets:{" "}
                      {vehicleData.sheets - vehicleData.children}
                    </div>
                    <div className="mb-1">Shift 1 start:{vehicleData.shift1}</div>
                    <div className="">Shift 2 start: {vehicleData.shift2}</div>
                    <div className="">Condition: {vehicleData.status}</div>
                    <div className="mb-1">Pay rate: {vehicleData.price}</div>
                  </div>
                </div>


              </div>
              <div className=" w-1/3 bg-slate-200 rounded-[8px]">
                <div className="flex items-center justify-center p-2">
                  <h1 className="text-lg text-slate-600">Reaching Schools</h1>
                </div>
                <div className="space-y-2 w-full px-3 overflow-y-auto">
                  {vehicleData.school.map((school, index) => (
                    <div
                      key={index}
                      className="p-1 flex justify-center rounded-md border border-orange bg-slate-100"
                    >
                      {school}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </MainLayout>
    </div>
  );
}

export default Vehicle;
