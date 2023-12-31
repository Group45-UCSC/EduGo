import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { AiFillDashboard } from "react-icons/ai";
import { FaChild } from "react-icons/fa";
import {
  MdPayments,
  MdSupportAgent,
  MdOutlineRateReview,
} from "react-icons/md";
import md5 from 'crypto-js/md5';
import { NavLink } from "react-router-dom";
import swal from "sweetalert";

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

//   // Payhere function-----------------------------------//


function pay_payhere(price, child_name){
  

let merchantSecret  = 'Mjg5NDQxOTI4NjIxODk5MDU2NTYzMTE4OTY5ODgwNjM1OTA3MzMy';
let merchantId      = '1224489';
let orderId         = '12345';
let amount          = price;
let hashedSecret    = md5(merchantSecret).toString().toUpperCase();
let amountFormated  = parseFloat( amount ).toLocaleString( 'en-us', { minimumFractionDigits : 2 } ).replaceAll(',', '');
let currency        = 'LKR';
let hash            = md5(merchantId + orderId + amountFormated + currency + hashedSecret).toString().toUpperCase();
  // Put the payment variables here
  var paymentData = {
    sandbox: true, // if the account is sandbox or real
    merchant_id: '1224489', // Replace your Merchant ID
    return_url: 'http://localhost:3000/parent/payment',
    cancel_url: 'http://localhost:3000/parent/payment',
    notify_url: 'http://sample.com/notify',
    order_id: orderId,
    items: child_name,
    amount: amount, 
    currency: 'LKR',
    hash: hash,
    first_name: child_name,
    last_name: 'Perera',
    email: 'edugo@gmail.com',
    phone: '0719052858',
    address: 'No.1, Galle Road',
    city: 'Colombo',
    country: 'Sri Lanka',
    delivery_address: 'No. 46, Galle road, Kalutara South', // optional field
    delivery_city: 'Kalutara', // optional field
    delivery_country: 'Sri Lanka', // optional field
    custom_1: '', // optional field
    custom_2: '', // optional field
  };
    
  // Called when user completed the payment. It can be a successful payment or failure
  window.payhere.onCompleted = function onCompleted(orderId) {
    console.log("Payment completed. OrderID:" + orderId);
    //Note: validate the payment and show success or failure page to the customer
  };

  // Called when user closes the payment without completing
  window.payhere.onDismissed = function onDismissed() {
    //Note: Prompt user to pay again or show an error page
    console.log("Payment dismissed");
  };

  // Called when error happens when initializing payment such as invalid parameters
  window.payhere.onError = function onError(error) {
    // Note: show an error page
    console.log("Error:"  + error);
  };



// function pay_payhere(){
//   window.payhere.startPayment(paymentData);
// }
window.payhere.startPayment(paymentData);
}
  //----------------------------------------------------//

  const [selectedShift, setSelectedShift] = useState(''); // State to store the selected shift

  const handleShiftChange = (event) => {
    setSelectedShift(event.target.value);
  };






  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [modalOpen, setModalOpen] = useState(false);
  function Modal({ setOpenModal }) {
    return (
      <div>
        <form
          className="bg-white p-0 px-60 rounded-lg "
          onSubmit={handleSubmit}
        >
          <div className="fixed top-0 left-0 w-screen  bg-stone-900/75 flex justify-center items-center  h-screen bg-gradient-to-b from-opacity-70 to-opacity-30">
            <div className="w-1/3  rounded-lg bg-white shadow-md flex flex-col p-5 ">
              <div className="flex justify-end">
                <button
                  className="text-2xl cursor-pointer "
                  onClick={() => {
                    setOpenModal(false);
                  }}
                >
                  X
                </button>
              </div>
              <div className="">
                <h1 className="text-[#5a5c69] text-[24px] leading-8 font-normal cursor-pointer text-center">
                  Select paymenth method
                </h1>
              </div>
              <div className="flex justify-center items-center mt-5 px-5">
                <label>
                  <input
                    type="radio"
                    name="shift"
                    value="cash"
                    checked={selectedShift === "cash"}
                    onChange={handleShiftChange}
                  />
                  Cash Payment
                </label>
                <label>
                  <input
                    type="radio"
                    name="shift"
                    value="card"
                    checked={selectedShift === "card"}
                    onChange={handleShiftChange}
                  />
                  Card Payment
                </label>

              </div>
              <div className="flex justify-center items-center mt-5">
                <NavLink
                to={`/parent/payment/`}
                >
                <button
                  className="w-36 h-12 mr-5 bg-orange rounded-lg text-xl cursor-pointer"
                  onClick={() => {
                    handleSelectRideClick();
                    setOpenModal(false);
                  }}
                >
                  Submit
                </button>
                </NavLink>
                <button
                  className="w-36 h-12  bg-orange rounded-lg text-xl cursor-pointer"
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  id="cancelBtn"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }

  // Get a reference to the button element by its ID
  const handleSelectRideClick = () => {

    if (!selectedShift) {
      // Display a SweetAlert alert for the user
      swal({
        title: "Please select a payment method (cash or card)!",
        icon: "warning", // You can change the icon to "error" for an error message
        buttons: {
          confirm: {
            className:
              "bg-orange text-white px-10 py-2 rounded-lg items-center hover:bg-gray",
          },
        },
      });
      return; // Do not proceed with the submission
    }

 

    console.log('Selected Shift:', selectedShift);

    // Call the function when the button is clicked
    // handleSelectRide();
    
    if(selectedShift === "card" && paymentAmount){
      
      pay_payhere(paymentAmount, 'Sasindu')
    }
  };





  //----------------------------------------------------//

  const userId = localStorage.getItem("userId");

  // get payment details
  const [payment, setPayment] = useState([]);
  const [paymentAmount, setPaymentAmount] = useState(null);
  console.log(payment);
  useEffect(() => {
    async function paymentData() {
      try {
        const response = await fetch(
          `http://localhost:5000/edugo/parent/payment/viewprice/${userId}`
        );
        const data = await response.json();
        // console.log(data);
        setPaymentAmount(data[0].amount);
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

      // Format the date before displaying
      const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      };

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
                            <div className="flex mt-2 gap-3 font-semibold" >
                            {/* <button onClick={() => pay_payhere(pay.amount, pay.child_name)}>Pay Now</button> */}
                            <button onClick={() => {setModalOpen(true);}}>Pay Now</button>
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
                      <td className="text-center">{formatDate(pastPay.date)}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>

        <div>
         {/* <input type="button" onClick={handlePayment} value="Pay" className="border cursor-pointer"  /> */}
         {/* <button onClick={pay}>Pay with Payhere</button> */}

        </div>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </MainLayout>
    </div>
  );

}

export default Payment;
