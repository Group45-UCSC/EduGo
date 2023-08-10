import React, { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaShippingFast,FaChild, FaRegEdit, FaTrash } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import {AiFillDashboard} from "react-icons/ai";
import { BsFillCarFrontFill } from "react-icons/bs";
import { BsCoin } from "react-icons/bs";
import userDefault from "../../images/userDefault.png";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <AiFillDashboard /> },
  { title: "Employees", path: "/admin/employees", icon: <FaUserGroup /> },
  { title: "Drivers & Vehicles", path: "/admin/drivers", icon: <BsFillCarFrontFill /> },
  { title: "School Rides", path: "/admin/rides", icon: <FaShippingFast /> },
  { title: "Children & Parents", path: "/admin/childrenlist", icon: <FaChild /> },
  { title: "Finance", path: "/admin/finance", icon: <BsCoin /> },
];
function AdminProfile() {
  const [name, setName] = useState("John Doe");
  const [address, setAddress] = useState("123 Main Street");
  const [email, setEmail] = useState("johndoe@example.com");
  const [contact, setContact] = useState("0782577381");

  // Original values before editing
  const [originalName, setOriginalName] = useState(name);
  const [originalAddress, setOriginalAddress] = useState(address);
  const [originalEmail, setOriginalEmail] = useState(email);
  const [originalContact, setOriginalContact] = useState(contact);

  // Separate isEditing states for each field
  const [nameEditing, setNameEditing] = useState(false);
  const [addressEditing, setAddressEditing] = useState(false);
  const [emailEditing, setEmailEditing] = useState(false);
  const [contactEditing, setContactEditing] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDeleteImage = () => {
    if (selectedFile) {
      const shouldDelete = window.confirm(
        "Are you sure you want to delete the image?"
      );
      if (shouldDelete) {
        // Perform the image deletion logic here
        setSelectedFile(null); // Clear the selected file after deletion
      }
    }
  };
  // ------------edit------------//
  const handleEditName = () => {
    setNameEditing(true);
  };
  const handleEditAddress = () => {
    setAddressEditing(true);
  };
  const handleEditEmail = () => {
    setEmailEditing(true);
  };
  const handleEditContact = () => {
    setContactEditing(true);
  };

  // ----------------save----------//
  const handleNameSave = () => {
    if (name.trim() === "") {
      setName(name);
    } else {
      setNameEditing(false);
      setOriginalName(name);
    }
  };

  const handleEmailSave = () => {
    if (email.trim() === "") {
      setEmail(email);
    } else {
      setEmailEditing(false);
      setOriginalEmail(email);
    }
  };

  const handleContactSave = () => {
    if (contact.trim() === "") {
      setContact(contact);
    } else {
      setContactEditing(false);
      setOriginalContact(contact);
    }
  };

  const handleAddressSave = () => {
    if (address.trim() === "") {
      setAddress(address);
    } else {
      setAddressEditing(false);
      setOriginalAddress(address);
    }
  };

  // ----------------cancel-----------//
  const handleNameCancel = () => {
    setNameEditing(false);
    setName(originalName); // Reset to the original name
  };

  const handleEmailCancel = () => {
    setEmailEditing(false);
    setEmail(originalEmail); // Reset to the original email
  };

  const handleContactCancel = () => {
    setContactEditing(false);
    setContact(originalContact); // Reset to the original contact
  };

  const handleAddressCancel = () => {
    setAddressEditing(false);
    setAddress(originalAddress); // Reset to the original address
  };
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        {/* -----------Admin profile tab------- */}
        <div className="grid grid-cols-2">
          {/* ---------profile picture----------- */}
          <div className="bg-[#D9D9D9] mx-5 my-8 md:mx-[10rem] md:my-[8rem] lg:w-[256px] lg:h-[256px] rounded-2xl border-black border-2 md:m-3 justify-center items-center">
            <div className="flex flex-col gap-2 ">
              <div className="relative w-[175px] h-[175px] rounded-full overflow-hidden my-[1rem] mx-[3.5rem]">
                {selectedFile ? (
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    className="w-full h-full object-cover"
                    alt="user"
                  />
                ) : (
                  <img
                    src={userDefault}
                    className="w-full h-full object-center"
                    alt="User Placeholder"
                  />
                )}
              </div>
              <div className="flex flex-row gap-[5rem] justify-center">
                <div className="group inline-flex items-center justify-center bg-orange border-black border-2 rounded-xl p-1 transition-all hover:bg-[#ff7f00] transform hover:scale-110">
                  <label htmlFor="fileInput">
                    <input
                      id="fileInput"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <FaRegEdit style={{ fontSize: "25px" }} />
                  </label>
                </div>
                <div
                  className={`group inline-flex items-center justify-center border-black border-2 rounded-xl p-1 transition-all ${
                    selectedFile
                      ? " bg-orange hover:bg-[#ff7f00] transform hover:scale-110"
                      : ""
                  }`}
                  onClick={handleDeleteImage}
                >
                  <FaTrash style={{ fontSize: "25px" }} />
                </div>
              </div>
            </div>
          </div>
          {/* --------------------------------------- */}

          {/* -----------profile details-------------- */}
          <div className="flex flex-col w-full h-[41rem] gap-5">
            <div className="bg-[#D9D9D9] w-3/4 mt-10  p-5">
              <div className="bg-[#EEEEEE]  w-full h-full p-5">
                <div className="flex flex-col gap-5">
                  <div>
                    <h1 className="mx-5">Name</h1>
                    <div className="bg-[#D9D9D9] w-full h-16  flex items-center justify-between">
                      {nameEditing ? (
                        <input
                          type="text"
                          className="px-5 w-full h-full bg-[#D9D9D9] border rounded "
                          value={name}
                          onChange={handleNameChange}
                        />
                      ) : (
                        <div className="font-semibold px-5">{name}</div>
                      )}
                      {nameEditing ? (
                        <div className="flex flex-row mx-1 gap-2">
                          <button
                            onClick={handleNameCancel}
                            className="bg-[#EEEEEE] text-black rounded p-2 w-20 hover:bg-[#CCCCCC] transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleNameSave}
                            className="bg-orange text-white rounded p-2 w-20 hover:bg-[#ff7f00] transition-colors mr-2"
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            onClick={handleEditName}
                            className="bg-[#EEEEEE] text-black rounded p-2 mr-5 hover:bg-[#CCCCCC]  transition-colors"
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h1 className="mx-5">Email</h1>
                    <div className="bg-[#D9D9D9] w-full h-16  flex items-center justify-between">
                      {emailEditing ? (
                        <input
                          type="text"
                          className="px-5 w-full h-full bg-[#D9D9D9] border rounded"
                          value={email}
                          onChange={handleEmailChange}
                        />
                      ) : (
                        <div className="font-semibold px-5">{email}</div>
                      )}
                      {emailEditing ? (
                        <div className="flex flex-row mx-1 gap-2">
                          <button
                            onClick={handleEmailCancel}
                            className="bg-[#EEEEEE] text-black rounded p-2 w-20 hover:bg-[#CCCCCC] transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleEmailSave}
                            className="bg-orange text-white rounded p-2 w-20 hover:bg-[#ff7f00] transition-colors mr-2"
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            onClick={handleEditEmail}
                            className="bg-[#EEEEEE] text-black rounded p-2 mr-5 hover:bg-[#CCCCCC]  transition-colors"
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h1 className="mx-5">Contact Number</h1>
                    <div className="bg-[#D9D9D9] w-full h-16  flex items-center justify-between">
                      {contactEditing ? (
                        <input
                          type="text"
                          className="px-5 w-full h-full bg-[#D9D9D9] border rounded"
                          value={contact}
                          onChange={handleContactChange}
                        />
                      ) : (
                        <div className="font-semibold px-5">{contact}</div>
                      )}
                      {contactEditing ? (
                        <div className="flex flex-row mx-1 gap-2">
                          <button
                            onClick={handleContactCancel}
                            className="bg-[#EEEEEE] text-black rounded p-2 w-20 hover:bg-[#CCCCCC] transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleContactSave}
                            className="bg-orange text-white rounded p-2 w-20 hover:bg-[#ff7f00] transition-colors mr-2"
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            onClick={handleEditContact}
                            className="bg-[#EEEEEE] text-black rounded p-2 mr-5 hover:bg-[#CCCCCC]  transition-colors"
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h1 className="mx-5">Address</h1>
                    <div className="bg-[#D9D9D9] w-full h-16  flex items-center justify-between">
                      {addressEditing ? (
                        <input
                          type="text"
                          className="px-5 w-full h-full bg-[#D9D9D9] border rounded"
                          value={address}
                          onChange={handleAddressChange}
                        />
                      ) : (
                        <div className="font-semibold px-5">{address}</div>
                      )}
                      {addressEditing ? (
                        <div className="flex flex-row mx-1 gap-2">
                          <button
                            onClick={handleAddressCancel}
                            className="bg-[#EEEEEE] text-black rounded p-2 w-20 hover:bg-[#CCCCCC] transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleAddressSave}
                            className="bg-orange text-white rounded p-2 w-20 hover:bg-[#ff7f00] transition-colors mr-2"
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            onClick={handleEditAddress}
                            className="bg-[#EEEEEE] text-black rounded p-2 mr-5 hover:bg-[#CCCCCC]  transition-colors"
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default AdminProfile;
