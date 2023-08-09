import React from "react";
import { useState } from "react";

import MainLayout from "../../components/layout/MainLayout";
import { FaStar } from "react-icons/fa";
import { BsStar, BsStarFill } from "react-icons/bs";
import { AiFillDashboard, AiFillCar } from "react-icons/ai"
import { MdPayments, MdSupportAgent, MdOutlineRateReview } from "react-icons/md";

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
  // Create Rating Stars
  function RatingStars({ rating }) {
    const filledStars = Math.floor(rating);
    const partFilledStar = filledStars + 1;

    const starFilledWidth = (starIndex) => {
      if (starIndex + 1 <= filledStars) {
        return "100%";
      } else if (
        starIndex + 1 ===
        partFilledStar
      ) {
        console.log();
        return `${Math.floor(
          (rating - filledStars) * 100
        )}%`;
      } else {
        return "0%";
      }
    };


    return (
      <div className="rating">
        {Array(5)
          .fill(0)
          .map((star, index) => (
            <div className="star"
              key={index}>
              <div
                className="starFull"
                style={{
                  width: starFilledWidth(
                    index
                  ),
                }}>
                <BsStarFill className=" text-sm" />
              </div>
              <div className="starEmpty">
                <BsStar className=" text-sm" />
              </div>
            </div>
          ))}
      </div>
    );
  }
  const reviews = [
    {
      id: 1,
      u_image: require("../../images/user.png"),
      u_name: "K.L Kumarasiri",
      rating: 3,
      review: "Saman is a very responsible and safe driver. My child enjoys the ride every day!",
    },
    {
      id: 2,
      u_image: require("../../images/user.png"),
      u_name: "M.N. Pasindu Yasith",
      rating: 4,
      review: "Saman is fantastic! She always arrives on time, and my kid feels safe and comfortable during the journey.",
    },
    {
      id: 3,
      u_image: require("../../images/user.png"),
      u_name: "M.N. Pasindu Yasith",
      rating: 2,
      review: "Saman is okay, but sometimes he's a little late. Overall, the service is satisfactory.",
    },
    {
      id: 4,
      u_image: require("../../images/user.png"),
      u_name: "M.N. Pasindu Yasith",
      rating: 4,
      review: "Saman is an amazing driver! She is patient, friendly, and goes the extra mile to ensure the children are happy.",
    },
    {
      id: 5,
      u_image: require("../../images/user.png"),
      u_name: "M.N. Pasindu Yasith",
      rating: 1,
      review: "I had a terrible experience with Saman. He drove recklessly and didn't seem to care about the safety of the children. I would not recommend her as a school driver.",
    },
    {
      id: 6,
      u_image: require("../../images/user.png"),
      u_name: "M.N. Pasindu Yasith",
      rating: 3,
      review: "Saman is fantastic! She always arrives on time",
    },
    {
      id: 7,
      u_image: require("../../images/user.png"),
      u_name: "M.N. Pasindu Yasith",
      rating: 2,
      review: "Saman is okay, but sometimes he's a little late. Overall, the service is satisfactory.",
    },
    {
      id: 8,
      u_image: require("../../images/user.png"),
      u_name: "M.N. Pasindu Yasith",
      rating: 4,
      review: "Saman is an amazing driver! He is patient, friendly, and goes the extra mile to ensure the children are happy.",
    },
  ];
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>

        <div className="mb-5 pt-[25px] px-[25px]">
          <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
            Feedback
          </h1>
          <div className="grid grid-cols-2 grid-rows-1 gap-6 mt-3 mb-3">
            {/* -----------Rate Driver--------------- */}
            <div className=" bg-slate-200 rounded-md  h-[550px]">
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
                <div className=" h-32 gap-2 flex flex-col items-center justify-center">
                  <div className=" h-20  text-slate-700  text-lg  ">
                    <h3 className="">“Edugo”  How supports for you ?</h3>
                    <h3 className="">Your valuable feedback will cause to our improvement . </h3>
                  </div>

                </div>
                <div className=" flex flex-col items-center gap-3">
                  <textarea className="border-[1px] border-orange bg-slate-100  rounded-md p-2 min-h-[180px] w-[420px]"
                    placeholder="What's your experience?" />
                  <div className="flex justify-center w-5/6 ">
                    <button className="flex justify-center w-full h-10 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                      <div className="flex mt-2 gap-3 font-semibold">Submit</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-200 border rounded-md h-[550px] ">
              <div className=" mt-8">
                <div className="h-8 mb-3 flex justify-center">
                  <h1 className="text-xl font-bold ">Driver Reviews</h1>
                </div>
                <div className=" px-3 mx-2 rounded-md h-[460px] overflow-y-auto" >
                  {reviews.map((review, index) => (
                    <div key={index} className="rounded-[8px] bg-slate-100 mb-3 mt-3  border-[1px] border-orange  items-center justify-between px-[30px] py-3 cursor-pointer hover:shadow-lg transform hover:scale-[101%] transition duration-300 ease-out">
                      <div className="flex  w-full mb-3">
                        <div className="flex justify-start gap-2 ">
                          <img src={review.u_image} alt="user_image" className="bg-slate-300 w-8 cursor-pointer rounded-full p-1"></img>
                          <h1 className="mt-1">{review.u_name}</h1>

                        </div>
                        <div className="flex justify-end mt-2  ml-auto">
                          <RatingStars rating={review.rating} />
                        </div>
                      </div>

                      <div>
                        {review.review}
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* <div className=" bg-slate-200 col-span-2 p-4 h-[200px] rounded-lg">
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
                        <p className=" text-lg font-semibold">Send </p><BsSendFill className=" text-xl" />
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div> */}
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
