// import React from "react";
// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Login({ setAuth }) {
//   const [inputs, setInputs] = useState({
//     email: "",
//     password: "",
//   });

//   const { email, password } = inputs;

//   const onChange = (e) => {
//     setInputs({ ...inputs, [e.target.name]: e.target.value });
//   };

//   const onSubmitForm = async (e) => {
//     e.preventDefault();

//     try {
//       const body = { email, password };

//       const response = await fetch("http://localhost:5000/edugo/user/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });

//       const parseRes = await response.json();
//       // console.log(parseRes);

//       if (parseRes.token) {
//         localStorage.setItem("token", parseRes.token);

//         setAuth(true);
//         toast.success("login successfully!");
//         // <ToastContainer />
//       } else {
//         setAuth(false);
//         // toast.error(parseRes)
//       }
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   return (
//     <div>
//       Login Page
//       <br></br>
//       <form onSubmit={onSubmitForm}>
//         <ToastContainer />
//         <input
//           type="email"
//           name="email"
//           placeholder="email"
//           value={email}
//           onChange={(e) => onChange(e)}
//           className="border my-3"
//         />
//         <br></br>
//         <input
//           type="password"
//           name="password"
//           placeholder="password"
//           value={password}
//           onChange={(e) => onChange(e)}
//           className="border my-3"
//         />
//         <br></br>
//         <button className="bg-orange p-4">Submit</button>
//       </form>
//       <br></br>
//       <NavLink to="/">Register</NavLink> <br></br>
//       <NavLink to="/driver/dashboard">
//         click me to go Driver landing page
//       </NavLink>
//       <br />
//       <NavLink to="/parent/dashboard">
//         click me to go Parent Agent landing page
//       </NavLink>
//       <br />
//       <NavLink to="/admin/dashboard">click me to go Admin landing page</NavLink>
//       <br />
//       <NavLink to="/sup_agent/dashboard">
//         click me to go Support Agent landing page
//       </NavLink>
//       <br />
//       <NavLink to="/vc/dashboard">
//         click me to go Vehicle Coordinator landing page
//       </NavLink>
//     </div>
//   );
// }

// export default Login;

// import React from "react";
// import { NavLink } from "react-router-dom";

// function Login() {
//   return (
//     <div>
//       Login Page
//       <br></br>
//       <NavLink to="/">Register</NavLink> <br></br>
//       <NavLink to="/driver/dashboard">
//         click me to go Driver landing page
//       </NavLink>
//       <br />
//       <NavLink to="/parent/dashboard">
//         click me to go Parent landing page
//       </NavLink>
//       <br />
//       <NavLink to="/admin/dashboard">click me to go Admin landing page</NavLink>
//       <br />
//       <NavLink to="/sup_agent/dashboard">
//         click me to go Support Agent landing page
//       </NavLink>
//       <br />
//       <NavLink to="/vc/dashboard">
//         click me to go Vehicle Coordinator landing page
//       </NavLink>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import img from "../../images/loginImage.jpg";
import logo from "../../images/logo.png";
import { FaUser, FaLock } from "react-icons/fa";
import LoginValidation from "./LoginValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { email, password } = values;

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      // [event.target.name]: [event.target.value],
      [event.target.name]: event.target.value,
    }));
  };

  // axios.defaults.withCredentials = true;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const err = LoginValidation(values);
    setErrors(err);

    if (!Object.values(err).some((error) => error)) {
      try {
        const body = { email, password };

        const response = await fetch("http://localhost:5000/edugo/user/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        if (response.status === 401) {
          toast.error("User Not Found!");
        } else if (response.status === 402) {
          toast.error("Incorrect Password!");
        } else {
          //if(res.data.Login)
          console.log(response);
          navigate("/driver/landing");
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
        <div className="bg-[#f0f0f0] p-8 w-[500px] rounded-lg relative">
          <div className="text-orange flex items-center justify-center mb-10 pb-10 font-bold w-full text-5xl">
            Welcome to Edugo
          </div>
          <form action="" onSubmit={handleSubmit}>
            <ToastContainer />
            <div className="mb-10 relative">
              <div className="flex items-center">
                <FaUser className="text-orange mr-2" />
                <input
                  className="w-full px-3 py-3 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleInput}
                />
              </div>
              {errors.email && (
                <span className="text-xs text-red-500">{errors.email}</span>
              )}
            </div>
            <div className="mb-1 relative">
              <div className="flex items-center">
                <FaLock className="text-orange mr-2" />
                <input
                  className="w-full px-3 py-3 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleInput}
                />
              </div>
              {errors.password && (
                <span className="text-xs text-red-500">{errors.password}</span>
              )}
            </div>
            <div className="flex justify-end mt-2 mb-12">
              <button className="text-orange  hover:text-black">
                Forgot Password
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-orange text-white font-bold rounded-lg hover:bg-gray hover:text-black"
            >
              Login
            </button>
            <p className="text-sm text-center mt-8">
              Don't have an account yet?
            </p>
            <div className="w-full text-center py-3 text-orange  hover:text-black hover:underline">
              <Link to="/driver/register">Create Account</Link>
            </div>
          </form>
        </div>
      </div>
      {/* <br></br>
      <NavLink to="/">Register</NavLink> <br></br>
      <NavLink to="/driver/dashboard">
        click me to go Driver landing page
      </NavLink>
      <br />
      <NavLink to="/parent/dashboard">
        click me to go Parent landing page
      </NavLink>
      <br />
      <NavLink to="/admin/dashboard">click me to go Admin landing page</NavLink>
      <br />
      <NavLink to="/sup_agent/dashboard">
        click me to go Support Agent landing page
      </NavLink>
      <br />
      <NavLink to="/vc/dashboard">
        click me to go Vehicle Coordinator landing page
      </NavLink> */}
    </div>
  );
}

export default Login;
