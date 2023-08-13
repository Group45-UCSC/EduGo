import { FaMarker } from "react-icons/fa";
import AorR from "./AorR";
import React,{useState} from "react";


function PrReports({visible, onClose}) {

  const [showAorR, setshowAorR] = useState (false);
  const handleOnClose =() => setshowAorR(false);


  const [name, setName] = useState("Date:: 2022/12/25");

  // Original values before editing
  const [originalName, setOriginalName] = useState(name);

  // Separate isEditing states for each field
  const [nameEditing, setNameEditing] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

   // ------------edit------------//
  const handleEditName = () => {
    setNameEditing(true);
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

    // ----------------cancel-----------//
  const handleNameCancel = () => {
    setNameEditing(false);
    setName(originalName); // Reset to the original name
  };




    if (!visible) return null;
    return (
     
      <div className="pt-10 fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm">
        <div className="ml-[80px] pt-4 bg-[#F4F4F4] w-[770px] h-[610px] rounded-lg shadow-lg drop-shadow-lg">
        {/* topic */}
        <div className='font-bold ml-12 mt-4 text-2xl'>Previous Reports</div>
        <div className="mt-4 ml-10 pl-8 pt-4 pb-3 mb-8 bg-[rgb(244,244,244)] w-[680px]  rounded-lg shadow-md drop-shadow-md">
          <div className='grid grid-cols-2 gap-[0px]'>

            {/* new */}
            <div>
                    <div className=" flex items-center justify-between font-bold p-1 text-[16px]">
                      {nameEditing ? (
                        <input
                          type="text"
                          className="px-5 w-full h-full border rounded "
                          value={name}
                          onChange={handleNameChange}
                        />
                      ) : (
                        <div className="font-bold -ml-5 px-5">{name}</div>
                      )}
                      {nameEditing ? (
                        <div className="flex flex-row mx-1 gap-[1px]">
                          <button
                            onClick={handleNameCancel}
                            className=" text-black rounded ml-2 p-2 w-16 hover:bg-[#e1e1e1]   shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleNameSave}
                            className="bg-gradient-to-b from-amber-500 to-amber-300 rounded p-2 w-16 hover:bg-[#ff7f00]  shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer"
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            onClick={handleEditName}
                            className="-ml-32 p-1 mb-1 -mt-1 font-semibold bg-gradient-to-b from-amber-500 to-amber-300 w-12 h-10  rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer" > <FaMarker className='pl-2 w-8'></FaMarker></button> 
                        </div>
                      )}
                    </div>
                  </div>
      
          </div>
            <h1 className="font-bold p-1 text-[16px]">Coordinator:: Mr.Manjula Prabath</h1>

            <form className="">
                {/* critiria */}
                <div className="pl-4 mb-3">
                    <h1 className="font-bold p-1 text-[16px] text-slate-800">Evaluation criteria</h1>
                    <div className="ml-4">
                        <p className=' text-green-700'><b> Exterior Condition</b> </p>
                        <p className=' text-red-700'> <b>Interior Condition</b></p>
                        <p className=' text-green-700'><b> Mechanical Condition</b></p>
                        <p className=' text-green-700'><b> Undercarriage and Suspension </b> </p>
                        <p className=' text-red-700'> <b> Documentation and Maintenance History</b></p>
                        <p className=' text-green-700'> <b> Brakes and Steeringn</b></p>
                        <p className=' text-red-700'> <b>Transmission and Drivetrain </b></p>
                        <p className=' text-red-700'> <b> Electrical and Electronics </b></p>
                    </div>
                </div>
                    <input type="text" placeholder="Comment on the vehicle condition here..." className="w-[620px] h-[100px] pl-6 pt-1 pb-2 mb-3 mt-2 rounded-lg shadow-md drop-shadow-md"></input> 
            </form> 
            <div className='grid grid-cols-2 gap-[10px]'>
              <button onClick={onClose}  className="ml-[4px] p-2 mb-2 font-semibold bg-gradient-to-b from-amber-600 to-amber-400 w-32  rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer" >Go back</button>
              <button onClick={() =>setshowAorR(true)} className="ml-[160px] p-2 mb-2 font-semibold bg-gradient-to-b from-green-600 to-green-400 w-32  rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer" >Next</button>    
            </div>
            
    </div>
    <AorR onClose={handleOnClose} visible={showAorR}/>
    </div>
    </div>
  )
}

export default PrReports