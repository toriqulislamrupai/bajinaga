import { Link } from "react-router-dom"; // Ensure this is imported
import HelpModal from "../../pages/HelpModal";
import Modal from "../LoginRegisterModal/Modal";
import { LanguageContext } from "../../Context/LanguageContext";
import { useContext, useState } from "react";

const Help = ({ isModalOpen, setIsModalOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useContext(LanguageContext);

  // Adding text for both languages
  const help = [
    {
      id: 1,
      title: { en: "About Us", bn: "আমাদের সম্পর্কে" },
      link: "/helpbar#tab1",
    },
    {
      id: 2,
      title: { en: "Contact Us", bn: "যোগাযোগ করুন" },
      link: "/helpbar#tab2",
    },
    {
      id: 3,
      title: { en: "Terms and Conditions", bn: "শর্তাবলী" },
      link: "/helpbar#tab3",
    },
    {
      id: 4,
      title: { en: "Privacy Policy", bn: "গোপনীয়তা নীতি" },
      link: "/helpbar#tab4",
    },
    { id: 5, title: { en: "Faq", bn: "সাধারণ প্রশ্ন" },link: "/helpbar#tab5" },
    { id: 6, title: { en: "Rules and Regulation", bn: "নিয়ম ও বিধি" },link: "/helpbar#tab6" },
    { id: 7, title: { en: "Responsible Gambling", bn: "দায়িত্বশীল জুয়া" },link: "/helpbar#tab7" },
  ];

  return (
    <div>
      <div className="flex flex-col p-4 gap-2">
        {/* large device */}
        <div className="hidden md:block">
          <h3 className="pb-4 text-xl font-bold">
            {language === "en" ? "Help" : "সাহায্য"}
          </h3>
          <div className="flex flex-col gap-2">
            {help.map((item) => (
              <div
                key={item.id}
                className="rounded-lg shadow-md cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                {item.link ? (
                  <Link
                    to={item.link}
                    className="hover:text-opacity-100 text-white text-opacity-50 whitespace-nowrap"
                  >
                    {language === "en" ? item.title.en : item.title.bn}
                  </Link>
                ) : (
                  <h3 className="hover:text-opacity-100 text-white text-opacity-50 whitespace-nowrap">
                    {language === "en" ? item.title.en : item.title.bn}
                  </h3>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Small Device */}
        <div className="md:hidden">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h3 className="text-white text-sm">
              {language === "en" ? "Help Center" : "সাহায্য কেন্দ্র"}
            </h3>
            <svg
              className={`h-5 w-5 transition-all duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Show help options if isOpen is true */}
          {isOpen && (
            <div className="flex flex-col text-xs p-4 gap-4">
              {help.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setIsModalOpen(true)}
                  className="rounded-lg shadow-md cursor-pointer"
                >
                  {item.link ? (
                    <Link
                      to={item.link}
                      className="hover:text-opacity-100 text-white text-opacity-50 whitespace-nowrap"
                    >
                      {language === "en" ? item.title.en : item.title.bn}
                    </Link>
                  ) : (
                    <h3 className="hover:text-opacity-100 text-white text-opacity-50 whitespace-nowrap">
                      {language === "en" ? item.title.en : item.title.bn}
                    </h3>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Modal */}
        <div className="">
          <HelpModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
        <div className="hidden">
          <Modal setIsModalOpen={setIsModalOpen} />
        </div>
      </div>
    </div>
  );
};

export default Help;
