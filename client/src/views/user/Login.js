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

import React from "react";
import img from "../../images/loginImage.jpg";
import logo from "../../images/logo.png";
import { FaUser, FaLock } from "react-icons/fa";

// function Login() {
//   return (
//     <div className="bg-[#f0f0f0] h-screen grid grid-cols-2">
//       <div className="">
//         <img src={img} alt="img" />
//       </div>
//       <div className="flex justify-center items-center">
//         <div className="bg-orange p-20 h-[80vh] w-[500px] rounded-lg relative">
//           <form action="">
//             <div className="mb-10 relative">
//               {/* <label className='text-black font-bold mb-2 absolute -top-3 left-2' htmlFor="email">Email</label> */}
//               <input
//                 className="w-full px-3 py-3 border-none rounded focus:outline-gray"
//                 type="email"
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div className="mb-1 relative">
//               {/* <label className='text-black font-bold mb-2 absolute -top-3 left-2' htmlFor="password">Password</label> */}
//               <input
//                 className="w-full px-3 py-3 border-none rounded focus:outline-gray"
//                 type="password"
//                 placeholder="Enter your password"
//               />
//             </div>
//             <div className="flex justify-end mt-2 mb-10">
//               <button>Forgot Password</button>
//             </div>
//             <button className="w-full py-3 bg-gray text-white font-bold rounded">
//               Login
//             </button>

//             <p className='text-sm text-center mt-5'>Don't have an account yet?</p>
//             <button className='w-full py-3 text-black'>Create Account</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

function Login() {
  return (
    <div className="bg-[#f0f0f0] h-screen grid grid-cols-2">
      <div className="">
        <div>
          <img src={logo} alt="logo" className="mt-3 ml-4 w-20 " />
        </div>
        <div>
          <img
            src={img}
            alt="img"
            className=" p-12 w-full h-auto max-w-80 mx-auto"
          />
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#f0f0f0] h-screen">
        <div className="bg-[#f0f0f0] p-8 w-[500px] rounded-lg relative">
        <div className="text-orange flex items-center justify-center mb-10 pb-10 font-bold w-full text-5xl">Welcome to Edugo</div>
          <form action="">
            <div className="mb-10 relative">
              <div className="flex items-center">
                <FaUser className="text-orange mr-2" />
                <input
                  className="w-full px-3 py-3 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-1 relative">
              <div className="flex items-center">
                <FaLock className="text-orange mr-2" />
                <input
                  className="w-full px-3 py-3 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="flex justify-end mt-2 mb-12">
              <button className="text-orange  hover:text-black">
                Forgot Password
              </button>
            </div>
            <button className="w-full py-3 bg-orange text-white font-bold rounded-lg hover:bg-gray hover:text-black">
              Login
            </button>
            <p className="text-sm text-center mt-8">
              Don't have an account yet?
            </p>
            <button className="w-full py-3 text-orange  hover:text-black hover:underline">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
