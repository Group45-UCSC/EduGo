import React, { useState } from "react";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
function Complaint({ onComplaintSubmit }) {
  const [complaintType, setComplaintType] = useState(null);
  const [complaintDetails, setComplaintDetails] = useState("");
  const [dateOfOccurrence, setDateOfOccurrence] = useState(null);
  const [attachments, setAttachments] = useState([]);
  const [sendToVC, setSendToVC] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComplaint = {
      complaintType,
      complaintDetails,
      dateOfOccurrence,
      attachments,
      sendToVC,
    };
    onComplaintSubmit(newComplaint);


    setComplaintType(null);
    setComplaintDetails("");
    setDateOfOccurrence(null);
    setAttachments([]);
    setSendToVC(false);
    
    let message =
      "Your complaint has been submitted. Our team will address it promptly 😊";

    if (sendToVC) {
      message += " Your Complaint will also be sent to the vehicle coordinator.";
    }

    alert(message);
    
  };
  const options = [
    // { value: "", label: "Select Complaint Type" },
    { value: "Route Issue", label: "Route Issue" },
    { value: "Vehicle Problem", label: "Vehicle Problem" },
    { value: "Behavior Issue", label: "Behavior Issue" },
    { value: "Incident Report", label: "Incident Report" },
    { value: "Other", label: "Other" },
  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderColor: state.menuIsOpen || state.isFocused ? "#FFA500" : "#ccc",
      backgroundColor: state.isFocused ? "#FFA500" : "white",
      color: state.isFocused ? "white" : "black",
    }),
  };
  const handleCancel = () => {
    if (
      window.confirm(
        "Are you sure you want to cancel? Your changes will be discarded."
      )
    ) {
      setComplaintType(null); // Reset the complaint type to null
      setComplaintDetails("");
      setDateOfOccurrence(null);
      setAttachments([]);
    }
  };
  const handleComplaintTypeChange = (selectedOption) => {
    setComplaintType(selectedOption.value);
  };
  const handleComplaintDetailsChange = (e) => {
    setComplaintDetails(e.target.value);
  };
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDateOfOccurrence(selectedDate);
    if (selectedDate && !isValidDate(selectedDate)) {
      e.target.setCustomValidity(
        "Please enter a valid date in the format YYYY-MM-DD."
      );
    } else {
      e.target.setCustomValidity("");
    }
  };
  const handleSendToVCChange = (e) => {
    setSendToVC(e.target.checked);
  };
  const isValidDate = (dateString) => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    return datePattern.test(dateString);
  };

  const handleAttachmentChange = (e) => {
    const files = Array.from(e.target.files);
    setAttachments(files);
  };

  const renderLabel = (label, required) => {
    return (
      <label className="text-lg font-semibold">
        {label} {required ? <span className="text-[#b91c1c]">*</span> : null}
      </label>
    );
  };

  return (
    <div className="bg-[#EEEEEE] h-full p-5 pt-4  flex flex-col gap-5">
      <div className="text-xl">
        <strong>Add Your Complaint</strong>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className=" h-[24rem] flex flex-col gap-5 overflow-auto px-3">
          <div className="flex flex-col gap-2">
            {renderLabel("Complaint Type", true)}
            <Select
              id="complaintType"
              options={options}
              value={options.find((option) => option.value === complaintType)}
              onChange={{ handleComplaintTypeChange }}
              required
              styles={customStyles}
              placeholder="Select Complaint Type"
            ></Select>
          </div>
          <div className="flex flex-col gap-2">
            {renderLabel("Complaint Details", true)}
            <textarea
              id="complaintDetails"
              value={complaintDetails}
              onChange={handleComplaintDetailsChange}
              className="pl-2 rounded"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            {renderLabel("Attachments", false)}
            <label
              htmlFor="attachments"
              className="cursor-pointer rounded p-2 w-1/4 bg-orange text-white text-center hover:bg-[#ffa600] transition"
            >
              Upload Files
            </label>
            <input
              type="file"
              id="attachments"
              multiple
              onChange={handleAttachmentChange}
              className=" rounded p-2 w-full hidden"
            />
            <div className="text-base text-gray">
              {attachments.map((file, index) => (
                <div key={index}>{file.name}</div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {renderLabel("Date of Occurrence", false)}
            <input
              type="date"
              id="dateOfOccurrence"
              value={dateOfOccurrence || ""}
              onChange={handleDateChange}
              placeholder="DD-MM-YYYY"
              className="border-none rounded p-2 w-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-5">
              {renderLabel("Send To Vehicle Coordinator", false)}
              <input
                type="checkbox"
                id="sendToVC"
                checked={sendToVC}
                onChange={handleSendToVCChange}
                className=""
              />
            </div>
            <div className="text-sm text-[#a8a29e] mt-1">
              This will forward your complaint to the vehicle coordinator for
              further attention.
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <button
            type="submit"
            className="bg-orange text-white px-4 py-2 rounded hover:bg-[#ffa600] transition"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-[#94a3b8] text-white px-4 py-2 rounded hover:bg-gray transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Complaint;
