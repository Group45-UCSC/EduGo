import React, { useState } from "react";
import FormInput from "../../components/layout/FormInput";
import { AiFillDashboard } from "react-icons/ai";
import { FaChild } from "react-icons/fa";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import MainLayout from "../../components/layout/MainLayout";
import addchild from "../../images/addchild.png";
import swal from "sweetalert";

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

function AddChild() {
  const [values, setValues] = useState({
    childname: "",
    pickupLocation: "",
    schoolName: "",
    pickupTime: "",
    schoolEndTime: "",
  });

  const inputs = [
    {
      id: 1,
      name: "childname",
      type: "text",
      placeholder: "Child Name",
      errorMessage: "required",
      label: "Child Name",
      //   pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "pickupLocation",
      type: "location",
      placeholder: "Pickup Address",
      errorMessage: "required",
      label: "Pickup Address",
      required: true,
    },
    {
      id: 3,
      name: "schoolName",
      type: "location",
      placeholder: "School Name",
      errorMessage: "required",
      label: "School Name",
      required: true,
    },
    {
      id: 4,
      name: "pickupTime",
      type: "time",
      placeholder: "Pickup Time",
      errorMessage: "please enter time before 7.20",
      label: "Pickup Time",
      required: true,
    },
    {
      id: 5,
      name: "schoolEndTime",
      type: "time",
      placeholder: "School end time",
      errorMessage: "require",
      label: "School end time",
      //   pattern: values.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const userId = localStorage.getItem("userId");

  // Function to handle form submission
  const handleSubmit =async(e) => {
    e.preventDefault();

    try {
      const body = {
        childname: values.childname,
        pickupLocation: values.pickupLocation,
        schoolName: values.schoolName,
        pickupTime: values.pickupTime,
        schoolEndTime: values.schoolEndTime,
      };

      const response = await fetch(
        `http://localhost:5000/edugo/parent/children/addride/${userId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      if (response.status === 200) {
        console.log("Children details uploaded successfully!");
        swal({
          title: "Add your children !",
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
        console.error("Failed to upload children details:", response.statusText);
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
            Add New Children
          </h1>
          <div className="flex h-[523px] mt-2 mb-3">
            <div className=" w-2/5 ">
              <div className=" mt-[90px]">
                <img src={addchild} alt="childImage" className=" ml-7"></img>
              </div>
            </div>
            <div className=" w-3/5 flex items-center justify-center">
              <form onSubmit={handleSubmit}>
                <div className="p-3 w-[500px] h-[500px] ">
                  {inputs.map((input) => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  ))}
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default AddChild;
