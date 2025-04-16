import { useState } from "react";
import CommonContent from "./CommonContent";
import bkashImage from "../../../assets/EN_2_20240312225545495.png";
import nagadImage from "../../../assets/nagad.png";
import rocketImage from "../../../assets/rocket.png";
import upaiImage from "../../../assets/upai.jpeg";
import mobileImage from "../../../assets/mobileBanking.jpeg";
import checkImage from "../../../assets/check.8cbcb507.svg";
import { FaRegFileAlt } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";

const TabsWrapper = ({ language }) => {
  const [selectedTab, setSelectedTab] = useState("box");
  const [selectedProcessTab, setSelectedProcessTab] = useState("AUTOPAY");
  const [selectedPromotion, setSelectedPromotion] = useState(null); // Added to store the selected promotion

  // Define the tab data dynamically
  const tabsData = {
    box: {
      label: language === "bn" ? "Bkash" : "Bkash",
      Image: bkashImage,
      processTabs: [
        {
          name: "AUTOPAY",
          promotions: [
            {
              bn: "+ ৩% নরমাল ডিপোজিট বোনাস (1/1)",
              en: "+ 3% Normal Deposit Bonus",
              condition: "≥৳ 200",
            },
            {
              bn: "+ ১০% ক্যাশব্যাক (1/1)",
              en: "+ 10% Cashback",
              condition: "≥৳ 100",
            },
            {
              bn: "+ ৫০ বোনাস (1/1)",
              en: "+ 50 Bonus",
              condition: "≥৳ 300",
            },
          ],
        },
        {
          name: "সেন্ড মানি",
          promotions: [
            {
              bn: "+ ২% ডিসকাউন্ট (1/1)",
              en: "+ 2% Discount",
              condition: "≥৳ 150",
            },
            {
              bn: "+ ১০০ ক্যাশব্যাক (1/1)",
              en: "+ 100 Cashback",
              condition: "≥৳ 250",
            },
          ],
        },
        {
          name: "EXPAY",
          promotions: [
            {
              bn: "+ ৫% ডিপোজিট বোনাস (1/1)",
              en: "+ 5% Deposit Bonus",
              condition: "≥৳ 350",
            },
            {
              bn: "+ ১৫০ বোনাস (1/1)",
              en: "+ 150 Bonus",
              condition: "≥৳ 400",
            },
          ],
        },
      ],
      
      amounts: [100, 200, 300, 400, 500],
    },
    nagad: {
      label: language === "bn" ? "নগদ" : "Nagad",
      Image: nagadImage,
      processTabs: [
        {
          name: "AUTOPAY",
          promotions: [
            {
              bn: "+ ৫% ডিসকাউন্ট (1/1)",
              en: "+ 5% Discount",
              condition: "≥৳ 100",
            },
            {
              bn: "+ ১০% ক্যাশব্যাক (1/1)",
              en: "+ 10% Cashback",
              condition: "≥৳ 150",
            },
            {
              bn: "+ ১০০ বোনাস (1/1)",
              en: "+ 100 Bonus",
              condition: "≥৳ 300",
            },
          ],
        },
        {
          name: "সেন্ড মানি",
          promotions: [
            {
              bn: "+ ৩% ক্যাশব্যাক (1/1)",
              en: "+ 3% Cashback",
              condition: "≥৳ 200",
            },
            {
              bn: "+ ২০০ বোনাস (1/1)",
              en: "+ 200 Bonus",
              condition: "≥৳ 400",
            },
          ],
        },
        {
          name: "EXPAY",
          promotions: [
            {
              bn: "+ ২% ডিসকাউন্ট (1/1)",
              en: "+ 2% Discount",
              condition: "≥৳ 100",
            },
            {
              bn: "+ ৫০ বোনাস (1/1)",
              en: "+ 50 Bonus",
              condition: "≥৳ 250",
            },
          ],
        },
      ],
      
      amounts: [150, 250, 350, 450, 550],
    },
    rocket: {
      label: language === "bn" ? "রকেট" : "Rocket",
      Image: rocketImage,
      processTabs: [
        {
          name: "AUTOPAY",
          promotions: [
            {
              bn: "+ ৪% ক্যাশব্যাক (1/1)",
              en: "+ 4% Cashback",
              condition: "≥৳ 100",
            },
            {
              bn: "+ ১৫০ বোনাস (1/1)",
              en: "+ 150 Bonus",
              condition: "≥৳ 250",
            },
            {
              bn: "+ ২০০ ক্যাশব্যাক (1/1)",
              en: "+ 200 Cashback",
              condition: "≥৳ 300",
            },
          ],
        },
        {
          name: "সেন্ড মানি",
          promotions: [
            {
              bn: "+ ৫% ডিসকাউন্ট (1/1)",
              en: "+ 5% Discount",
              condition: "≥৳ 150",
            },
            {
              bn: "+ ১০০ ক্যাশব্যাক (1/1)",
              en: "+ 100 Cashback",
              condition: "≥৳ 200",
            },
          ],
        },
        {
          name: "EXPAY",
          promotions: [
            {
              bn: "+ ১০% ক্যাশব্যাক (1/1)",
              en: "+ 10% Cashback",
              condition: "≥৳ 180",
            },
            {
              bn: "+ ৩০০ বোনাস (1/1)",
              en: "+ 300 Bonus",
              condition: "≥৳ 500",
            },
          ],
        },
      ],
      
      amounts: [120, 220, 320, 420, 520],
    },
    upay: {
      label: language === "bn" ? "উপay" : "Upay",
      Image: upaiImage,
      processTabs: [
        {
          name: "AUTOPAY",
          promotions: [
            {
              bn: "+ ৬% নরমাল ডিপোজিট বোনাস (1/1)",
              en: "+ 6% Normal Deposit Bonus",
              condition: "≥৳ 300",
            },
            {
              bn: "+ ৮% ক্যাশব্যাক (1/1)",
              en: "+ 8% Cashback",
              condition: "≥৳ 200",
            },
            {
              bn: "+ ২৫০ বোনাস (1/1)",
              en: "+ 250 Bonus",
              condition: "≥৳ 250",
            },
          ],
        },
        {
          name: "সেন্ড মানি",
          promotions: [
            {
              bn: "+ ৪% ক্যাশব্যাক (1/1)",
              en: "+ 4% Cashback",
              condition: "≥৳ 150",
            },
            {
              bn: "+ ১৫০ বোনাস (1/1)",
              en: "+ 150 Bonus",
              condition: "≥৳ 150",
            },
          ],
        },
        {
          name: "EXPAY",
          promotions: [
            {
              bn: "+ ৭% ডিসকাউন্ট (1/1)",
              en: "+ 7% Discount",
              condition: "≥৳ 180",
            },
            {
              bn: "+ ১০০ বোনাস (1/1)",
              en: "+ 100 Bonus",
              condition: "≥৳ 100",
            },
          ],
        },
      ],
      
      amounts: [130, 230, 330, 430, 530],
    },
    mobileBanking: {
      label: language === "bn" ? "মোবাইল ব্যাংকিং" : "Mobile Banking",
      Image: mobileImage,
      processTabs: [
        {
          name: "AUTOPAY",
          promotions: [
            {
              bn: "+ ২% ডিসকাউন্ট (1/1)",
              en: "+ 2% Discount",
              condition: "≥৳ 150",
            },
            {
              bn: "+ ৫০ বোনাস (1/1)",
              en: "+ 50 Bonus",
              condition: "≥৳ 100",
            },
            {
              bn: "+ ১০% ক্যাশব্যাক (1/1)",
              en: "+ 10% Cashback",
              condition: "≥৳ 200",
            },
          ],
        },
        {
          name: "সেন্ড মানি",
          promotions: [
            {
              bn: "+ ৩% ক্যাশব্যাক (1/1)",
              en: "+ 3% Cashback",
              condition: "≥৳ 120",
            },
            {
              bn: "+ ১২০ বোনাস (1/1)",
              en: "+ 120 Bonus",
              condition: "≥৳ 120",
            },
          ],
        },
        {
          name: "EXPAY",
          promotions: [
            {
              bn: "+ ৬% ডিপোজিট বোনাস (1/1)",
              en: "+ 6% Deposit Bonus",
              condition: "≥৳ 180",
            },
            {
              bn: "+ ৮০ বোনাস (1/1)",
              en: "+ 80 Bonus",
              condition: "≥৳ 100",
            },
          ],
        },
      ],
      
      amounts: [140, 240, 340, 440, 540],
    },
  };

  // Handle the process tab change
  const handleProcessTabChange = (processTab) => {
    setSelectedProcessTab(processTab);
    setSelectedPromotion(null); // Reset the selected promotion when the process tab changes
  };

  // Handle promotion change (radio button selection)
  const handlePromotionChange = (promotion) => {
    setSelectedPromotion(promotion);
  };

  return (
    <div className="flex flex-col overflow-y-auto max-h-[99vh] custom-scrollbar-hidden    lg:flex-row gap-6 px-2 lg:px-6 pb-10 lg:pb-0">
      {/* Left Tab Navigation */}
      <div className="lg:w-1/4 grid grid-cols-4 lg:flex     lg:flex-col gap-2 py-6">
        {Object.keys(tabsData).map((key) => (
          <div
            className={`relative flex flex-col  items-center lg:items-start lg:flex-row  p-2 ${
              selectedTab === key
                ? "border-textRed bg-white border "
                : "bg-white  border"
            }`}
            key={key}
            onClick={() => setSelectedTab(key)}
          >
            <img src={tabsData[key].Image} alt="" className="lg:w-[20%]" />
            <button className="w-full  text-xs lg:text-base lg:p-2  lg:text-left">
              {tabsData[key].label}
            </button>

            {/* Only show this image if the tab is active */}
            {selectedTab === key && (
              <div className="absolute  bottom-0 right-0">
                <img src={checkImage} alt="" className="w-4" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Content Area */}
      <div className="lg:w-3/4 lg:overflow-y-auto lg:max-h-[99vh] custom-scrollbar-hidden bg-white p-2 border ">
        <div className="hidden lg:flex justify-between px-3 mb-6">
          <h3 className="border-l-4 pl-2 border-borderGreen">
            {language === "en" ? "Deposit Info" : "ডিপোজিট তথ্য"}
          </h3>

          <div className="flex gap-2 font-semibold p-1 px-2 border border-depositBlue rounded-full justify-between items-center">
            <span className="text-depositBlue">
              <FaRegFileAlt />
            </span>

            <button className="text-sm text-depositBlue">
              {language === "en" ? "Deposit History" : "ডিপোজিট ইতিহাস"}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden absolute text-white  top-2 right-6">

        
        <span className="  ">
              <FaRegFileAlt />
            </span>
        <span className=" ">
        <RiCustomerService2Line />
            </span>
            </div>
        

        <p className="text-sm text-textRed bg-depositHistoryTextBackground p-2 rounded-lg mb-6">
          {language === "en"
            ? "To successfully complete your deposit process quickly, please submit with the correct cashout number, amount, and transaction ID."
            : "আপনার ডিপোজিট প্রক্রিয়ার দ্রুত সফল করতে সঠিক ক্যাশ আউট নাম্বার, এমাউন্ট এবং ট্রানজেকশন আইডি সহ সাবমিট করুন।"}
        </p>

        <div className="flex text-xs lg:text-base gap-4">
          {/* Render Process Tabs */}
          {tabsData[selectedTab].processTabs.map((processTab) => (
            <button
              key={processTab.name}
              onClick={() => handleProcessTabChange(processTab.name)}
              className={`p-3 px-4 text-left ${
                selectedProcessTab === processTab.name
                  ? "border-textRed border "
                  : "border"
              }`}
            >
              {processTab.name}
            </button>
          ))}
        </div>

        {/* Passing data to CommonContent */}
        <CommonContent
          amounts={tabsData[selectedTab].amounts}
          selectedProcessTab={selectedProcessTab}
          selectedPromotion={selectedPromotion}
          language={language}
          tabsData={tabsData}
          selectedTab={selectedTab}
          handlePromotionChange={handlePromotionChange}
        />
      </div>
    </div>
  );
};

export default TabsWrapper;
