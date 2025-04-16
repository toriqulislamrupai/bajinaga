import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import Account from "./Account";

import {
  FaUser,
  FaPiggyBank,
  FaMoneyBillWave,
  FaClipboardList,
  FaRegFileAlt,
  FaBalanceScale,
  FaGift,
  FaUserFriends,
  FaComments,
  FaRedoAlt,
} from "react-icons/fa";
import {
  FaUserCircle,
  FaKey,
  FaUniversity,
  FaWallet,
  FaLock,
  FaMobileAlt,
} from "react-icons/fa";
import NameTab from "./NameTab";
import Withdrawal from "./Withdrawal/Withdrawal";
import Deposit from "./Deposit/Deposit";
import AccountDetailsModal from "./AccountDetailsModal";
import ReusableTabs from "./BattingAccountProfitLoss/ReusableTabs";
import Reward from "./RewardCenter/Reward";
import Invite from "./InviteFriends/Invite";
import Message from "./Message/Message";
import AccountPhone from "./AccountPhone/AccountPhone";
import Rebate from "./Rebate/Rebate";

const PersonalInformation = () => {
  const { language } = useContext(LanguageContext);
  const items = [
    {
      icon: <FaUserCircle />,
      title: language === "bn" ? "ব্যক্তিগত তথ্য" : "Personal Information",
      text:
        language === "bn"
          ? "আপনার অ্যাকাউন্টের নিরাপত্তা বাড়াতে ব্যক্তিগত তথ্য সম্পূর্ণ করুন।"
          : "Complete the personal information to improve your account security.",
      action: "changeName",
    },
    {
      icon: <FaKey />,
      title: language === "bn" ? "লগইন পাসওয়ার্ড" : "Login password",
      text:
        language === "bn"
          ? "সেফ পাসওয়ার্ডের জন্য অক্ষর ও সংখ্যার সংমিশ্রণ ব্যবহার করুন।"
          : "Recommended password with combination of letters and numbers, mixed with uppercase and lowercase.",
      action: "changePassword",
    },
    {
      icon: <FaUniversity />,
      title: language === "bn" ? "ব্যাংক অ্যাকাউন্ট" : "Bank Account",
      text:
        language === "bn"
          ? "উইথড্র সহ বিভিন্ন ফিচারের জন্য ব্যাংক অ্যাকাউন্ট যুক্ত করুন।"
          : "Binded bank accounts can be used for withdrawals, internal transfer or other functions.",
      action: "registerBankAccount",
    },
    {
      icon: <FaWallet />,
      title: language === "bn" ? "ই-ওয়ালেট যুক্ত করুন" : "Bind E-wallet",
      text:
        language === "bn"
          ? "উইথড্রালের জন্য ই-ওয়ালেট যুক্ত করুন।"
          : "Bind E-wallet for withdrawal.",
      action: "bindEwallet",
    },
    {
      icon: <FaLock />,
      title: language === "bn" ? "লেনদেনের পাসওয়ার্ড" : "Transaction Password",
      text:
        language === "bn"
          ? "লেনদেন সম্পর্কিত নিরাপত্তা নিশ্চিত করতে পাসওয়ার্ড ব্যবহার হবে।"
          : "Transaction password will use to verify your identity for any fund related operation for account safety purposes.",
      action: "changeTransactionPassword",
    },
    {
      icon: <FaMobileAlt />,
      title: language === "bn" ? "ফোন ভেরিফিকেশন" : "Phone verification",
      text:
        language === "bn"
          ? "পাসওয়ার্ড রিকভারির জন্য ফোন নম্বর যুক্ত করুন।"
          : "Bind your phone to retrieve your password.",
      action: "verifyPhone",
    },
  ];
  const [activeTab, setActiveTab] = useState("tab1");
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [formData, setFormData] = useState({
    // name
    nickName: "",
    email: "",
    fullName: "",
    // password
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    showCurrentPassword: false,
    showNewPassword: false,
    showConfirmPassword: false,
    // bank
    bank: "",
    cardName: "",
    accountNumber: "",
    verificationCode: "",

    // eWallet
    eWalletService: "",
    eWalletCardName: "",
    eWalletType: "",
    eWalletAccountNumber: "",
    eWalletVerificationCode: "",

    // transaction password
    confirmTransactionPassword: "",
    showTransactionPassword: false,
    showConfirmTransactionPassword: false,

    phoneNumber: "",
    countryCode: "+1", // Default country code
    phoneVerificationCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      console.log(updatedData); // Log the form data on input change
      return updatedData;
    });
  };
  const handleModalSwitch = (action) => {
    setActiveModal(action);
  };
  const handleModalSwitchSeparate = (modalName, item) => {
    setActiveModal(modalName);
    setSelectedItem(item);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData); // Log the form data on submit
    alert(`${activeModal} submitted!`);
  };

  useEffect(() => {
    const tabFromHash = location.hash.replace("#", "");
    if (tabFromHash) {
      setActiveTab(tabFromHash);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const tableHeaders = [
    { label: { en: "Bet Time", bn: "বেট সময়" }, key: "betTime" },
    { label: { en: "Bet Amount", bn: "বেট পরিমাণ" }, key: "betAmount" },
    { label: { en: "Valid Bet", bn: "বৈধ বেট" }, key: "validBet" },
    { label: { en: "Award", bn: "অর্থ পুরস্কার" }, key: "award" },
    { label: { en: "Profit Loss", bn: "লাভ ক্ষতি" }, key: "profitLoss" },
    { label: { en: "Game Name", bn: "গেম নাম" }, key: "gameName" },
    { label: { en: "Game Number", bn: "গেম নম্বর" }, key: "gameNumber" },
  ];
  const filter = [
    { label: { en: "Vendor", bn: "বিক্রেতা" }, value: "vendor" },
    {
      label: { en: "Transaction Type", bn: "লেনদেন প্রকার" },
      value: "transactionType",
    },
  ];

  const tabData = [
    {
      tabTitle: { en: "Sport", bn: "স্পোর্টস" },
      radioTabs: [
        {
          label: { en: "Today", bn: "আজ" },
          tableData: [],
        },
        {
          label: { en: "Yesterday", bn: "গতকাল" },
          tableData: [
            {
              betTime: "11:00 AM",
              betAmount: "$150",
              validBet: "$140",
              award: "$100",
              profitLoss: "-$40",
              gameName: "Poker",
              gameNumber: "G456",
            },
          ],
        },
        {
          label: { en: "7 days", bn: "৭ দিন" },
          tableData: [],
        },
      ],
    },
    {
      tabTitle: { en: "Slot", bn: "স্লট" },
      radioTabs: [
        {
          label: { en: "Day 1", bn: "দিন ১" },
          tableData: [
            {
              betTime: "11:00 AM",
              betAmount: "$150",
              validBet: "$140",
              award: "$100",
              profitLoss: "-$40",
              gameName: "Poker",
              gameNumber: "G456",
            },
          ],
        },
      ],
    },
    {
      tabTitle: { en: "Live", bn: "লাইভ" },
      radioTabs: [
        {
          label: { en: "Day 1", bn: "দিন ১" },
          tableData: [
            {
              betTime: "11:00 AM",
              betAmount: "$150",
              validBet: "$140",
              award: "$100",
              profitLoss: "-$40",
              gameName: "Poker",
              gameNumber: "G456",
            },
          ],
        },
      ],
    },
    {
      tabTitle: { en: "Fishing", bn: "ফিশিং" },
      radioTabs: [
        {
          label: { en: "Day 1", bn: "দিন ১" },
          tableData: [
            {
              betTime: "11:00 AM",
              betAmount: "$150",
              validBet: "$140",
              award: "$100",
              profitLoss: "-$40",
              gameName: "Poker",
              gameNumber: "G456",
            },
          ],
        },
      ],
    },
    {
      tabTitle: { en: "Poker", bn: "পোকার" },
      radioTabs: [
        {
          label: { en: "Day 1", bn: "দিন ১" },
          tableData: [
            {
              betTime: "11:00 AM",
              betAmount: "$150",
              validBet: "$140",
              award: "$100",
              profitLoss: "-$40",
              gameName: "Poker",
              gameNumber: "G456",
            },
          ],
        },
      ],
    },
    {
      tabTitle: { en: "Lotto", bn: "লটারি" },
      radioTabs: [
        {
          label: { en: "Day 1", bn: "দিন ১" },
          tableData: [
            {
              betTime: "11:00 AM",
              betAmount: "$150",
              validBet: "$140",
              award: "$100",
              profitLoss: "-$40",
              gameName: "Poker",
              gameNumber: "G456",
            },
          ],
        },
      ],
    },
  ];
  const tabOptions = [
    { label: { en: "All", bn: "সব" }, value: "all" },
    { label: { en: "JILI", bn: "জিলি" }, value: "jili" },
    { label: { en: "PG", bn: "পিজি" }, value: "pg" },
    { label: { en: "JDB", bn: "জেডবিই" }, value: "jdb" },
    { label: { en: "FAST SPIN", bn: "ফাস্ট স্পিন" }, value: "fast spin" },
  ];

  const tabDataProfitLoss = [
    {
      tabTitle: { en: "Sport", bn: "স্পোর্টস" },
      radioTabs: [
        {
          label: { en: "Today", bn: "আজ" },
          tableData: [],
        },
        {
          label: { en: "Yesterday", bn: "গতকাল" },
          tableData: [
            {
              betTime: "11:00 AM",
              betAmount: "$150",
              validBet: "$140",
              award: "$100",
              profitLoss: "-$40",
              gameName: "Poker",
              gameNumber: "G456",
            },
          ],
        },
        {
          label: { en: "7 days", bn: "৭ দিন" },
          tableData: [],
        },
      ],
    },
    {
      tabTitle: { en: "Slot", bn: "স্লট" },
      radioTabs: [
        {
          label: { en: "Day 1", bn: "দিন ১" },
          tableData: [
            {
              betTime: "11:00 AM",
              betAmount: "$150",
              validBet: "$140",
              award: "$100",
              profitLoss: "-$40",
              gameName: "Poker",
              gameNumber: "G456",
            },
          ],
        },
      ],
    },
    {
      tabTitle: { en: "Live", bn: "লাইভ" },
      radioTabs: [
        {
          label: { en: "Day 1", bn: "দিন ১" },
          tableData: [
            {
              betTime: "11:00 AM",
              betAmount: "$150",
              validBet: "$140",
              award: "$100",
              profitLoss: "-$40",
              gameName: "Poker",
              gameNumber: "G456",
            },
          ],
        },
      ],
    },
    {
      tabTitle: { en: "Fishing", bn: "ফিশিং" },
      radioTabs: [
        {
          label: { en: "Day 1", bn: "দিন ১" },
          tableData: [
            {
              betTime: "11:00 AM",
              betAmount: "$150",
              validBet: "$140",
              award: "$100",
              profitLoss: "-$40",
              gameName: "Poker",
              gameNumber: "G456",
            },
          ],
        },
      ],
    },
    {
      tabTitle: { en: "Poker", bn: "পোকার" },
      radioTabs: [
        {
          label: { en: "Day 1", bn: "দিন ১" },
          tableData: [
            {
              betTime: "11:00 AM",
              betAmount: "$150",
              validBet: "$140",
              award: "$100",
              profitLoss: "-$40",
              gameName: "Poker",
              gameNumber: "G456",
            },
          ],
        },
      ],
    },
    {
      tabTitle: { en: "Lotto", bn: "লটারি" },
      radioTabs: [
        {
          label: { en: "Day 1", bn: "দিন ১" },
          tableData: [
            {
              betTime: "11:00 AM",
              betAmount: "$150",
              validBet: "$140",
              award: "$100",
              profitLoss: "-$40",
              gameName: "Poker",
              gameNumber: "G456",
            },
          ],
        },
      ],
    },
  ];

  const tabDataAccount = [
    {
      tabTitle: { en: "Transaction Records", bn: "লেনদেন রেকর্ড" },
      radioTabs: [
        {
          label: { en: "Today", bn: "আজ" },
          tableData: [],
        },
        {
          label: { en: "Yesterday", bn: "গতকাল" },
          tableData: [
            {
              betTime: "11:00 AM",
              betAmount: "$150",
              validBet: "$140",
              award: "$100",
              profitLoss: "-$40",
              gameName: "Poker",
              gameNumber: "G456",
            },
          ],
        },
        {
          label: { en: "7 days", bn: "৭ দিন" },
          tableData: [],
        },
      ],
    },
    {
      tabTitle: { en: "Deposit Records", bn: "ডিপোজিট রেকর্ড" },
      radioTabs: [
        {
          label: { en: "Day 1", bn: "দিন ১" },
          tableData: [
            {
              betTime: "11:00 AM",
              betAmount: "$150",
              validBet: "$140",
              award: "$100",
              profitLoss: "-$40",
              gameName: "Poker",
              gameNumber: "G456",
            },
          ],
        },
      ],
    },
    {
      tabTitle: { en: "Withdrawal Records", bn: "উত্তোলন  রেকর্ড" },
      radioTabs: [
        {
          label: { en: "Day 1", bn: "দিন ১" },
          tableData: [
            {
              betTime: "11:00 AM",
              betAmount: "$150",
              validBet: "$140",
              award: "$100",
              profitLoss: "-$40",
              gameName: "Poker",
              gameNumber: "G456",
            },
          ],
        },
      ],
    },
  ];

  const accountOptions = [
    { label: { en: "Deposit", bn: "ডিপোজিট" }, value: "deposit" },
    { label: { en: "Withdraw", bn: "অথৈ তোলা" }, value: "withdraw" },
    { label: { en: "Bet", bn: "বেট" }, value: "bet" },
    { label: { en: "Win", bn: "জিত" }, value: "win" },
    { label: { en: "Bonus", bn: "বোনাস" }, value: "other" },
  ];

  const tabs = [
    {
      id: "tab1",
      label: language === "bn" ? "আমার অ্যাকাউন্ট" : "My Account",
      icon: <FaUser />,
      content: (
        <div>
          <div className="hidden lg:block">
            <Account
              language={language}
              formData={formData}
              handleInputChange={handleInputChange}
              setFormData={setFormData}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              activeModal={activeModal}
              setActiveModal={setActiveModal}
              items={items}
              handleModalSwitch={handleModalSwitch}
              handleSubmit={handleSubmit}
            />
          </div>
          <div className="lg:hidden">
            <NameTab
              language={language}
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
      ),
    },
    {
      id: "tab2",
      label: language === "bn" ? "জমা " : "Deposit Information",
      icon: <FaPiggyBank />,
      content: (
        <div>
          <Deposit />
        </div>
      ),
    },
    {
      id: "tab3",
      label: language === "bn" ? "উত্তোলনের " : "Withdrawal",
      icon: <FaMoneyBillWave />,
      content: (
        <div>
          <Withdrawal
            items={items}
            language={language}
            formData={formData}
            handleInputChange={handleInputChange}
            setFormData={setFormData}
            handleModalSwitchSeparate={handleModalSwitchSeparate}
          />

          {(activeModal === "bindEwallet" ||
            activeModal === "registerBankAccount") &&
            selectedItem && (
              <div
                className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-50 overflow-hidden"
                onClick={() => setSelectedItem(null)}
              >
                <AccountDetailsModal
                  items={items}
                  handleModalSwitch={handleModalSwitch}
                  selectedItem={selectedItem}
                  setSelectedItem={setSelectedItem}
                  handleSubmit={handleSubmit}
                  activeModal={activeModal}
                  language={language}
                  formData={formData}
                  handleInputChange={handleInputChange}
                  setFormData={setFormData}
                  setActiveModal={setActiveModal}
                />
              </div>
            )}
        </div>
      ),
    },
    {
      id: "tab4",
      label: language === "bn" ? "বেটিং রেকর্ড" : "Betting Record",
      icon: <FaClipboardList />,
      content: (
        <div>
          <ReusableTabs
            data={tabData}
            filterOptions={tabOptions}
            filters={filter[0]}
            tableHeaders={tableHeaders}
          />
        </div>
      ),
    },
    {
      id: "tab5",
      label: language === "bn" ? "অ্যাকাউন্ট রেকর্ড" : "Account Record",
      icon: <FaRegFileAlt />,
      content: (
        <div>
          <ReusableTabs
            data={tabDataAccount}
            filterOptions={accountOptions}
            filters={filter[1]}
            tableHeaders={tableHeaders}
          />
        </div>
      ),
    },
    {
      id: "tab6",
      label: language === "bn" ? "প্রোফিট ও লস" : "Profit and Loss",
      icon: <FaBalanceScale />,
      content: (
        <div>
          <ReusableTabs
            data={tabDataProfitLoss}
            filterOptions={tabOptions}
            filters={filter[0]}
            tableHeaders={tableHeaders}
          />
        </div>
      ),
    },
    {
      id: "tab7",
      label: language === "bn" ? "পুরস্কার কেন্দ্র" : "Reward Center",
      icon: <FaGift />,
      content: (
        <div>
          <Reward />
        </div>
      ),
    },
    {
      id: "tab8",
      label: language === "bn" ? "বন্ধু আমন্ত্রণ" : "Invite Friends",
      icon: <FaUserFriends />,
      content: (
        <div>
          <Invite />
        </div>
      ),
    },
    {
      id: "tab9",
      label: language === "bn" ? "অভ্যন্তরীণ বার্তা" : "Internal Message",
      icon: <FaComments />,
      content: (
        <div>
          <Message />
        </div>
      ),
    },
    {
      id: "tab10",
      label: language === "bn" ? "ম্যানুয়াল রিবেট" : "Manual Rebate",
      icon: <FaRedoAlt />,
      content: <div>
        <Rebate/>
        </div>,
    },
    {
      id: "tab12",
      label: language === "bn" ? "আমার অ্যাকাউন্ট" : "My Account",
      icon: <FaRedoAlt />,
      content: (
        <div>
          <AccountPhone
          
          />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white  flex flex-col items-center">
      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row max-w-6xl w-full bg-bgAccountTwo shadow-lg rounded-lg">
        {/* Sidebar */}
        <div className="w-1/5 hidden bg-informationBG lg:flex flex-col min-h-screen text-white md:space-y-2 shadow-md ">
          <h3 className="text-center font-medium text-2xl">
            {language === "en" ? "Personal <br /> Center" : "ব্যক্তিগত কেন্দ্র"}
          </h3>
          {tabs.map((tab, index) => {
            const isLast = index === tabs.length - 1;

            return (
              <button
                key={tab.id}
                className={`p-3 text-xs md:text-sm lg:text-base text-left flex items-center gap-2 transition-all duration-300 font-medium ${
                  activeTab === tab.id
                    ? "bg-informationActiveColor"
                    : "hover:bg-informationActiveColor"
                } ${isLast ? "lg:hidden" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="text-sm">{tab.label}</span>
              </button>
            );
          })}
        </div>
        <div className="lg:hidden bg-informationBG py-2 ">
          <h3 className="text-center text-white">
            {tabs.find((tab) => tab.id === activeTab)?.label}
          </h3>
        </div>
        {/* Content */}
        <div id="tab-content" className="w-full text-black   ">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
