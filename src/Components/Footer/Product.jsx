import { useContext,  useRef, useState } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import { Link } from "react-router-dom";

const product = [
  { id: 1, title: { en: "Slots", bn: "স্লটস" }, tabIndex: 1, slug: "slots" },
  { id: 2, title: { en: "Sports", bn: "খেলাধুলা" }, tabIndex: 2, slug: "sports" },
  { id: 3, title: { en: "Live", bn: "লাইভ" }, tabIndex: 3, slug: "live" },
  { id: 4, title: { en: "Fish", bn: "মাছ" }, tabIndex: 4, slug: "fish" },
  { id: 5, title: { en: "Poker", bn: "পোকার" }, tabIndex: 5, slug: "poker" },
  { id: 6, title: { en: "Lottery", bn: "লটারী" }, tabIndex: 6, slug: "lottery" },
];

const Product = ({  setActiveTab }) => {
  const { language } = useContext(LanguageContext);
  const tabRefs = useRef([]);
  const [isOpen, setIsOpen] = useState(false);

  

  const handleTabChange = (slug) => {
    window.location.hash = slug;  // Update the URL with the current slug
    setActiveTab(slug);
  };


  return (
    <div>
      {/* Desktop Version */}
      <div className="md:flex flex-col hidden items-center md:items-start p-4 gap-2">
        <h3 className="pb-4 text-xl font-bold">{language === "en" ? "Product" : "প্রোডাক্ট"}</h3>
        
        {product.map((item) => (
          <Link
            key={item.id}
            to={`#${item.slug}`}
            className={`rounded-lg shadow-md ${
              window.location.hash === `#${item.slug}`  // Check if the current hash matches the slug
                ? "text-opacity-100 text-white"
                : "hover:text-opacity-100 text-white text-opacity-50"
            } cursor-pointer`}
            onClick={() => handleTabChange(item.tabIndex)}
            ref={(el) => (tabRefs.current[item.tabIndex - 1] = el)} // Fixing the index issue here
          >
            <h3 className="whitespace-nowrap">
              {language === "en" ? item.title.en : item.title.bn}
            </h3>
          </Link>
        ))}
      </div>

      {/* Mobile Version */}
      <div className="md:hidden p-4">
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

        {isOpen && (
          <div className="flex flex-col text-xs p-4 gap-4">
            {product.map((item) => (
              <Link
                key={item.id}
                to={`#${item.slug}`}
                className={`rounded-lg shadow-md ${
                  window.location.hash === `#${item.slug}`  // Check if the current hash matches the slug
                    ? "text-opacity-100 text-white"
                    : "hover:text-opacity-100 text-white text-opacity-50"
                } cursor-pointer`}
                onClick={() => handleTabChange(item.tabIndex)}
                ref={(el) => (tabRefs.current[item.tabIndex - 1] = el)} // Fixing the index issue here too
              >
                <h3 className="whitespace-nowrap">
                  {language === "en" ? item.title.en : item.title.bn}
                </h3>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
