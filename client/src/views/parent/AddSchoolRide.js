import { AiFillDashboard } from "react-icons/ai"
import { FaChild } from "react-icons/fa"
import { MdPayments, MdSupportAgent, MdOutlineRateReview } from "react-icons/md";
import "./style/main.css";
import { BsStar, BsStarFill, } from "react-icons/bs";

import MainLayout from '../../components/layout/MainLayout';

function AddSchoolRide() {

  const sideNavBarLinks = [
    { title: "Dashboard", path: "/parent/dashboard", icon: <AiFillDashboard /> },
    { title: "Children", path: "/parent/children", icon: <FaChild /> },
    { title: "Payment", path: "/parent/payment", icon: <MdPayments /> },
    { title: "Support", path: "/parent/support", icon: <MdSupportAgent /> },
    { title: "Feedback", path: "/parent/feedback", icon: <MdOutlineRateReview /> },
  ];

  const vehicleData = [
    {
      id: 1,
      rating: 4,
      price: "RS. 380/KM",
      type: "Van",
      model: "Hiace",
      start: "Pannipitiya",
      image: require("../../images/schoolVan.jpeg")
    },
    {
      id: 2,
      rating: 2,
      price: "RS. 380/KM",
      type: "Van",
      model: "Hiace",
      start: "Maharagama",
      image: require("../../images/schoolVan.jpeg"),
    },
    {
      id: 3,
      rating: 3.2,
      price: "RS. 380/KM",
      type: "Van",
      model: "Hiace",
      start: "Homagama",
      image: require("../../images/schoolVan.jpeg"),
    },
    {
      id: 4,
      rating: 4.5,
      price: "RS. 380/KM",
      type: "Van",
      model: "Hiace",
      start: "Padukka",
      image: require("../../images/schoolVan.jpeg"),
    },
    {
      id: 5,
      rating: 2.5,
      price: "RS. 380/KM",
      type: "Van",
      model: "Hiace",
      start: "Boralasgamuwa",
      image: require("../../images/schoolVan.jpeg"),
    },
    {
      id: 6,
      rating: 4,
      price: "RS. 380/KM",
      type: "Van",
      model: "Hiace",
      start: "Horana",
      image: require("../../images/schoolVan.jpeg"),
    }
  ];
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
            <div
              className="star"
              key={index}>
              <div
                className="starFull"
                style={{
                  width: starFilledWidth(
                    index
                  ),
                }}>
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
            School Van
          </h1>
          <div className="App">


            <main>

              <div className="products">
                {vehicleData.map((vehicleData) => (
                  <div className="product mx-3 my-3" key={vehicleData.id}>
                    <img className="product-image" src={vehicleData.image} alt={vehicleData.image} /><RatingStars rating={vehicleData.rating} />
                    <div className=" justify-center p-2">
                      <span className="product-price font-mono">
                        {vehicleData.price}
                      </span>
                      <h4 className="product-name">
                        Type: {vehicleData.type}
                      </h4>
                      <p>Model: {vehicleData.model}</p>
                      <p>Start: {vehicleData.start}</p>
                    </div>
                    <div className="buttons">
                      <button
                        className="btn"
                      // onClick={() =>
                      //   addProductToCart(
                      //     product
                      //   )
                      // }
                      >
                        Add Ride
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>

        </div>
      </MainLayout>
    </div>
  )
}

export default AddSchoolRide