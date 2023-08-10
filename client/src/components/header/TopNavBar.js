import { FaRegBell } from "react-icons/fa";
import user from "../../images/user.png";
// import { useNavigate } from 'react-router-dom';
import { NavLink, useLocation } from "react-router-dom";

// const NavbarItem = ({ path, name }) => {
//     return (
//         <p className='px-5 cursor-pointer hover:text-gray-500 transition-all ease-in-out'>
//             <NavLink to={path} >{name}</NavLink>
//         </p>
//     )
// }

function TopNavBar() {
  const location = useLocation();
  let profileLink;
  if (location.pathname.includes("/driver/")) {
    profileLink = "/driver/profile";
  } else if (location.pathname.includes("/parent/")) {
    profileLink = "/parent/profile";
  } else if (location.pathname.includes("/vc/")) {
    profileLink = "/v_coordinator/profile";
  } else if (location.pathname.includes("/sup_agent/")) {
    profileLink = "/sup_agent/profile";
  } else if (location.pathname.includes("/admin/")) {
    profileLink = "/admin/profile";
  }

  return (
    <div className="w-full p-4 text-black bg-white sticky flex flex-row gap-3 justify-between items-center shadow-md">
      <div></div>

      <div className="flex item-center relative flex-row gap-6">
        <FaRegBell className="mt-[6px]"></FaRegBell>
        <p>User Name</p>
        <div>
          <NavLink to={profileLink}>
            <img
              src={user}
              alt="user"
              className="w-8 bg-slate-300 cursor-pointer rounded-full p-1"
            ></img>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
