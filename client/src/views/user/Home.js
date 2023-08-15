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
        <div
          id="section1"
          className="section h-screen text-white flex flex-col justify-center items-center"
          style={{
            background: `linear-gradient(to top, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.6) 50%), url(${imgOne})`,
            backgroundSize: 'cover',
          }}
        >
          <h1 className="text-[45px] pb-6"><b> Welcome to Edugo! </b></h1>
          <p className="text-[20px] text-center ml-20 mr-20">
            Discover a safe and reliable school transportation service for your children's daily commute.
            Edugo connects parents with responsible drivers to ensure a stress-free and secure journey to school.
          </p>
        </div>
          
        <div id="section2" className="section h-screen text-white" style={{background: `linear-gradient(to top, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.6) 50%), url(${imgThree})`, backgroundSize: 'cover',}}>
          <h1 className="text-4xl pt-[12%] ml-16 pb-7"> <b> Our Services</b></h1>
          <p className="text-lg ml-16">
            At Edugo, we are dedicated to providing top-notch school transportation solutions to ensure a seamless and secure commuting experience for your children. Our range of services is designed to cater to the diverse needs of both parents and students. With a focus on safety, convenience, and reliability, we offer school vans and buses with flexible schedules and routes, making sure your child reaches school comfortably and on time. Edugo connects responsible drivers with parents, creating a community that prioritizes the well-being of the students. Whether you're looking for a convenient pick-up and drop-off service or a trusted transportation partner for your school, Edugo has you covered. Join us to explore the world of safe and stress-free school commutes.
          </p>
        </div>
  
        <div id="section3" className="section h-screen text-white" style={{background: `linear-gradient(to top, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.6) 50%), url(${imgTwo})`,
          backgroundSize: 'cover',}}>
          <h1 className="text-4xl pt-[13%] ml-16 pb-7"> <b> About Us</b></h1>
          <p className="text-lg ml-16">
            Welcome to Edugo, your trusted partner in school transportation solutions. Our mission is to create a platform that ensures the safety, convenience, and peace of mind for both parents and drivers. With a strong commitment to student welfare, we bridge the gap between responsible drivers and parents, offering a seamless and reliable experience for all. Our focus on safety measures, flexibility, and quality service sets us apart in the industry. We believe that every child deserves a safe and comfortable journey to school, and we work tirelessly to make this a reality. Edugo is built on a foundation of trust, transparency, and collaboration, providing a win-win situation for both parents and drivers. Join us in shaping the future of school transportation – where every ride is a stress-free and secure adventure for the next generation.
          </p>
        </div>
          
        <div id="section4" className="section h-screen text-white" style={{background: `linear-gradient(to top, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.6) 50%), url(${imgFour})`,
          backgroundSize: 'cover',}}>
          <h1 className="text-4xl pt-[13%] ml-16 pb-7"> <b> Contact Us</b></h1>
          <p className="text-lg ml-16">Have a question or need assistance? Our support team is here to help. <br />Feel free to reach out to us for any inquiries regarding our services, registration, or any other concerns you may have.</p>
          <div className="contact-details ml-16 pt-4">
            <p className="hover:cursor-pointer hover:underline">Email: edugo@gmail.com</p>
            <p>Phone: 071-6774537
                      011-3456326
            </p>
          </div>
        </div>
          
        <div id="section5" className="section h-screen text-white" style={{background: `linear-gradient(to top, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.6) 50%), url(${imgFive})`, backgroundSize: 'cover',}}>
          <h1 className="text-4xl pt-[12%] ml-16 pb-5"><b>Register</b></h1>
          <p className="text-lg ml-16">Join Edugo as either a parent or a driver to access our school transportation services. Choose the appropriate registration option below to get started:</p>
  
          <div className="registration-options ml-16 flex flex-row">
            {/* Left Column - Register as a Driver */}
            <div className="driver-registration flex-1 pr-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', marginRight: '20px' }}>
              <h2 className="pt-7 text-[20px]"><b>Register as a Driver</b></h2>
              <p>Are you a responsible driver with a valid license and a vehicle suitable for school transportation? Join our team of drivers to offer safe and efficient rides to students.</p>
              <button className="mt-3 mb-3 pt-1 pb-1 pl-5 pr-5 bg-slate-600 hover:bg-slate-700 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out hover:cursor-pointer"><NavLink to="/driver/register" className="btn-primary">Register as Driver</NavLink></button>
            </div>

            {/* Right Column - Register as a Parent */}
            <div className="parent-registration flex-1 pl-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px' }}>
              <h2 className="pt-7 text-[20px]"><b>Register as a Parent</b></h2>
              <p>Are you a parent looking for a reliable school transportation service for your child? Register now to explore available options and ensure a stress-free journey to school.</p>
              <button className="mt-3 mb-3 pt-1 pb-1 pl-5 pr-5 bg-slate-600 hover:bg-slate-700 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out hover:cursor-pointer"><NavLink to="/parent/register" className="btn-primary">Register as Parent</NavLink></button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
