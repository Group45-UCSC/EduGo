import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard } from "react-icons/ai";
import { FaChild } from "react-icons/fa";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";

const sideNavBarLinks = [
  {
    title: "Dashboard",
    path: "/parent/dashboard",
    icon: <AiFillDashboard />,
  },
  { title: "Children", path: "/parent/children", icon: <FaChild /> },
  { title: "Payment", path: "/parent/payment", icon: <MdPayments /> },
  { title: "Support", path: "/parent/support", icon: <MdSupportAgent /> },
  {
    title: "Feedback",
    path: "/parent/feedback",
    icon: <MdOutlineRateReview />,
  },
];

function Payment() {
  // const data = [
  //   {
  //     amount: 2400,
  //     for: "2023/04/01 - 2023/04/30",
  //     payed: "2023/04/27",
  //   },
  //   {
  //     amount: 2400,
  //     for: "2023/04/01 - 2023/04/30",
  //     payed: "2023/04/27",
  //   },
  //   {
  //     amount: 2400,
  //     for: "2023/04/01 - 2023/04/30",
  //     payed: "2023/04/27",
  //   },
  //   {
  //     amount: 2400,
  //     for: "2023/04/01 - 2023/04/30",
  //     payed: "2023/04/27",
  //   },
  //   {
  //     amount: 2400,
  //     for: "2023/04/01 - 2023/04/30",
  //     payed: "2023/04/27",
  //   },
  //   {
  //     amount: 2400,
  //     for: "2023/04/01 - 2023/04/30",
  //     payed: "2023/04/27",
  //   },
  // ];
  const userId = localStorage.getItem("userId");

  // get payment details
  const [payment, setPayment] = useState([]);
  useEffect(() => {
    async function paymentData() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/parent/payment/viewprice/${userId}`
        );
        const data = await response.json();
        setPayment(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    paymentData();
  }, [userId]);

  // get past payments
  const [pastPayment, setPastPayment] = useState([]);

  useEffect(() => {
    async function pastPaymentData() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/parent/payment/pastpayment/${userId}`
        );
        const data = await response.json();
        setPastPayment(data);
      } catch (err) {
        console.error(err.message);
      }
    }
    pastPaymentData();
  }, [userId]);

  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="pt-[25px] px-[25px]">
          <h1 className="text-[#5a5c69] text-[28px] leading-8 font-normal cursor-pointer">
            Payment
          </h1>

          <div className="flex gap-6 mt-3">
            <div className=" w-2/5 flex justify-center h-[150px]">
              <div className=" p-1 mt-4 ">
                <h1 className=" text-[40px] text-slate-600 font-semibold">
                  Thanks for <br />
                  valuing our service ...
                </h1>
              </div>
            </div>
            <div className=" w-3/5 h-[200px]">
              {/* ----------payment box-------------- */}

              <div className=" w-full h-full rounded-[8px] bg-slate-200 border-l-[4px] border-orange flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                <div className=" h-[150px] w-full">
                  <h1 className="text-[24px] leading-[24px] font-semibold text-[#5a5c69] mb-3">
                    Payment for current month
                  </h1>
                  <div className=" py-3 overflow-y-auto">
                  {payment.map((pay) => (
                    <div className="flex gap-3 mb-3">
                      <div className=" w-[150px]">{pay.child_name}</div>
                      <div className="">
                        {pay.pay_status === "paid" ? (
                          <div className="flex gap-[10px] w-52">
                            <h2 className="text-blue-600 text-[18px] leading-[17px] font-bold mb-3">
                              {pay.amount}
                            </h2>
                          </div>
                        ) : (
                          <div className="flex-col items-center justify-center w-52">
                            <h2 className="text-red-600 text-[18px] leading-[17px] font-bold mb-3">
                              {pay.amount}
                            </h2>
                            <h2 className="text-slate-600 flex text-[18px] leading-[17px] font-bold">
                              Before 2023/{pay.related_month}/31
                            </h2>
                          </div>
                        )}
                      </div>
                      {pay.pay_status === "notpaid" ? (
                        <div className="flex justify-center w-1/3">
                          <button className="flex justify-center w-[350px] h-10 bg-orange rounded-md cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                            <div className="flex mt-2 gap-3 font-semibold">
                              Pay Now
                            </div>
                          </button>
                        </div>
                      ) : (
                        <div className=" w-[205px] flex justify-center">
                        <h2 className="text-green-600 text-[18px] leading-[17px] font-bold mb-3">
                          Paid!
                        </h2>
                        </div>
                      )}
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-[400px] mt-[50px] mb-3">
            <div>
              <table className="w-full border-separate border-spacing-y-2 border border-slate-50">
                <thead className="border-y-4 border-white drop-shadow">
                  <tr className="bg-[#999999] text-white text-[18px] border-b-2 drop-shadow-md">
                    <th className="px-3.5 py-1 w-40">Child name</th>
                    <th className="px-3.5 py-1 w-24">Amount(RS)</th>
                    <th className="px-3.5 w-30">For</th>
                    <th className="px-3.5 w-30">Payed</th>
                  </tr>
                </thead>
                {pastPayment.map((pastPay) => (
                  <tbody>
                    <tr
                      // key={pastPay.id}
                      className="bg-[#D9D9D9] bg-opacity-60 hover:cursor-pointer hover:bg-[#eaeaea] drop-shadow-md"
                    >
                      <td className="text-center ">{pastPay.child_name}</td>
                      <td className="text-center p-3">{pastPay.amount}</td>
                      <td className="text-center">
                        {pastPay.year}/{pastPay.related_month}
                      </td>
                      <td className="text-center">{pastPay.date}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Payment;
