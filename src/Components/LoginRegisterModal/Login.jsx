import { BiLowVision } from "react-icons/bi";
import { MdOutlineVisibility } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = ({
  handleLoginSubmit,
  loginData,
  handleLoginChange,
  showPassword,
  togglePasswordVisibility,
  setAutoActiveTab,
  setIsModalOpen,
  autoCloseModal,
  language
}) => {

  const handleTermsClick = () => {
    setAutoActiveTab("");
    setIsModalOpen(true);
    autoCloseModal(true);
  };

  return (
    <div className="">
      <h3 className="md:hidden text-2xl text-white text-center pb-4">
        {language === "en" ? "Login" : "লগইন"}
      </h3>

      <form onSubmit={handleLoginSubmit} className="flex flex-col md:gap-6">
        <div className="relative">
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleLoginChange}
            placeholder={language === "en" ? "Username" : "ব্যবহারকারীর নাম"}
            className="w-full bg-gray-700 text-white hover:border-green-800 border px-10 py-2 rounded-md mb-3"
          />
          <FaUser className="absolute left-1 text-white hover:text-green-800 top-2.5 text-xl" />
        </div>

        {/* Password Field */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
            placeholder={language === "en" ? "Password" : "পাসওয়ার্ড"}
            className="w-full bg-gray-700 text-white hover:border-green-800 border px-10 py-2 rounded-md mb-3"
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

        <div className="flex items-center justify-between">
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="rememberMe"
              checked={loginData.rememberMe}
              onChange={handleLoginChange}
              className="mr-2 w-4 h-4"
            />
            <label className="text-white" htmlFor="rememberMe">
              {language === "en" ? "Remember" : "মনে রাখুন"}
            </label>
          </div>

          <div className="flex justify-between text-sm underline">
            <button
              type="button"
              onClick={() => setAutoActiveTab("forgotPassword")}
              className="text-yellow"
            >
              {language === "en" ? "Forgot Password?" : "পাসওয়ার্ড ভুলে গেছেন?"}
            </button>
          </div>
        </div>
<div className="py-3 md:py-0">
  
        <button
          type="submit"
          className="w-full bg-bgYellow text-white py-2 rounded mb-2"
        >
          {language === "en" ? "Login" : "লগইন"}
        </button>
        
</div>
      </form>

      <div>
        <p className="text-sm text-white">
          {language === "en"
            ? "I am 18 years old and agree to accept"
            : "আমি ১৮ বছর বা তার বেশি বয়সের এবং আমি সম্মত"}
          {" "}
          <span
            onClick={handleTermsClick}
            className="underline text-yellow cursor-pointer"
          >
            {language === "en" ? "Terms and Service" : "শর্তাবলি"}
          </span>
        </p>

        <p className="text-sm text-white py-3 md:py-0">
          {language === "en"
            ? "No account yet?"
            : "আপনার কি এখনো কোনো একাউন্ট নেই?"}{" "}
          <span
            onClick={() => setAutoActiveTab("register")}
            className="underline text-yellow cursor-pointer"
          >
            {language === "en" ? "Register now" : "এখন নিবন্ধন করুন"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
