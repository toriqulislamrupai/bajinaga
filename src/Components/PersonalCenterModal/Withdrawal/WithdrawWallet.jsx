import { useState } from "react";
import { FaSyncAlt } from "react-icons/fa"; // React icon for reload
import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";
import noBankAccountImage from "../../../assets/no-bank-big.512e5cae.png";
import { FiEye, FiEyeOff } from "react-icons/fi";

const WithdrawWallet = ({ handleModalSwitchSeparate, dummyItem }) => {
  const { language } = useContext(LanguageContext);

  // States for handling the e-wallet details and input fields
  const [ewalletBalance, setEwalletBalance] = useState(0.0);
  const [availableAmount, setAvailableAmount] = useState(0.0);
  const [withdrawalAmount, setWithdrawalAmount] = useState(0.0);
  const [transactionPassword, setTransactionPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [remainingWithdrawals, setRemainingWithdrawals] = useState(999);
  

  // Function to toggle the visibility of the password
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle the submit button action
  const handleSubmit = () => {
    // Just an example: you can change the state like this when something happens
    setEwalletBalance(ewalletBalance + 10);
    setWithdrawalAmount(withdrawalAmount+10);
    setAvailableAmount(availableAmount - 10);
    setRemainingWithdrawals(remainingWithdrawals - 1);
  
    console.log({
      ewalletBalance,
      availableAmount,
      withdrawalAmount,
      transactionPassword,
      remainingWithdrawals,
    });

    // Logic for submit (e.g., make API call, update state, etc.)
  };

  return (
    <div className=" pt-4   overflow-y-auto h-[500px] custom-scrollbar-hidden pb-28 lg:pb-10 ">
      {/* Image at the top */}
      <div className="flex lg:justify-normal justify-center items-center lg:items-start  lg:mb-4">
        <img
          src={noBankAccountImage}
          alt="E-wallet"
          className="  object-cover"
        />
        <div className="bg-withdrawTimeImage lg:block hidden text-sm p-2 border border-[#f9dacb]">
          <h3 className="bg-[#ffe6d1] p-1 rounded-md text-center  w-[50%] text-[#f55600]">
            Withdrawal time
          </h3>
          <p className="text-textRed font-semibold">24 hours</p>
          <p>১. একটি বৈধ ওয়ালেট দিয়ে উত্তোলন করুন।</p>
          <p>২. অনুগ্রহ করে নিশ্চিত করুন যে উত্তোলনের নম্বরটি সঠিক।</p>
        </div>
      </div>

      

      {/* Empty E-wallet and Add Wallet button */}
      <div className="flex flex-col lg:items-start justify-start mb-4">
        <p className=" text-black w-auto lg:w-[30%] text-center  text-opacity-50">
          {language === "bn" ? "খালি ই-ওয়ালেট" : "Empty E-wallet"}
        </p>
        <button
          onClick={() => handleModalSwitchSeparate("bindEwallet", dummyItem)}
          
          className="mt-2 px-6 py-2 bg-bgRed rounded-full text-white "
        >
          {language === "bn" ? "+ ওয়ালেট যুক্ত করুন" : "+ Add Wallet"}
          
        </button>
      </div>

      <div className="bg-withdrawTimeImage block lg:hidden text-sm p-2 border border-[#f9dacb]">
          <h3 className="bg-[#ffe6d1] p-1 rounded-md lg:text-center  w-[50%] text-[#f55600]">
            Withdrawal time
          </h3>
          <p className="text-textRed font-semibold">24 hours</p>
          <p>১. একটি বৈধ ওয়ালেট দিয়ে উত্তোলন করুন।</p>
          <p>২. অনুগ্রহ করে নিশ্চিত করুন যে উত্তোলনের নম্বরটি সঠিক।</p>
        </div>

      {/* E-wallet details section */}
      <div className="lg:border pt-4 lg:p-4 rounded text-sm text-gray-500 bg-gray-50 mb-4">
        <div className="flex flex-col gap-2 mb-2">
          <p className="font-semibold">
            {language === "bn" ? "কেন্দ্রীয় ই-ওয়ালেট" : "Central E-wallet"}:{" "}
            <span className="text-[#0094d1]">{ewalletBalance.toFixed(2)}</span>
          </p>
          <p className="font-semibold">
            {language === "bn" ? "উপলভ্য পরিমাণ" : "Available Amount"}:{" "}
            <span className="text-[#0094d1]">{availableAmount.toFixed(2)}</span>
          </p>
        </div>

        <div className="lg:flex items-center gap-2 mb-2">
          <p className="font-semibold">
            {language === "bn" ? "উত্তোলনের পরিমান" : "Withdrawal Amount"}:
          </p>
          <div className="flex my-2  items-center px-1 lg:px-0 border lg:border-none  border-black border-opacity-50">
          
          <p className="font-semibold lg:hidden">
            {language === "bn" ? " পরিমান" : " Amount"}
          </p>

          <input
            type="text"
            readOnly
            placeholder="400 - 26.00"
            className="lg:mt-2 px-3 py-2 lg:border border-gray-400 rounded w-[80%] outline-none lg:outline  bg-gray-100 text-gray-700"
          />
            
            </div>

          <button
            className="lg:flex hidden  items-center hover:text-textRed"
            onClick={() => console.log("Reloading Balance")}
          >
            <FaSyncAlt />
            <span className="ml-2 ">
              {language === "bn" ? "ফিরে চলুন" : "Back"}
            </span>
          </button>
        </div>
      </div>

      {/* Transaction Password Input */}
      <div className="mb-4 flex gap-2 lg:border-none border  border-black border-opacity-50 px-1 lg:px-0 items-center text-sm text-gray-500">
        <label className="block mb-2 font-semibold  ">
          {language === "bn" ? "ট্রানজেকশন " : "Transaction "}
        </label>
        <div className="flex items-center lg:border rounded">
          <input
            type={passwordVisible ? "text" : "password"}
            value={transactionPassword}
            onChange={(e) => setTransactionPassword(e.target.value)}
            className="p-2 w-full outline-none lg:outline"
            placeholder={
              language === "bn" ? "পাসওয়ার্ড লিখুন" : "Enter password"
            }
          />
          <button
            onClick={togglePasswordVisibility}
            className="lg:px-2 text-gray-500"
          >
            {passwordVisible ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <div className="lg:flex justify-between items-center ">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-textRed w-full lg:w-auto text-white rounded-md lg:rounded-full"
        >
          {language === "bn" ? "জমা দিন" : "Submit"}
        </button>

        <p className="text-sm">
          {language === "bn"
            ? `আজকের বাকি উইথড্রালের সংখ্যা:`
            : `Remaining number of withdrawals today:`}{" "}
          <span className="text-textRed font-bold text-base">{remainingWithdrawals}</span>
        </p>
      </div>
    </div>
  );
};

export default WithdrawWallet;
