import React, {useState} from "react";
import MainLayout from "../../components/layout/MainLayout";
import { FaBeer } from "react-icons/fa";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/admin/dashboard", icon: <FaBeer /> },
  { title: "Employees", path: "/admin/employees", icon: <FaBeer /> },
  { title: "Drivers", path: "/admin/drivers", icon: <FaBeer /> },
  { title: "School Rides", path: "/admin/rides", icon: <FaBeer /> },
  { title: "Children", path: "/admin/childrenlist", icon: <FaBeer /> },
  { title: "Finance", path: "/admin/finance", icon: <FaBeer /> },
];

function Drivers() {

  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  const handleClickD = () => {
    window.location.href = `/admin/driverinfo`;
  };
  const handleClickV = () => {
    window.location.href = `/admin/vehicleinfo`;
  };

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className='font-bold ml-12 mt-4 text-2xl'>Drivers and Vehicles</div>

            {/*employees button container */}
            <div className="flex text-center ml-32 mt-12">

              {/* buttons */}
              <div onClick={()=>updateToggle(1)} className={toggle === 1 ? "h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer" : "h-11 w-44 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"}>Drivers</div>
              <div onClick={()=>updateToggle(2)} className={toggle === 2 ? "ml-1 h-11 w-44 shadow-lg bg-amber-600 scale-[102%] font-semibold text-lg pt-2 cursor-pointer" : "h-11 w-44 ml-1 shadow-lg bg-orange font-semibold text-lg pt-2 cursor-pointer hover:scale-[102%] hover:bg-amber-600 transition-transform ease-in-out"}>Vehicles</div>
            </div>

            {/* support agent table */}

          <div className={toggle === 1 ? "details" : "details hidden"}>

          <div className='ml-32 mr-32 shadow-md overflow-auto '>
            <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
              <thead className='border-y-4 border-white drop-shadow '>
                <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
                  <th className='px-3.5 p-1 w-24 '>ID</th>
                  <th className='px-3.5 w-30'>Name</th>
                  <th className='px-3.5 w-30'>Address</th>
                  <th className='px-3.5 w-30'>Vehicle No</th>
                </tr>
              </thead>

              <tbody className=''>
                <tr onClick={handleClickD} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'> 001</td>
                    <td>Ashan Dhanushka</td>
                    <td>No.87 main street, Piliyandala</td>
                    <td>PI - 1111</td>
                </tr>
                
                <tr onClick={handleClickD} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'> 002</td>
                    <td>Sachintha Muthuhetti</td>
                    <td>No.34/5 Mutuwal, Modara</td>
                    <td>PX - 2222</td>
                </tr>

                <tr onClick={handleClickD} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'> 003</td>
                    <td>Nifas Rizwan</td>
                    <td>No.23/5, maley street, colombo</td>
                    <td>PI - 3333</td>
                </tr>

                <tr onClick={handleClickD} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'> 004</td>
                    <td>Ridma Priyanjan</td>
                    <td>No.7 School lane, Wijerama</td>
                    <td>PX - 4444</td>
                </tr>

                <tr onClick={handleClickD} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'> 005</td>
                    <td>Hiran Jayashanka</td>
                    <td>No.2 Akbar street, Malabe</td>
                    <td>PI - 5555</td>
                </tr>

                <tr onClick={handleClickD} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'> 006</td>
                    <td>Nishantha Gamlath</td>
                    <td>No.7 School Road, Raththanapitiya</td>
                    <td>PI - 6666</td>
                </tr>

                <tr onClick={handleClickD} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'> 007</td>
                    <td>Pasindu Gayashan</td>
                    <td>No.22 Good shed road, Kohuwala</td>
                    <td>PX - 7777</td>
                </tr>

                <tr onClick={handleClickD} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'> 008</td>
                    <td>Gayan Anushka</td>
                    <td>No.22 main street, Meepe</td>
                    <td>PI - 8888</td>
                </tr>
              </tbody>

            </table>
          </div>
          </div>

          {/* vehicle coordiator table */}

          <div className={toggle === 2 ? "details" : "details hidden"}>

          <div className='details ml-32 mr-32 shadow-md overflow-auto '>
            <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
              <thead className='border-y-4 border-white drop-shadow '>
                <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
                  <th className='px-3.5 p-1 w-24 '>ID</th>
                  <th className='px-3.5 w-30'>License Plate</th>
                  <th className='px-3.5 w-30'>Driver's Name</th>
                  <th className='px-3.5 w-30'>Contact</th>
                  <th className='px-3.5 w-30'>Start Location</th>  
                </tr>
              </thead>

              <tbody className=''>
                <tr onClick={handleClickV} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'> 009</td>
                    <td>PX - 9999</td>
                    <td>Ashan Dhanushka</td>
                    <td>0711234567</td>
                    <td>No.87 main street, Piliyandala</td>
                </tr>
                
                <tr onClick={handleClickV} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'> 010</td>
                    <td>PI - 1010</td>
                    <td>Sachintha Muthuhetti</td>
                    <td>0757676763</td>
                    <td>No.34/5 Mutuwal, Modara</td>
                </tr>

                <tr onClick={handleClickV} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'> 011</td>
                    <td>PX - 1111</td>
                    <td>Nifas Rizwan</td>
                    <td>0710912873</td>
                    <td>No.23/5, maley street, colombo</td>
                </tr>

                <tr onClick={handleClickV} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'> 012</td>
                    <td>PX - 1212</td>
                    <td>Ridma Priyanjan</td>
                    <td>0778765432</td>
                    <td>No.7 School lane, Wijerama</td>
                </tr>

                <tr onClick={handleClickV} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'> 013</td>
                    <td>PI - 1313</td>
                    <td>Hiran Jayashanka</td>
                    <td>0712342345</td>
                    <td>No.2 Akbar street, Malabe</td>
                </tr>

                <tr onClick={handleClickV} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'> 014</td>
                    <td>PI - 1414</td>
                    <td>Nishantha Gamlath</td>
                    <td>0729874567</td>
                    <td>No.7 School Road, Raththanapitiya</td>
                </tr>

                <tr onClick={handleClickV} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'> 015</td>
                    <td>PX - 1515</td>
                    <td>Pasindu Gayashan</td>
                    <td>0708765421</td>
                    <td>No.22 Good shed road, Kohuwala</td>
                </tr>

                <tr onClick={handleClickV} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                    <td className='text-center  p-3'> 016</td>
                    <td>PI - 1616</td>
                    <td>Gayan Anushka</td>
                    <td>0770987654</td>
                    <td>No.22 main street, Meepe</td>
                </tr>
              </tbody>

            </table>
          </div>
          </div>
      </MainLayout>
    </div>
  );
}

export default Drivers;
