// import React, { useState } from "react";
// import { Link, useNavigate, NavLink } from "react-router-dom";
// import img from "../../images/loginImage.jpg";
// import logo from "../../images/logo.png";
// import { FaUser, FaLock } from "react-icons/fa";
// import LoginValidation from "./LoginValidation";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Login() {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//   });
//   const { email, password } = values;

//   const [errors, setErrors] = useState({});

//   const handleInput = (event) => {
//     setValues((prev) => ({
//       ...prev,
//       // [event.target.name]: [event.target.value],
//       [event.target.name]: event.target.value,
//     }));
//   };

//   // axios.defaults.withCredentials = true;
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const err = LoginValidation(values);
//     setErrors(err);

//     if (!Object.values(err).some((error) => error)) {
//       try {
//         const body = { email, password };

//         const response = await fetch("http://localhost:5000/edugo/user/login", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(body),
//         });

//         if (response.status === 401) {
//           toast.error("User Not Found!");
//         } else if (response.status === 402) {
//           toast.error("Incorrect Password!");
//         } else if (response.ok) {
//           const responseBody = await response.json();
//           const userRole = responseBody.role;
//           const userName = responseBody.userName;
//           const userId = responseBody.userId;

//           localStorage.setItem("userName", userName);
//           localStorage.setItem("userId", userId);

//           if (userRole === "driver") {
//             navigate("/driver/dashboard");
//           } else if (userRole === "parent") {
//             navigate("/parent/dashboard");
//           } else if (userRole === "admin") {
//             navigate("/admin/dashboard");
//           } else if (userRole === "vc") {
//             navigate("/vc/dashboard");
//           } else if (userRole === "supAgent") {
//             navigate("/sup_agent/dashboard");
//           }
//         } else {
//           //if(res.data.Login)
//           console.log(response);
//           navigate("/driver/login");
//         }
//       } catch (err) {
//         console.error(err.message);
//       }
//     }
//   };

//   return (
//     <div className="bg-[#f0f0f0] h-screen grid grid-cols-2">
//       <div className="leftSide">
//         <div>
//           <NavLink to="/">
//           <img src={logo} alt="logo" className="mt-3 ml-4 w-20 " />
//           </NavLink>
//         </div>
//         <div>

//           <img
//             src={img}
//             alt="img"
//             className="p-12 w-full h-auto max-w-80 mx-auto"
//           />
//         </div>
//       </div>
//       <div className="rightSide flex justify-center items-center bg-[#f0f0f0] h-screen">
//         <div className="bg-[#f0f0f0] p-8 w-[500px] rounded-lg relative">
//           <div className="text-orange flex items-center justify-center mb-10 pb-10 font-bold w-full text-5xl">
//             Welcome to Edugo
//           </div>
//           <form action="" onSubmit={handleSubmit}>
//             <ToastContainer />
//             <div className="mb-10 relative">
//               <div className="flex items-center">
//                 <FaUser className="text-orange mr-2" />
//                 <input
//                   className="w-full px-3 py-3 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   onChange={handleInput}
//                 />
//               </div>
//               {errors.email && (
//                 <span className="text-xs text-red-500">{errors.email}</span>
//               )}
//             </div>
//             <div className="mb-1 relative">
//               <div className="flex items-center">
//                 <FaLock className="text-orange mr-2" />
//                 <input
//                   className="w-full px-3 py-3 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
//                   type="password"
//                   name="password"
//                   placeholder="Enter your password"
//                   onChange={handleInput}
//                 />
//               </div>
//               {errors.password && (
//                 <span className="text-xs text-red-500">{errors.password}</span>
//               )}
//             </div>
//             <div className="flex justify-end mt-2 mb-12">
//               <button className="text-orange  hover:text-black">
//                 Forgot Password
//               </button>
//             </div>
//             <button
//               type="submit"
//               className="w-full py-3 bg-orange text-white font-bold rounded-lg hover:bg-gray hover:text-black"
//             >
//               Login
//             </button>
//             <p className="text-sm text-center mt-8">
//               Don't have an account yet?
//             </p>
//             <div className="w-full text-center py-3 text-orange  hover:text-black hover:underline">
//               <Link to="/driver/register">Create Account</Link>
//             </div>
//           </form>
//         </div>
//       </div>
//       {/* <br></br>
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
//       </NavLink> */}
//     </div>
//   );
// }

// export default Login;

import React, { useContext, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import img from "../../images/loginImage.jpg";
import logo from "../../images/logo.png";
import { FaUser, FaLock } from "react-icons/fa";
import LoginValidation from "./LoginValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/AuthContext";

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

  const { dispatch } = useContext(AuthContext); //?

  // axios.defaults.withCredentials = true;
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_START" }); //?
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
        } else if (response.ok) {
          const responseBody = await response.json();
          const userRole = responseBody.role;
          const userName = responseBody.userName;
          const userId = responseBody.userId;
          dispatch({ type: "LOGIN_SUCCESS", payload: responseBody.role });

          localStorage.setItem("userName", userName);
          localStorage.setItem("userId", userId);

          if (userRole === "driver") {
            navigate("/driver/dashboard");
          } else if (userRole === "parent") {
            navigate("/parent/dashboard");
          } else if (userRole === "admin") {
            navigate("/admin/dashboard");
          } else if (userRole === "vc") {
            navigate("/vc/dashboard");
          } else if (userRole === "supAgent") {
            navigate("/sup_agent/dashboard");
          }
        } else {
          //if(res.data.Login)
          console.log(response);
          navigate("/driver/login");
        }
      } catch (err) {
        console.error(err.message);
        dispatch({ type: "LOGIN_FAILURE", payload: err.response.userName }); //?
      }
    }
  };

  return (
    <div className="bg-[#f0f0f0] h-screen grid grid-cols-2">
      <div className="leftSide">
        <div>
          <NavLink to="/">
            <img src={logo} alt="logo" className="mt-3 ml-4 w-20 " />
          </NavLink>
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
