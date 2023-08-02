import React from "react";
import { NavLink } from "react-router-dom";
import HomeNavBar from "../../components/header/HomeNavBar";

function Home() {
  return (
    <div>
      <HomeNavBar />
        <div className="bg">
          <div id="section1" className="section" style={{ height: "90vh", paddingTop: "15vh" }}>
            <h1>Welcome to Our Platform!</h1>
            <p>Discover a safe and reliable school transportation service for your children's daily commute. Our platform connects parents with responsible drivers to ensure a stress-free and secure journey to school.</p>
          </div>
          
          <div id="section2" className="section" style={{ height: "90vh", paddingTop: "15vh" }}>
            <h1>Our Services</h1>
            <p>With a wide range of school transportation options, we cater to various needs of parents and students. Our services include school vans and buses with flexible schedules and routes. Find the perfect match for your child's school commute.</p>
          </div>
          
          <div id="section3" className="section" style={{ height: "90vh", paddingTop: "15vh" }}>
            <h1>About Us</h1>
            <p>Our mission is to create a platform that ensures the safety and convenience of school transportation for both parents and drivers. We strive to bridge the gap between parents and responsible drivers, providing a seamless and reliable experience.</p>
          </div>
          
          <div id="section4" className="section" style={{ height: "90vh", paddingTop: "15vh" }}>
            <h1>Contact Us</h1>
            <p>Have a question or need assistance? Our support team is here to help. Feel free to reach out to us for any inquiries regarding our services, registration, or any other concerns you may have.</p>
            <div className="contact-details">
              <p>Email: edugo@gmail.com</p>
              <p>Phone: 071-6774537
                        011-3456326
              </p>
            </div>
          </div>
          
          <div id="section5" className="section" style={{ height: "90vh", paddingTop: "15vh" }}>
            <h1>Register</h1>
            <p>Join our platform as either a parent or a driver to access our school transportation services. Choose the appropriate registration option below to get started:</p>
  
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
