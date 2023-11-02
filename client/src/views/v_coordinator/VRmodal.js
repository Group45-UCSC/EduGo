import React,  { useState }from "react";
import dlcard from"../../images/dlcard.jpg";
import VehiCarousel from "../../components/carousel/VehiCarousel";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard } from "react-icons/ai";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";
import { useLocation } from "react-router-dom";


// Carouselimage
import vcv1 from"../../images/vcv1.jpg";
import vcv2 from"../../images/vcv2.jpg";
import vcv3 from"../../images/vcv3.jpg";
import vcv4 from"../../images/vcv4.jpg";
import vcv5 from"../../images/vcv5.jpg";
import vcv6 from"../../images/vcv6.jpg";

const sideNavBarLinks = [
    { title: "Dashboard", path: "/vc/dashboard", icon: <AiFillDashboard /> },
    { title: "Vehicles", path: "/vc/vehicles", icon: <BsFillCarFrontFill /> },
    { title: "School Rides", path: "/vc/rides", icon: <FaShippingFast /> },
    { title: "Emergency", path: "/vc/emergency", icon: <FaCarCrash /> },
  ];

const CAROUSEL_DATA = [
    {
      image:vcv1,
      imageAlt:vcv1
    },
    {
      image:vcv2,
      imageAlt:vcv2
    },
    {
      image:vcv3,
      imageAlt:vcv3
    },
    {
      image:vcv4,
      imageAlt:vcv4
    },
    {
      image:vcv5,
      imageAlt:vcv5
    },
    {
      image:vcv6,
      imageAlt:vcv6
    }
  ]

function VRmodal() {

    const location = useLocation();
    const dataParam = new URLSearchParams(location.search).get("data");
    // const item = JSON.parse(decodeURIComponent(dataParam)); 
    const vehicle = JSON.parse(decodeURIComponent(dataParam)); 
    //-----------------------------------
    // const handleReject = async (vehicleId) => {
    //   try {
    //     const response = await fetch(
    //       `http://localhost:5000/edugo/vc/vrmodal/rform/${vehicleId}`,
    //       {
    //         method: "PUT", // Use the update HTTP method
    //         headers: { "Content-Type": "application/json" },
    //       }
    //     );
    //     if (response.status === 200) {
    //       swal({
    //         title: "Selected ride request is rejected!",
    //         icon: "success",
    //         buttons: {
    //           confirm: {
    //             className:
    //               "bg-orange text-white px-10 py-2 rounded-lg items-center hover:bg-gray ",
    //           },
    //         },
    //       }).then(() => {
    //         // recallData();
    //       });
    //     } else {
    //       const errorData = await response.json();
    //       swal(
    //         "Error Occurred!",
    //         `Error: ${errorData.error}`,
    //         "Please try again or contact support agent",
    //         "warning"
    //       );
    //     }
    //   } catch (err) {
    //     console.error(err.message);
    //   }
    // };

//-------------------------------------------------------
    // const handleRejectClick = (vehicleId) => {
    //   swal({
    //     title: "Do you want to reject this request?",
    //     icon: "warning",
    //     buttons: ["No, cancel!", "Yes, reject it!"],
    //     dangerMode: true,
    //   }).then((confirmed) => {
    //     if (confirmed) {
    //       handleReject(vehicleId);
    //     } else {
    //     }
    //   });
    // };

  const [statusType2, setStatusType2] = useState("DECLINE");
  const [statusType1, setStatusType1] = useState("ACCEPT");

  //decline button click
  const handleRejectClick = async (vehicleId) => {
    try {
      const body = {
        vehicleId: vehicleId
      };
      const response = await fetch(
        `http://localhost:5000/edugo/vc/vrmodal/rform`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      if (response.status === 200) {
        // const data = await response.json();
        setStatusType2("rejected");
      } else {
        setStatusType2("reject");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  //..........................................................
    //decline button click
    const handleAcceptClick = async (vehicleId) => {
      try {
        const body = {
          vehicleId: vehicleId
        };
        const response = await fetch(
          `http://localhost:5000/edugo/vc/vrmodal/accept`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          }
        );
        if (response.status === 200) {
          // const data = await response.json();
          setStatusType1("accepted");
        } else {
          setStatusType1("accept");
        }
      } catch (err) {
        console.error(err.message);
      }
    };


  return (
    <div>
        <MainLayout data={sideNavBarLinks}>
        <div className="ml-32 mt-8 mb-10 pt-4 bg-[#F4F4F4] w-[900px] rounded-lg shadow-lg drop-shadow-lg">
            {/* topic */}
            <div className='font-bold ml-16 mt-4 text-2xl'>Vehicle Registration Form</div>

            <div className="-ml-[200px]">
            <VehiCarousel data={CAROUSEL_DATA} />
            </div>


                {/* firstsqure */}
                <div className="mt-4 ml-10 pl-8 pt-4 pb-3 grid grid-cols-2 gap-[200px]">
                    <div className="">
                        <h1 className="font-bold p-1 text-[19px] text-orange-500"> Vehicle's Details</h1> 
                        <p className="p-1"> Type : {vehicle.vehicle_type}</p>
                        <p className="p-1"> Make : {vehicle.make}</p>
                        <p className="p-1"> Model : {vehicle.vehicle_model}</p>
                        <p className="p-1"> Year : {vehicle.manufacture_year}</p>
                        <p className="p-1"> License Plate : {vehicle.vehicle_no}</p>
                        <p className="p-1"> Engine Number : {vehicle.engine_no}</p>
                        <p className="p-1"> Chassis Number : {vehicle.chassis_no}</p>
                    </div>
                    <div className="">
                        <h1 className="font-bold p-1 text-[19px] text-orange-500"> Driver's Details</h1> 
                        <p className='mb-1'>Name: {vehicle.user_name} </p>
                        <p className='mb-1'>Email: {vehicle.user_email} </p>
                        <p className='mb-1'>NIC: {vehicle.nic} </p>
                        <p className='mb-1'>Contact: {vehicle.contact_number} </p>
                        <p className='mb-1'>Address: {vehicle.address} </p>
                        <p className='mb-1'>Birthday: {vehicle.birthday} </p>
                        <p className='mb-1'>License Photo:</p>
                        <img src={dlcard} alt="dlcard" className="ml-[5%] w-[220px] h-[150px]"></img>
                    </div>
                </div>

                <form className="grid grid-cols-2 gap-[88px]">
                <button onClick={() => handleRejectClick(vehicle.vehicle_id)} className="ml-[80px] mt-6 p-2 mb-4 font-semibold bg-gradient-to-b from-red-600 to-red-400 w-32  rounded-lg shadow-md hover:shadow-lg transform hover:scale-[102%] trasition duration-300 ease-out  hover:cursor-pointer drop-shadow-md" >
                      {statusType2}
                </button>
                <button onClick={() => handleAcceptClick(vehicle.vehicle_id)} type="submit" className="ml-[80px] mt-6 p-2 mb-4 font-semibold bg-gradient-to-b from-green-600 to-green-400 w-32  rounded-lg shadow-md hover:shadow-lg transform hover:scale-[102%] trasition duration-300 ease-out  hover:cursor-pointer drop-shadow-md" >
                      {statusType1}
                </button>
                </form>    
            </div>
            </MainLayout>  
        </div>
  )
}

export default VRmodal