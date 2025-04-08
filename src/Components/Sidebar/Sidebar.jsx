import { GoArrowRight } from "react-icons/go";
import { FaMoneyBillWave, FaGift, FaUserShield } from "react-icons/fa";
import { MdCampaign, MdAttachMoney } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import earnMoneyImage from "../../assets/invite-bg.614f50bc.png";
import { IoMdDownload } from "react-icons/io";
import { RiCustomerService2Line } from "react-icons/ri";
import Language from "./Language";
import SidebarTabs from "./SidebarTabs";
import { Link } from "react-router-dom";
import PersonalCenterModal from "../../pages/PersonalCenterModal";
import { LanguageContext } from "../../Context/LanguageContext";
import { useContext } from "react";
const Sidebar = ({
  menuOpen,
  activeTab,
  setActiveTab,
  toggleMenu,
  isInformationModalOpen,
  setIsInformationModalOpen,
}) => {
  const { language } = useContext(LanguageContext);

  const tabs = [
    { label: "খেলা", path: "/" },
    { label: "ইভেন্ট", path: "/promotion" },
  ];

  const supportData = [
    { id: 1, name: " লাইভ সাপোর্ট", icon: <RiCustomerService2Line /> },
    { id: 2, name: " অ্যাপ ডাউনলোড", icon: <IoMdDownload /> },
  ];

  const menuItems = [
    { id: 2, name: " জমা", icon: <MdAttachMoney />, link: "/information#tab2" },
    {
      id: 3,
      name: " উত্তোলন",
      icon: <FaMoneyBillWave />,
      link: "/information#tab3",
    },
    { id: 11, name: " প্রচার", icon: <MdCampaign />, link: "/promotion" },
    {
      id: 7,
      name: " পুরস্কার কেন্দ্র",
      icon: <FaGift />,
      link: "/information#tab7",
    },
    { id: 5, name: " রিবেট", icon: <FaUserShield /> },
    { id: 6, name: " সদস্য কেন্দ্র", icon: <RiUserSettingsLine /> },
  ];

  return (
    <div

    // className={`fixed lg:static top-16  h-full z-50 w-64 bg-bgPrimary text-white transition-transform duration-300 ${
    //    menuOpen ? "translate-x-0" : "-translate-x-full"
    //  } overflow-y-auto custom-scrollbar-hidden pb-20`}
    >
      {menuOpen && (
        <>
          {/* Overlay for small devices */}
          <div
            onClick={toggleMenu}
            className="fixed inset-0 bg-black bg-opacity-40 z-20 lg:hidden"
          ></div>

          {/* Sidebar */}
          <div className="h-full lg:h-[500px] fixed lg:static z-50 w-52 lg:w-64 bg-bgPrimary text-white transition-transform duration-300 overflow-y-auto custom-scrollbar-hidden pb-60 lg:pb-36">
            {/* Sidebar Tabs */}
            <div className="hidden md:block">
              <SidebarTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>

            {/* Dynamic Menu Items */}
            <ul className="p-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  to={item.link}
                  key={item.id}
                  onClick={
                    item.id === 11
                      ? undefined
                      : () => setIsInformationModalOpen(true)
                  }
                >
                  <li className="p-3 flex my-2 justify-between items-center bg-bgGreen rounded-md cursor-pointer">
                    <span className="text-2xl">{item.icon}</span>
                    {item.name}
                    <GoArrowRight className="text-xl" />
                  </li>
                </Link>
              ))}
            </ul>

            {/* Earn Button */}
            <button className="relative flex items-center p-3 cursor-pointer">
              <span className="absolute left-2 text-white px-2 py-1 rounded-md">
                অর্থ উপার্জন
              </span>
              <img src={earnMoneyImage} alt="earn money" className="ml-18" />
            </button>

            {/* Support */}
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
            <Language />
          </div>
        </>
      )}
      <div className="">
        <PersonalCenterModal
          isOpen={isInformationModalOpen}
          onClose={() => setIsInformationModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default Sidebar;
