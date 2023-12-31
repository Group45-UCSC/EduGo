import React from "react";
import { FaTimes } from "react-icons/fa";
const ParentChildDetails = ({ isOpen, onClose, content,activeTab }) => {
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
            <div className="mt-1">
              {activeTab === "parents" && (
                <div>
                  <h1 className="font-bold text-2xl mb-3">Parent Details</h1>
                  {/* Replace this with the actual content for the Driver tab */}
                  <p className="">{content}</p>
                </div>
              )}

              {activeTab === "children" && (
                <div>
                  <h1 className="font-bold text-2xl">Child Details</h1>
                  <p className="text-gray-700">{content}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ParentChildDetails;
