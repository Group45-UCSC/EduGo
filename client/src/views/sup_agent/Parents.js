import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaHome, FaBus, FaUsers, FaSearch } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import ParentChildDetails from "./ParentChildDetails";
// import axios from "axios";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/sup_agent/dashboard", icon: <FaHome /> },
  { title: "Chat", path: "/sup_agent/chat", icon: <BsFillChatDotsFill /> },
  { title: "Parents", path: "/sup_agent/parents", icon: <FaUsers /> },
  { title: "Drivers", path: "/sup_agent/drivers", icon: <FaBus /> },
];
// const initialParentData = [
//   {
//     id: 1,
//     name: "S.N.Ramanayake",
//     nicNumber: "997542770V",
//     contact: "0332250444",
//     address: "192 Old Moor Street, Colombo",
//     img: "https://image.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg",
//   },
//   {
//     id: 2,
//     name: "John Doe",
//     nicNumber: "910123456V",
//     contact: "0112345678",
//     address: "Rosmead Place, Colombo 7",
//     img: "https://tecdn.b-cdn.net/img/new/avatars/2.webp",
//   },

//   {
//     id: 3,
//     name: "Jagath Perera",
//     nicNumber: "657542770V",
//     contact: "0332250444",
//     address: "92/1 Main Street, Colombo",
//     img: "https://tecdn.b-cdn.net/img/new/avatars/7.webp",
//   },
//   {
//     id: 4,
//     name: "Deepika Samarawickrama",
//     nicNumber: "797542770V",
//     contact: "0332250444",
//     address: "264/1 B Messenger Street, Maharagama",
//     img: "https://tecdn.b-cdn.net/img/new/avatars/20.webp",
//   },
//   {
//     id: 5,
//     name: "Kasun Abeykoon",
//     nicNumber: "897542770V",
//     contact: "0332250444",
//     address: "1st Flr 74 Union Place, Colombo",
//     img: "https://tecdn.b-cdn.net/img/new/avatars/1.webp",
//   },
// ];
// const initialChildrenData = [
//   {
//     id: 1,
//     name: "Ravin Abeykoon",
//     school: "Royal College",
//     address: "1st Flr 74 Union Place, Colombo",
//     contact: "0752345678",
//     vnum: "V12345",
//     img: "https://pbs.twimg.com/media/ErR3xMUVEAEdPUF.jpg:large",
//     parentId: 5,
//   },
//   {
//     id: 2,
//     name: "Nethmini Ramanayake",
//     school: "Visakha Vidyalaya",
//     address: "192 Old Moor Street, Colombo",
//     contact: "0705012458",
//     vnum: "V98765",
//     img: "https://www.miltonscene.com/wp-content/uploads/2020/05/outschool-kid-drawing-0520.jpg",
//     parentId: 1,
//   },
//   {
//     id: 3,
//     name: "Hiruni Devindi",
//     school: "Devi Balika Vidyalaya",
//     address: "92/1 Main Street, Colombo",
//     contact: "0782577381",
//     vnum: "V12345",
//     img: "https://kidscountry.kidscountrynetwork.com/wp-content/uploads/sites/3/2018/03/smiling-happy-preschool-girl.jpg",
//     parentId: 4,
//   },
//   {
//     id: 4,
//     name: "Sahan Ramanayake",
//     school: "Thurstan College",
//     address: "192 Old Moor Street, Colombo",
//     contact: "0712345678",
//     vnum: "V98765",
//     img: "https://cdn.forumcomm.com/dims4/default/91338c5/2147483647/strip/true/crop/3456x2304+0+740/resize/840x560!/quality/90/?url=https%3A%2F%2Fforum-communications-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F49%2F82%2F74ae8fd64e72bd14630ee55e6287%2F090322.OP.PRE.JacksonBrann5776.JPG",
//     parentId: 1,
//   },
// ];
const VehicleData = [
  {
    Vid: 1,
    vnum: "V12345",
    drivername: "Saman Hettiarachchi",
    model: "Nissan Caravan TD27",
    YOM: " 1991",
    Gear: "Manual",
    Engine: "2700",
    options: ["AIR CONDITION", "POWER STEERING", "POWER WINDOW"],
  },
  {
    Vid: 2,
    vnum: "V98765",
    drivername: "H.A.Priyantha Perera",
    model: "Isuzu Fargo",
    YOM: " 1998",
    Gear: "Manual",
    Engine: "2700",
    options: ["AIR CONDITION", "POWER STEERING", "POWER WINDOW"],
  },
];

