import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import parentLandingPage from "../../images/parentLandingPage.png"
import perantMap from "../../images/parentMap.png"
import { NavLink } from "react-router-dom";

const ToChildrenPage = ({ path, name }) => {
  return (
      <p className="homeNavItem px-5 cursor-pointer hover:text-white transition-all ease-in-out">
      <NavLink to={path}>{name}</NavLink>
      </p>
  );
};

function Parent() {
  return (
    <div>
      <MainLayout>

        <div className="flex flex-row gap-60 justify-center">
          {/* Registerd childrern box */}
          <div className="w-1/4 bg-gray border-0 rounded-lg shadow-md p-4 mx-4 my-6">
            <h2 className="text-2xl font-bold mb-4">Registered Children</h2>
            <ul className="list-none ml-5">
              <li className="text-lg text-gray-700 p-1 ">R.B.S. Udayanga</li>
              <li className="text-lg text-gray-700 p-1">L.L.A. Hansani</li>
            </ul>
          </div>
          {/* Alert box */}
          <div className="w-1/4 bg-gray rounded-lg shadow-md p-4 mx-4 my-6">
            <h2 className="text-2xl font-bold mb-4">Alert</h2>
            <ul className="list-none ml-5">
              <li className="text-lg text-gray-700 p-1">New Message: 5</li>
              <li className="text-lg text-red-600 p-1">Payment Pending</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-40 mt-1">
          <div className="w-1/4  mt-5 relative pt-40">
            <img src={parentLandingPage} alt="parentLandingPage" />
          </div>
          <div className="w-1/2 ">
            <img src={perantMap} alt="parentMap"></img>
          </div>
        </div>
        <div>
          <ToChildrenPage path="/parent/children" name="ChildrenPage" />
        </div>
      </MainLayout>
    </div>
  );
}

export default Parent;
