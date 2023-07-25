import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer, FaSearch } from "react-icons/fa";
import ParentChildDetails from "../../components/popups/ParentChildDetails";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/sup_agent/dashboard", icon: <FaBeer /> },
  { title: "Parents", path: "/sup_agent/parents", icon: <FaBeer /> },
  { title: "Drivers", path: "/sup_agent/drivers", icon: <FaBeer /> },
];

const initialParentData = [
  {
    id: 1,
    name: "John Doe",
    nicNumber: "910123456V",
    contact: "0112345678",
    address: "Rosmead Place, Colombo 7",
    img: "https://tecdn.b-cdn.net/img/new/avatars/2.webp",
  },
  {
    id: 2,
    name: "S.N.Ramanayake",
    nicNumber: "997542770V",
    contact: "0332250444",
    address: "Main St, Colombo 7",
    img: "https://tecdn.b-cdn.net/img/new/avatars/5.webp",
  },
];
const initialChildrenData = [
  {
    id: 1,
    name: "John Doe",
    school: "Royal College",
    address: "Rosmead Place, Colombo 7",
    contact: "0112345678",
    vnum: "V12345",
  },
  {
    id: 2,
    name: "Nethmini Abeykoon",
    school: "BLC",
    address: "Flower Rd, Rajagiriya",
    contact: "0335012458",
    vnum: "V98765",
  },
];

