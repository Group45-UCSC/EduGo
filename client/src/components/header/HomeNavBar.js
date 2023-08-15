import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
// import { useState , useEffect} from "react";
import Logo from "../../images/logo.png";



//reusable component for homeNavbar items(without REGISTER item)
const HomeNavBarItem = ({ to, name }) => {
    return (
      <p className="homeNavItem px-5 cursor-pointer transition-all ease-in-out hover:text-orange">
        <Link to={to} smooth={true} duration={500}>
          {name}
        </Link>
    </p>
    );
};



//reusable component for homeNavbar REGISTER item
// const HomeNavBarRegister = ({ name }) => {

//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     const handleMouseClick = () => {
//         setIsDropdownOpen(!isDropdownOpen)
//     }

//     const handleOutsideClick = (event) => {
//         if (event.target.closest('.dropDown')) return;
//         setIsDropdownOpen(false);
//       };
    
//       useEffect(() => {
//         document.addEventListener('mousedown', handleOutsideClick);
//         return () => {
//           document.removeEventListener('mousedown', handleOutsideClick);
//         };
//       }, []);

//     return (
//         <div>
//             <div className="homeNavItem pl-12 pr-5 cursor-pointer hover:text-white transition-all ease-in-out"
//                 onClick = {handleMouseClick} >
//                 {name}
//             </div>

//             {isDropdownOpen && (
//                 <div className="dropDown absolute flex flex-col mt-6">
//                     <NavLink className="dropDownItem px-12 py-3 bg-gray hover:bg-black hover:text-white" to="/parent/register">Parent</NavLink>
//                     <NavLink className="dropDownItem px-12 py-3 bg-gray hover:bg-black hover:text-white" to="/driver/register">Driver</NavLink>
//                 </div>
//             )}
//         </div>

//     );
// }



//main homeNavbar function
function HomeNavBar() {
  return (
    <div className="homeNavBar w-full bg-transparent text-white p-6 fixed flex flex-row gap-3 justify-between items-center" 
    style={{
      top: "0",
      zIndex: "100",
    }}>

      <div>
        <img src={Logo} alt="logo" className="h-8 mr-2"/>
        
      </div>

      <div className="homeNavItems flex flex-row float-right">
        <HomeNavBarItem to="section1" name="Home" />
        <HomeNavBarItem to="section2" name="Services" />
        <HomeNavBarItem to="section3" name="About" />
        <HomeNavBarItem to="section4" name="Contact" />
        <HomeNavBarItem to="section5" name="Register" />
        <NavLink to="/login" className="homeNavItem px-5 cursor-pointer hover:text-orange transition-all ease-in-out">
          Login
        </NavLink>
        {/* <div>
            <HomeNavBarRegister path="/register" name="Register" />
        </div> */}
      </div>

    </div>
  );
}

export default HomeNavBar;
