import { BiMenuAltLeft } from "react-icons/bi";
import PrimaryLogo from "../../assets/wps_BetNaga_Logo_20250206233311.webp";
import { MdNotificationsActive } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { LanguageContext } from "../../Context/LanguageContext";
import { useContext, useState } from "react";
import MainBalance from "./MainBalance";
import InformationMenu from "./InformationMenu";

const TopHeader = ({ toggleMenu, autoOpenModal,setIsInformationModalOpen }) => {
  const { language } = useContext(LanguageContext);
  const [balance, setBalance] = useState(Math.floor(Math.random() * 1000)); // Initial Balance
  
    const [loading, setLoading] = useState(false);
    const [showBalance, setShowBalance] = useState(false);

    const reloadBalance = () => {
      setLoading(true); // Start loading
      setTimeout(() => {
        setBalance(Math.floor(Math.random() * 1000)); // Generate new random balance
        setLoading(false); // Stop loading
      }, 1500); // Simulate a delay (1.5s)
    };
  
    const toggleBalanceVisibility = () => {
      setShowBalance((prev) => !prev); // Toggle show/hide
    };

  const text = {
    en: {
      login: "Login",
      register: "Register",
    },
    bn: {
      login: "লগইন",
      register: "নিবন্ধন",
    },
  };

  return (
    <div className="bg-tabBackground  md:bg-bgPrimary border-b border-white border-opacity-20 text-white py-2 px-4 flex justify-between">
      <div className="flex gap-2 lg:gap-0 items-center">
        {/* menu */}
        <BiMenuAltLeft className="text-4xl cursor-pointer" onClick={toggleMenu} />
        <img src={PrimaryLogo} alt="" className="w-[60%] md:w-[30%]" />
      </div>

      <div className="flex gap-1 md:gap-4 items-center">
        {/* Login Button */}
        {/* <button
          className="bg-bgYellow py-2 px-3 rounded-lg"
          onClick={() => autoOpenModal("login")} // Opens modal with 'login' tab
        >
          {text[language].login}
        </button> */}
        
        {/* Register Button */}
        {/* <button
          className="bg-bgGreen py-2 px-3 rounded-lg"
          onClick={() => autoOpenModal("register")} // Opens modal with 'register' tab
        >
          {text[language].register}
        </button> */}
        <MainBalance
            reloadBalance={reloadBalance}
            loading={loading}
            toggleBalanceVisibility={toggleBalanceVisibility}
            showBalance={showBalance}
            balance={balance}
            language={language}
            setIsInformationModalOpen={setIsInformationModalOpen}
            />

            <InformationMenu setIsInformationModalOpen={setIsInformationModalOpen}/>

        <div className="lg:flex gap-4 hidden">
          <div className="bg-tabBackgroundTwo p-2 rounded-md">
          <MdNotificationsActive className="text-3xl" />
          </div>
          <div className="bg-tabBackgroundTwo p-2 rounded-md">
          <RiCustomerService2Line className="text-3xl" />
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
