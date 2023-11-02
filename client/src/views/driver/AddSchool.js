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
import addchild from "../../images/addchild.png";

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

// function AddSchool() {
//   return (
//     <div>
//       <MainLayout data={sideNavBarLinks}>
//         <h1 className="text-[#5a5c69] text-[28px]  leading-8 font-normal cursor-pointer">
//           Add New School Details
//         </h1>
//       </MainLayout>
//     </div>
//   );
// }

function AddSchool() {
  const [values, setValues] = useState({
    schoolName: "",
    schoolLocation: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const userId = localStorage.getItem("userId");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = {
        school: values.schoolName,
        address: values.schoolLocation,
      };

      const response = await fetch(
        `http://localhost:5000/edugo/driver/school/addnew`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      if (response.status === 200) {
        console.log("School details added successfully!");
        swal({
          title: "School details added successfully",
          icon: "success",
          buttons: {
            confirm: {
              className:
                "bg-orange text-white px-10 py-2 rounded-lg items-center hover:bg-gray ",
            },
          },
        }).then(() => {
          console.log(response);
        });
      } else {
        // Handle the error here
        console.error("Failed to upload school details:", response.statusText);
      }
    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="px-6 mb-8">
          <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
            Add New School
          </h1>
          <div className="flex h-[523px] mt-2 mb-3">
            <div className=" w-2/5 ">
              <div className=" mt-[90px]">
                <img src={addchild} alt="childImage" className=" ml-7"></img>
              </div>
            </div>
            <div className=" w-3/5 mt-44 flex items-center justify-center">
              <form onSubmit={handleSubmit}>
                <div className="p-3 w-[500px] h-[500px] ">
                  <form action="" onSubmit={handleSubmit}>
                    <div className="mb-10 relative">
                      <div className="flex items-center">
                        <input
                          className="w-full px-3 py-3 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                          type="text"
                          name="schoolName"
                          placeholder="Enter school Name"
                          // onChange={handleInput}
                        />
                      </div>
                    </div>
                    <div className="mb-1 relative">
                      <div className="flex items-center">
                        <input
                          className="w-full px-3 py-3 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                          type="text"
                          name="schoolLocation"
                          placeholder="Enter address"
                          // onChange={handleInput}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full my-6 py-3 bg-orange text-white font-bold rounded-lg hover:bg-gray hover:text-black"
                    >
                      Submit
                    </button>
                  </form>
                  {/* Use the LocationInput component */}
                  {/* {inputs.map((input) =>
                    input.name === "pickupLocation" ? (
                      <LocationInput
                        key={input.id}
                        value={values.pickupLocation}
                        onChange={(address) =>
                          setValues({ ...values, pickupLocation: address })
                        }
                      />
                    ) : (
                      <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                      />
                    )
                  )} */}
                  {/* Submit button */}
                  {/* <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Submit
                  </button> */}

             
                   
                </div>
              </form>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default AddSchool;
