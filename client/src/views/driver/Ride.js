import React from "react";
import { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/driver/dashboard", icon: <FaBeer /> },
  { title: "School Ride", path: "/driver/ride", icon: <FaBeer /> },
  { title: "Finance", path: "/driver/finance", icon: <FaBeer /> },
  { title: "Support", path: "/driver/support", icon: <FaBeer /> },
  { title: "Feedback", path: "/driver/feedback", icon: <FaBeer /> },
];



function Ride() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="flex flex-col relative w-500 h-300 bg-gray-200 m-100px-auto-0 break-all border border-gray-300">
          <div className="flex">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "py-4 text-center w-1/2 bg-gray-300 cursor-pointer border-b border-gray-300 box-content relative outline-none"}
              onClick={() => toggleTab(1)}
            >
              Tab 1
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "py-4 text-center w-1/2 bg-gray-300 cursor-pointer border-b border-gray-300 box-content relative outline-none"}
              onClick={() => toggleTab(2)}
            >
              Tab 2
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "py-4 text-center w-1/2 bg-gray-300 cursor-pointer border-b border-gray-300 box-content relative outline-none"}
              onClick={() => toggleTab(3)}
            >
              Tab 3
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={toggleState === 1 ? "content  active-content" : "bg-white p-20 w-full h-full hidden"}
            >
              <h2>Content 1</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                vel voluptatum?
              </p>
            </div>

            <div
              className={toggleState === 2 ? "content  active-content" : "content"}
            >
              <h2>Content 2</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                voluptatum qui adipisci.
              </p>
            </div>

            <div
              className={toggleState === 3 ? "content  active-content" : "content"}
            >
              <h2>Content 3</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                Accusamus in quia odit aspernatur provident et ad vel distinctio
                recusandae totam quidem repudiandae omnis veritatis nostrum
                laboriosam architecto optio rem, dignissimos voluptatum beatae
                aperiam voluptatem atque. Beatae rerum dolores sunt.
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Ride;
