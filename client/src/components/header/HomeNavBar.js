import React from "react";
import "./home_nav_bar.css";
import { NavLink } from "react-router-dom";
import { useState , useEffect} from "react";



//reusable component for homeNavbar items(without REGISTER item)
const HomeNavBarItem = ({ path, name }) => {
    return (
        <p className="homeNavItem px-5 cursor-pointer hover:text-white transition-all ease-in-out">
        <NavLink to={path}>{name}</NavLink>
        </p>
    );
};



//reusable component for homeNavbar REGISTER item
const HomeNavBarRegister = ({ name }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseClick = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const handleOutsideClick = (event) => {
        if (event.target.closest('.dropDown')) return;
        setIsDropdownOpen(false);
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);

    return (
        <div>
            <div className="homeNavItem pl-12 pr-5 cursor-pointer hover:text-white transition-all ease-in-out"
                onClick = {handleMouseClick} >
                {name}
            </div>

            {isDropdownOpen && (
                <div className="dropDown absolute flex flex-col mt-6">
                    <NavLink className="dropDownItem px-12 py-3" to="/parent/register">Parent</NavLink>
                    <NavLink className="dropDownItem px-12 py-3" to="/driver/register">Driver</NavLink>
                </div>
            )}
        </div>

    );
}



//main homeNavbar function
function HomeNavBar() {
  return (
    <div className="homeNavBar p-6 sticky flex flex-row gap-3 justify-between items-center">

      <div>
        <img src="../../images/logo.png" alt="logo" />
      </div>

      <div className="homeNavItems flex flex-row">
        <div>
            <HomeNavBarRegister path="/register" name="Register" />
        </div>
        <HomeNavBarItem path="/login" name="Login" />
        <HomeNavBarItem name="Contact" />
        <HomeNavBarItem name="About" />
        <HomeNavBarItem name="Service" />
      </div>

    </div>
  );
}

export default HomeNavBar;
