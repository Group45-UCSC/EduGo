import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaHome, FaBus, FaUsers, FaRegEdit, FaTrash } from "react-icons/fa";
import userDefault from '../../images/userDefault.png'
const sideNavBarLinks = [
  { title: "Dashboard", path: "/sup_agent/dashboard", icon: <FaHome /> },
  { title: "Parents", path: "/sup_agent/parents", icon: <FaBus /> },
  { title: "Drivers", path: "/sup_agent/drivers", icon: <FaUsers /> },
];

function SupAgentProfile() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDeleteImage = () => {
    if (selectedFile) {
      const shouldDelete = window.confirm(
        "Are you sure you want to delete the image?"
      );
      if (shouldDelete) {
        // Perform the image deletion logic here
        setSelectedFile(null); // Clear the selected file after deletion
      }
    }
  };

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="grid grid-cols-2">
          {/* ---------profile picture----------- */}
          <div className="bg-[#D9D9D9] mx-[10rem] mt-[8rem] h-[20rem] rounded-2xl border-black border-2 m-3">
            <div className="flex flex-col gap-2">
            <div className="relative w-[175px] h-[175px] rounded-full overflow-hidden mx-[5rem] mt-5">
              {selectedFile ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  className="w-full h-full object-cover"
                  alt="user"
                />
              ) : (
                <img
                  src={userDefault}
                  className="w-full h-full object-center"
                  alt="User Placeholder"
                />
              )}
            </div>
              <div className="flex flex-row gap-[5rem] mx-[7rem]">
                <div className="group inline-flex items-center justify-center bg-orange border-black border-2 rounded-xl p-1 transition-all hover:bg-[#ff7f00] transform hover:scale-110">
                  <label htmlFor="fileInput">
                    <input
                      id="fileInput"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <FaRegEdit style={{ fontSize: "25px" }} />
                  </label>
                </div>
                <div
                  className={`group inline-flex items-center justify-center border-black border-2 rounded-xl p-1 transition-all ${
                    selectedFile ? " bg-orange hover:bg-[#ff7f00] transform hover:scale-110" : ""
                  }`}
                  onClick={handleDeleteImage}
                >
                  <FaTrash style={{ fontSize: "25px" }} />
                </div>
              </div>
            </div>
          </div>
          {/* --------------------------------------- */}

          {/* -----------profile details-------------- */}
          <div className="bg-orange w-full h-7"></div>
        </div>
      </MainLayout>
    </div>
  );
}

export default SupAgentProfile;
