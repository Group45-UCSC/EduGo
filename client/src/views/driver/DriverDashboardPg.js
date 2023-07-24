import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/driver/dashboard", icon: <FaBeer /> },
  { title: "School Ride", path: "/driver/ride", icon: <FaBeer /> },
  { title: "Finance", path: "/driver/finance", icon: <FaBeer /> },
  { title: "Support", path: "/driver/support", icon: <FaBeer /> },
  { title: "Feedback", path: "/driver/feedback", icon: <FaBeer /> },
];

function DriverDashboardPg() {

  const [modalOpen, setModalOpen] = useState(false);
  // Add children model load
  function Modal({ setOpenModal }) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-stone-900/75 flex justify-center items-center">
        <div className="w-80 h-80 rounded-lg bg-white shadow-md flex flex-col p-5 ">
          <div className="flex justify-end">
            <button className="text-2xl cursor-pointer "
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="inline-block text-center mt-2">
            <h1>Are You Sure You Want to Continue?</h1>
          </div>
          <div className="flex flex-col justify-center items-center text-2xl">
            <p>The next page looks amazing. Hope you want to go there!</p>
          </div>
          <div className="flex justify-center items-center mt-5">
            <button className="w-36 h-12 mr-2 bg-orange rounded-lg text-xl cursor-pointer"
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button className="w-36 h-12 bg-orange rounded-lg text-xl cursor-pointer">Continue</button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="w-full flex items-center flex-col font-nunito">
          <h1>Hey, click on the button to open the modal.</h1>
          <button
            className="openModalBtn w-48 h-10 bg-orange rounded-md cursor-pointer"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Add Children
          </button>

          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
      </MainLayout>
    </div>
  );
}

export default DriverDashboardPg;
