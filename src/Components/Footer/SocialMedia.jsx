import { FaFacebook, FaTelegram, FaPinterest } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import downloadPNG from "../../assets/download (8).png";
import { LanguageContext } from "../../Context/LanguageContext";
import { useContext, useState } from "react";

const media = [
  { id: 1, title: "Facebook", icon: FaFacebook, color: "#1877F2" }, // Facebook Blue
  { id: 2, title: "WhatsApp", icon: IoLogoWhatsapp, color: "#25D366" }, // WhatsApp Green
  { id: 3, title: "Telegram", icon: FaTelegram, color: "#0088cc" }, // Telegram Blue
  { id: 4, title: "Pinterest", icon: FaPinterest, color: "#E60023" }, // Pinterest Red
];

const SocialMedia = () => {
  const { language } = useContext(LanguageContext);
  const [isSocialMediaOpen, setIsSocialMediaOpen] = useState(false); // Toggle for Social Media section
  const [isPartnerOpen, setIsPartnerOpen] = useState(false); // Toggle for Official Partner section

  return (
    <div>
      <div className="p-4 md:flex flex-col gap-4 hidden">
        {/* Social Media Section */}
        <div>
          <h3 className="pb-4 text-xl font-bold text-white">
            {language === "en" ? "Social Media" : "সোশ্যাল মিডিয়া"}
          </h3>
          <div className="grid grid-cols-4">
            {media.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="flex flex-col items-center gap-1">
                  <div
                    className="rounded-full p-1 shadow-md hover:scale-110 transition duration-300"
                    style={{ backgroundColor: item.color }}
                  >
                    <IconComponent className="text-white text-xl" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Official Partner Section */}
        <div className="mt-2">
          <h3 className="text-xl text-white">
            {language === "en" ? "Official Partner" : "অফিশিয়াল পার্টনার"}
          </h3>
          <img src={downloadPNG} alt="Official Partner" />
        </div>
      </div>
      <div className="md:hidden">
        <div className="p-4 flex flex-col gap-4">
          {/* Social Media Section with Toggle */}
          <div>
            <h3
              className="pb-4 text-sm font-bold text-white cursor-pointer flex justify-between items-center"
              onClick={() => setIsSocialMediaOpen(!isSocialMediaOpen)}
            >
              <span>
                {language === "en" ? "Social Media" : "সোশ্যাল মিডিয়া"}
              </span>
              <svg
                className={`h-5 w-5 transform transition-transform duration-300 ${
                  isSocialMediaOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </h3>
            {isSocialMediaOpen && (
              <div className="grid grid-cols-4">
                {media.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.id}
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className="rounded-full p-1 shadow-md hover:scale-110 transition duration-300"
                        style={{ backgroundColor: item.color }}
                      >
                        <IconComponent className="text-white text-xl" />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Official Partner Section with Toggle */}
          <div className="mt-2">
            <h3
              className="text-sm text-white cursor-pointer flex justify-between items-center"
              onClick={() => setIsPartnerOpen(!isPartnerOpen)}
            >
              <span>
                {language === "en" ? "Official Partner" : "অফিশিয়াল পার্টনার"}
              </span>
              <svg
                className={`h-5 w-5 transform transition-transform duration-300 ${
                  isPartnerOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </h3>
            {isPartnerOpen && <img src={downloadPNG} alt="Official Partner" className="w-36" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
