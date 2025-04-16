import { Link } from "react-router-dom";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";

const MainBalance = ({
  reloadBalance,
  loading,
  toggleBalanceVisibility,
  showBalance,
  balance,
  setIsInformationModalOpen,
}) => {
  return (
    <div className="md:bg-tabBackgroundTwo md:px-2 flex rounded-md ">
      <div className="px-2 md:px-3 mt-2  flex justify-between flex-row">
        <div className="text-white flex flex-row text-base items-center font-medium">
          <span className="pb-2 pr-1 md:text-2xl text-white">৳</span>
          <span className="text-white">
            {loading ? "..." : showBalance ? balance.toFixed(2) : "-"}
          </span>
        </div>

        <div className="flex flex-row items-center">
          {/* ভাষা অনুযায়ী টেক্সট */}

          <button onClick={reloadBalance} className="ml-2 md:pt-1">
            {loading ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 md:h-5 md:w-5 "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="23 4 23 10 17 10"></polyline>
                <path d="M20.49 15a9 9 0 1 1 2.13-9" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 md:h-5 md:w-5 "
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="23 4 23 10 17 10"></polyline>
                <path d="M20.49 15a9 9 0 1 1 2.13-9" />
              </svg>
            )}
          </button>

          <button
            onClick={toggleBalanceVisibility}
            className="ml-2 lg:block hidden"
          >
            {showBalance ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a17.33 17.33 0 0 1 2.31-3.81" />
                <path d="M9.53 9.53A3 3 0 0 1 12 9c1.66 0 3 1.34 3 3a3 3 0 0 1-.53 1.71" />
                <path d="M1 1l22 22" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* deposit,withdraw */}
      <div
        className="flex justify-around gap-1 items-center "
        onClick={() => setIsInformationModalOpen(true)}
      >
        {/* Deposit Icon */}
        <Link to="/information#tab2" className="flex flex-col items-center">
          <MdAttachMoney className="text-white bg-bgYellow md:text-3xl rounded-full " />
        </Link>

        {/* Withdraw Icon */}
        <Link to="/information#tab3" className="flex flex-col items-center">
          <FaMoneyBillWave className="text-white p-1 bg-bgGreen md:text-3xl rounded-full" />
        </Link>
      </div>
    </div>
  );
};

export default MainBalance;
