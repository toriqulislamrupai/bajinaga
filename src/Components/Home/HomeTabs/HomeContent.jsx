import { useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa";

const HomeContent = ({ activeTab, data, subTabsState }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);
  return (
    <div>
      {activeTab !== 0 && (
        <div>
          {/* Check if current tab is NOT 'kheladhul' or 'lottery khela' */}
          {activeTab !== 2 && activeTab !== 6 && (
            <>
              {/* Sub-tabs with images */}
              <div className="flex justify-start overflow-x-auto">
                <div className="bg-bgPrimary p-2 mb-6">
                  <div className="flex  justify-center gap-4 ">
                    {data[activeTab].items
                      //   .slice(scrollIndex, scrollIndex + 9)
                      .map((item, index) => {
                        const [activeSubTab, setActiveSubTab] =
                          subTabsState[activeTab];
                        return (
                          <button
                            key={index}
                            className={`px-6 md:px-4 md:py-2 shadow text-white flex flex-col items-center justify-center ${
                              activeSubTab === index
                                ? "bg-bgYellow rounded-lg"
                                : "hover:bg-bgYellow hover:rounded-lg text-black"
                            }`}
                            onClick={() => setActiveSubTab(index)}
                          >
                            <img
                              src={item.img}
                              alt={item.title}
                              className="w-14 mb-2"
                            />
                            <span className="text-xs md:text-base">{item.title}</span>
                          </button>
                        );
                      })}
                  </div>
                </div>
              </div>

              {/* Content under sub-tabs */}
              <div className="mt-4">
                {data[activeTab].items.map((item, index) => {
                  const [activeSubTab] = subTabsState[activeTab];
                  if (activeSubTab === index) {
                    return (
                      <div key={index}>
                        <div className="md:flex grid grid-cols-3 gap-2 mt-2">
                          {item.content.map((imgSrc, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="relative group md:w-40 md:h-48"
                            >
                              <img
                                src={imgSrc}
                                alt={`Content ${imgIndex}`}
                                className="w-full h-full object-cover rounded-md transform group-hover:scale-110 transition-transform duration-300"
                              />
                              <button
                                className="absolute group-hover:scale-110 inset-0 flex flex-col justify-center items-center gap-2 
                  text-xs bg-black bg-opacity-60 text-white rounded-md 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              >
                                <FaPlayCircle className="text-yellow text-3xl" />
                                <h3 className="underline whitespace-nowrap">
                                  ফ্রি ট্রায়াল
                                </h3>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </>
          )}

          {/* If 'kheladhul' or 'lottery khela', just show the content image directly */}
          {(activeTab === 2 || activeTab === 6) && (
            <div className="mt-4">
              {data[activeTab].items.map((item, index) => (
                <div key={index} className="md:flex grid grid-cols-3  gap-2 mt-2 justify-start">
                  {item.content.map((imgSrc, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={imgSrc}
                      alt={`Content ${imgIndex}`}
                      className="w-40 md:h-48 object-cover"
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomeContent;
