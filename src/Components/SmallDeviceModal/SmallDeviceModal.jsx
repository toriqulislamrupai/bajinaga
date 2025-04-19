import { useEffect } from "react";
import downloadLogo from "../../assets/app_download_icon_nagabdtf5_20250312141113.webp";
import starIcon from "../../assets/star.png";
import downIcon from "../../assets/down-gift.b3589a4f.png";

const SmallDeviceModal = ({ isModal, setIsModal }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        document.body.style.marginTop = "0";
        setIsModal(false);
      } else {
        if (isModal) {
          document.body.style.marginTop = "50px";
        } else {
          document.body.style.marginTop = "0";
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      {isModal && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-auto z-40 bg-bgSupportSidebar text-black  text-center  p-2 shadow-lg">
          <div className="flex gap-3 items-center justify-center ">
            
              <button
                onClick={() => setIsModal(false)}
                className=" text-sm   text-white "
              >
                ✖
              </button>
              <img src={downloadLogo} alt="" className="w-8 md:w-8 h-auto" />
              <div className="flex  flex-col gap-1 items-start text-white ">
                <p className="text-xs">Betnaga App</p>
                <div className="flex gap-[2px] ">
                  <img src={starIcon} alt="star" className="w-3 h-3" />
                  <img src={starIcon} alt="star" className="w-3 h-3" />
                  <img src={starIcon} alt="star" className="w-3 h-3" />
                  <img src={starIcon} alt="star" className="w-3 h-3" />
                  <img src={starIcon} alt="star" className="w-3 h-3" />
                </div>
              </div>
            
            <div className=" flex items-center gap-1 p-1 rounded-full  text-white bg-appDownloadBg text-xs whitespace-nowrap">
              <p> ডাউনলোড করুন </p>

              <img src={downIcon} alt="" className="w-[20%]" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SmallDeviceModal;
