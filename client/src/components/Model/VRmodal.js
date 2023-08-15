import dlcard from"../../images/dlcard.jpg";
import schoolVan from"../../images/schoolVan.jpeg"
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

function VRmodal({visible, onClose}) {
    if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm overflow-y-scroll ">
        <div className="ml-96 mt-8 mb-6 pt-4 bg-[#F4F4F4] w-[900px] rounded-lg shadow-lg drop-shadow-lg">
            {/* topic */}
            <div className='font-bold ml-16 mt-4 text-2xl'>Vehicle Registration Form</div>

            {/* display image container */}
            <div className="flex mt-8">
                <BsChevronLeft className="mt-14 ml-[30%] w-8 h-8"/>
                <img src={schoolVan} alt="school van" className="ml-12 max-h-[150px] max-w-[300px]"></img>
                <BsChevronRight className="mt-14 ml-12 w-8 h-8"/>
            </div>

            {/* all images container */}
            <div className="flex mt-8">
                <img src={schoolVan} alt="school van" className="ml-[20%] h-[50px] cursor-pointer"></img>
                <img src={schoolVan} alt="school van" className="ml-2 h-[50px]  cursor-pointer"></img>
                <img src={schoolVan} alt="school van" className="ml-2 h-[50px]  cursor-pointer"></img>
                <img src={schoolVan} alt="school van" className="ml-2 h-[50px]  cursor-pointer"></img>
                <img src={schoolVan} alt="school van" className="ml-2 h-[50px]  cursor-pointer"></img>
                <img src={schoolVan} alt="school van" className="ml-2 h-[50px]  cursor-pointer"></img>
                <img src={schoolVan} alt="school van" className="ml-2 h-[50px]  cursor-pointer"></img>
            </div>
                {/* firstsqure */}
                <div className="mt-4 ml-10 pl-8 pt-4 pb-3 grid grid-cols-2 gap-[200px]">
                    <div className="">
                        <h1 className="font-bold p-1 text-[19px] text-orange-500"> Vehicle's Details</h1> 
                        <p className="p-1"> Type : van</p>
                        <p className="p-1"> Make : Nissan</p>
                        <p className="p-1"> Model : Hiace</p>
                        <p className="p-1"> Year : 1981</p>
                        <p className="p-1"> License Plate : 50 - 0591</p>
                        <p className="p-1"> Engine Number : LH 1989</p>
                        <p className="p-1"> Chassis Number : 1ABCD2EFGH14JKL</p>
                    </div>
                    <div className="">
                        <h1 className="font-bold p-1 text-[19px] text-orange-500"> Driver's Details</h1> 
                        <p className='mb-1'>Name: Rasindu Vimanga</p>
                        <p className='mb-1'>Email: rasindu@gmail.com</p>
                        <p className='mb-1'>NIC: 980011234V</p>
                        <p className='mb-1'>Contact: 077-1231234</p>
                        <p className='mb-1'>Address: No:10, Queens Road, Colombo 03</p>
                        <p className='mb-1'>Birthday: 1998-01-01</p>
                        <p className='mb-1'>License Photo:</p>
                        <img src={dlcard} alt="dlcard" className="ml-[5%] w-[220px] h-[150px]"></img>
                    </div>
                </div>

                <form className="grid grid-cols-2 gap-[88px]">
                            <button onClick={onClose} className="ml-[80px] mt-6 p-2 mb-4 font-semibold bg-gradient-to-b from-red-600 to-red-400 w-32  rounded-lg shadow-md hover:shadow-lg transform hover:scale-[102%] trasition duration-300 ease-out  hover:cursor-pointer drop-shadow-md" >DECLINE</button>
                            <button onClick={onClose} className="ml-[80px] mt-6 p-2 mb-4 font-semibold bg-gradient-to-b from-green-600 to-green-400 w-32  rounded-lg shadow-md hover:shadow-lg transform hover:scale-[102%] trasition duration-300 ease-out  hover:cursor-pointer drop-shadow-md" >ACCEPT</button>
                </form>    
            </div>  
    </div>
  )
}

export default VRmodal