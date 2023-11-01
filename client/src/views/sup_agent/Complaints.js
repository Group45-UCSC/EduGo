import React, { useEffect, useState } from "react";
import ReactSwitch from "react-switch";
import MainLayout from "../../components/layout/MainLayout";
import { FaHome, FaBus, FaUsers, FaTimes } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/sup_agent/dashboard", icon: <FaHome /> },
  { title: "Chat", path: "/sup_agent/chat", icon: <BsFillChatDotsFill /> },
  { title: "Parents", path: "/sup_agent/parents", icon: <FaUsers /> },
  { title: "Drivers", path: "/sup_agent/drivers", icon: <FaBus /> },
];
// const complaintData = [
//   {
//     avatarSrc: "https://tecdn.b-cdn.net/img/new/avatars/2.webp",
//     title: "Vehicle Problem",
//     description: "The condition of the vehicle is not good. The vehicle no is V1234",
//     role:"parent" ,
//   },
//   {
//     avatarSrc: "https://tecdn.b-cdn.net/img/new/avatars/1.webp",
//     title: "Other",
//     description: "A child is continuously disturbing other children.",
//     role:"Driver" ,
//   },

//   // Add more data as needed
// ];

function Complaints() {
  const [complaintData, setComplaintData] = useState([]);

  useEffect(() => {
    async function viewComplaints() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/supAgent/complaints/viewComplaints`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setComplaintData(data);
      } catch (error) {
        console.error(" Error fetching driver details", error);
      }
    }
    viewComplaints();
  }, []);
  // Initialize an object where the keys are complaint IDs and the values are the corresponding states.
  const initialComplaints = complaintData.reduce((acc, complaint) => {
    acc[complaint.complaint_id] = {
      pending: false,
      done: false,
    };
    return acc;
  }, {});
  

  // const [complaintStates, setComplaintStates] = useState(initialComplaints);

  const [showPopups, setShowPopups] = useState({})

  const handleStatusChange = (complaintId, status) => {
    fetch(`http://localhost:5000/edugo/supAgent/complaints/complaintStatus/${complaintId}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({status}),
    })

      .then((response) => {
        if (response.ok) {
          setComplaintData((prevData) =>
            prevData.map((complaint) =>
              complaint.complaint_id === complaintId
              ? {...complaint,status}
              :complaint
              )
              );
        } else {
          console.error(" Error updating status");
        }
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };

//   const handlePendingChange = (complaintId, val) => {
//   setComplaintStates((prevState) => ({
//     ...prevState,
//     [complaintId]: {
//       ...prevState[complaintId],
//       pending: val,
//     },
//   }));
// };
  
//   const handleDoneChange = (complaintId, val) => {
//     setComplaintStates((prevState) => ({
//       ...prevState,
//       [complaintId]: {
//         ...prevState[complaintId],
//         done: val,
//       },
//     }));
//   };

  const togglePopup = (complaintId) => {
    setShowPopups((prevPopups) => ({
      ...prevPopups,
      [complaintId]: !prevPopups[complaintId],
    }));
  };

  const onClose = (index) => {
    togglePopup(index); // Call the togglePopup function to close the popup
  };
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="bg-transparent w-full h-screen p-5 flex justify-center flex-col">
          <div className="p-5 pt-0 text-2xl font-semibold">All Complaints</div>
          <div className="bg-[orange] w-3/4 h-full p-5 flex flex-col gap-5">
            {complaintData.map((complaint, index) => (
              <div
                key={complaint.complaint_id}
                className="bg-[#D9D9D9] w-full h-[8rem] rounded-lg p-3 flex flex-row "
              >
                <div className="w-[6rem] h-[6rem] bg-gray rounded-full mr-5 overflow-hidden">
                  <img
                    src={complaint.avatarSrc}
                    className="w-full h-full object-cover"
                    alt="Avatar"
                  />
                </div>
                <div className="flex-grow ml-8">
                  <div className="bg-transparent w-full p-2 flex flex-row gap-[12rem]">
                    <div className=" flex-col">
                      <h
                        className="text-xl font-semibold cursor-pointer hover:border-b-2 transform hover:scale-[103%] transition duration-300 ease-out"
                        onClick={() => togglePopup(complaint.complaint_id)}
                      >
                        {complaint.type}
                      </h>
                      <p className="">{complaint.complaintdetails}</p>
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="">
                        <div className="flex flex-row gap-3">
                          <h className="font-semibold">Pending Mode</h>
                          <input
                        type="checkbox"
                        checked={complaint.status === "pending"}
                        onChange={() => handleStatusChange(complaint.complaint_id, "pending")}
                      />
                        </div>
                      </div>
                      <div className="">
                        <div className="flex flex-row gap-3">
                          <h className="font-semibold">Done</h>
                          <input
                        type="checkbox"
                        checked={complaint.status === "done"}
                        onChange={() => handleStatusChange(complaint.complaint_id, "done")}
                      />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {complaintData.map(
              (complaint, index) =>
                showPopups[complaint.complaint_id] && (
                  <div
                    key={complaint.complaint_id}
                    className="popup fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 justify-center z-50"
                  >
                    <div className=" w-[50rem] h-auto bg-white ml-[35rem] mt-[5rem] p-8 rounded-md shadow-md popup-container relative">
                      <button
                        className="absolute top-0 right-0 m-2 p-2 text-gray-500 hover:text-[#e53e3e]"
                        onClick={() => onClose(complaint.complaint_id)}
                      >
                        <FaTimes className="h-6 w-6" />
                      </button>
                      <div className="w-full h-full bg-gray m-2 p-5">
                        <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-3"><h1 className="text-l font-semibold">User Name:</h1>{complaint.user_name}</div>
                        <div><h1 className="text-l font-semibold">Complaint Type:</h1>{complaint.type}</div>
                        <div><h1 className="text-l font-semibold">Description:</h1>{complaint.complaintdetails}</div>
                        <div><h1 className="text-l font-semibold">Date of Occurrence:</h1>{complaint.dateofoccurrence}</div>
                        <div><h1 className="text-l font-semibold">Attachments:</h1>{complaint.attachments}</div>

                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Complaints;
