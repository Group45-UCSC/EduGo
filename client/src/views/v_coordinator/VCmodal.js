import React,{useState} from "react";
import VehiCarousel from "../../components/carousel/VehiCarousel";
import PrReports from "../../components/Model/PrReports";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard } from "react-icons/ai";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";
import { useLocation } from "react-router-dom";

// Carouselimage
import vcv1 from"../../images/vcv1.jpg";
import vcv2 from"../../images/vcv2.jpg";
import vcv3 from"../../images/vcv3.jpg";
import vcv4 from"../../images/vcv4.jpg";
import vcv5 from"../../images/vcv5.jpg";
import vcv6 from"../../images/vcv6.jpg";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/vc/dashboard", icon: <AiFillDashboard /> },
  { title: "Vehicles", path: "/vc/vehicles", icon: <BsFillCarFrontFill /> },
  { title: "School Rides", path: "/vc/rides", icon: <FaShippingFast /> },
  { title: "Emergency", path: "/vc/emergency", icon: <FaCarCrash /> },
];


const CAROUSEL_DATA = [
    {
      image:vcv1,
      imageAlt:vcv1
    },
    {
      image:vcv2,
      imageAlt:vcv2
    },
    {
      image:vcv3,
      imageAlt:vcv3
    },
    {
      image:vcv4,
      imageAlt:vcv4
    },
    {
      image:vcv5,
      imageAlt:vcv5
    },
    {
      image:vcv6,
      imageAlt:vcv6
    }
  ]


