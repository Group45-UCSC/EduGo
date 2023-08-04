import { FaRegBell } from "react-icons/fa";
import user from "../../images/user.png";
// import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";

// const NavbarItem = ({ path, name }) => {
//     return (
//         <p className='px-5 cursor-pointer hover:text-gray-500 transition-all ease-in-out'>
//             <NavLink to={path} >{name}</NavLink>
//         </p>
//     )
// }

function TopNavBar() {
  return (
    <div className="w-full p-4 text-black bg-white sticky flex flex-row gap-3 justify-between items-center shadow-md">
      <div></div>

      <div className="flex item-center relative flex-row gap-6">
        <FaRegBell className="mt-[6px]"></FaRegBell>
        <p>User Name</p>
        <div>
          <NavLink to="/user/profile">
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
