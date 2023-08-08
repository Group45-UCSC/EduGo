import React, { useState } from "react";
import { AiFillDashboard } from "react-icons/ai"
import { FaChild } from "react-icons/fa"
import { MdPayments, MdSupportAgent, MdOutlineRateReview } from "react-icons/md";
import MainLayout from '../../components/layout/MainLayout';


function ViewVehicle() {
    const sideNavBarLinks = [
        { title: "Dashboard", path: "/parent/dashboard", icon: <AiFillDashboard /> },
        { title: "Children", path: "/parent/children", icon: <FaChild /> },
        { title: "Payment", path: "/parent/payment", icon: <MdPayments /> },
        { title: "Support", path: "/parent/support", icon: <MdSupportAgent /> },
        { title: "Feedback", path: "/parent/feedback", icon: <MdOutlineRateReview /> },
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const [modalOpen, setModalOpen] = useState(false);
    function Modal({ setOpenModal }) {
        return (
            <div>
                <form className="bg-white p-0 px-60 rounded-lg " onSubmit={handleSubmit} >
                    <div className="fixed top-0 left-0 w-screen  bg-stone-900/75 flex justify-center items-center  h-screen bg-gradient-to-b from-opacity-70 to-opacity-30">

                        <div className="w-1/3  rounded-lg bg-white shadow-md flex flex-col p-5 ">
                            <div className="flex justify-end">
                                <button className="text-2xl cursor-pointer "
                                    onClick={() => {
                                        setOpenModal(false);
                                       
                                    }}
                                >
                                    X
                                </button>
                            </div>
                            <div className="" >

                                <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer text-center">Register</h1>




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
                                <button className="w-36 h-12 bg-orange rounded-lg text-xl cursor-pointer">Submit</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
    return (
        <div>
            <MainLayout data={sideNavBarLinks}>
                <div className="pt-6 px-6">
                    <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
                        Vehicle Review
                    </h1>
                    <div className='mt-[25px] pb-[15px]'>
                        <div className="flex justify-end w-5/6 ml-24 mb-4">
                            <button
                                className="flex justify-center w-56 h-10 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                                onClick={() => {
                                    setModalOpen(true);
                                }}
                            >
                                <div className="flex mt-2 gap-3 font-semibold">

                                    Add New Children
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                {modalOpen && <Modal setOpenModal={setModalOpen} />}
            </MainLayout>
        </div>
    )
}

export default ViewVehicle