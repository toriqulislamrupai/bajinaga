import { useState } from "react";
import { BiLowVision } from "react-icons/bi";
import { MdOutlineVisibility } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Register = ({
  handleRegisterSubmit,
  registerData,
  handleRegisterChange,
  setIsModalOpen,
  autoCloseModal,
  setAutoActiveTab,
  language
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleTermsClick = () => {
    setIsModalOpen(true);
    autoCloseModal(true);
  };

  return (
    <div>
      <h3 className="md:hidden text-2xl text-white text-center pb-4">
        {language === "en" ? "Register" : "নিবন্ধন"}
      </h3>
      <form className="flex flex-col md:gap-4" onSubmit={handleRegisterSubmit}>
        <div className="relative">
          <input
            type="text"
            name="username"
            value={registerData.username}
            onChange={handleRegisterChange}
            placeholder={language === "en" ? "Username" : "ব্যবহারকারীর নাম"}
            className="w-full bg-tabBackgroundTwo text-white hover:border border-green-800 px-10 py-2 rounded mb-3"
          />
          <FaUser className="absolute left-1 text-white hover:text-green-800 top-2.5 text-xl" />
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={registerData.password}
            onChange={handleRegisterChange}
            placeholder={language === "en" ? "Password" : "পাসওয়ার্ড"}
            className="w-full bg-tabBackgroundTwo text-white hover:border border-green-800 px-10 py-2 rounded mb-3"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showPassword ? (
              <MdOutlineVisibility className="text-white" />
            ) : (
              <BiLowVision className="text-white" />
            )}
          </button>
          <RiLockPasswordFill className="absolute left-1 text-white hover:text-green-800 top-2.5 text-xl" />
        </div>

        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={registerData.confirmPassword}
            onChange={handleRegisterChange}
            placeholder={
              language === "en" ? "Confirm Password" : "পাসওয়ার্ড নিশ্চিত করুন"
            }
            className="w-full bg-tabBackgroundTwo text-white hover:border border-green-800 px-10 py-2 rounded mb-3"
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showConfirmPassword ? (
              <MdOutlineVisibility className="text-white" />
            ) : (
              <BiLowVision className="text-white" />
            )}
          </button>
          <RiLockPasswordFill className="absolute left-1 text-white hover:text-green-800 top-2.5 text-xl" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <input type="checkbox" name="rememberMe" className="mr-2 w-4 h-4" />
          </div>
          <div className="flex justify-between text-sm underline">
            <p className="text-sm text-white">
              {language === "en"
                ? "I am 18 years old and agree to accept "
                : "আমি ১৮ বছরের বেশি বয়সী এবং সম্মত "}
              <span
                onClick={handleTermsClick}
                className="underline text-yellow cursor-pointer"
              >
                {language === "en"
                  ? "Terms and Service"
                  : "শর্তাবলী ও পরিষেবা"}
              </span>
            </p>
          </div>
        </div>
<div className="py-6 md:py-0">


        <button
          type="submit"
          className="w-full bg-bgYellow text-white py-2 rounded"
        >
          {language === "en" ? "Register" : "নিবন্ধন করুন"}
        </button>
        </div>
        <div>
          <p className="text-white">
            {language === "en"
              ? "Already have an account "
              : "ইতিমধ্যে একটি অ্যাকাউন্ট আছে "}
            <span
              onClick={() => setAutoActiveTab("login")}
              className="text-yellow cursor-pointer"
            >
              {language === "en" ? "login" : "লগইন"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
