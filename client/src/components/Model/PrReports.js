import React from 'react'

function PrReports({visible, onClose}) {
    if (!visible) return null;
    return (
     
      <div className="pt-10 fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm">
        <div className="ml-[80px] mt-10 pt-4 bg-[#F4F4F4] w-[770px] h-[540px] rounded-lg shadow-lg drop-shadow-lg">
        {/* topic */}
        <div className='font-bold ml-12 mt-4 text-2xl'>Previous Reports</div>
        <div className="mt-4 ml-10 pl-8 pt-4 pb-3 mb-8 bg-[rgb(244,244,244)] w-[680px]  rounded-lg shadow-md drop-shadow-md">
            <h1 className="font-bold p-1 text-[16px]">Date:: 2022/12/25</h1>
            <h1 className="font-bold p-1 text-[16px]">Coordinator:: Mr.Manjula Prabath</h1>
            <form className="">
                <input type="text" placeholder="Comment on the vehicle condition here..." className="w-[630px] h-[100px] pl-6 pt-1 pb-2 mb-3 rounded-lg shadow-md drop-shadow-md"></input> 
            </form>
            <h1 className="font-bold p-1  pt-4 text-[16px]">Date:: 2023/04/25</h1>
            <h1 className="font-bold p-1 text-[16px]">Coordinator:: Mr.Manjula Prabath</h1>
            <form className="">
                <input type="text" placeholder="Comment on the vehicle condition here..." className="w-[630px] h-[100px] pl-6 pt-1 pb-2 mb-3 rounded-lg shadow-md drop-shadow-md"></input> 
            </form>
            <button onClick={onClose}  className="ml-[490px] p-2 mb-2 font-semibold bg-gradient-to-b from-amber-500 to-amber-300 w-32  rounded-lg shadow-md hover:shadow-lg transform hover:scale-[103%] trasition duration-300 ease-out  hover:cursor-pointer" >Go back</button>
        </div>
    </div>
    </div>
  )
}

export default PrReports