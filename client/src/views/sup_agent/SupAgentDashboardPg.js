import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaHome, FaBus, FaUsers, FaSearch } from "react-icons/fa";
import sup_agent from "../../images/sup_agent.png";
import Chat from "../../components/chat/chat";
const sideNavBarLinks = [
  { title: "Dashboard", path: "/sup_agent/dashboard", icon: <FaHome /> },
  { title: "Parents", path: "/sup_agent/parents", icon: <FaBus /> },
  { title: "Drivers", path: "/sup_agent/drivers", icon: <FaUsers /> },
];

function SupAgentDashboardPg() {
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="grid grid-cols-2 gap-8 pt-5 pr-5 z-20">
          <div className="w-[45rem] m-5 pt-16 justify-items-center">
            <img
              className="w-full object-cover"
              src={sup_agent}
              alt="supAgent"
            ></img>
          </div>
          <div className=" bg-gradient-to-tr from-orange w-[45rem] h-[45rem] rounded-xl m-5 p-8 justify-items-center">
            <div className="grid justify-items-center w-3/4 ">
              <div className="relative flex-1">
                <input
                  type="text"
                  className=" bg-transparent px-5 py-2 border-2 border-gray rounded-full  outline-none pr-10 placeholder-black placeholder-opacity-75 focus:border-black"
                  placeholder="Search Here..."
                  name="search"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pt-4">
                  <svg className="h-8 w-8" viewBox="0 0 20 20">
                    <FaSearch />
                  </svg>
                </span>
              </div>
            </div>
            <Chat />
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default SupAgentDashboardPg;
