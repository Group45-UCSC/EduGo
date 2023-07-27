import React from "react";
import { FaTimes } from "react-icons/fa";
import CarouselLayout from "../carousel/CarouselLayout";

const CAROUSEL_DATA = [
  {
    image:"https://riyasewana.com/uploads/toyota-shell-lh61-271528574871.jpg",
    imageAlt: "minions",
  },
  {
    image: "https://riyasewana.com/uploads/toyota-shell-lh61-271528574692.jpg",
    imageAlt: "thor",
  },
  {
    image:"https://riyasewana.com/uploads/toyota-shell-lh61-271529516704.jpg",
    imageAlt: "space",
  },
];

const DriverVehicleDetails = ({ isOpen, onClose, content,activeTab}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 justify-center z-50">
          <div className=" w-[50rem] h-auto bg-white ml-[35rem] mt-[5rem] p-8 rounded-md shadow-md popup-container relative">
            <button
              className="absolute top-0 right-0 m-2 p-2 text-gray-500 hover:text-[#e53e3e]"
              onClick={onClose}
            >
              <FaTimes className="h-6 w-6" />
            </button>
            <div className="mt-4">
              {activeTab === "drivers" && (
                <div>
                  <h1 className="font-bold text-2xl">Driver Details</h1>
                  {/* Replace this with the actual content for the Driver tab */}
                  <p className="text-gray-700">{content}</p>
                </div>
              )}
      
      {activeTab === "vehicles" && (
              
                <div>
                  <h1 className="font-bold text-2xl">Vehicle Details</h1>
                  <CarouselLayout data={CAROUSEL_DATA} />
                  <p className="text-gray-700">{content}</p>
                </div>
              )}

            </div>
            {/* <CarouselLayout data={CAROUSEL_DATA}/> */}
          </div>
        </div>
      )}
    </>
  );
};

export default DriverVehicleDetails;
