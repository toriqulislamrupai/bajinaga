import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import { useContext } from "react";
import shareImage from '../../assets/icon-share.6037826f.png';
import homeImage from '../../assets/icon-home.bc9a5578.png';
import loginImage from '../../assets/icon-login.21143d44.png';
import promoImage from '../../assets/icon-promo.c2a7c7a3.png';
import memberImage from '../../assets/icon-member.d31c69a5.png';

const BottomNavigationBar = ({ openLoginModal }) => {
  const { language } = useContext(LanguageContext);

  const text = {
    en: {
      home: "Home",
      invite: "Invite",
      login: "Login",
      deposit:"deposit",
      promotion: "Promotion",
      member: "Member",
    },
    bn: {
      home: "হোম",
      invite: "আমন্ত্রণ ",
      login: "লগইন",
      deposit:"জমা",
      promotion: "প্রচারণা",
      member: "সদস্য",
    },
  };

  return (
    <div>
      <div className="max-w-[480px] m-auto  z-[999] fixed bottom-0 w-full bg-bgGreen flex  justify-around md:hidden items-center rounded-t-2xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
        {/* Home */}
        <Link to="/" className="flex flex-col items-center text-white cursor-pointer">
          <img src={homeImage} alt="" className="w-8" />
          <span className="text-xs font-medium">{text[language].home}</span>
        </Link>

        {/* Activity */}
        <Link to="/invite" className="flex flex-col items-center text-white">
          <img src={shareImage} alt="" className="w-8" />
          <span className="text-xs font-medium">{text[language].invite}</span>
        </Link>

        {/* Center Button login (Trigger modal) */}
        {/* <div className="relative">
          <button
            onClick={openLoginModal} // Trigger modal open here
            className="w-16 h-16 bg-bgYellow flex flex-col text-white bg-red rounded-full justify-center items-center shadow-md -translate-y-6"
          >
            <img src={loginImage} alt="" className="w-6" />
            <span className="text-xs">{text[language].login}</span>
          </button>
        </div> */}
        <div className="relative">
          <button
            onClick={openLoginModal} // Trigger modal open here
            className="w-16 h-16 bg-bgYellow flex flex-col text-white bg-red rounded-full justify-center items-center shadow-md -translate-y-6"
          >
            <img src={loginImage} alt="" className="w-6" />
            <span className="text-xs">{text[language].deposit}</span>
          </button>
        </div>

        {/* Promotion */}
        <Link to="/promotion" className="flex flex-col items-center text-white">
          <img src={promoImage} alt="" className="w-8" />
          <span className="text-xs font-medium">{text[language].promotion}</span>
        </Link>

        {/* Member */}
        <Link to="/account" className="flex flex-col items-center text-white">
          <img src={memberImage} alt="" className="w-8" />
          <span className="text-xs font-medium">{text[language].member}</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigationBar;
