// import React, { useState } from "react";
// import ArrowImg from "../../images/arrow.png";
// import Logo from "../../images/logo.png";
// // import { NavLink } from "react-router-dom";
// import { AiOutlineHome } from "react-icons/ai";

// function SideNavBar() {
//   const [open, setOpen] = useState(true);

//   return (
//     <div className="flex border border-black">
//       <div
//         className={`${
//           open ? "w-72" : "w-20"
//         } duration-300 h-screen p-5 pt-8 bg-gray relative`}
//       >
//         <img
//           src={ArrowImg}
//           className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-b-neutral-500 ${
//             !open && "rotate-180"
//           }`}
//           onClick={() => setOpen(!open)}
//         />
//         <div className="flex gap-x-4 items-center">
//           <img src={Logo} className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
//           <h1
//             className={`text-white origin-left font-medium text-xl duration-300 ${
//               !open && "scale-0"
//             }`}
//           >
//             EduGo
//           </h1>
//         </div>
//         <ul className="pt-6">
//           {links.map((link, index) => (
//             <li key={index} className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-orange rounded-md ${index === 0 && 'bg-black'}`}>
//               <AiOutlineHome />
//               <span className={`${!open && 'hidden'} origin-left duration-200`}>{link.title}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="p-7 text-2xl font-semibold flex-1 h-screen">
//         <h1>Home</h1>
//       </div>
//     </div>
//   );
// }

// export default SideNavBar;

// import React from "react";
// import { useState } from "react";
// import ArrowImg from "../../images/arrow.png";
// import Logo from "../../images/logo.png";
// import { NavLink } from "react-router-dom";

// function SideNavBar({data}) {

//   const [open, setOpen] = useState(true);

//   return (
//       <div className={`${open? "w-[260px]" : "w-[112px]"} duration-300 h-screen p-5 pt-8 bg-gray`} >
//         <img src={ArrowImg} alt="icon" className={`absolute cursor-pointer rounded-full -right-3 top-3 w-7 border-2 ${!open && "rotate-180"} `} onClick={() => setOpen(!open)}
//         />
//         <div className="flex gap-x-4 items-center">
//           <img src={Logo} alt="logo" className={`cursor-pointer duration-300 scale-75 ${!open && "scale-100 mb-7"}` } />
//         </div>

//         <div className="pt-7">
//         {data.map((link, index) => (

//             <NavLink key={index} to={link.path} className={`text-black text-m flex items-center gap-x-7 cursor-pointer p-2 hover:bg-black hover:text-white border-2 border-black rounded-md bg-orange my-10 ${!open && 'p-4 mt-17 pl-7'}`}>
//             {link.icon}
//             <span className={`${!open && 'hidden'} origin-left duration-200`}>{link.title}</span>

//             </NavLink>

//           ))}
//         </div>
//       </div>
//   );
// }

// export default SideNavBar;

// import React, { useState } from "react";
// import ArrowImg from "../../images/arrow.png";
// import Logo from "../../images/logo.png";
// import { NavLink } from "react-router-dom";
// import { CiLogout } from "react-icons/ci";

// function SideNavBar({ data, open, setOpen }) {
//   const [activeLink, setActiveLink] = useState(null);

//   const handleNavLinkClick = (index) => {
//     setActiveLink(index === activeLink ? null : index);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('userName'); // Remove the userName from localStorage
//     localStorage.removeItem('userId');
//   };

//   return (
//     <div
//       className={`${
//         open ? "w-[260px]" : "w-[100px]"
//       } duration-300 h-screen p-5 pt-4 bg-gray`}
//     >
//       <img
//         src={ArrowImg}
//         alt="icon"
//         className={`absolute cursor-pointer rounded-full -right-3 top-3 w-7 border-2 ${
//           !open && "rotate-180"
//         }`}
//         onClick={() => setOpen(!open)}
//       />
//       <div className="flex gap-x-4 items-center">
//         <img
//           src={Logo}
//           alt="logo"
//           className={`cursor-pointer mb-0 pb-0 duration-300 scale-75 ${
//             !open && "scale-100 mb-7"
//           }`}
//         />
//       </div>
//       <div className="pt-2">
//         {data.map((link, index) => (
//           <NavLink
//             key={index}
//             to={link.path}
//             exact
//             onClick={() => handleNavLinkClick(index)}
//             className={`text-black text-m flex items-center gap-x-7 cursor-pointer p-2 hover:bg-black hover:text-white border border-black rounded-md my-10 ${
//               !open && "p-4 mt-17 pl-5"
//             } ${activeLink === index ? "bg-black text-white" : "bg-orange"}`}
//           >
//             {link.icon}
//             <span className={`${!open && "hidden"} origin-left duration-200`}>
//               {link.title}
//             </span>
//           </NavLink>
//         ))}
//       </div>
//       <div className=" flex justify-center pt-5">
//       <NavLink to="/login">
//       <CiLogout onClick={handleLogout} className="text-black text-[30px] scale-150 font-bold  "/></NavLink></div></div>
//   );
// }

// export default SideNavBar;

import React, { useContext, useState } from "react";
import ArrowImg from "../../images/arrow.png";
import Logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { AuthContext } from "../../context/AuthContext";

function SideNavBar({ data, open, setOpen }) {
  const [activeLink, setActiveLink] = useState(null);

  const handleNavLinkClick = (index) => {
    setActiveLink(index === activeLink ? null : index);
  };

  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("userName"); // Remove the userName from localStorage
    localStorage.removeItem("userId");
  };

  return (
    <div
      className={`${
        open ? "w-[260px]" : "w-[100px]"
      } duration-300 h-screen p-5 pt-4 bg-gray`}
    >
      <img
        src={ArrowImg}
        alt="icon"
        className={`absolute cursor-pointer rounded-full -right-3 top-3 w-7 border-2 ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src={Logo}
          alt="logo"
          className={`cursor-pointer mb-0 pb-0 duration-300 scale-75 ${
            !open && "scale-100 mb-7"
          }`}
        />
      </div>
      <div className="pt-2">
        {data.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            exact
            onClick={() => handleNavLinkClick(index)}
            className={`text-black text-m flex items-center gap-x-7 cursor-pointer p-2 hover:bg-black hover:text-white border border-black rounded-md my-10 ${
              !open && "p-4 mt-17 pl-5"
            } ${activeLink === index ? "bg-black text-white" : "bg-orange"}`}
          >
            {link.icon}
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {link.title}
            </span>
          </NavLink>
        ))}
      </div>
      <div className=" flex justify-center pt-5">
        <NavLink to="/login">
          <CiLogout
            onClick={handleLogout}
            className="text-black text-[30px] scale-150 font-bold  "
          />
        </NavLink>
      </div>
    </div>
  );
}

export default SideNavBar;
