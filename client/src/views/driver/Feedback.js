import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer, FaStar } from "react-icons/fa";
import {BsSendFill} from "react-icons/bs"
import { useState } from "react";
import logo from "../../images/logo_old.png"
import { AiFillDashboard } from "react-icons/ai"
import { MdLocationOn, MdPersonAdd, MdPayments, MdSupportAgent, MdOutlineRateReview } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/driver/dashboard", icon: <AiFillDashboard /> },
  { title: "School Ride", path: "/driver/ride", icon: <AiFillCar /> },
  { title: "Finance", path: "/driver/finance", icon: <MdPayments /> },
  { title: "Support", path: "/driver/support", icon: <MdSupportAgent /> },
  { title: "Feedback", path: "/driver/feedback", icon: <MdOutlineRateReview /> },
];

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"

};

function Feedback() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>

        <div className="pt-[25px] px-[25px]">
          <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
            Feedback
          </h1>
          <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-3">
            {/* -----------Rate Driver--------------- */}
            <div className=" bg-slate-200 rounded-md  h-[250px]">
              <div className="grid gap-4 p-6  mt-3">
                <div className=" h-8  flex justify-center">
                  <h1 className="text-xl font-bold">Rate our Service</h1>
                </div>
                {/* --------Rating Stars----------- */}
                <div className=" h-8">
                  <div style={styles.container}>
                    <div style={styles.stars}>
                      {stars.map((_, index) => {
                        return (
                          <FaStar
                            key={index}
                            size={24}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                            style={{
                              marginRight: 10,
                              cursor: "pointer"
                            }}
                          />
                        )
                      })}
                    </div>

                  </div>
                </div>
                {/* <div className="h-40 gap-2 flex flex-col items-center justify-center">
                  <textarea className="border border-gray-200 bg-slate-100  rounded-md p-2 min-h-[120px] w-[350px]"
                    placeholder="What's your experience?" />
                  <div className="flex justify-center w-5/6 ">
                    <button className="flex justify-center w-[350px] h-10 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                      <div className="flex mt-2 gap-3 font-semibold">Submit</div>
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
            <div className=" h-[300px]">
              <div>
                <img src={logo} alt="logo" className="mt-[-60px]"></img>
              </div>
            </div>
            <div className=" bg-slate-200 col-span-2 p-4 h-[200px] rounded-lg">
              <div className=" h-16 ">
                <h3 className="">“Edugo”  How supports for you ?</h3>
                <h3 className="">Your valuable feedback will cause to our improvement . </h3>
              </div>
              <div className=" h-24 p-2">
                <div className="p-4 bg-slate-200 border border-gray rounded-lg">
                  <form className="flex items-center justify-between">
                    <input
                      type="text"
                      className="form-control h-12 w-[900px] p-1.5 text-base text-gray-700 bg-white border border-slate-300 rounded focus:ring focus:ring-blue-300 focus:border-blue-500 transition-all"
                      aria-label="message…"
                      placeholder="Write message…"
                    />

                    <button type="button" className="w-[150px] h-12 ml-1 bg-orange px-2 py-1.5  rounded">
                       
                       <div className="flex justify-center gap-4">
                        <p className=" text-lg font-semibold">Send </p><BsSendFill className=" text-xl"/>
                       </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
                
      </MainLayout>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
};


export default Feedback;
