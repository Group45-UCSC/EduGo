import React, {useState} from "react";
import MainLayout from "../../components/layout/MainLayout";
import Empimg  from "../../images/empimg.png";

import { AiFillDashboard } from "react-icons/ai";
import { BsCoin } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <AiFillDashboard /> },
  { title: "Employees", path: "/admin/employees", icon: <FaUserGroup /> },
  { title: "Drivers & Vehicles", path: "/admin/drivers", icon: <BsFillCarFrontFill /> },
  { title: "School Rides", path: "/admin/rides", icon: <FaShippingFast /> },
  { title: "Children & Parents", path: "/admin/childrenlist", icon: <FaChild /> },
  { title: "Finance", path: "/admin/finance", icon: <BsCoin /> },
];

function AdminAddEmployee() {

  const [values, setValues] = useState({
    name: "",
    email: "",
    tpNum: "",
    nic: "",
    password: "",
    address: "",
    dob: "",
    role: "",
  });

  const { name, email, tpNum, nic, password, address, dob, role } = values;

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      // [event.target.name]: [event.target.value],
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
      try {
        const body = { name, email, tpNum, nic, password, address, dob, role };

        const response = await fetch(
          "http://localhost:5000/edugo/user/addemployee",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          }
        );

        if (response.status === 201) {
          console.log("User created successfully");
          // Do something here, like showing a success message to the user or redirecting.
        } else {
          console.error("Failed to create user");
        }
        
      } catch (err) {
        console.error(err.message);
      }
    
  };

  return (
    <div>
        <MainLayout data={sideNavBarLinks}>
            <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">Employee Registration</h1>

            {/* form container */}
            <div className="flex ml-24 mt-4 mb-4 h-[870px] w-[1000px] rounded-2xl shadow-lg text-white" style={{backgroundColor:'#999999'}}>

                {/* image */}
                <img src={Empimg} alt="employee" className="w-[500px] h-[500px] mt-24"></img>

                {/* form */}
                <form action="" onSubmit={handleSubmit} className="w-full mr-8 mt-12 leading-8 text-md">
                    <label for="firstname">Name : </label>
                    <input type="text" name="name" onChange={handleInput} className="ml-4 mb-4 bg-transparent border-2 w-full"></input><br />

                    <label for="email">Email : </label>
                    <input type="email" name="email" onChange={handleInput} className="ml-4 mb-4 bg-transparent border-2 w-full"></input><br />

                    <label for="password">Password : </label>
                    <input type="password" name="password" onChange={handleInput} className="ml-4 mb-4 bg-transparent border-2 w-full"></input><br />

                    <label for="nic">NIC : </label>
                    <input type="text" name="nic" onChange={handleInput} className="ml-4 mb-4 bg-transparent border-2 w-full"></input><br />

                    <label for="address">Address : </label>
                    <input type="text" name="address" onChange={handleInput} className="ml-4 mb-4 bg-transparent border-2 w-full"></input><br />
                    
                    <label for="contact">Contact : </label>
                    <input type="text" name="tpNum" onChange={handleInput} className="ml-4 mb-4 bg-transparent border-2"></input><br />

                    <label for="dob">Date of Birth : </label>
                    <input type="date" name="dob" onChange={handleInput} className="ml-4 mb-4 bg-transparent border-2"></input><br />

                    <label for="role">Recruit as : </label>
                    <select name="role" onChange={handleInput} className="ml-4 border-2" style={{backgroundColor:'#999999'}}>
                        <option>Support Agent</option>
                        <option>Vehicle Coordinator</option>
                        
                    </select><br />
                    <button type="submit" className="flex mt-8 ml-72 h-11 w-28 rounded-lg shadow-lg bg-orange font-semibold text-lg pt-2 pl-5 cursor-pointer hover:scale-[102%] hover:bg-amber-500 transition-transform ease-in-out">Confirm</button>
                </form>
            </div>
        </MainLayout>
    </div>
  )
}

export default AdminAddEmployee