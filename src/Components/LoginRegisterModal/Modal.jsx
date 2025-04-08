import { useContext, useState } from "react";
import PrimaryLogo from "../../assets/wps_BetNaga_Logo_20250206233311.webp";

import Login from "./Login";
import Register from "./Register";
import ForgetPassword from "./ForgetPassword";
import { FaArrowLeft } from "react-icons/fa6";
import { LanguageContext } from "../../Context/LanguageContext";

const Modal = ({
  autoActiveTab,
  setAutoActiveTab,
  autoCloseModal,
  setIsModalOpen,
}) => {

  const { language } = useContext(LanguageContext);
  // State for input fields
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    rememberMe: false, // For Remember Me checkbox
  });

  const [registerData, setRegisterData] = useState({
    userName: "",
    email: "",
    countryCode: "+880",
    mobile: "",
    otp: "",
    newPassword: "",
  });

  const [forgotPasswordData, setForgotPasswordData] = useState({
    email: "",
    userName: "",
    mobile: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      autoCloseModal();
    }
  };

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleForgotPasswordChange = (e) => {
    const { name, value } = e.target;
    setForgotPasswordData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", registerData);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot Password Data:", forgotPasswordData);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black bg-opacity-60 flex justify-center items-center "
      onClick={handleOverlayClick}
    >
      <div className="bg-bgPrimary text-black rounded-lg w-full h-full md:h-auto md:w-[420px] p-5 relative">
        {/* Close Button */}
        <div className="hidden md:block">
        <button
          onClick={autoCloseModal}
          className="absolute top-2 right-2 text-red-600 text-xl font-bold"
        >
          ✖
        </button>
        </div>
        

        <div className="md:hidden">
        <button
          onClick={autoCloseModal}
          className="absolute top-2 left-2 text-white text-xl font-bold"
        >
          <FaArrowLeft />
        </button>
        </div>

        {/* Tab Buttons */}
        {/* Tab Buttons (Only show when not in forgot password tab) */}
        <div className="md:hidden justify-items-center p-4"> 
<img src={PrimaryLogo} alt="" className="w-[80%]" />
        </div>
        <div className="hidden md:block">
        {autoActiveTab !== "forgotPassword" && (
          <div className="flex mt-6 mb-12">
            <button
              className={`px-6 py-2 rounded ${
                autoActiveTab === "login"
                  ? "bg-bgYellow"
                  : " bg-tabBackgroundTwo text-white"
              }`}
              onClick={() => setAutoActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`px-6 py-2 rounded ${
                autoActiveTab === "register"
                  ? "bg-bgYellow"
                  : " bg-tabBackgroundTwo text-white"
              }`}
              onClick={() => setAutoActiveTab("register")}
            >
              Register
            </button>
          </div>
        )}
        </div>

        {/* Tab Content */}
        {autoActiveTab === "login" ? (
          <Login
            handleLoginSubmit={handleLoginSubmit}
            loginData={loginData}
            handleLoginChange={handleLoginChange}
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
            setAutoActiveTab={setAutoActiveTab}
            setIsModalOpen={setIsModalOpen}
            autoCloseModal={autoCloseModal}
            language={language}
          />
        ) : autoActiveTab === "register" ? (
          <Register
            handleRegisterSubmit={handleRegisterSubmit}
            registerData={registerData}
            handleRegisterChange={handleRegisterChange}
            setAutoActiveTab={setAutoActiveTab}
            setIsModalOpen={setIsModalOpen}
            autoCloseModal={autoCloseModal}
            language={language}
          />
        ) : autoActiveTab === "forgotPassword" ? (
          <ForgetPassword
            handleForgotPasswordSubmit={handleForgotPasswordSubmit}
            forgotPasswordData={forgotPasswordData}
            handleForgotPasswordChange={handleForgotPasswordChange}
            language={language}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
