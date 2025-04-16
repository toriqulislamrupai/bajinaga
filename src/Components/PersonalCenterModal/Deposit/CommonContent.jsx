import { useState, useEffect } from "react";

import checkImage from "../../../assets/check.8cbcb507.svg";

const CommonContent = ({
  amounts,
  selectedProcessTab,
  selectedTab,
  language,
  selectedPromotion,
  tabsData,
  handlePromotionChange,
}) => {
  const [selectedAmount, setSelectedAmount] = useState(amounts[0]);

  // Find the selected process tab data
  // const selectedProcessData = processTabs.find((tab) => tab.name === selectedProcessTab);

  useEffect(() => {
    // Reset the selected amount whenever the process tab changes
    setSelectedAmount(amounts[0]);
  }, [selectedProcessTab, amounts]);

  return (
    <div className="p-4">
      {/* Amount Selection */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row gap-3">
          <p className="font-semibold">
            {language === "bn" ? "ডিপোজিট পরিমাণ:" : "Deposit Amount:"}
          </p>
         
          <div className="flex flex-col items-start">

          {/* amount Tab */}
          <div className="flex gap-4 relative flex-wrap">
            {amounts.map((amount) => (
              <div
                key={amount}
                className={`relative px-4 py-2 rounded border cursor-pointer ${
                  selectedAmount === amount
                    ? "border-textRed bg-white text-textRed font-semibold"
                    : "border-textRed border-opacity-50 text-black"
                }`}
                onClick={() => setSelectedAmount(amount)}
              >
                {amount}

                {selectedAmount === amount && (
                  <div className="absolute bottom-0 right-0">
                    <img src={checkImage} alt="selected" className="w-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* amount box */}
          <div className="mt-4">
          <input
            type="text"
            value={selectedAmount}
            placeholder={
              language === "bn" ? "ডিপোজিট পরিমাণ" : "Deposit Amounts"
            }
            className="border p-2 rounded w-full mt-2"
            readOnly
          />
        </div>
        {/* Minimum amount */}
        <div className="flex text-xs lg:text-base justify-center font-semibold">
      <p className="text-textRed">{language === "bn" ? "সর্বনিম্ন পরিমান ৳  200  সর্বোচ্চ পরিমান ৳ 300" : "Minimum Amount ৳ 200  Maximum Amount ৳ 300"}</p>
      </div>
      </div>
         
        </div>

        
      </div>
      
     
      <div className="flex flex-col lg:flex-row gap-4 mt-4">
        <p className="font-semibold ">
          {language === "bn" ? "প্রমোশন বেছে নিন:" : " Choose Promotion:"}
        </p>
        {/* promotions */}
        <div className="flex flex-col gap-4">
          {tabsData[selectedTab].processTabs
            .find((tab) => tab.name === selectedProcessTab)
            .promotions.map((promotion, index) => (
              <div
                key={index}
                className={`relative rounded-md
                  ${selectedPromotion === promotion.en ? "border-textRed " : "hover:border-textRed"}
                  
                  pr-16 border p-2  flex items-start `}
              >
                <input
                  type="radio"
                  id={`promotion-${index}`}
                  name="promotion"
                  value={promotion.en}
                  checked={selectedPromotion === promotion.en}
                  onChange={() => handlePromotionChange(promotion.en)}
                  className="form-radio mt-1"
                />
                <label htmlFor={`promotion-${index}`} className="text-sm">
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col">
                      <span className="text-[13px] font-medium text-black">
                        {promotion.bn}
                      </span>
                      <span className="text-xs font-medium text-black">
                        <span>{promotion.en}</span>
                      </span>
                    </div>
                    <div className="absolute right-2 font-semibold text-textRed">
                      <span>{promotion.condition}</span>
                    </div>
                  </div>
                </label>

                
              </div>
            ))}
        </div>
      </div>

      {selectedPromotion && (
        <div className="mt-4">
          <p className="text-sm">
            Selected Promotion: <strong>{selectedPromotion}</strong>
          </p>
        </div>
      )}

      {/* Submit Button */}
      <div className="mt-6">
        <button className="px-4 py-2 bg-bgRed text-white rounded-md">
          {language === "bn" ? "আবেদন করুন" : "Apply for Deposit"}
        </button>
      </div>
    </div>
  );
};

export default CommonContent;