function VCmodal() {

    const location = useLocation();
    const dataParam = new URLSearchParams(location.search).get("data");
    const item = JSON.parse(decodeURIComponent(dataParam)); 


    const [showPrReports, setshowPrReports] = useState (false);
    const handleOnClose =() => setshowPrReports(false);

    // calender
    const [isCalendarVisible, setCalendarVisibility] = useState(false); // Calendar initially invisible
    const handleToggle = () => {
    setCalendarVisibility(!isCalendarVisible); // Toggle calendar visibility
    }

    
  return (
   
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="ml-[100px] mt-8 mb-6 pt-4 bg-[#F4F4F4] w-[970px] h-[1320px] rounded-lg shadow-lg drop-shadow-lg">
        {/* topic */}
        <div className='font-bold ml-12 mt-4 text-2xl'>Condition Check Form</div>

        <div className="-ml-[180px]">
            <VehiCarousel data={CAROUSEL_DATA} />
        </div>

        {/* firstsqure */}
        <div className="mt-4 ml-10 pl-8 pt-4 pb-3 grid grid-cols-2 gap-[250px] bg-[#F4F4F4] w-[900px] rounded-lg shadow-md drop-shadow-md">
            <div className="">
                <h1 className="font-bold p-1 text-[19px]"> Vehicle Details</h1> 
                <p className="p-1"> Type : {item.vehicle_type}</p>
                <p className="p-1"> Make : {item.make}</p>
                <p className="p-1"> Model : {item.vehicle_model}</p>
                <p className="p-1"> Year : {item.manufacture_year}</p>
                <p className="p-1"> Contact : {item.contact_number}</p>
            </div>
            <div className="">
                <button onClick={() =>setshowPrReports(true)} className=" p-2 mb-3 font-semibold bg-gradient-to-b from-amber-500 to-amber-300 w-40  rounded-lg shadow-md hover:shadow-lg transform hover:scale-[102%] trasition duration-300 ease-out  hover:cursor-pointer" >Previous Reports</button>
                <p  className="p-1" > License Plate : {item.vehicle_no}</p> 
                <p  className="p-1">Engine Number : {item.engine_no}</p>
                <p  className="p-1">Chassis Number : {item.chassis_no}</p>
                <p  className="p-1">Address : {item.address}</p>
                <p  className="p-1">Last checked : 2023/ 03 / 26</p> 
            </div>
        </div>

        <button className="ml-[400px] p-2 mb-2 mt-3 font-semibold bg-gradient-to-b from-amber-500 to-amber-300 w-52  rounded-lg shadow-md hover:shadow-lg transform hover:scale-[102%] trasition duration-300 ease-out  hover:cursor-pointer" >Next date 2023/09/25</button>

        {/* secondsqure */}
        <div className="mt-4 ml-10 pl-8 pt-4 pb-3 mb-3 bg-[rgb(244,244,244)] w-[900px] h-[500px] rounded-lg shadow-md drop-shadow-md">
            <h1 className="font-bold p-1 text-[19px]">Feedback Report</h1>
            <form className="">
                {/* critiria */}
                <div className="pl-4 mb-3">
                    <h1 className="font-bold p-1 text-[16px] text-red-500">Evaluation criteria</h1>
                    <div className="ml-4">
                        <input type="checkbox" id="critiria1" name="critiria1" value="one"></input>
                        <label for="critiria1"> Exterior Condition</label><br/>
                        <input type="checkbox" id="critiria2" name="critiria2" value="two"></input>
                        <label for="critiria2"> Interior Condition</label><br/>
                        <input type="checkbox" id="critiria3" name="critiria3" value="three"></input>
                        <label for="critiria3"> Mechanical Condition</label><br/>
                        <input type="checkbox" id="critiria4" name="critiria4" value="four"></input>
                        <label for="critiria4"> Undercarriage and Suspension</label><br/>
                        <input type="checkbox" id="critiria5" name="critiria5" value="five"></input>
                        <label for="critiria5"> Documentation and Maintenance History</label><br/>
                        <input type="checkbox" id="critiria6" name="critiria6" value="six"></input>
                        <label for="critiria6"> Brakes and Steeringn</label><br/>
                        <input type="checkbox" id="critiria7" name="critiria7" value="seven"></input>
                        <label for="critiria7"> Transmission and Drivetrain </label><br/>
                        <input type="checkbox" id="critiria8" name="critiria8" value="eight"></input>
                        <label for="critiria8"> Electrical and Electronics </label><br/>
                    </div>
                </div>
                    <input type="text" placeholder="Comment on the vehicle condition here..." className="w-[850px] h-[100px] pl-6 pt-1 pb-2 mb-3 rounded-lg shadow-md drop-shadow-md"></input>
                
                <div className="grid grid-cols-2 gap-[50px] mt-4">
                    {/* switchone */}
                    <div className="grid grid-cols-3 gap-[10px] ml-3">
                        <h1> <b>Pass</b></h1>

                        <label for="check" class="-ml-20 w-20 h-10 rounded-full relative bg-gradient-to-b from-amber-500 to-amber-300  shadow-md hover:shadow-lg cursor-pointer ">
                            <input type="checkbox" id="check" class="sr-only peer"  checked={isCalendarVisible} onChange={handleToggle}></input>
                            <span className="w-2/5 h-4/5 bg-green-800 absolute rounded-full transform transition-transform duration-700 ease-in-out m-1 peer-checked:bg-red-700 peer-checked:left-10 "></span>
                        </label>
                        <h1 className="-ml-28"><b>Fail</b></h1>
                         {/* Render the calendar field only if isCalendarVisible is true */}
                         {isCalendarVisible &&  <input type="date" className="ml-2"/>}

                    </div>

                    {/* switchtwo */}
                    <button className="ml-[710px] fixed p-2 mb-2 font-semibold bg-gradient-to-b from-amber-500 to-amber-300 w-32  rounded-lg shadow-md hover:shadow-lg transform hover:scale-[102%] trasition duration-300 ease-out  hover:cursor-pointer" >Submit</button><br/>
                </div>
            </form>
        </div>
        <PrReports onClose={handleOnClose} visible={showPrReports}/>
    </div>
    </MainLayout>
    </div>
  )
}

export default VCmodal