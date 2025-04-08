import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import { useContext } from "react";

const Customer = () => {
  const { language } = useContext(LanguageContext);
  
  return (
    <div className="flex flex-col p-4 gap-2">
      <h3 className="pb-4 text-xl font-bold">
        {language === "en" ? "Follow Us" : "আমাদের অনুসরণ করুন"}
      </h3>

      <Link>
        <p className="hover:text-opacity-100 text-white text-opacity-50 cursor-pointer whitespace-nowrap">
          {/* Conditional rendering based on the selected language */}
          {language === "en" ? "Customer Service" : "গ্রাহক সেবা"}
        </p>
      </Link>
    </div>
  );
};

export default Customer;
