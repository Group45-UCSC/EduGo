import React from "react";
import Footer from "../footer/Footer";
import SideNavBar from "../header/SideNavBar";
import TopNavBar from "../header/TopNavBar";

function MainLayout({ data, children }) {
  return (
    <div>
      <div className="flex">
        <div className="basis-[5%] h-[100vh] z-20">
          <SideNavBar data={data} />
        </div>
        <div className="basis-[95%] border">
          <TopNavBar /> 
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
