import React from "react";
import Footer from "../footer/Footer";
import SideNavBar from "../header/SideNavBar";

function MainLayout({ children }) {
  return (
    <div>
      <SideNavBar />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
