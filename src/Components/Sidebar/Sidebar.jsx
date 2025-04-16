import { GoArrowRight } from "react-icons/go";
import earnMoneyImage from "../../assets/invite-bg.614f50bc.png";
import { IoMdDownload } from "react-icons/io";
import { RiCustomerService2Line } from "react-icons/ri";
import Language from "./Language";
import SidebarTabs from "./SidebarTabs";
import { Link } from "react-router-dom";
import PersonalCenterModal from "../../pages/PersonalCenterModal";
import { LanguageContext } from "../../Context/LanguageContext";
import { useContext, useEffect } from "react";
import depositImage from "../../assets/deposit.png";
import withdrawImage from "../../assets/withdraw.png";
import promotionImage from "../../assets/promotion.png";
import rewardImage from "../../assets/reward.png";
import rebateImage from "../../assets/rebate.png";
import memberImage from "../../assets/member.png";

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
    { label: language === "bn" ? "খেলা" : "Games", path: "/" },
    { label: language === "bn" ? "ইভেন্ট" : "Events", path: "/promotion" },
  ];

  const supportData = [
    {
      id: 1,
      name: language === "bn" ? "লাইভ সাপোর্ট" : "Live Support",
      icon: <RiCustomerService2Line />,
    },
    {
      id: 2,
      name: language === "bn" ? "অ্যাপ ডাউনলোড" : "App Download",
      icon: <IoMdDownload />,
    },
  ];

  const menuItems = [
    {
      id: 2,
      name: language === "bn" ? "জমা" : "Deposit",
      icon: depositImage,
      link: "/information#tab2",
    },
    {
      id: 3,
      name: language === "bn" ? "উত্তোলন" : "Withdraw",
      icon: withdrawImage,
      link: "/information#tab3",
    },
    {
      id: 11,
      name: language === "bn" ? "প্রচার" : "Promotion",
      icon: promotionImage,
      link: "/promotion",
    },
    {
      id: 7,
      name: language === "bn" ? "পুরস্কার " : "Reward ",
      icon: rewardImage,
      link: "/information#tab7",
    },
    {
      id: 10,
      name: language === "bn" ? "রিবেট" : "Rebate",
      icon: rebateImage,
      link: "/information#tab10",
    },
    {
      id: 1,
      name: language === "bn" ? "সদস্য " : "Member ",
      icon: memberImage,
      link: "/information#tab12",
    },
  ];

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <div>
      {menuOpen && (
        <>
          {/* Overlay for small devices */}
          <div
            onClick={toggleMenu}
            className="fixed  inset-0 bg-black bg-opacity-40 z-20 lg:hidden"
          ></div>

          {/* Sidebar */}
          <div className="h-full lg:h-[600px]  fixed lg:static z-50 w-52 lg:w-64 bg-bgPrimary  text-white transition-transform duration-300 overflow-y-auto custom-scrollbar-hidden pb-60 lg:pb-20">
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
                  <li className="p-3 flex my-2 justify-between items-center text-white text-opacity-70 hover:text-opacity-100 bg-bgGreen hover:bg-bgGreenTwo rounded-md cursor-pointer">
                    {/* <span className="text-2xl">{item.icon}</span> */}
                    <div className="flex gap-2 ">
                      <img
                        src={item.icon}
                        alt=""
                        className={` 
                           ${
                          item.id === 7
                            ? "w-[25%]"
                            : item.id === 10
                            ? "w-[25%]"
                            : item.id === 1
                            ? "w-[25%]"
                            : "w-[25%]"
                        }
                        `}
                      />
                      <span className="w-[100%] text-right">{item.name}</span>
                    </div>

                    <GoArrowRight className="text-xl" />
                  </li>
                </Link>
              ))}
            </ul>

            {/* Earn Button */}
            <Link to={"/information#tab8"}
            onClick={
              
                 () => setIsInformationModalOpen(true)
            }
            >
            
            <button className="relative flex items-center p-3 cursor-pointer">
              <span className="absolute left-2 text-white px-2 py-1 rounded-md">
                {language === "bn" ? "অর্থ উপার্জন" : "Earn Money"}
              </span>
              <img src={earnMoneyImage} alt="earn money" className="ml-18" />
            </button>
            
            </Link>

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
