// import React from "react";
// import Footer from "../footer/Footer";
// import SideNavBar from "../header/SideNavBar";
// import TopNavBar from "../header/TopNavBar";

// function MainLayout({ data, children }) {
//   return (

//     <div>
//       <div className="flex">
//         <div className="basis-[5%] h-screen z-20 fixed">
//           <SideNavBar data={data} />
//         </div>
//         <div className="flex-1 basis-[95%] ml-[5%] pt-8">
//           <TopNavBar /> 
//           {children}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default MainLayout;





import React, { useState } from "react";
import Footer from "../footer/Footer";
import SideNavBar from "../header/SideNavBar";
import TopNavBar from "../header/TopNavBar";

function MainLayout({ data, children }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
        <div className={`w-[${open ? "260px" : "100px"}] duration-300 h-screen z-20 bg-gray overflow-hidden fixed transition-all`}>
            <SideNavBar data={data} open={open} setOpen={setOpen} />
        </div>
        <div className={`pt-2 ${open ? "ml-[260px]" : "ml-[100px]"} transition-all w-full duration-300`}>
            <TopNavBar open={open} setOpen={setOpen} />
            <div className="ml-4 mr-4 mt-8">
              {children}
            </div>
            <div>
              <Footer />
            </div>
        </div> 
    </div>
  );
}

export default MainLayout;
