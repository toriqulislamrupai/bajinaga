import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import Account from "./Account";

import { 
    FaUser, FaPiggyBank, FaMoneyBillWave, FaClipboardList, FaRegFileAlt, 
    FaBalanceScale, FaGift, FaUserFriends, FaComments, FaRedoAlt 
  } from "react-icons/fa";
  

const PersonalInformation = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const location = useLocation();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const tabFromHash = location.hash.replace("#", "");
    if (tabFromHash) {
      setActiveTab(tabFromHash);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const tabs = [
    {
      id: "tab1",
      label: language === "bn" ? "ব্যক্তিগত তথ্য" : "My Account",
      icon: <FaUser />,
      content: <div><Account /></div>
    },
    {
      id: "tab2",
      label: language === "bn" ? "জমা সম্পর্কিত তথ্য" : "Deposit Information",
      icon: <FaPiggyBank />,
      content: <div>Content for Deposit Information</div>
    },
    {
      id: "tab3",
      label: language === "bn" ? "উত্তোলনের তথ্য" : "Withdrawal",
      icon: <FaMoneyBillWave />,
      content: <div>Content for Withdrawal</div>
    },
    {
      id: "tab4",
      label: language === "bn" ? "বেটিং রেকর্ড" : "Betting Record",
      icon: <FaClipboardList />,
      content: <div>Content for Betting Record</div>
    },
    {
      id: "tab5",
      label: language === "bn" ? "অ্যাকাউন্ট রেকর্ড" : "Account Record",
      icon: <FaRegFileAlt />,
      content: <div>Content for Account Record</div>
    },
    {
      id: "tab6",
      label: language === "bn" ? "প্রোফিট ও লস" : "Profit and Loss",
      icon: <FaBalanceScale />,
      content: <div>Content for Profit and Loss</div>
    },
    {
      id: "tab7",
      label: language === "bn" ? "রিওয়ার্ড সেন্টার" : "Reward Center",
      icon: <FaGift />,
      content: <div>Content for Reward Center</div>
    },
    {
      id: "tab8",
      label: language === "bn" ? "বন্ধু আমন্ত্রণ" : "Invite Friends",
      icon: <FaUserFriends />,
      content: <div>Content for Invite Friends</div>
    },
    {
      id: "tab9",
      label: language === "bn" ? "অভ্যন্তরীণ বার্তা" : "Internal Message",
      icon: <FaComments />,
      content: <div>Content for Internal Message</div>
    },
    {
      id: "tab10",
      label: language === "bn" ? "ম্যানুয়াল রিবেট" : "Manual Rebate",
      icon: <FaRedoAlt />,
      content: <div>Content for Manual Rebate</div>
    },
  ];
  
  

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Main Layout */}
      <div className="flex flex-col md:flex-row max-w-6xl w-full bg-bgAccountTwo shadow-lg rounded-lg">
        {/* Sidebar */}
        <div className="md:w-1/5 bg-informationBG flex flex-col min-h-screen text-white md:space-y-2 shadow-md md:flex">
          <h3 className="text-center font-medium text-2xl">Personal <br /> Center</h3>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`p-3 text-xs md:text-sm lg:text-base text-left flex items-center gap-2 transition-all duration-300 font-medium  ${
                activeTab === tab.id
                  ? "bg-informationActiveColor"
                  : "hover:bg-informationActiveColor"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="text-sm">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div id="tab-content" className="w-full text-black overflow-y-auto max-h-[80vh] custom-scrollbar-hidden md:w-3/4 p-6">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
