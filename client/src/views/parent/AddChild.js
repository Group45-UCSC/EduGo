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
import addchild from "../../images/addchild.png"

function AddChild() {
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
  const [values, setValues] = useState({
    childname: "",
    pickupLocation: "",
    schoolLocation: "",
    pickupTime: "",
    schoolEndTime: "",
  });

  const inputs = [
    {
      id: 1,
      name: "childname",
      type: "text",
      placeholder: "Child Name",
      errorMessage:
        "required",
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
      name: "schoolLocation",
      type: "location",
      placeholder: "School Location",
      errorMessage: "required",
      label: "School Location",
      required: true,
    },
    {
      id: 4,
      name: "pickupTime",
      type: "time",
      placeholder: "Pickup Time",
      errorMessage:
        "please enter time before 7.20",
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
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="px-6">
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
              <div className="p-3 w-[500px] h-[500px] ">

                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default AddChild;
