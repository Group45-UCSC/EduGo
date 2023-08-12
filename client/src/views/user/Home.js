import React from "react";
import { NavLink } from "react-router-dom";
import HomeNavBar from "../../components/header/HomeNavBar";
import imgOne from "../../images/img1.jpg";
import imgTwo from "../../images/img2.jpg";
import imgThree from "../../images/img3.jpg";
import imgFour from "../../images/img4.jpg";
import imgFive from "../../images/img5.jpg";


function Home() {
  return (
    <div>
      <HomeNavBar />
        <div className="bg">
          <div id="section1" className="section h-screen text-white" style={{background: `linear-gradient(to top, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.6) 50%), url(${imgOne})`,
          backgroundSize: 'cover',}}>
            <h1 className="text-[45px] pt-[18%] ml-16 pb-6"><b> Welcome to Edugo! </b></h1>
            <p className="text-lg ml-16">Discover a safe and reliable school transportation service for your children's daily commute. <br /> Our platform connects parents with responsible drivers to ensure a stress-free and secure journey to school.</p>
          </div>
          
          <div id="section2" className="section h-screen text-white" style={{background: `linear-gradient(to top, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.6) 50%), url(${imgThree})`,
          backgroundSize: 'cover',}}>
            <h1 className="text-4xl pt-[18%] ml-16 pb-7"> <b> Our Services</b></h1>
            <p className="text-lg ml-16">With a wide range of school transportation options, we cater to various needs of parents and students. <br />Our services include school vans and buses with flexible schedules and routes. Find the perfect match for your child's school commute.</p>
          </div>
          
          <div id="section3" className="section h-screen text-white" style={{background: `linear-gradient(to top, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.6) 50%), url(${imgTwo})`,
          backgroundSize: 'cover',}}>
            <h1 className="text-4xl pt-[20%] ml-16 pb-7"> <b> About Us</b></h1>
            <p className="text-lg ml-16">Our mission is to create a platform that ensures the safety and convenience of school transportation for both parents and drivers. <br />We strive to bridge the gap between parents and responsible drivers, providing a seamless and reliable experience.</p>
          </div>
          
          <div id="section4" className="section h-screen text-white" style={{background: `linear-gradient(to top, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.6) 50%), url(${imgFour})`,
          backgroundSize: 'cover',}}>
            <h1 className="text-4xl pt-[18%] ml-16 pb-7"> <b> Contact Us</b></h1>
            <p className="text-lg ml-16">Have a question or need assistance? Our support team is here to help. <br />Feel free to reach out to us for any inquiries regarding our services, registration, or any other concerns you may have.</p>
            <div className="contact-details ml-16 pt-4">
              <p className="hover:cursor-pointer hover:underline">Email: edugo@gmail.com</p>
              <p>Phone: 071-6774537
                        011-3456326
              </p>
            </div>
          </div>
          
          <div id="section5" className="section h-screen text-white" style={{background: `linear-gradient(to top, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.6) 50%), url(${imgFive})`,
          backgroundSize: 'cover',}}>
            <h1 className="text-4xl pt-[18%] ml-16 pb-5"><b>Register</b></h1>
            <p className="text-lg ml-16">Join our platform as either a parent or a driver to access our school transportation services. Choose the appropriate registration option below to get started:</p>
  
            <div className="registration-options ml-16">
              <div className="parent-registration">
                <h2 className="pt-7 text-[20px]"><b>Register as a Parent</b></h2>
                <p>Are you a parent looking for a reliable school transportation service for your child? Register now to explore available options and ensure a stress-free journey to school.</p>
                <button className="mt-3 mb-3 pt-1 pb-1 pl-5 pr-5 bg-slate-600 hover:bg-slate-700 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer"><NavLink to="/parent/register" className="btn-primary">Register as Parent</NavLink></button>
              </div>

              <div className="driver-registration">
                <h2 className="pt-7 text-[20px]"> <b>Register as a Driver</b></h2>
                <p>Are you a responsible driver with a valid license and a vehicle suitable for school transportation? Join our team of drivers to offer safe and efficient rides to students.</p>
                <button  className="mt-3 mb-3 pt-1 pb-1 pl-5 pr-5 bg-slate-600 hover:bg-slate-700 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer"><NavLink to="/driver/register" className="btn-primary">Register as Driver</NavLink></button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
