import React, { useState } from "react";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";

function Complaint() {
  const [complaintType, setComplaintType] = useState('');
  const [complaintDetails, setComplaintDetails] = useState("");
  const [dateOfOccurrence, setDateOfOccurrence] = useState(null);
  const [attachments, setAttachments] = useState([]);
  const userId = localStorage.getItem("userId");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("attachments", attachments[0]); // Use FormData for files

      const body = {
        complaintType,
        complaintDetails,
        dateOfOccurrence,
      };
      // Combine FormData for files and JSON data for other fields
      for (const key in body) {
        formData.append(key, body[key]);
      }

      const response = await fetch(
        `http://localhost:5000/edugo/parent/complaint/add/${userId}`,
        {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          // body: JSON.stringify(body),
          body: formData, // Send the combined data
        }
      );
      if (response.status === 200) {
        swal({
          title: "Your Complaint Submitted!",
          icon: "success",
          buttons: {
            confirm: {
              className:
                "bg-orange text-white px-10 py-2 rounded-lg items-center hover:bg-gray ",
            },
          },
        }).then(() => {
          console.log(response);
          // Clear the input fields after successful submission
          setComplaintType('');
          setComplaintDetails("");
          setDateOfOccurrence(null);
          setAttachments([]);
        });
      } else {
        swal({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Try again!",
          buttons: {
            confirm: {
              className:
                "bg-orange text-white px-10 py-2 rounded-lg items-center hover:bg-gray ",
            },
          },
        });
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting the complaint. Please try again later.");
    }
  };
  const options = [
    // { value: "", label: "Select Complaint Type" },
    { value: "Transportation Issue", label: "Transportation Issue" },
    { value: "Communication Issue", label: "Communication Issue" },
    { value: "Safety Concern", label: "Safety Concern" },
    { value: "Behavioral Concern", label: "Behavioral Concern" },
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
      setComplaintType(''); // Reset the complaint type to null
      setComplaintDetails("");
      setDateOfOccurrence(null);
      setAttachments([]);
    }
  };
  const handleComplaintTypeChange = (selectedOption) => {
    console.log("Selected Complaint Type:", selectedOption.value);
    setComplaintType(selectedOption.value);
  };
  const handleComplaintDetailsChange = (e) => {
    setComplaintDetails(e.target.value);
  };
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDateOfOccurrence(selectedDate || null);
    if (selectedDate && !isValidDate(selectedDate)) {
      e.target.setCustomValidity(
        "Please enter a valid date in the format YYYY-MM-DD."
      );
    } else {
      e.target.setCustomValidity("");
    }
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
              onChange={handleComplaintTypeChange}
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
              maxLength={255}
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
