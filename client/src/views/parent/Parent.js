import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
import MainLayout from "../../components/layout/MainLayout";
import { FaEnvelope, FaRegCalendarMinus, FaChild } from "react-icons/fa";
import {
  MdOutlineCrisisAlert,
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import { AiFillDashboard } from "react-icons/ai";
import parentMap from "../../images/parentMap.png";
import parentLandingPage from "../../images/parentLandingPage.png";
// import { useNavigate } from "react-router-dom";

function Parent() {
  const sideNavBarLinks = [
    {
      title: "Dashboard",
      path: "/parent/dashboard",
      icon: <AiFillDashboard />,
    },
    { title: "Children", path: "/parent/children", icon: <FaChild /> },
    { title: "Payment", path: "/parent/payment", icon: <MdPayments /> },
    { title: "Support", path: "/parent/support", icon: <MdSupportAgent /> },
    {
      title: "Feedback",
      path: "/parent/feedback",
      icon: <MdOutlineRateReview />,
    },
  ];

  // const navigate = useNavigate();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [username, setUsername] = useState("");

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/edugo/user/isAuth", {
  //         method: "GET",
  //         credentials: "include", // This sends cookies along with the request
  //       });

  //       const data = await response.json();
  //       // console.log(data);
  //       if (response.status === 200) {  //&& data.valid
  //         setIsAuthenticated(true);
  //         setUsername(data.username);
  //       } else {
  //         // navigate("/login");
  //       }
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   };

  //   checkAuth();
  // }, [navigate]);

  // if (!isAuthenticated) {
  //   return <div>Loading...</div>;
  // }

  // const [name, setName] = useState("");
  // const navigate = useNavigate();

  // axios.defaults.withCredentials = true;

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/edugo/user/isAuth")
  //     .then((res) => {
  //       if (res.data.valid) {
  //         setName(res.data.username);
  //       } else {
  //         navigate("/login");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // });

  // useEffect(() => {
  //   const response = fetch("http://localhost:5000/edugo/user/isAuth", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   });

  //   if (response.data.valid) {
  //     setName(response.data.username);
  //   } else {
  //     navigate("/login");
  //   }

  //   console.log(response);
  // }, []);

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="pt-6 px-6">
          <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
            Dashboard
          </h1>

          <div className="grid grid-cols-2 gap-[150px] mt-[25px] pb-[15px]">
            {/* Registered Children */}
            <div className=" h-[110px] rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
              <div>
                <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px] pb-1">
                  Registered Children
                </h1>
                <h2 className="text-[#B589DF] text-[12px] leading-[17px] font-bold">
                  R.B.S. Udayanga
                </h2>
                <h2 className="text-[#B589DF] text-[12px] leading-[17px] font-bold">
                  L.L.A. Hansani
                </h2>
              </div>
              <FaRegCalendarMinus fontSize={28} color="" />
            </div>
            {/* Alerts */}
            <div className=" h-[110px] rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
              <div>
                <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px] pb-1">
                  Alerts
                </h1>
                <div className="flex">
                  <h2 className="text-[#B589DF] text-[12px] leading-[17px] font-bold">
                    Message
                  </h2>
                  <FaEnvelope fontSize={20} color="" className="pl-2" />
                </div>
                <div className="flex">
                  <h2 className="text-[#c91c28] text-[12px] leading-[17px] font-bold">
                    Payment pending
                  </h2>
                  <MdOutlineCrisisAlert
                    fontSize={20}
                    color=""
                    className="pl-1"
                  />
                </div>
              </div>
              <FaRegCalendarMinus fontSize={28} color="" />
            </div>
          </div>

          <div className="flex mt-[22px] w-full gap-[30px] pb-10 border-t pt-6">
            <div className="basis-2/3 w-1/2 border-l-4 border-orange shadow-lg cursor-pointer rounded-[4px]">
              <div className="bg-white flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px] rounded-[4px]">
                <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
                  Ongoing Location
                </h2>
              </div>
              <div className="w-full">
                <img src={parentMap} alt="map"></img>
              </div>
            </div>
            <div className="basis-1/3  cursor-pointer rounded-[4px] ">
              <div className="w-full my-40">
                <img
                  src={parentLandingPage}
                  alt="parentLandingPage"
                  className="w-full"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Parent;
