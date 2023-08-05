// import React from "react";
// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// // import { ToastContainer, toast } from 'react-toastify';

// function DriverRegister({ setAuth }) {
//   const [inputs, setInputs] = useState({
//     email: "",
//     password: "",
//     name: "",
//   });

//   const { email, password, name } = inputs;

//   const onChange = (e) => {
//     setInputs({ ...inputs, [e.target.name]: e.target.value });
//   };

//   const onSubmitForm = async (e) => {
//     e.preventDefault();

//     try {
//       const body = { email, password, name };

//       const response = await fetch(
//         "http://localhost:5000/edugo/user/register",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(body),
//         }
//       );

//       const parseRes = await response.json();
//       // console.log(parseRes);

//       if (parseRes.token) {
//         localStorage.setItem("token", parseRes.token);

//         setAuth(true);
//         // toast.success("Registered successfully!");
//       } else {
//         setAuth(false);
//         // toast.error(parseRes);
//       }
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   return (
//     <div>
//       Driver Register Page
//       <br></br>
//       <NavLink to="/driver/dashboard">
//         click me to go Driver landing page
//       </NavLink>
//       <form onSubmit={onSubmitForm}>
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
//         <input
//           type="text"
//           name="name"
//           placeholder="name"
//           value={name}
//           onChange={(e) => onChange(e)}
//           className="border my-3"
//         />
//         <br></br>

//         <button className="bg-orange p-4">Submit</button>
//       </form>
//       <NavLink to="/login">Login</NavLink>
//     </div>
//   );
// }

// export default DriverRegister;

import React from "react";
import { NavLink } from "react-router-dom";

function DriverRegister() {
  return (
    <div>
      Driver Register Page
      <br></br>
      <NavLink to="/driver/dashboard">
        click me to go Driver landing page
      </NavLink>
    </div>
  );
}

export default DriverRegister;
