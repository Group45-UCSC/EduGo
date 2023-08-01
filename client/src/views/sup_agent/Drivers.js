import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer, FaSearch } from "react-icons/fa";
import DriverVehicleDetails from "../../components/popups/DriverVehicleDetails";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/sup_agent/dashboard", icon: <FaBeer /> },
  { title: "Parents", path: "/sup_agent/parents", icon: <FaBeer /> },
  { title: "Drivers", path: "/sup_agent/drivers", icon: <FaBeer /> },
];

const initialVehicleData = [
  {
    id: 1,
    vnum: "John Doe",
    drivername: "910123456V",
    contact: "0112345678",
    sLocation: "Rosmead Place, Colombo 7",
  },
  {
    id: 2,
    vnum: "S.N.Ramanayake",
    drivername: "997542770V",
    contact: "0332250444",
    sLocation: "Main St, Colombo 7",
  },
];
const initialDriverData = [
  {
    id: 1,
    name: "John Doe",
    contact: "0332250444",
    address: "Rosmead Place, Colombo 7",
    vnum: "V12345",
    img: "https://image.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg",
  },
  {
    id: 2,
    name: "Nethmini Abeykoon",
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
  const [vehicleData] = useState(initialVehicleData);
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
                  {driverData.map((driver) => (
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
          {/* ---------------end vehicle details--------------- */}

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
                  {vehicleData.map((vehicle) => (
                    <tr
                      key={vehicle.id}
                      className="bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                      onClick={() => handleRowClick(vehicle)}
                    >
                      <td className="text-left px-4 py-4">{vehicle.id}</td>
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
        
        {activeTab === "drivers" && selectedRow && (
          <DriverVehicleDetails
            isOpen={selectedRow !== null}
            onClose={handleClosePopup}
            activeTab={activeTab} // Pass the activeTab prop here
            content={
              <div>
                <div className="">
                  <div className="grid grid-cols-2 p-2">
                    <div className="flex flex-col gap-2">
                      <img
                        src={selectedRow.img}
                        className="w-[8rem] rounded-full"
                        alt="Avatar"
                      />
                      <h2 className="font-bold text-xl ml mt-4">
                        {selectedRow.name}
                      </h2>
                    </div>
                    <div className="bg-gradient-to-tl from-[#f6ad55] to-[#fbd38d] w-full h-auto p-5 rounded-xl">
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
            }
          />
        )}

        {activeTab === "vehicles" && selectedRow && (
          <DriverVehicleDetails
            isOpen={selectedRow !== null}
            onClose={handleClosePopup}
            activeTab={activeTab}
            content={
              <div className="grid grid-cols-3 flex-row gap-15">
                <div className="bg-black w-[100px] h-2"></div>
                <div className="bg-orange w-[100px] h-2"></div>
                <div className="bg-gray w-[100px] h-2"></div>
              </div>
            }
          />
        )}
      </MainLayout>
    </div>
  );
}

export default Drivers;
