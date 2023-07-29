import React from "react";
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

function Employees() {

  const handleClick = () => {
    window.location.href = `/admin/supportagent`;
  };
  const handleClickVC = () => {
    window.location.href = `/admin/VCoordinator`;
  };
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
      <div className='font-bold ml-12 mt-4 text-2xl'>Employees</div>

        <div className='ml-32 mt-12 mr-32 shadow-md overflow-auto '>
          <table className='w-full text-center border-separate border-spacing-y-2 border border-slate-50 '>
            <thead className='border-y-4 border-white drop-shadow '>
              <tr className=' bg-[#999999] text-white border-b-2 text-[18px] drop-shadow-md '>
                <th className='px-3.5 p-1 w-24 '>ID</th>
                <th className='px-3.5 w-30'>Name</th>
                <th className='px-3.5 w-30'>Email</th>
                <th className='px-3.5 w-30'>Address</th>
                <th className='px-3.5 w-30'>Contact</th>
                <th className='px-3.5 w-30'>NIC</th>  
              </tr>
            </thead>

            <tbody className=''>
              <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3'> 001</td>
                  <td>Ashan Dhanushka</td>
                  <td>ashan@gmail.com</td>
                  <td>No.87 main street, Piliyandala</td>
                  <td>0711234567</td>
                  <td>962382312V</td>
              </tr>
              
              <tr onClick={handleClickVC} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3'> 002</td>
                  <td>Sachintha Muthuhetti</td>
                  <td>sachintha@gmail.com</td>
                  <td>No.34/5 Mutuwal, Modara</td>
                  <td>0757676763</td>
                  <td>987787781V</td>
              </tr>

              <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3'> 003</td>
                  <td>Nifas Rizwan</td>
                  <td>nifas@gmail.com</td>
                  <td>No.23/5, maley street, colombo</td>
                  <td>0710912873</td>
                  <td>998781231V</td>
              </tr>

              <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3'> 004</td>
                  <td>Ridma Priyanjan</td>
                  <td>ridma@gmail.com</td>
                  <td>No.7 School lane, Wijerama</td>
                  <td>0778765432</td>
                  <td>959898989V</td>
              </tr>

              <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3'> 005</td>
                  <td>Hiran Jayashanka</td>
                  <td>hiran@gmail.com</td>
                  <td>No.2 Akbar street, Malabe</td>
                  <td>0712342345</td>
                  <td>912349876V</td>
              </tr>

              <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3'> 006</td>
                  <td>Nishantha Gamlath</td>
                  <td>nishantha@gmail.com</td>
                  <td>No.7 School Road, Raththanapitiya</td>
                  <td>0729874567</td>
                  <td>912212212V</td>
              </tr>

              <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3'> 007</td>
                  <td>Pasindu Gayashan</td>
                  <td>pasindu@gmail.com</td>
                  <td>No.22 Good shed road, Kohuwala</td>
                  <td>0708765421</td>
                  <td>998732318V</td>
              </tr>

              <tr onClick={handleClick} className=' bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md'>
                  <td className='text-center  p-3'> 008</td>
                  <td>Gayan Anushka</td>
                  <td>gayan@gmail.com</td>
                  <td>No.22 main street, Meepe</td>
                  <td>0770987654</td>
                  <td>952334310V</td>
              </tr>
            </tbody>

          </table>
        </div>
      </MainLayout>
    </div>
  );
}

export default Employees;
