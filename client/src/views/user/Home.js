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
          <div id="section1" className="section h-screen text-white" style={{background: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 50%), url(${imgOne})`,
          backgroundSize: 'cover',}}>
            <h1 className="text-3xl pt-[20%]">Welcome to Our Platform!</h1>
            <p className="text-lg">Discover a safe and reliable school transportation service for your children's daily commute. <br /> Our platform connects parents with responsible drivers to ensure a stress-free and secure journey to school.</p>
          </div>
          
          <div id="section2" className="section h-screen text-white" style={{background: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 50%), url(${imgThree})`,
          backgroundSize: 'cover',}}>
            <h1 className="text-3xl pt-[20%]">Our Services</h1>
            <p className="text-lg">With a wide range of school transportation options, we cater to various needs of parents and students. <br />Our services include school vans and buses with flexible schedules and routes. Find the perfect match for your child's school commute.</p>
          </div>
          
          <div id="section3" className="section h-screen text-white" style={{background: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 50%), url(${imgTwo})`,
          backgroundSize: 'cover',}}>
            <h1 className="text-3xl pt-[20%]">About Us</h1>
            <p className="text-lg">Our mission is to create a platform that ensures the safety and convenience of school transportation for both parents and drivers. <br />We strive to bridge the gap between parents and responsible drivers, providing a seamless and reliable experience.</p>
          </div>
          
          <div id="section4" className="section h-screen text-white" style={{background: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 50%), url(${imgFour})`,
          backgroundSize: 'cover',}}>
            <h1 className="text-3xl pt-[20%]">Contact Us</h1>
            <p className="text-lg">Have a question or need assistance? Our support team is here to help. <br />Feel free to reach out to us for any inquiries regarding our services, registration, or any other concerns you may have.</p>
            <div className="contact-details">
              <p>Email: edugo@gmail.com</p>
              <p>Phone: 071-6774537
                        011-3456326
              </p>
            </div>
          </div>
          
          <div id="section5" className="section h-screen text-white" style={{background: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 50%), url(${imgFive})`,
          backgroundSize: 'cover',}}>
            <h1 className="text-3xl pt-[20%]">Register</h1>
            <p className="text-lg">Join our platform as either a parent or a driver to access our school transportation services. Choose the appropriate registration option below to get started:</p>
  
            <div className="registration-options">
              <div className="parent-registration">
                <h2>Register as a Parent</h2>
                <p>Are you a parent looking for a reliable school transportation service for your child? Register now to explore available options and ensure a stress-free journey to school.</p>
                <NavLink to="/parent/register" className="btn-primary">Register as Parent</NavLink>
              </div>

              <div className="driver-registration">
                <h2>Register as a Driver</h2>
                <p>Are you a responsible driver with a valid license and a vehicle suitable for school transportation? Join our team of drivers to offer safe and efficient rides to students.</p>
                <NavLink to="/driver/register" className="btn-primary">Register as Driver</NavLink>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
