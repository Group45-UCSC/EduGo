import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaHome, FaBus, FaUsers, FaSearch } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import DriverVehicleDetails from "./DriverVehicleDetails";
import CarouselLayout from "../../components/carousel/CarouselLayout";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/sup_agent/dashboard", icon: <FaHome /> },
  { title: "Chat", path: "/sup_agent/chat", icon: <BsFillChatDotsFill /> },
  { title: "Parents", path: "/sup_agent/parents", icon: <FaUsers /> },
  { title: "Drivers", path: "/sup_agent/drivers", icon: <FaBus /> },
];
const VehicleDriverData = [
  {
    Vid: 1,
    vnum: "V12345",
    drivername: "H.A.Priyantha Perera",
    contact: "0112345678",
    sLocation: "Rosmead Place, Colombo 7",
  },
  {
    Vid: 2,
    vnum: "V98765",
    drivername: "Saman Hettiarachchi",
    contact: "0332250444",
    sLocation: "Main St, Colombo 7",
  },
];
const VehicleData = [
  {
    Vid: 1,
    vnum: "V12345",
    model: "Nissan Caravan TD27",
    YOM: " 1991",
    Gear: "Manual",
    Engine: "2700",
    options: ["AIR CONDITION", "POWER STEERING", "POWER WINDOW"],
  },
  {
    Vid: 2,
    vnum: "V98765",
    model: "Isuzu Fargo",
    YOM: " 1998",
    Gear: "Manual",
    Engine: "2700",
    options: ["AIR CONDITION", "POWER STEERING", "POWER WINDOW"],
  },
];
const VehicleCarouselData = [
  {
    Vid: 1,
    image: "https://riyasewana.com/uploads/nissan-caravan-15602054231.jpg",
    imageAlt: "v1 img1",
  },
  {
    Vid: 1,
    image: "https://riyasewana.com/uploads/nissan-caravan-15603406204.jpg",
    imageAlt: "v1 img2 ",
  },
  {
    Vid: 1,
    image: "https://riyasewana.com/uploads/nissan-caravan-15603406056.jpg",
    imageAlt: "v1 img3",
  },
  {
    Vid: 2,
    image: "https://riyasewana.com/uploads/isuzu-fargo-15710084691.jpg",
    imageAlt: "v2 img1",
  },
  {
    Vid: 2,
    image: "https://riyasewana.com/uploads/isuzu-fargo-15710084682.jpg",
    imageAlt: "v2 img2 ",
  },
  {
    Vid: 2,
    image: "https://riyasewana.com/uploads/isuzu-fargo-15710556844.jpg",
    imageAlt: "v2 img3",
  },
];
const initialDriverData = [
  {
    id: 1,
    vid: 1,
    name: "H.A.Priyantha Perera",
    contact: "0332250444",
    address: "Rosmead Place, Colombo 7",
    vnum: "V12345",
    img: "https://image.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg",
  },
  {
    id: 2,
    vid: 2,
    name: "Saman Hettiarachchi",
    contact: "0332250444",
    address: "Flower Rd, Rajagiriya",
    vnum: "V98765",
    img: "https://image.shutterstock.com/image-photo/portrait-happy-mid-adult-man-260nw-1812937819.jpg",
  },
];

