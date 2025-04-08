import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { MdSms } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ForgetPassword = ({
  handleForgotPasswordSubmit,
  forgotPasswordData,
  handleForgotPasswordChange,
  language
}) => {
  const [activeTab, setActiveTab] = useState("email");
  const [showPassword, setShowPassword] = useState(false);

  const countryCodes = ["+880", "+91", "+1", "+44", "+81", "+61"];

  return (
    <div className="text-white">
      <h3 className="md:hidden text-2xl text-white text-center pb-4">
        {language === 'en' ? "Forget Password" : "পাসওয়ার্ড ভুলে গেছেন"}
      </h3>

      {/* Tabs */}
      <div className="flex gap-10 text-xl justify-center border-b items-center mb-4">
        <button
          type="button"
          className={`py-2 ${activeTab === "email"
            ? "border-yellow border-b-4 text-white"
            : "hover:border-b-4 border-yellow"
            }`}
          onClick={() => setActiveTab("email")}
        >
          {language === 'en' ? "Email" : "ইমেইল"}
        </button>
        <button
          type="button"
          className={`py-2 ${activeTab === "mobile"
            ? "border-yellow border-b text-white"
            : "hover:border-b-4 border-yellow"
            }`}
          onClick={() => setActiveTab("mobile")}
        >
          {language === 'en' ? "Mobile" : "মোবাইল"}
        </button>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {language === 'en' ? "Retrieve your password" : "পাসওয়ার্ড পুনরুদ্ধার করুন"}
        </h2>
        <p>
          {language === 'en'
            ? "Please retrieve your password in the following ways"
            : "দয়া করে নিচের উপায়গুলো অনুসরণ করে পাসওয়ার্ড পুনরুদ্ধার করুন"}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleForgotPasswordSubmit}>
        {activeTab === "email" ? (
          <>
            {/* Username */}
            <div className="relative">
              <input
                type="text"
                name="userName"
                value={forgotPasswordData.userName}
                onChange={handleForgotPasswordChange}
                placeholder={language === 'en' ? "Please enter username" : "ইউজারনেম দিন"}
                className="w-full hover:border border-green-800 bg-tabBackgroundTwo px-10 py-2 rounded mb-3"
              />
              <FaUser className="absolute left-1 text-white hover:text-green-800 top-2.5 text-xl" />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={forgotPasswordData.email}
                onChange={handleForgotPasswordChange}
                placeholder={language === 'en' ? "Enter your email" : "আপনার ইমেইল দিন"}
                className="w-full bg-tabBackgroundTwo hover:border border-green-800 px-10 py-2 rounded mb-3"
              />
              <MdEmail className="absolute left-1 text-white hover:text-green-800 top-2.5 text-xl" />
            </div>
          </>
        ) : (
          <>
            {/* Country code + mobile number */}
            <div className="flex mb-3 relative">
              <select
                name="countryCode"
                value={forgotPasswordData.countryCode}
                onChange={handleForgotPasswordChange}
                className="bg-tabBackgroundTwo outline-none border-green-800 px-10 rounded-l"
              >
                {countryCodes.map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
              <FaMobileAlt className="absolute left-1 text-white hover:text-green-800 top-2.5 text-xl" />
              <input
                type="tel"
                name="mobile"
                value={forgotPasswordData.mobile}
                onChange={handleForgotPasswordChange}
                placeholder={language === 'en' ? "Enter number" : "মোবাইল নাম্বার "}
                className="w-full bg-tabBackgroundTwo hover:border border-green-800 px-4 py-2 rounded-r"
              />
            </div>

            {/* OTP code with Get Code button */}
            <div className="relative mb-3">
              <input
                type="text"
                name="otp"
                value={forgotPasswordData.otp}
                onChange={handleForgotPasswordChange}
                placeholder={language === 'en' ? "Enter SMS Code" : " কোড লিখুন"}
                className="w-full bg-tabBackgroundTwo hover:border border-green-800 px-10 py-2 rounded"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-500 text-white p-3 font-medium rounded-md text-sm bg-yellow"
              >
                {language === 'en' ? "Get Code" : "কোড নিন"}
              </button>
              <MdSms className="absolute left-1 text-white hover:text-green-800 top-2.5 text-xl" />
            </div>

            {/* New password with toggle */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="newPassword"
                value={forgotPasswordData.newPassword}
                onChange={handleForgotPasswordChange}
                placeholder={language === 'en' ? "New password" : "নতুন পাসওয়ার্ড"}
                className="w-full bg-tabBackgroundTwo hover:border border-green-800 px-10 py-2 rounded mb-4"
              />
              <RiLockPasswordFill className="absolute left-1 text-white hover:text-green-800 top-2.5 text-xl" />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-3 text-white hover:text-green-800"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </>
        )}

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-bgYellow text-white py-2 rounded"
        >
          {language === 'en' ? "OK" : "নিশ্চিত করুন"}
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
