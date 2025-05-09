import { useContext, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import bdImage from "../../assets/BD.svg";
import usImage from "../../assets/US.svg";
import { LanguageContext } from "../../Context/LanguageContext";

const Language = () => {
  const { language , setLanguage} = useContext(LanguageContext); 
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const languages = {
    bn: {
      label: "বাংলা",
      flag: bdImage,
    },
    en: {
      label: "English",
      flag: usImage,
    },
  };

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={toggleDropdown}
        className="flex  justify-between gap-32 items-center p-3 bg-bgPrimary rounded-lg shadow-md cursor-pointer"
      >
        <div className="flex  justify-between  items-center md:gap-2 gap-1">
          <img
            src={languages[language].flag}
            alt={languages[language].label}
            className="w-6 h-6 lg:w-8 lg:h-8 rounded-full object-cover"
          />
          <span className="lg:text-base text-xs font-semibold text-white">
            {languages[language].label}
          </span>
        </div>
        <TiArrowSortedDown className="text-xl  text-white  transition-colors duration-200" />
      </div>

      {isOpen && (
  <div className=" z-10 mt-2 lg:mt-0 px-2 w-full rounded-lg shadow-md">
    <div className="grid grid-cols-1  gap-2 lg:gap-0">
      <div
        onClick={() => handleLanguageChange("bn")}
        className="flex items-center justify-start rounded-md gap-2 px-4 py-3 hover:bg-bgGreen cursor-pointer"
      >
        <img src={bdImage} alt="Bangla Flag" className="w-6 h-6" />
        <span className="text-white">
          {language ==="en"? "Bangla":"বাংলা"}
          </span>
      </div>
      <div
        onClick={() => handleLanguageChange("en")}
        className="flex items-center justify-start rounded-md gap-2 px-4 py-3 hover:bg-bgGreen cursor-pointer"
      >
        <img src={usImage} alt="English Flag" className="w-6 h-6" />
        <span className="text-white">
        {language ==="en"? "English":"ইংরেজি"}
          
          </span>
        
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Language;
