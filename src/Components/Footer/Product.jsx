import { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

const product = [
  { id: 1, title: { en: "Slots", bn: "স্লটস" }, tabIndex: 1 },
  { id: 2, title: { en: "Sports", bn: "খেলাধুলা" }, tabIndex: 2 },
  { id: 3, title: { en: "Live", bn: "লাইভ" }, tabIndex: 3 },
  { id: 4, title: { en: "Fish", bn: "মাছ" }, tabIndex: 4 },
  { id: 5, title: { en: "Poker", bn: "পোকার" }, tabIndex: 5 },
  { id: 6, title: { en: "Lottery", bn: "লটারী" }, tabIndex: 6 },
];

const Product = ({ activeTab, setActiveTab }) => {

  const { language } = useContext(LanguageContext);
  const tabRefs = useRef([]);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    if (tabRefs.current[activeTab - 1]) {
      tabRefs.current[activeTab - 1].scrollIntoView({ behavior: "smooth" });
    }
  }, [activeTab]);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex); // Pass the tabIndex dynamically here
  };

  return (
    <div>
    <div className="md:flex flex-col hidden  items-center md:items-start p-4 gap-2">
      <h3 className="pb-4 text-xl font-bold">{language === "en" ? "Product" : "প্রোডাক্ট"}</h3>
      {product.map((item) => (
        <div
          key={item.id}
          className={`rounded-lg shadow-md ${
            activeTab === item.tabIndex
              ? "text-opacity-100 text-white"
              : "hover:text-opacity-100 text-white text-opacity-50"
          } cursor-pointer`}
          onClick={() => handleTabChange(item.tabIndex)}
          ref={(el) => (tabRefs.current[item.tabIndex] = el)}
        >
          <h3 className="whitespace-nowrap">
            {/* Display the title based on language selection */}
            {language === "en" ? item.title.en : item.title.bn}
          </h3>
        </div>
      ))}
    </div>
    <div className="md:hidden p-4">
{/* Arrow Toggle */}
<div
        className="flex items-center justify-between cursor-pointer w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-white text-sm">
          {language === "en" ? "Product" : "প্রোডাক্ট"}
        </h3>
        <svg
          className={`h-5 w-5 transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Display product categories if isOpen is true */}
      {isOpen && (
        <div className="flex flex-col text-xs p-4 gap-4">
          {product.map((item) => (
            <div
              key={item.id}
              className={`rounded-lg shadow-md ${
                activeTab === item.tabIndex
                  ? "text-opacity-100 text-white"
                  : "hover:text-opacity-100 text-white text-opacity-50"
              } cursor-pointer`}
              onClick={() => handleTabChange(item.tabIndex)}
              ref={(el) => (tabRefs.current[item.tabIndex] = el)}
            >
              <h3 className="whitespace-nowrap">
                {/* Display the title based on language selection */}
                {language === "en" ? item.title.en : item.title.bn}
              </h3>
            </div>
          ))}
        </div>
      )}
    
    </div>
    </div>
  );
};

export default Product;
