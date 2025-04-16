import userImage from "../../assets/0.png";
import signInImage from "../../assets/signin.534111d5.png";
import { RiVipCrown2Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { TbJoinRound } from "react-icons/tb";
import AccountBalance from "./AccountBalance";
import levelBg from "../../assets/level-bg.859bb4c4.png";
import AccountProcess from "./AccountProcess";
import AccountPercentage from "./AccountPercentage";
import AccountDetails from "./AccountDetails";
import { useState } from "react";

const Account = ({
  language,
  formData,
  setFormData,
  handleInputChange,
  selectedItem,
  setSelectedItem,
  activeModal,
  setActiveModal,
  items,
  handleModalSwitch,
  handleSubmit
}) => {
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

  return (
    <div className="grid grid-cols-3 gap-2 p-6 ">
      <div className="bg-bgAccount py-2 ">
        <div
          className="flex flex-row gap-2  bg-cover bg-center p-4 rounded-lg"
          style={{ backgroundImage: `url(${levelBg})` }}
        >
          <img src={userImage} alt="" className="w-16 h-16 rounded-full" />
          <div className="text-white  flex flex-col gap-2">
            <div className="flex gap-3">
              <div className="flex items-center gap-2 bg-bgVIP px-2 rounded-full">
                <RiVipCrown2Line />
                <p>VIP Level 1</p>
              </div>
              <img src={signInImage} alt="" />
            </div>
            <div className="flex gap-2 text-black items-center">
              <p className="font-medium">rohankh</p>
              <FaRegEdit />
            </div>
            <div className="flex gap-1 items-center text-xs text-black text-opacity-50">
              <TbJoinRound />
              <p>joined 2025-04-05</p>
            </div>
          </div>
        </div>

        <AccountBalance
          reloadBalance={reloadBalance}
          loading={loading}
          toggleBalanceVisibility={toggleBalanceVisibility}
          showBalance={showBalance}
          balance={balance}
          language={language}
        />
        <AccountProcess />
      </div>

      {/* low percentage */}
      <AccountPercentage />

      {/* AccountDetails */}
      <AccountDetails
        language={language}
        formData={formData}
        setFormData={setFormData}
        handleInputChange={handleInputChange}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        items={items}
        handleModalSwitch={handleModalSwitch}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Account;
