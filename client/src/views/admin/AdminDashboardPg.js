import React, { useState, useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { BsStar, BsStarFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";
import { FaBusAlt } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { BsFillExclamationOctagonFill } from "react-icons/bs";
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

function AdminDashboardPg() {

  //vehicle count
  const [vcount, setVcount] = useState([]);

  useEffect(() => {
    async function vehiCount() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/admin/dashboard/vcount`
        );
        const data = await response.json();
        setVcount(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    vehiCount();
  });

  //children
  const [childcount, setChildcount] = useState([]);

  useEffect(() => {
    async function childCount() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/admin/dashboard/childcount`
        );
        const data = await response.json();
        setChildcount(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    childCount();
  });

  //vehicle condition checks count
  const [conditioncount, setConditioncount] = useState([]);

  useEffect(() => {
    async function conditionCount() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/admin/dashboard/conditioncount`
        );
        const data = await response.json();
        setConditioncount(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    conditionCount();
  });

  //ongoing ride count
  const [rcount, setRcount] = useState([]);

  useEffect(() => {
    async function rideCount() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/admin/dashboard/rcount`
        );
        const data = await response.json();
        setRcount(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    rideCount();
  });

  const [viewPopup, setViewPopup] = useState(false);

  function showPopup() {
    setViewPopup(true);
  }

  function hidePopup() {
    setViewPopup(false);
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
      rating: 4.5,
      review: "Saman is a very responsible and safe driver. My child enjoys the ride every day!",
    },
  ];



  // review list
  const rev = [
    {
      id: "001",
      v_no: "QX-1111",
      p_id: "001",
      date: "2023/08/09",
      rate: "4.5"
    },
    {
      id: "002",
      v_no: "QX-2222",
      p_id: "002",
      date: "2023/08/09",
      rate: "3.5"
    },
  ];

  const vehicle = () => {
    window.location.href = `/admin/drivers`;
  };

  const children = () => {
    window.location.href = `/admin/childrenlist`;
  };

  const emergency = () => {
    window.location.href = `/admin/emergencylist`;
  };

  const condition = () => {
    window.location.href = `/admin/condition`;
  };

  const ride = () => {
    window.location.href = `/admin/rides`;
  };

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>

        <h1 className="text-[#5a5c69] pt-[25px] px-[25px] text-[28px] leading-8 font-normal cursor-pointer">Dashboard</h1>
        <div className='flex'>

          {/* card */}
          <div className='cardHolder h-28 w-60 rounded-md shadow-md ml-12 mt-8 flex cursor-pointer hover:scale-105 transition-transform ease-in-out' style={{ backgroundColor: '#EEEEEE' }}>

            {/* orange div */}
            <div className='flex w-2 rounded-s-lg' style={{ backgroundColor: '#FF9900' }}></div>

            {/* title and icon container */}
            <div onClick={vehicle} className='flex flex-col'>
              <div className='flex'>
                <div className='w-24 ml-4 mt-2 h-16 font-bold'>Total Vehicles</div>
                <div className='ml-16 mt-4 w-8 h-8'><FaBusAlt className='h-6 w-6' /></div>
              </div>
              {vcount.map((item, index) => (
              <span className='font-bold ml-24 text-xl'>{item.count}</span>
              ))}
            </div>
          </div>

          {/* card */}
          <div className='cardHolder h-28 w-60 rounded-md shadow-md ml-12 mt-8 flex cursor-pointer hover:scale-105 transition-transform ease-in-out' style={{ backgroundColor: '#EEEEEE' }}>

            {/* orange div */}
            <div className='flex w-2 rounded-s-lg' style={{ backgroundColor: '#FF9900' }}></div>

            {/* title and icon container */}
            <div onClick={children} className='flex flex-col'>
              <div className='flex'>
                <div className='w-24 ml-4 mt-2 h-16 font-bold'>Total Children</div>
                <div className='ml-16 mt-4 w-8 h-8'><FaChild className='h-6 w-6' /></div>
              </div>
              {childcount.map((item, index) => (
              <span className='font-bold ml-24 text-xl'>{item.count}</span>
              ))}
            </div>
          </div>

          {/* card */}
          <div className='cardHolder h-28 w-60 rounded-md shadow-md ml-12 mt-8 flex cursor-pointer hover:scale-105 transition-transform ease-in-out' style={{ backgroundColor: '#EEEEEE' }}>

            {/* orange div */}
            <div className='flex w-2 rounded-s-lg' style={{ backgroundColor: '#FF9900' }}></div>

            {/* title and icon container */}
            <div onClick={condition} className='flex flex-col'>
              <div className='flex'>
                <div className='w-24 ml-4 mt-2 h-16 font-bold'>Condition Checks</div>
                <div className='ml-16 mt-4 w-8 h-8'><FaWrench className='h-6 w-6' /></div>
              </div>
              {conditioncount.map((item, index) => (
              <span className='font-bold ml-24 text-xl'>{item.count}</span>
              ))}
            </div>
          </div>

          {/* card */}
          <div className='cardHolder h-28 w-60 rounded-md shadow-md ml-12 mt-8 flex cursor-pointer hover:scale-105 transition-transform ease-in-out' style={{ backgroundColor: '#EEEEEE' }}>

            {/* orange div */}
            <div className='flex w-2 rounded-s-lg' style={{ backgroundColor: '#FF9900' }}></div>

            {/* title and icon container */}
            <div onClick={ride} className='flex flex-col'>
              <div className='flex'>
                <div className='w-24 ml-4 mt-2 h-16 font-bold'>Ongoing Rides</div>
                <div className='ml-16 mt-4 w-8 h-8'><FaShippingFast className='h-6 w-6' /></div>
              </div>
              {rcount.map((item, index) => (
              <span className='font-bold ml-24 text-xl'>{item.count}</span>
              ))}
            </div>
          </div>
        </div>

        {/* emergencies */}
        <div onClick={emergency} className="flex mt-8 ml-12 h-11 w-44 rounded-lg shadow-lg bg-orange font-semibold text-lg pt-2 pl-5 cursor-pointer hover:scale-[102%] hover:bg-amber-500 transition-transform ease-in-out">Emergencies<BsFillExclamationOctagonFill className="mt-1 ml-4" /></div>

        {/* reviews */}
        <h3 className="text-[#5a5c69] pt-[25px] px-[25px] text-[24px] leading-8 font-normal cursor-pointer">Reviews</h3>

        {/* filter and search button */}
        <div className="flex mt-8 ml-[57%]">
          <div className="flex border border-slate-400 w-40 rounded-md h-8">
            <form action=''>
              <input type="text" placeholder='Filter here' className='overflow-auto pl-2 pt-1 w-32 bg-transparent float-left border-collapse'></input>
              < BiFilterAlt className="text-slate-400 float-right h-5 w-5 mt-1 ml-1 hover:cursor-pointer" />
            </form>
          </div>

          <div className="flex border border-slate-400 ml-8 w-52 rounded-md h-8">
            <form action=''>
              <input type="text" placeholder='Search..' className='overflow-auto pl-2 pt-1 w-44 bg-transparent float-left border-collapse'></input>
              < AiOutlineSearch className="text-slate-400 float-right h-5 w-5 mt-1 ml-1 hover:cursor-pointer" />
            </form>
          </div>
        </div>

        <div className='ml-32 mr-32 shadow-md overflow-auto '>
          <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
            <thead className='border-y-4 border-white drop-shadow '>
              <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
                <th className='px-3.5 p-1 w-24 '>Review ID</th>
                <th className='px-3.5 w-30'>Vehicle No:</th>
                <th className='px-3.5 w-30'>Parent ID:</th>
                <th className='px-3.5 w-30'>Date</th>
                <th className='px-3.5 w-30'>Rating</th>
              </tr>
            </thead>

            <tbody className=''>
              {rev.map((item) => (
                <tr onClick={showPopup} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer  hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3 ' >{item.id}</td>
                  <td>{item.v_no}</td>
                  <td>{item.p_id}</td>
                  <td>{item.date}</td>
                  <td>{item.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        {/* popup */}
        {viewPopup && (
          <div className="fixed top-0 left-0 translate-x-[-16px] w-[102.6%] h-full bg-stone-900/75">

            {/* close button */}
            <div onClick={hidePopup} className="flex w-16 h-12 bg-red-600 float-right mr-16 mt-[12%] text-white text-lg pt-2 pl-4 cursor-pointer hover:bg-red-700 shadow-lg">
              <AiOutlineClose className="mt-2 ml-2" />
            </div>

            {/* review container */}
            <div>
              {reviews.map((review, index) => (
                <div key={index} className="rounded-[8px] bg-slate-100 mb-3 mt-[15%] w-3/4 ml-80 border-[1px] border-orange  items-center justify-between px-[30px] py-3 cursor-pointer hover:shadow-lg transform hover:scale-[101%] transition duration-300 ease-out">
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

        )}

      </MainLayout>
    </div>
  );
}

export default AdminDashboardPg;