function Parents() {
  const [activeTab, setActiveTab] = useState("parents");
  const [parentData, setParentData] = useState([]);
  const [childrenData, setChildrenData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function viewParentDetails() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/supAgent/parents/viewParent`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setParentData(data);
      } catch (error) {
        console.error("Error fetching parent details", error);
      }
    }
    viewParentDetails();
  });

  useEffect(() => {
    async function viewChildrenDetails() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/supAgent/parents/viewChildren`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setChildrenData(data);
      } catch (error) {
        console.error("Error fetching parent details", error);
      }
    }
    viewChildrenDetails();
  });

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
                  ? "bg-orange text-black drop-shadow-md border-2 border-black"
                  : "bg-gray"
              } w-[10rem] hover:bg-orange hover:text-black font-bold hover:border-black py-2 px-4 rounded-l`}
              onClick={() => setActiveTab("parents")}
            >
              Parents
            </button>
            <button
              className={`${
                activeTab === "children"
                  ? "bg-orange text-black drop-shadow-md border"
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
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
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
                  {parentData
                    .filter(
                      (parent) =>
                        parent.user_name
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase()) ||
                        parent.nic
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                    )
                    .map((parent) => (
                      <tr
                        key={parent.user_id}
                        className="bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                        onClick={() => handleRowClick(parent)}
                      >
                        <td className="text-left px-4 py-4">
                          {parent.user_id}
                        </td>
                        <td className="text-left px-4 py-4">
                          {parent.user_name}
                        </td>
                        <td className="text-left px-4 py-4">{parent.nic}</td>
                        <td className="text-left px-4 py-4">
                          {parent.contact_number}
                        </td>
                        <td className="text-left px-4 py-4">
                          {parent.address}
                        </td>
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
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
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
                  {childrenData
                    .filter(
                      (children) =>
                        children.child_name
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase()) ||
                        children.child_id
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                    )
                    .map((children) => (
                      <tr
                        key={children.child_id}
                        className="bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                        onClick={() => handleRowClick(children)}
                      >
                        <td className="text-left px-4 py-4">
                          {children.child_id}
                        </td>
                        <td className="text-left px-4 py-4">
                          {children.child_name}
                        </td>
                        <td className="text-left px-4 py-4">
                          {children.school_id}
                        </td>
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

        {/*--------------------------parent details popup--------------------------------  */}

        {activeTab === "parents" && selectedRow && (
          <ParentChildDetails
            isOpen={selectedRow !== null}
            onClose={handleClosePopup}
            activeTab={activeTab} // Pass the activeTab prop here
            content={
              <div>
                <div className="">
                  <div className="grid grid-cols-2 p-2">
                    <div className="flex flex-col gap-2">
                      <div className="w-[8rem] h-[8rem] rounded-full overflow-hidden">
                        <img
                          src={selectedRow.profile_image}
                          className="w-full h-full object-cover"
                          alt="Avatar"
                        />
                      </div>
                      <h2 className="font-bold text-xl ml mt-4">
                        {selectedRow.user_name}
                      </h2>
                    </div>
                    <div className="bg-gradient-to-tl from-[#f6ad55] to-[#fbd38d] w-full h-auto p-5 rounded-xl">
                      <p>
                        <strong className="mr-2">ID:</strong>{" "}
                        {selectedRow.user_id}
                      </p>
                      <p>
                        <strong className="mr-2">NIC Number:</strong>{" "}
                        {selectedRow.nic}
                      </p>
                      <p>
                        <strong className="mr-2">Contact No:</strong>{" "}
                        {selectedRow.contact_number}
                      </p>
                      <p>
                        <strong className="mr-2">Address:</strong>{" "}
                        {selectedRow.address}
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#EEEEEE] w-full h-[15rem] mt-5 rounded-xl p-3">
                    <p className="text-xl font-semibold">Children Details</p>
                    <div className="flex flex-1 gap-20 p-2">
                      {selectedRow &&
                        selectedRow.children.map((child) => (
                          <div
                            key={child.child_id}
                            className="bg-[#F9F9F9] w-2/5  p-5 border-orange border-2 rounded-lg"
                          >
                            <h3 className="font-semibold text-xl pb-1">
                              {child.child_name}
                            </h3>
                            <p>
                              <strong className="mr-2">School:</strong>{" "}
                              {child.school_id}
                            </p>

                            <p>
                              <strong className="mr-2">Vehicle Number:</strong>{" "}
                              {child.vnum}
                            </p>
                            <p>
                              <strong className="mr-2">Driver name:</strong>{" "}
                              {child.driver_id}
                            </p>
                          </div>
                        ))}
                      {/* <div className="bg-[#F9F9F9] w-2/5 h-5"> </div> */}
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        )}

        {/*                          children details popup------------------------- */}

        {activeTab === "children" && selectedRow && (
          <ParentChildDetails
            isOpen={selectedRow !== null}
            onClose={handleClosePopup}
            activeTab={activeTab} // Pass the activeTab prop here
            content={
              <div>
                <div className="">
                  <div className="grid grid-cols-2 p-2">
                    <div className="flex flex-col gap-2">
                      <div className="w-[8rem] h-[8rem] rounded-full overflow-hidden">
                        <img
                          src={selectedRow.img}
                          className="w-full h-full object-cover"
                          alt="Avatar"
                        />
                      </div>
                      <h2 className="font-bold text-xl ml mt-4">
                        {selectedRow.child_name}
                      </h2>
                    </div>
                    <div className="bg-gradient-to-tl from-[#f6ad55] to-[#fbd38d] w-full h-auto p-5 rounded-xl">
                      <p>
                        <strong className="mr-2">ID:</strong>{" "}
                        {selectedRow.child_id}
                      </p>
                      <p>
                        <strong className="mr-2">NIC Number:</strong>{" "}
                        {selectedRow.school_id}
                      </p>
                      <p>
                        <strong className="mr-2">Vehicle Number:</strong>{" "}
                        {selectedRow.vnum}
                      </p>
                      <p>
                        <strong className="mr-2">Vehicle Contact</strong>{" "}
                        {selectedRow.contact}
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#EEEEEE] w-full h-[15rem] mt-5 rounded-xl p-3">
                    <div className="flex flex-1 gap-20 p-2">
                      {selectedRow &&
                        selectedRow.parent.map((parent) => (
                          <div
                            key={parent.user_id}
                            className="bg-[#F9F9F9] w-2/5  px-5 py-2 border-orange border-2 rounded-lg"
                          >
                            <p className="text-xl font-bold">
                              <u>Parent's Details</u>
                            </p>
                            <h3 className="font-semibold text-xl py-1">
                              {parent.user_name}
                            </h3>
                            <p>
                              <strong className="mr-2">NIC Number:</strong>{" "}
                              {parent.nic}
                            </p>
                            <p>
                              <strong className="mr-2">Contact No:</strong>{" "}
                              {parent.contact_number}
                            </p>
                            <p>
                              <strong className="mr-2">Address:</strong>{" "}
                              {parent.address}
                            </p>
                          </div>
                        ))}

                      <div className="bg-[#F9F9F9] w-2/5  px-5 py-2 border-orange border-2 rounded-lg">
                        <p className="text-xl font-bold">
                          <u>Vehicle Details</u>
                        </p>
                        {selectedRow &&
                          VehicleData.filter(
                            (vehicle) => vehicle.vnum === selectedRow.vnum
                          ).map((vehicle) => (
                            <div key={vehicle.Vid} className="py-1">
                              <p>
                                <strong className="mr-2">DriverName:</strong>{" "}
                                {vehicle.drivername}
                              </p>
                              <p>
                                <strong className="mr-2">
                                  Vehicle Number:
                                </strong>{" "}
                                {vehicle.vnum}
                              </p>
                              <p>
                                <strong className="mr-2">Model:</strong>{" "}
                                {vehicle.model}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        )}
      </MainLayout>
    </div>
  );
}

export default Parents;
