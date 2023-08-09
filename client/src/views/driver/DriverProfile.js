import React,{useState} from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer, FaRegEdit, FaTrash } from "react-icons/fa";
import vehicleDefault from "../../images/vehicleDefault.png";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/driver/dashboard", icon: <FaBeer /> },
  { title: "School Ride", path: "/driver/ride", icon: <FaBeer /> },
  { title: "Finance", path: "/driver/finance", icon: <FaBeer /> },
  { title: "Support", path: "/driver/support", icon: <FaBeer /> },
  { title: "Feedback", path: "/driver/feedback", icon: <FaBeer /> },
];
function DriverProfile() {
  const [name, setName] = useState("John Doe");
  const [address, setAddress] = useState("123 Main Street");
  const [email, setEmail] = useState("johndoe@example.com");
  const [contact, setContact] = useState("0782577381");

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
        <div className="grid grid-cols-3">
          <div className="col-span-1 bg-transparent ">
            {/* ---------profile picture----------- */}
            <div className="bg-[#D9D9D9]  md:mx-[3rem] md:my-[1rem] lg:w-[256px] lg:h-[256px] rounded-xl border-black border-2 md:m-3 justify-center items-center">
              <div className="flex flex-col gap-1 ">
                <div className="relative w-[175px] h-[175px] rounded-2xl  overflow-hidden my-[1.5rem] mx-[3.3rem]">
                  {selectedFile ? (
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      className="w-full h-full object-cover"
                      alt="vehicle"
                    />
                  ) : (
                    <img
                      src={vehicleDefault}
                      className="w-full h-full object-center"
                      alt="User Placeholder"
                    />
                  )}
                </div>
                <div className="flex flex-row gap-[5rem] justify-center">
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
                      selectedFile
                        ? " bg-orange hover:bg-[#ff7f00] transform hover:scale-110"
                        : ""
                    }`}
                    onClick={handleDeleteImage}
                  >
                    <FaTrash style={{ fontSize: "25px" }} />
                  </div>
                </div>
              </div>
            </div>
            {/* --------------------------------------- */}
          </div>
          <div className="col-span-2 bg-transparent">
            Right Side (2/3 width)
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default DriverProfile;