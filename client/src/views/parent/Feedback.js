import { useState, useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard } from "react-icons/ai";
import { FaStar, FaChild } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import logo_old from "../../images/logo_old.png";
import swal from "sweetalert";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};
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

function Feedback() {
  const [values, setValues] = useState({
    feedback_msg: "",
    edugo_feedback_msg: "",
  });

  const { feedback_msg, edugo_feedback_msg } = values;

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  //user id
  const userId = localStorage.getItem("userId");

  
  //View driver list
  const [drivers, setDrivers] = useState([]); // State to store drivers list
  const [selectedDriver, setSelectedDriver] = useState(""); // State to store selected driver's ID
  
  // submit driver feedback
  const handleSubmit1 = async (event) => {
    event.preventDefault();

    try {
      const body = { feedback_msg, currentValue, selectedDriver };

      const response = await fetch(
        `http://localhost:5000/edugo/parent/feedback/add/${userId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      if (response.status === 200) {
        swal({
          title: "Your Feedback Submitted!",
          icon: "success",
          buttons: {
            confirm: {
              className:
                "bg-orange text-white px-10 py-2 rounded-lg items-center hover:bg-gray ",
            },
          },
        }).then(() => {
          console.log(response);
        });
      } else {
        console.log(response);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  //submit edugo feedback
  const handleSubmit2 = async (event) => {
    event.preventDefault();

    try {
      const body = { edugo_feedback_msg, currentValue2 };

      const response = await fetch(
        `http://localhost:5000/edugo/parent/edugofeedback/add/${userId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      if (response.status === 200) {
        swal({
          title: "Your Feedback Submitted!",
          icon: "success",
          buttons: {
            confirm: {
              className:
                "bg-orange text-white px-10 py-2 rounded-lg items-center hover:bg-gray ",
            },
          },
        }).then(() => {
          console.log(response);
        });
      } else {
        console.log(response);
      }
    } catch (err) {
      console.error(err.message);
    }
  };


  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/parent/feedback/driverlist/${userId}`
        );         
        const data = await response.json();
        setDrivers(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchDrivers();
  }, [userId]);

  //----------Driver rating stars
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  //----------Edugo Rating Stars
  const [currentValue2, setCurrentValue2] = useState(0);
  const [hoverValue2, setHoverValue2] = useState(undefined);
  const stars2 = Array(5).fill(0);

  const handleClick2 = (value) => {
    setCurrentValue2(value);
  };

  const handleMouseOver2 = (newHoverValue) => {
    setHoverValue2(newHoverValue);
  };

  const handleMouseLeave2 = () => {
    setHoverValue2(undefined);
  };

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className=" px-[25px] ">
          <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
            Feedback
          </h1>
          {/* -------------Select Driver------------- */}
          <select
            name="selectedDriver"
            value={selectedDriver}
            onChange={(event) => setSelectedDriver(event.target.value)}
            className="border border-gray-200 bg-slate-100 rounded-md p-2 w-[350px]"
          >
            <option value="">Select a driver</option>
            {drivers.map((driver) => (
              <option key={driver.user_id} value={driver.user_id}>
                {driver.user_name}
              </option>
            ))}
          </select>

          <div className="grid grid-cols-2 grid-rows-1 gap-6 mt-3  ">
            {/* -----------Rate Driver--------------- */}
            <div className=" bg-slate-200 rounded-md  h-[350px] ">
              <div className="grid gap-4 p-4  mt-3">
                <div className=" h-8  flex justify-center">
                  <h1 className="text-xl font-bold">Rate your driver</h1>
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
                            color={
                              (hoverValue || currentValue) > index
                                ? colors.orange
                                : colors.grey
                            }
                            style={{
                              marginRight: 10,
                              cursor: "pointer",
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="h-full gap-2 flex flex-col items-center ml-16 justify-center">
                  <form onSubmit={handleSubmit1}>
                    <textarea
                      name="feedback_msg"
                      type="text"
                      onChange={handleInput}
                      className="border border-gray-200 bg-slate-100  rounded-md p-2 min-h-[120px] w-[350px]"
                      placeholder="What's your experience?"
                    />

                    <div className="flex justify-center w-5/6 mt-3 ">
                      <button
                        className="flex justify-center w-[420px] h-10 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out"
                        type="submit"
                      >
                        <div className="flex mt-2 gap-3 font-semibold">
                          Submit
                        </div>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="  h-[350px] ">
              <div className=" mt-8">
                <div className="">
                  <img
                    src={logo_old}
                    alt="logo"
                    className="h-[400px] mr-3"
                  ></img>
                </div>
              </div>
            </div>
            <div className="gid col-span-2 bg-slate-200 rounded-md h-[220px] px-3 py-3 mb-3">
              {/* --------Rating Stars----------- */}

              <div className=" h-16 ">
                <h3 className="">“Edugo” How supports for you ?</h3>
                <h3 className="">
                  Your valuable feedback will cause to our improvement .{" "}
                </h3>
              </div>
              <div className=" h-8 flex justify-start pl-3">
                <div style={styles.container}>
                  <div style={styles.stars}>
                    {stars2.map((_, index) => {
                      return (
                        <FaStar
                          key={index}
                          size={24}
                          onClick={() => handleClick2(index + 1)}
                          onMouseOver={() => handleMouseOver2(index + 1)}
                          onMouseLeave={handleMouseLeave2}
                          color={
                            (hoverValue2 || currentValue2) > index
                              ? colors.orange
                              : colors.grey
                          }
                          style={{
                            marginRight: 10,
                            cursor: "pointer",
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className=" h-28 p-2">
                <div className="p-4  bg-slate-200 border border-gray rounded-lg">
                  <form
                    onSubmit={handleSubmit2}
                    className="flex items-center justify-between"
                  >
                    <input
                      type="text"
                      name="edugo_feedback_msg"
                      className="form-control h-12 w-full  p-1.5 text-base text-gray-700 bg-white border-[1px] border-orange rounded focus:ring focus:ring-blue-300 focus:border-blue-500 transition-all"
                      aria-label="message…"
                      onChange={handleInput}
                      placeholder="Write message…"
                    />

                    <button
                      type="submit"
                      className="w-[150px] h-12 ml-1 bg-orange px-2 py-1.5  rounded"
                    >
                      <div className="flex justify-center gap-4">
                        <p className=" text-lg font-semibold">Send </p>
                        <BsSendFill className=" text-xl" />
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
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
};

export default Feedback;
