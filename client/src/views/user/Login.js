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

import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div>
      Login Page
      <br></br>
      <NavLink to="/">Register</NavLink> <br></br>
      <NavLink to="/driver/dashboard">
        click me to go Driver landing page
      </NavLink>
      <br />
      <NavLink to="/parent/dashboard">
        click me to go Parent Agent landing page
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
      </NavLink>
    </div>
  );
}

export default Login;
