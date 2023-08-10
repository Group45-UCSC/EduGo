import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard, AiFillCar } from "react-icons/ai";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/driver/dashboard", icon: <AiFillDashboard /> },
  { title: "School Ride", path: "/driver/ride", icon: <AiFillCar /> },
  { title: "Finance", path: "/driver/finance", icon: <MdPayments /> },
  { title: "Support", path: "/driver/support", icon: <MdSupportAgent /> },
  {
    title: "Feedback",
    path: "/driver/feedback",
    icon: <MdOutlineRateReview />,
  },
];

const paymentDetails = [
  {
    pId: "P10001",
    childId: "C10005",
    name: "R.B.S.Udayanga",
    amount: 2410,
    date: "2023/7/23",
  },
  {
    pId: "P10004",
    childId: "C10009",
    name: "L.L.A. Hansani",
    amount: 2100,
    date: "2023/7/21",
  },
  {
    pId: "P10021",
    childId: "C10011",
    name: "K.S.T. Gunawardhana ",
    amount: 1980,
    date: "2023/7/24",
  },
  {
    pId: "P10305",
    childId: "C10011",
    name: "A.W.K.S. Jayasiri ",
    amount: 2700,
    date: "2023/7/02",
  },
  {
    pId: "P10012",
    childId: "C10005",
    name: "R.B.S.Udayanga",
    amount: 2050,
    date: "2023/7/16",
  },
  {
    pId: "P10015",
    childId: "C10009",
    name: "L.L.A. Hansani",
    amount: 1875,
    date: "2023/7/12",
  },
];

function Deposits() {
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
          Submit the Ride Payments that you collected For July
        </h1>
        {/* full box */}
        <div className="h-screen grid gap-4 border grid-cols-4 mb-10">
          {/* left column */}
          <div className="col-span-2 border gap-6 mt-3"></div>
          {/* end of left column */}
          {/* right column */}
          <div className="col-span-2 border gap-6 mt-3">
            {/* table */}
            <div className=" col-span-2 h-[400px] mb-4">
              <div className="p-3">
                <div className="float-right flex justify-end mr-[-100px]">
                  <form action="">
                    <input
                      type="text"
                      placeholder="Search.."
                      className=" mt-1 overflow-auto w-40 mr-32  border border-slate-400 pl-2 rounded-md"
                    ></input>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-10 stroke-slate-500 absolute -mt-8 ml-32 hover:cursor-pointer"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </form>
                </div>
                <table className="w-full border-separate border-spacing-y-2 border border-slate-50">
                  <thead className="border-y-4 border-white drop-shadow">
                    <tr className="bg-[#999999] text-white text-[18px] border-b-2 drop-shadow-md">
                      <th className="px-3.5 py-1 w-30">Parent Id</th>
                      <th className="px-3.5 w-30">Child Id</th>
                      <th className="px-3.5 w-30">Child Name</th>
                      <th className="px-3.5 w-30">Amount(Rs.)</th>
                      <th className="px-3.5 w-30">Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {paymentDetails.map((payment) => (
                      <tr
                        key={payment.pId}
                        className="bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                      >
                        <td className="text-center p-3">{payment.pId}</td>
                        <td className="text-center">{payment.childId}</td>
                        <td className="text-center">{payment.name}</td>
                        <td className="text-center">{payment.amount}</td>
                        <td className="text-center">{payment.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* end of right column */}
        </div>
        {/* end of full box */}
      </MainLayout>
    </div>
  );
}

export default Deposits;
