import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard, AiFillCar } from "react-icons/ai";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

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

function AddVehicle() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const [values, setValues] = useState({
    vehicleNum: "",
    vehicleType: "",
    vehicleModel: "",
    vehicleSeats: "",
    vehicleRegNum: "",
    vehicleRegDate: "",
    // RegDocImg: null,
    // vehicleImages: [],
    registrationDocumentImage: null, // Initialize with null
  });
  const {
    vehicleNum,
    vehicleType,
    vehicleModel,
    vehicleSeats,
    vehicleRegNum,
    vehicleRegDate,
  } = values;

  const handleInputChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    setValues((prev) => ({
      ...prev,
      registrationDocumentImage: event.target.files[0], // Store the selected file
    }));
  };

  // const handleFileChange = (event) => {
  //   const { name, files } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: files[0],
  //   }));
  // };

  // const handleFileChange = (event) => {
  //   const { name, files } = event.target;

  //   if (name === "RegDocImg") {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: files[0],
  //     }));
  //   } else if (name === "vehicleImages") {
  //     const newImagesArray = Array.from(files);
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: [...prevData[name], ...newImagesArray],
  //     }));
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const body = {
        vehicleNum,
        vehicleType,
        vehicleModel,
        vehicleSeats,
        vehicleRegNum,
        vehicleRegDate,
      };
      const response = await fetch(
        `http://localhost:5000/edugo/driver/addride/vehicle/${userId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      if (response.status === 200) {
        swal({
          title: "Successfully Registered Your Vehicle!",
          text: "Now you can add your school ride.",
          icon: "success",
          buttons: {
            confirm: {
              className:
                "bg-orange text-white px-10 py-2 rounded-lg items-center hover:bg-gray ",
            },
          },
        }).then(() => {
          console.log(response);
          navigate("/driver/ride/add");
        });
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <h1 className="text-[#5a5c69] text-[28px]  leading-8 font-normal cursor-pointer">
          Step 1 : Add Your Vehicle first...
        </h1>
        <div className="p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <label>
              Vehicle Number:
              <input
                type="text"
                name="vehicleNum"
                // value={formData.vehicleNum}
                onChange={handleInputChange}
                className="border p-2"
                required
              />
            </label>
            {/* <label>
              Vehicle Type:
              <input
                type="text"
                name="vehicleType"
                // value={formData.vehicleType}
                onChange={handleInputChange}
                className="border p-2"
                required
              />
            </label> */}
            <label>Vehicle Type:</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="vehicleType"
                  value="bus"
                  onChange={handleInputChange}
                  required
                />
                Bus
              </label>
              <label>
                <input
                  type="radio"
                  name="vehicleType"
                  value="van"
                  onChange={handleInputChange}
                  required
                />
                Van
              </label>
            </div>
            <label>
              Vehicle Model:
              <input
                type="text"
                name="vehicleModel"
                // value={formData.vehicleModel}
                onChange={handleInputChange}
                className="border p-2"
                required
              />
            </label>
            <label>
              Number Of Seats :
              <input
                type="number"
                name="vehicleSeats"
                // value={formData.vehicleSeats}
                onChange={handleInputChange}
                className="border p-2"
                required
              />
            </label>
            <label>
              Vehicle Registration Number :
              <input
                type="text"
                name="vehicleRegNum"
                // value={formData.vehicleRegNum}
                onChange={handleInputChange}
                className="border p-2"
                required
              />
            </label>
            <label>
              Registered Date :
              <input
                type="date"
                name="vehicleRegDate"
                // value={formData.vehicleRegDate}
                onChange={handleInputChange}
                className="border p-2"
                required
                max={new Date().toISOString().split("T")[0]} // Set min attribute to today's date
              />
            </label>
            <label>
              Registration Document Image:
              <input
                type="file"
                name="registrationDocumentImage"
                onChange={handleFileChange}
                className="border p-2"
                accept="image/*" // Allow only image files
                required
              />
            </label>
            {/* <label>
              Registration Document :
              <input
                type="text"
                name="RegDocImg"
                value={formData.vehicleType}
                onChange={handleInputChange}
                className="border p-2"
                required
              />
            </label>
            <label>
              Vehicle Images :
              <input
                type="text"
                name="vehicleImages"
                value={formData.vehicleType}
                onChange={handleInputChange}
                className="border p-2"
                required
              />
            </label> */}
            {/* Add other input fields similarly */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-600 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </form>
        </div>
      </MainLayout>
    </div>
  );
}

export default AddVehicle;
