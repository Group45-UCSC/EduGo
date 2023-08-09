import React from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../images/loginImage.jpg";
import logo from "../../images/logo.png";
import Regvalidation from "../user/ParentRegValidation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ParentRegister() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    tpNum: "",
    nic: "",
    password: "",
    re_password: "",
  });
  const { name, email, tpNum, nic, password } = values;

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      // [event.target.name]: [event.target.value],
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const err = Regvalidation(values);
    setErrors(err);

    if (!Object.values(err).some((error) => error)) {
      try {
        const body = { name, email, tpNum, nic, password };

        const response = await fetch(
          "http://localhost:5000/edugo/user/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          }
        );

        if (response.status === 401) {
          toast.error("User Already Exists!");
          // errors.email = "User Already Exists";
          // alert("already exists");
        } else {
          console.log(response);
          // toast.success("Registration Successfull!");
          navigate("/login");
        }
      } catch (err) {
        console.error(err.message);
      }
    }
  };
  
  return (

    <div className="bg-[#f0f0f0] h-screen grid grid-cols-2">
      <div className="leftSide">
        <div>
          <img src={logo} alt="logo" className="mt-3 ml-4 w-20 " />
        </div>
        <div>
          <img
            src={img}
            alt="img"
            className="p-12 w-full h-auto max-w-80 mx-auto"
          />
        </div>
      </div>
      <div className="rightSide flex justify-center items-center bg-[#f0f0f0] h-screen">
        <div className="bg-[#f0f0f0] p-4 w-[500px] rounded-lg relative">
          <div className="text-orange flex items-center justify-center my-5 pb-5 font-bold w-full text-5xl">
            Hello Parents!
          </div>
          <form action="" onSubmit={handleSubmit}>
            <ToastContainer />
            <div className="mb-4 relative">
              <input
                className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                type="name"
                name="name"
                placeholder="Enter your Name"
                onChange={handleInput}
              />
              {errors.name && (
                <span className="text-xs text-red-500">{errors.name}</span>
              )}
            </div>
            <div className="mb-4 relative">
              <input
                className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                type="email"
                name="email"
                placeholder="Enter your Email"
                onChange={handleInput}
              />
              {errors.email && (
                <span className="text-xs text-red-500">{errors.email}</span>
              )}
            </div>
            <div className="mb-4 relative">
              <input
                className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                type="number"
                name="tpNum"
                placeholder="Enter your Contact Number"
                onChange={handleInput}
              />
              {errors.tpNum && (
                <span className="text-xs text-red-500">{errors.tpNum}</span>
              )}
            </div>
            <div className="mb-4 relative">
              <input
                className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                type="nic"
                name="nic"
                placeholder="Enter your Nic"
                onChange={handleInput}
              />
              {errors.nic && (
                <span className="text-xs text-red-500">{errors.nic}</span>
              )}
            </div>
            <div className="mb-4 relative">
              <input
                className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleInput}
              />
              {errors.password && (
                <span className="text-xs text-red-500">{errors.password}</span>
              )}
            </div>
            <div className="mb-10 relative">
              <input
                className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                type="password"
                name="re_password"
                placeholder="Re-enter your password"
                onChange={handleInput}
              />
              {errors.re_password && (
                <span className="text-xs text-red-500">
                  {errors.re_password}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-orange text-white font-bold rounded-lg hover:bg-gray hover:text-black"
            >
              Register
            </button>
            <p className="text-xs text-gray flex justify-end mt-2 hover:underline hover:text-black">
              Terms and Conditions
            </p>
            <p className="text-sm text-center mt-3">Already Have an account?</p>
            <div className="w-full text-center py-1 text-lg text-orange  hover:text-black hover:underline">
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ParentRegister;