function Parents() {
  const [activeTab, setActiveTab] = useState("parents");
  const [parentData] = useState(initialParentData);
  // const [parentData, setParentData] = useState(initialParentData);
  const [childrenData] = useState(initialChildrenData);
  // const [childrenData,setChildrenData] = useState(initialChildrenData);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
  };
  const handleClosePopup = () => {
    setSelectedRow(null);
  };
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="flex flex-col gap-10 mt-[4rem] ml-[5rem]">
          <div class="inline-flex">
            <button
              className={`${
                activeTab === "parents"
                  ? "bg-orange text-black drop-shadow-md border-black border-2"
                  : "bg-gray"
              } w-[10rem] hover:bg-orange hover:text-black font-bold hover:border-black py-2 px-4 rounded-l`}
              onClick={() => setActiveTab("parents")}
            >
              Parents
            </button>
            <button
              className={`${
                activeTab === "children"
                  ? "bg-orange text-black drop-shadow-md border-black border-2"
                  : "bg-gray"
              } w-[10rem] hover:bg-orange  hover:text-black font-bold hover:border-black py-2 px-4 rounded-r`}
              onClick={() => setActiveTab("children")}
            >
              Children
            </button>
          </div>
          {/* -------------------------- parent details-------------------------------------------- */}
          {activeTab === "parents" && (
            <div className="w-fill h-[45rem] p-8 bg-[#FDF6F6]">
              <h1 className="font-bold text-2xl">Parents Details</h1>

              {/* Search Bar */}
              <div>
                <div className="grid justify-items-end w-3/4 ">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      className=" bg-transparent px-5 py-2 border-2 border-gray rounded-full  outline-none pr-10 placeholder-black placeholder-opacity-75 focus:border-orange"
                      placeholder="Search Parents..."
                      name="search"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pt-4">
                      <svg className="h-8 w-8" viewBox="0 0 20 20">
                        <FaSearch />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              {/* -------------- */}

              <table className="w-full border-separate border-spacing-y-2 mt-4  ">
                <thead className="bg-[#999999] border-2 text-xl">
                  <tr className="">
                    <th className="px-4 py-4 text-left">ID</th>
                    <th className="px-4 py-4 text-left">Name</th>
                    <th className="px-4 py-4 text-left">NIC number</th>
                    <th className="px-4 py-4 text-left">Contact</th>
                    <th className="px-4 py-4 text-left">Address</th>
                  </tr>
                </thead>

                <tbody className="">
                  {parentData.map((parent) => (
                    <tr
                      key={parent.id}
                      className="bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                      onClick={() => handleRowClick(parent)}
                    >
                      <td className="text-left px-4 py-4">{parent.id}</td>
                      <td className="text-left px-4 py-4">{parent.name}</td>
                      <td className="text-left px-4 py-4">
                        {parent.nicNumber}
                      </td>
                      <td className="text-left px-4 py-4">{parent.contact}</td>
                      <td className="text-left px-4 py-4">{parent.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {/* ---------------end parent details--------------- */}

          {/*------------------------------children Details ----------------------------------*/}

          {activeTab === "children" && (
            <div className="w-fill h-[45rem] p-8 bg-[#FDF6F6]">
              <h1 className="font-bold text-2xl">Children Details</h1>
              {/* Search Bar */}
              <div>
                <div className="grid justify-items-end w-3/4 ">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      className=" bg-transparent px-5 py-2 border-2 border-slate-500 rounded-full  outline-none pr-10 placeholder-black placeholder-opacity-75 focus:border-orange"
                      placeholder="Search Children..."
                      name="search"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pt-4">
                      <svg className="h-8 w-8" viewBox="0 0 20 20">
                        <FaSearch />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              {/* -------------- */}

              <table className="w-full border-separate border-spacing-y-2 mt-4  ">
                <thead className="bg-[#999999] border-2 text-xl">
                  <tr className="">
                    <th className="px-4 py-4 text-left">ID</th>
                    <th className="px-4 py-4 text-left">Name</th>
                    <th className="px-4 py-4 text-left">School</th>
                    <th className="px-4 py-4 text-left">Address</th>
                    <th className="px-4 py-4 text-left">Contact</th>
                    <th className="px-4 py-4 text-left">V Number</th>
                  </tr>
                </thead>

                <tbody className="">
                  {childrenData.map((children) => (
                    <tr
                      key={children.id}
                      className="bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                      onClick={() => handleRowClick(children)}
                    >
                      <td className="text-left px-4 py-4">{children.id}</td>
                      <td className="text-left px-4 py-4">{children.name}</td>
                      <td className="text-left px-4 py-4">{children.school}</td>
                      <td className="text-left px-4 py-4">
                        {children.address}
                      </td>
                      <td className="text-left px-4 py-4">
                        {children.contact}
                      </td>
                      <td className="text-left px-4 py-4">{children.vnum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {/* -------------------------end children data----------------------------- */}
        </div>
        <ParentChildDetails
          isOpen={selectedRow !== null}
          onClose={handleClosePopup}
          content={
            selectedRow && (
              <div>
                <h2 className="font-bold text-xl">
                  {selectedRow.name}'s Details
                </h2>
                <div className="p-2">
                  <div className="inline-flex gap-[10rem]">
                    <div>
                      <img
                        src={selectedRow.img}
                        className="w-[8rem] rounded-full"
                        alt="Avatar"
                      />
                    </div>
                    <div className="bg-gradient-to-tl from-[#f6ad55] to-[#fbd38d] w-[25rem] h-auto p-5 rounded-xl">
                      <p>
                        <strong className="mr-2">ID:</strong> {selectedRow.id}
                      </p>
                      <p>
                        <strong className="mr-2">NIC Number:</strong>{" "}
                        {selectedRow.nicNumber}
                      </p>
                      <p>
                        <strong className="mr-2">Contact No:</strong>{" "}
                        {selectedRow.contact}
                      </p>
                      <p>
                        <strong className="mr-2">Address:</strong>{" "}
                        {selectedRow.address}
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#EEEEEE] w-full h-[15rem] mt-5 rounded-xl p-3">
                    <p className="text-xl font-semibold">Dependent's Details</p>
                    <div className="flex flex-1 gap-20 p-2">
                      <div className="bg-[#F9F9F9] w-2/5 h-5"></div>
                      <div className="bg-[#F9F9F9] w-2/5 h-5"> </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        />
      </MainLayout>
    </div>
  );
}

export default Parents;
