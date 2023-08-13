import React from "react";


function ApproveOrRemove({visible, onClose}) {

    const handleClickPrevious = () => {
        window.location.href = `/vc/ccrequest`;
      };

    if (!visible) return null;
     return (
    <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm">
        <div className="ml-[40px] mt-10 pt-4 bg-[#F4F4F4] w-[770px] h-[390px] rounded-lg shadow-lg drop-shadow-lg">
        {/* topic */}
        <div className='font-bold ml-12 mt-4 text-2xl'>Check again</div>

        <div className="pl-4 mb-3">
            <h1 className="font-bold p-1 ml-10 text-[16px] text-red-500">Evaluation criteria</h1>
                    <div className="ml-12">
                        <input type="checkbox" id="critiria2" name="critiria2" value="two"></input>
                        <label for="critiria2"> Interior Condition</label><br/>
                        <input type="checkbox" id="critiria5" name="critiria5" value="five"></input>
                        <label for="critiria5"> Documentation and Maintenance History</label><br/>
                        <input type="checkbox" id="critiria6" name="critiria6" value="six"></input>
                        <label for="critiria7"> Transmission and Drivetrain </label><br/>
                        <input type="checkbox" id="critiria8" name="critiria8" value="eight"></input>
                        <label for="critiria8"> Electrical and Electronics </label><br/>
                    </div>
        </div>
        <input type="text" placeholder="Comment on the vehicle condition here..." className="w-[700px] h-[100px] ml-12 pl-6 pt-1 pb-2 mb-3 rounded-lg shadow-md drop-shadow-md"></input>

        {/* buttons */}
        <div className='grid grid-cols-2 gap-[80px] mt-4'>
              <button onClick={onClose} className="ml-[60px] p-2 mb-2 font-semibold bg-gradient-to-b from-red-600 to-red-400 w-32  rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer" >Remove</button>
              <button  onClick={handleClickPrevious} className="ml-[160px] p-2 mb-2 font-semibold bg-gradient-to-b from-green-600 to-green-400 w-32  rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer" >Accept</button>    
            </div>
        </div>
    </div>
  )
}

export default ApproveOrRemove