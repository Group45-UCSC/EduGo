import React from 'react';
import { FaMarker } from "react-icons/fa";

function PrReports({visible, onClose}) {
    if (!visible) return null;
    return (
     
      <div className="pt-10 fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm">
        <div className="ml-[80px] pt-4 bg-[#F4F4F4] w-[770px] h-[590px] rounded-lg shadow-lg drop-shadow-lg">
        {/* topic */}
        <div className='font-bold ml-12 mt-4 text-2xl'>Previous Reports</div>
        <div className="mt-4 ml-10 pl-8 pt-4 pb-3 mb-8 bg-[rgb(244,244,244)] w-[680px]  rounded-lg shadow-md drop-shadow-md">
          <div className='grid grid-cols-2 gap-[0px]'>
            <h1 className="font-bold p-1 text-[16px]">Date:: 2022/12/25</h1>
            <button className="-ml-32 p-1 mb-1 -mt-1 font-semibold bg-gradient-to-b from-amber-500 to-amber-300 w-12  rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer" > <FaMarker className='pl-2 w-8'></FaMarker></button> 
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
                        <p className=' text-green-700'> <b> Electrical and Electronics </b></p>
                    </div>
                </div>
                    <input type="text" placeholder="Comment on the vehicle condition here..." className="w-[620px] h-[100px] pl-6 pt-1 pb-2 mb-3 rounded-lg shadow-md drop-shadow-md"></input> 
            </form> 
            <button onClick={onClose}  className="ml-[490px] p-2 mb-2 font-semibold bg-gradient-to-b from-amber-500 to-amber-300 w-32  rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer" >Go back</button>   
    </div>
    </div>
    </div>
  )
}

export default PrReports