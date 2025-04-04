import { BiMenuAltLeft } from "react-icons/bi";
import PrimaryLogo from "../../assets/wps_BetNaga_Logo_20250206233311.webp";
import { MdNotificationsActive } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

const TopHeader = ({ toggleMenu }) => {
  return (
    <div className="px-5 bg-bgPrimary border-b  border-white border-opacity-20  text-white py-2 flex justify-between ">
      <div className="flex gap-2 lg:gap-0 items-center ">
        {/* menu */}
        <BiMenuAltLeft className="text-4xl cursor-pointer" onClick={toggleMenu} />
        <img src={PrimaryLogo} alt="" className="w-[60%] md:w-[30%]" />
      </div>
      <div className="flex gap-4 items-center">
        <button className="bg-bgYellow py-2  px-3 rounded-lg">লগইন</button>
        <button className="bg-bgGreen py-2 px-3  rounded-lg">
          নিবন্ধন 
        </button>
        <div className="lg:flex gap-4 hidden">
        <MdNotificationsActive className="text-3xl" />
        <RiCustomerService2Line className="text-3xl" />
        </div>
        
      </div>
    </div>
  );
};

export default TopHeader;
