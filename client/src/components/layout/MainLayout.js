import React from "react";
import Footer from "../footer/Footer";
import SideNavBar from "../header/SideNavBar";
// import TopNavBar from "../header/TopNavBar";

function MainLayout({ children }) {
  return (
    <div>
        <SideNavBar />
        {/* <TopNavBar/> */}
      
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
