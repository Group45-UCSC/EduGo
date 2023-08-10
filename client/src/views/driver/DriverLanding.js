import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import schoolbusImg from "../../images/schoolBus.jpg";
import { AiFillDashboard, AiFillCar } from "react-icons/ai";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/driver/dashboard", icon: <AiFillDashboard /> },
  { title: "School Ride", path: "/driver/ride", icon: <AiFillCar /> },
  { title: "Finance", path: "/driver/finance", icon: <MdPayments /> },
  { title: "Support", path: "/driver/support", icon: <MdSupportAgent /> },
  {
    title: "Feedback",
    path: "/driver/feedback",
    icon: <MdOutlineRateReview />,
  },
];

function DriverLanding() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    tpNum: "",
    nic: "",
    password: "",
    re_password: "",
  });
  //   const { name, email, tpNum, nic, password } = values;

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      // [event.target.name]: [event.target.value],
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //     const err = Regvalidation(values);
    //     setErrors(err);

    //     if (!Object.values(err).some((error) => error)) {
    //       try {
    //         const body = { name, email, tpNum, nic, password };

    //         const response = await fetch(
    //           "http://localhost:5000/edugo/user/register",
    //           {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(body),
    //           }
    //         );

    //         if (response.status === 401) {
    //           toast.error("User Already Exists!");
    //           // errors.email = "User Already Exists";
    //           // alert("already exists");
    //         } else {
    //           console.log(response);
    //           // toast.success("Registration Successfull!");
    //           navigate("/login");
    //         }
    //       } catch (err) {
    //         console.error(err.message);
    //       }
    //     }
  };

  //popup modal for school ride registration
  const [modalOpen1, setModalOpen1] = useState(false);
  function Modal1({ setModalOpen1 }) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-stone-900/75 flex justify-center items-center">
        <div className="w-[55%] h-[75%] rounded-lg bg-white shadow-md flex flex-col p-5 ">
          <div className="flex justify-between items-center p-4">
            <div className="text-center flex-grow">Add your vehicle</div>
            <div className="ml-auto">
              <button
                className="text-2xl cursor-pointer "
                onClick={() => {
                  setModalOpen1(false);
                }}
              >
                X
              </button>
            </div>
          </div>
          <form action="" onSubmit={handleSubmit}>
            {/* <ToastContainer /> */}
            <div className="mb-4 relative">
              <input
                className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                type="name"
                name="name"
                placeholder="Enter your Vehicle number"
                onChange={handleInput}
              />
              {errors.name && (
                <span className="text-xs text-red-500">{errors.name}</span>
              )}
            </div>
            <div className="mb-4 relative">
              <input
                className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                type="email"
                name="email"
                placeholder="Enter your Vehicle type"
                onChange={handleInput}
              />
              {errors.email && (
                <span className="text-xs text-red-500">{errors.email}</span>
              )}
            </div>
            <div className="mb-4 relative">
              <input
                className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                type="number"
                name="tpNum"
                placeholder="Enter your Vehicle model"
                onChange={handleInput}
              />
              {errors.tpNum && (
                <span className="text-xs text-red-500">{errors.tpNum}</span>
              )}
            </div>
            <div className="mb-4 relative">
              <input
                className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                type="nic"
                name="nic"
                placeholder="Enter your ride registraation number"
                onChange={handleInput}
              />
              {errors.nic && (
                <span className="text-xs text-red-500">{errors.nic}</span>
              )}
            </div>
            <div className="mb-4 relative">
              <input
                className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                type="password"
                name="password"
                placeholder="Add your Vehicle Registration Certificate"
                onChange={handleInput}
              />
              {errors.password && (
                <span className="text-xs text-red-500">{errors.password}</span>
              )}
            </div>
            <div className="mb-10 relative">
              <input
                className="w-full px-3 py-1 border-b bg-[#f0f0f0] border-orange focus:border-gray outline-none"
                type="password"
                name="re_password"
                placeholder="Add your vehicle Images"
                onChange={handleInput}
              />
              {errors.re_password && (
                <span className="text-xs text-red-500">
                  {errors.re_password}
                </span>
              )}
            </div>

            <div className="flex justify-center items-center mt-5">
              <button
                className="w-36 h-12 mr-2 bg-orange rounded-lg text-xl cursor-pointer"
                onClick={() => {
                  setModalOpen1(false);
                }}
                id="cancelBtn"
              >
                Cancel
              </button>
              <button type="submit"
                onClick={() => {
                  setModalOpen1(false);
                }}
                id="cancelBtn"
                className="w-36 h-12 bg-orange rounded-lg text-xl cursor-pointer"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className=" grid grid-cols-2 mb-5">
          {/* left column */}
          <div className="leftside bg-white">
            <img src={schoolbusImg} alt="img" className="ml-4 w-full" />
          </div>
          {/* end of left column */}
          {/* right column */}
          <div className="rightside mt-12">
            {/* text section */}
            <div className="w-full h-3/5 p-10 text-center">
              <h1 className="text-orange text-4xl mb-3 leading-15 ">
                Welcome to the Edugo!{" "}
              </h1>
              <br></br>
              <div className="text-[#5a5c69] text-2xl mt-4">
                Begin your career as a Edugo Driver and enjoy best school hiring
                experience with awesome income.
              </div>
              <br></br>
              <div className="text-[#5a5c69] text-lg mt-5">
                So, Hurry up to add your ride now!
              </div>
            </div>
            {/* end of text section */}
            {/* button section */}
            <div className="w-full h-2/5 flex justify-center">
              <button
                onClick={() => {
                  setModalOpen1(true);
                }}
                className="flex justify-center w-80 h-12 mt-12 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
              >
                <div className="flex py-3 gap-3 font-semibold">
                  Add School Ride
                </div>
              </button>
              {modalOpen1 && <Modal1 setModalOpen1={setModalOpen1} />}
            </div>
            {/* end of button section */}
          </div>
          {/* end of right column */}
        </div>
      </MainLayout>
    </div>
  );
}

export default DriverLanding;
