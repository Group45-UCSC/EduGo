import { AiFillDashboard } from "react-icons/ai";
import { FaChild } from "react-icons/fa";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import "./style/main.css";
import { BsStar, BsStarFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
// import { Children } from "react";
import { useLocation } from "react-router-dom";

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
function AddSchoolRide() {
  const location = useLocation();
  const dataParam = new URLSearchParams(location.search).get("data");
  const child = JSON.parse(decodeURIComponent(dataParam));

  // const childParamViewRide = new URLSearchParams(location.search).get('child');
  // const childViewRide = childParamViewRide ? JSON.parse(decodeURIComponent(childParamViewRide)) : null;



  const vehicleData = [
    {
      id: 1,
      rating: 4,
      price: "RS. 380/KM",
      type: "Van",
      model: "Hiace",
      start: "Pannipitiya",
      dname: "L.A. Sarath kumara",
      image: require("../../images/schoolVan.jpeg"),
      school: [
        "Alexandra College",
        "Bishop's College",
        "C.W.W Kannangara College",
        "Isipathana College",
      ],
      children: 12,
      sheets: 15,
    },
    {
      id: 2,
      rating: 2,
      price: "RS. 380/KM",
      type: "Van",
      model: "Hiace",
      start: "Maharagama",
      dname: "S.A Samantha",
      image: require("../../images/schoolVan.jpeg"),
      school: [
        "Nalanda College",
        "Devi Balika Vidyalaya",
        "D.S. Senanayake College",
        "Gothami Balika Vidyalaya",
      ],
      children: 8,
      sheets: 12,
    },
    {
      id: 3,
      rating: 3.2,
      price: "RS. 380/KM",
      type: "Van",
      model: "Hiace",
      start: "Homagama",
      dname: "R.K. Rakitha Sampath",
      image: require("../../images/schoolVan.jpeg"),
      school: [
        "D.S. Senanayake College",
        "Devi Balika Vidyalaya",
        "D.S. Senanayake College",
      ],
      children: 13,
      sheets: 15,
    },
    {
      id: 4,
      rating: 4.5,
      price: "RS. 380/KM",
      type: "Van",
      model: "Hiace",
      start: "Padukka",
      danem: "H.H. Sujeewa Kumara",
      image: require("../../images/schoolVan.jpeg"),
      school: [
        "Nalanda College",
        "Devi Balika Vidyalaya",
        "D.S. Senanayake College",
        "Gothami Balika Vidyalaya",
      ],
      children: 6,
      sheets: 10,
    },
    {
      id: 5,
      rating: 2.5,
      price: "RS. 380/KM",
      type: "Van",
      model: "Hiace",
      start: "Boralasgamuwa",
      danem: "M.N. Shashika ",
      image: require("../../images/schoolVan.jpeg"),
      school: [
        "Nalanda College",
        "Devi Balika Vidyalaya",
        "D.S. Senanayake College",
        "Gothami Balika Vidyalaya",
      ],
      children: 7,
      sheets: 12,
    },
    {
      id: 6,
      rating: 4,
      price: "RS. 380/KM",
      type: "Van",
      model: "Hiace",
      start: "Horana",
      danem: "G.B. Dinusha",
      image: require("../../images/schoolVan.jpeg"),
      school: [
        "Nalanda College",
        "Devi Balika Vidyalaya",
        "D.S. Senanayake College",
        "Gothami Balika Vidyalaya",
      ],
      children: 10,
      sheets: 15,
    },
  ];
  function RatingStars({ rating }) {
    const filledStars = Math.floor(rating);
    const partFilledStar = filledStars + 1;

    const starFilledWidth = (starIndex) => {
      if (starIndex + 1 <= filledStars) {
        return "100%";
      } else if (starIndex + 1 === partFilledStar) {
        console.log();
        return `${Math.floor((rating - filledStars) * 100)}%`;
      } else {
        return "0%";
      }
    };

    return (
      <div className="rating">
        {Array(5)
          .fill(0)
          .map((star, index) => (
            <div className="star" key={index}>
              <div
                className="starFull"
                style={{
                  width: starFilledWidth(index),
                }}
              >
                <BsStarFill />
              </div>
              <div className="starEmpty">
                <BsStar />
              </div>
            </div>
          ))}
      </div>
    );
  }

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="pt-6 px-6">
          <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
            School Van <br></br>
            {/* child id:{childViewRide.id} */}
          </h1>
          <div className="App">
            <main>
              <div className="products">
                {vehicleData.map((vehicleData) => (
                  <div className="product mx-3 my-3" key={vehicleData.id}>
                    <img
                      className="product-image"
                      src={vehicleData.image}
                      alt={vehicleData.image}
                    />
                    <RatingStars rating={vehicleData.rating} />
                    <div className=" justify-center p-2">
                      <span className="product-price font-mono">
                        {vehicleData.price}
                      </span>
                      <h4 className="product-name">Type: {vehicleData.type}</h4>
                      <p>Model: {vehicleData.model}</p>
                      <p>Start: {vehicleData.start}</p>
                    </div>
                    <NavLink
                      to={`/parent/children/addnewride/viewvehicle/${
                        vehicleData.id
                      }?child=${encodeURIComponent(
                        JSON.stringify(child)
                      )}&data=${encodeURIComponent(
                        JSON.stringify(vehicleData)
                      )}`}
                    >
                      <div className="buttons">
                        <button className="btn">View Ride</button>
                      </div>
                    </NavLink>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default AddSchoolRide;
