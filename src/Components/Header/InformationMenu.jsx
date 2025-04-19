import { Link } from "react-router-dom";
import userImage from "../../assets/0.png";
import { useState } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import { useContext } from "react";
import { FaRegCopy } from "react-icons/fa6";
import AccountImage from "../../assets/myAccount.png";
import betRecordImage from "../../assets/betRecord.png";
import messageImage from "../../assets/mesage.png";
import liveSuportImage from "../../assets/liveSupport.png";
import signOutImage from "../../assets/signOut.png";



const InformationMenu = ({ setIsInformationModalOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useContext(LanguageContext);

  const Information = [
    {
      id: 1,
      title: { en: "My Account", bn: "আমার অ্যাকাউন্ট" },
      link: "/information#tab1",
      icon: AccountImage,
    },
    {
      id: 4,
      title: { en: "Betting Record", bn: "বেটিং রেকর্ড" },
      link: "/information#tab4",
      icon: betRecordImage,
    },
    {
      id: 9,
      title: { en: "Internal Message", bn: "অভ্যন্তরীণ বার্তা" },
      link: "/information#tab9",
      icon: messageImage,
    },
    {
      id: 4,
      title: { en: "Live Support", bn: "লাইভ সাপোর্ট" },
      link: "live-support",
      icon: liveSuportImage,
    },
    {
      id: 5,
      title: { en: "Sign Out", bn: "সাইন আউট" },
      link: "/sign-out",
      icon: signOutImage,
    },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Button */}
      <div className="flex gap-2 items-center justify-between cursor-pointer px-2 md:px-4 py-2 text-sm text-white bg-informationMenuTriggerBg md:bg-tabBackgroundTwo rounded-md">
        <div className="relative w-8 h-8">
          <img src={userImage} alt="" className="w-8 h-8 rounded-full" />
          <p className="absolute  left-1/2 -translate-x-1/2  md:text-sm text-xs  text-vipTextColor px-1 rounded text-center">
            <span className=" px-2 md:px-2 rounded-md  bg-yellow">VIP</span>{" "}
            <span className=" bg-transparent">Level</span> 1
          </p>
        </div>

        <svg
          className={`h-5 w-5 transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={4}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Fixed Dropdown Menu */}
      {isOpen && (
        <div className="fixed right-0 top-14 bg-informationMenuBg  md:bg-bgPrimary text-white rounded-lg shadow-xl p-4 px-6 flex flex-col gap-3 z-50 md:min-w-[300px]">
          <div className="relative w-12 h-12 mx-auto">
            <img
              src={userImage}
              alt=""
              className="w-full h-full rounded-full border-2 border-yellow"
            />
            <p className="absolute md:top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-vipTextColor px-1 rounded bg-VIPTextImage text-center flex ">
              VIP
              <span>Level</span>
              <span>1</span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h3>rohankh</h3>
            <div className="flex items-center gap-2">
              <p>id: 345678</p>
              <FaRegCopy className="text-yellow" />
            </div>
          </div>

          {Information.map((item) => (
            <div
              key={item.id}
              className="flex items-center  text-sm md:text-base gap-8 p-1 md:p-3 bg-informationMenuOptionsBg md:bg-bgGreen hover:bg-informationMenuTriggerBg  md:hover:bg-bgGreenTwo rounded cursor-pointer"
              onClick={() => setIsInformationModalOpen(true)}
            >
              <img
                src={item.icon}
                alt=""
                className={` w-[10%] ${
                  item.id === 7
                    ? ""
                    : item.id === 10
                    ? ""
                    : item.id === 1
                    ? ""
                    : "w-[]"
                }`}
              />
              {item.link ? (
                <Link
                  to={item.link}
                  className="hover:text-opacity-100 text-white text-opacity-70 whitespace-nowrap"
                >
                  {language === "en" ? item.title.en : item.title.bn}
                </Link>
              ) : (
                <h3 className="hover:text-opacity-100  text-white text-opacity-70 whitespace-nowrap">
                  {language === "en" ? item.title.en : item.title.bn}
                </h3>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InformationMenu;
