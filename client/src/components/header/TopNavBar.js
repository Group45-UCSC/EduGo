import {FaBars} from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { FaRegBell } from 'react-icons/fa'
// import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavbarItem = ({ path, name }) => {
    return (
        <p className='px-5 cursor-pointer hover:text-gray-500 transition-all ease-in-out'>
            <NavLink to={path} >{name}</NavLink>
        </p>
    )
}


function ParentNavBar() {
    return (
        <div className='fixed w-full p-4 text-black bg-white flex flex-row gap-3 justify-between items-center shadow-md'>
            <FaBars></FaBars>

            <div className='flex flex-row gap-6'>
                <FaRegBell></FaRegBell>
                <FaUserAlt></FaUserAlt>
                
            </div>
        </ div>
    )
}

export default ParentNavBar 