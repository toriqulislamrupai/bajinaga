import { GoArrowRight } from "react-icons/go";
import { FaMoneyBillWave, FaGift, FaUserShield } from "react-icons/fa";
import { MdCampaign, MdAttachMoney } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import earnMoneyImage from "../../assets/invite-bg.614f50bc.png";
import { IoMdDownload } from "react-icons/io";
import { RiCustomerService2Line } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";
import bdImage from "../../assets/BD.svg";
const Sidebar = ({ menuOpen, setActiveTab }) => {
  const tabs = ["খেলা", "ইভেন্ট"];

  const supportData = [
    { id: 1, name: " লাইভ সাপোর্ট", icon: <RiCustomerService2Line /> },
    { id: 2, name: " অ্যাপ ডাউনলোড", icon: <IoMdDownload /> },
  ];

  const menuItems = [
    { id: 1, name: " জমা", icon: <MdAttachMoney /> },
    { id: 2, name: " উত্তোলন", icon: <FaMoneyBillWave /> },
    { id: 3, name: " প্রচার", icon: <MdCampaign /> },
    { id: 4, name: " পুরস্কার কেন্দ্র", icon: <FaGift /> },
    { id: 5, name: " রিবেট", icon: <FaUserShield /> },
    { id: 6, name: " সদস্য কেন্দ্র", icon: <RiUserSettingsLine /> },
  ];

  return (
    <div
    className={`fixed lg:static top-16  h-full lg:h-[500px]  z-50 lg:z-0   w-52 lg:w-64 bg-bgPrimary transition-transform duration-300 overflow-y-auto custom-scrollbar-hidden pb-20    text-white  ${
      menuOpen ? "translate-x-0" : "-translate-x-full"
    } overflow-y-auto custom-scrollbar-hidden pb-20`} 
    >
     
  <div className="">
    {/* Sidebar Tabs */}
    <div className="flex justify-center gap-4 p-3 ">
      {tabs.map((item, index) => (
        <button
          key={index}
          className="p-3 text-lg font-bold rounded-lg bg-gray-700"
          onClick={() => setActiveTab(item)}
        >
          {item}
        </button>
      ))}
    </div>

    {/* Dynamic Menu Items with Right Arrow */}
    <ul className="p-4 space-y-2">
      {menuItems.map((item) => (
        <li
          key={item.id}
          className="p-3 flex justify-between items-center bg-bgGreen rounded-md cursor-pointer"
        >
          <span className="text-2xl">{item.icon}</span>
          {item.name}
          <GoArrowRight className="text-xl" />
        </li>
      ))}
    </ul>

    {/* Dynamic Button */}
    <button className="relative flex items-center p-3 cursor-pointer">
      <span className="absolute left-2 text-white px-2 py-1 rounded-md">
        অর্থ উপার্জন
      </span>
      <img src={earnMoneyImage} alt="earn money" className="ml-18" />
    </button>

    {/* Dynamic Support Buttons */}
    <ul className="p-4 flex items-center gap-2">
      {supportData.map((item) => (
        <li
          key={item.id}
          className="p-3 flex flex-col gap-2 justify-center items-center bg-bgSupportSidebar rounded-md cursor-pointer"
        >
          <span className="text-2xl">{item.icon}</span>
          <span className="text-center leading-tight">{item.name}</span>
        </li>
      ))}
    </ul>

    {/* Language */}
    <div className="flex justify-between items-center p-3 bg-bgPrimary rounded-lg shadow-md">
      <div className="flex items-center gap-2">
        <img
          src={bdImage}
          alt="Bangla Flag"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="text-lg font-semibold text-white">বাংলা</span>
      </div>
      <TiArrowSortedDown className="text-xl text-white hover:text-gray-300 transition-colors duration-200" />
    </div>
  </div>


    </div>
  );
};

export default Sidebar;