function Drivers() {
  const [activeTab, setActiveTab] = useState("drivers");
  const [driverData] = useState(initialDriverData);
  // const [parentData, setParentData] = useState(initialParentData);
  const [vehicleDriverData] = useState(VehicleDriverData);
  // const [childrenData,setChildrenData] = useState(initialChildrenData);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
  };
  const handleClosePopup = () => {
    setSelectedRow(null);
  };
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="flex flex-col gap-10 mt-[4rem] ml-[5rem]">
          <div class="inline-flex">
            <button
              className={`${
                activeTab === "drivers"
                  ? "bg-orange text-black drop-shadow-md border-black border-2"
                  : "bg-gray"
              } w-[10rem] hover:bg-orange hover:text-black font-bold hover:border-black py-2 px-4 rounded-l`}
              onClick={() => setActiveTab("drivers")}
            >
              Drivers
            </button>
            <button
              className={`${
                activeTab === "vehicles"
                  ? "bg-orange text-black drop-shadow-md border-black border-2"
                  : "bg-gray"
              } w-[10rem] hover:bg-orange  hover:text-black font-bold hover:border-black py-2 px-4 rounded-r`}
              onClick={() => setActiveTab("vehicles")}
            >
              Vehicles
            </button>
          </div>
          {/* -------------------------- Driver details-------------------------------------------- */}
          {activeTab === "drivers" && (
            <div className="w-fill h-[45rem] p-8 bg-[#FDF6F6]">
              <h1 className="font-bold text-2xl">Driver Details</h1>

              {/* Search Bar */}
              <div>
                <div className="grid justify-items-end w-3/4 ">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      className=" bg-transparent px-5 py-2 border-2 border-gray rounded-full  outline-none pr-10 placeholder-black placeholder-opacity-75 focus:border-orange"
                      placeholder="Search Drivers..."
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
                    <th className="px-4 py-4 text-left">Contact</th>
                    <th className="px-4 py-4 text-left">Address</th>
                    <th className="px-4 py-4 text-left">Vehicle Number</th>
                  </tr>
                </thead>

                <tbody className="">
                  {driverData
                  .filter((driver) =>
                  driver.name.toLowerCase().includes(searchQuery.toLowerCase()) 
                  )
                  .map((driver) => (
                    <tr
                      key={initialDriverData.id}
                      className="bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                      onClick={() => handleRowClick(driver)}
                    >
                      <td className="text-left px-4 py-4">{driver.id}</td>
                      <td className="text-left px-4 py-4">{driver.name}</td>
                      <td className="text-left px-4 py-4">{driver.contact}</td>
                      <td className="text-left px-4 py-4">{driver.address}</td>
                      <td className="text-left px-4 py-4">{driver.vnum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {/* ---------------end driver details--------------- */}

          {/*------------------------------vehicle Details ----------------------------------*/}

          {activeTab === "vehicles" && (
            <div className="w-fill h-[45rem] p-8 bg-[#FDF6F6]">
              <h1 className="font-bold text-2xl">Vehicle Details</h1>
              {/* Search Bar */}
              <div>
                <div className="grid justify-items-end w-3/4 ">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      className=" bg-transparent px-5 py-2 border-2 border-slate-500 rounded-full  outline-none pr-10 placeholder-black placeholder-opacity-75 focus:border-orange"
                      placeholder="Search Vehicles..."
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
                    <th className="px-4 py-4 text-left">Vehicle Number</th>
                    <th className="px-4 py-4 text-left">Driver's Name</th>
                    <th className="px-4 py-4 text-left">Driver's Contact</th>
                    <th className="px-4 py-4 text-left">Starting Location</th>
                  </tr>
                </thead>

                <tbody className="">
                  {vehicleDriverData
                  .filter((vehicle) =>
                  vehicle.vnum
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
                )
                  .map((vehicle) => (
                    <tr
                      key={vehicle.Vid}
                      className="bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                      onClick={() => handleRowClick(vehicle)}
                    >
                      <td className="text-left px-4 py-4">{vehicle.Vid}</td>
                      <td className="text-left px-4 py-4">{vehicle.vnum}</td>
                      <td className="text-left px-4 py-4">
                        {vehicle.drivername}
                      </td>
                      <td className="text-left px-4 py-4">{vehicle.contact}</td>
                      <td className="text-left px-4 py-4">
                        {vehicle.sLocation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {/* -------------------------end vehicle data----------------------------- */}
        </div>
        {/* -------------------------- driver details popup----------------------- */}

        {activeTab === "drivers" && selectedRow && (
          <DriverVehicleDetails
            isOpen={selectedRow !== null}
            onClose={handleClosePopup}
            activeTab={activeTab} // Pass the activeTab prop here
            content={
              <div>
                <div className="">
                  <div className="grid grid-cols-2 p-2">
                    <div className="col-span-1 flex flex-col gap-2">
                      <div className="w-[8rem] h-[8rem] rounded-full overflow-hidden">
                        <img
                          src={selectedRow.img}
                          className="w-full h-full object-cover"
                          alt="Avatar"
                        />
                      </div>
                      <h2 className="font-bold text-xl ml mt-4">
                        {selectedRow.name}
                      </h2>
                      <h2 className="text-xl ml mt-4 flex flex-row">
                        <p className="font-bold">Ride Status :</p>
                        <p className="text-[#16a34a]">On Ride</p>
                      </h2>
                      <button className="w-[8rem] py-2 px-5 rounded-full font-bold bg-orange flex items-center gap-1">
                        <MdLocationPin className="text-black text-3xl" />
                        <span>Track</span>
                      </button>
                    </div>
                    <div className="col-span-1 flex-col">
                      <div className=" bg-[#EEEE] border-orange border-2 w-full h-auto p-5 rounded-xl">
                        <h className="text-xl font-semibold">
                          <u>Driver's Details</u>
                        </h>
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
                      <div className=" bg-[#EEEE] border-orange border-2 w-full h-auto p-5 rounded-xl mt-5">
                        <h className="text-xl font-semibold">
                          <u>Vehicle Details</u>
                        </h>
                        {VehicleData.filter(
                      (vehicle) => vehicle.Vid === selectedRow.id
                    ).map((vehicle, index) => (
                      <div key={index} className="mt-3">
                        <h2 className="text-lg font-semibold">
                          {vehicle.vnum}
                        </h2>
                        <p>
                          <strong className="mr-2">Model:</strong>
                          {vehicle.model}
                        </p>
                        <p>
                          <strong className="mr-2">
                            {" "}
                            Year of Manufacture:{" "}
                          </strong>
                          {vehicle.YOM}
                        </p>
                        <p>
                          <strong className="mr-2">Gear:</strong>
                          {vehicle.Gear}
                        </p>
                        <p>
                          <strong className="mr-2">Engine Capacity:</strong>
                          {vehicle.Engine}
                        </p>
                        <div className="mt-1">
                          <strong className="mr-2">Options:</strong>
                          {vehicle.options.map((option, index) => (
                            <span
                              key={index}
                              className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full mr-2"
                            >
                              {option}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                      </div>
                    </div>
                  </div>

                  {/* <div className="bg-[#EEEEEE] w-full h-[15rem] mt-5 rounded-xl p-3">
                    <p className="text-xl font-semibold">Dependent's Details</p>
                    <div className="flex flex-1 gap-20 p-2">
                      <div className="bg-[#F9F9F9] w-2/5 h-5"></div>
                      <div className="bg-[#F9F9F9] w-2/5 h-5"> </div>
                    </div>
                  </div> */}
                </div>
              </div>
            }
          />
        )}
        {/*------------------------------------------------------------------------------  */}
        {/* ----------------------------vehicle details popup----------------------------- */}

        {activeTab === "vehicles" && selectedRow && (
          <DriverVehicleDetails
            isOpen={selectedRow !== null}
            onClose={handleClosePopup}
            activeTab={activeTab}
            content={
              <div className="">
                <CarouselLayout
                  data={VehicleCarouselData}
                  vid={selectedRow.Vid}
                />

                <div className="grid grid-cols-2  gap-5">
                  <div className="bg-[#EEEE] border-orange border-2 w-full h-auto p-5 rounded-xl">
                    <h className="text-xl font-semibold">
                      <u>Vehicle Details</u>
                    </h>
                    {VehicleData.filter(
                      (vehicle) => vehicle.Vid === selectedRow.Vid
                    ).map((vehicle, index) => (
                      <div key={index} className="mt-3">
                        <h2 className="text-lg font-semibold">
                          {vehicle.vnum}
                        </h2>
                        <p>
                          <strong className="mr-2">Model:</strong>
                          {vehicle.model}
                        </p>
                        <p>
                          <strong className="mr-2">
                            {" "}
                            Year of Manufacture:{" "}
                          </strong>
                          {vehicle.YOM}
                        </p>
                        <p>
                          <strong className="mr-2">Gear:</strong>
                          {vehicle.Gear}
                        </p>
                        <p>
                          <strong className="mr-2">Engine Capacity:</strong>
                          {vehicle.Engine}
                        </p>
                        <div className="mt-1">
                          <strong className="mr-2">Options:</strong>
                          {vehicle.options.map((option, index) => (
                            <span
                              key={index}
                              className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full mr-2"
                            >
                              {option}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <div className="bg-[#EEEE] border-orange border-2 w-full h-auto p-5 rounded-xl">
                    <h className="text-xl font-semibold">
                      <u>Owner Details</u>
                    </h>
                  </div> */}
                  <div className="bg-[#EEEE] border-orange border-2 w-full h-auto p-5 rounded-xl">
                    <h className="text-xl font-semibold">
                      <u>Driver Details</u>
                    </h>
                    {VehicleDriverData.filter(
                      (vehicle) => vehicle.Vid === selectedRow.Vid
                    ).map((driver, index) => (
                      <div key={index} className="mt-3">
                        <h2 className="text-lg font-semibold">
                          {driver.drivername}
                        </h2>
                        <p>
                          <strong className="mr-2">Vehicle Number:</strong>
                          {driver.vnum}
                        </p>
                        <p>
                          <strong className="mr-2"> Contact:</strong>
                          {driver.contact}
                        </p>
                        <p>
                          <strong className="mr-2">Starting Location:</strong>
                          {driver.sLocation}
                        </p>
                      </div>
                    ))}
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

export default Drivers;
