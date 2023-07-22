import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";

function Driver() {

const dashboardLinks=[
    { title: "Home", path: "/driver/home",icon:<FaBeer/> },
    { title: "Finance", path: "/driver/finance",icon:<FaBeer/> },
    { title: "Feedback", path: "/driver/feedback",icon:<FaBeer/> }
  ];

  return (
    <div>
      <MainLayout data={dashboardLinks}>This is driver's landing page</MainLayout>
    </div>
  );
}

export default Driver;
