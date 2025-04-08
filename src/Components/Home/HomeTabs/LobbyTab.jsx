import HotGames1 from "../../../assets/U9W004.webp";
import HotGames2 from "../../../assets/JL0045.webp";
import { FaFireAlt } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

const LobbyTab = ({ activeTab, data, subTabsState }) => {
  const images = [HotGames1, HotGames2, HotGames2];
  return (
    <div>
      {activeTab === 0 && (
        <div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FaFireAlt className="w-8 h-8 text-yellow" />
              <h3 className="text-white">গরম খেলা</h3>
            </div>
            <div>
              <div className="md:flex grid grid-cols-3 gap-4">
                {images.map((img, index) => (
                  <img
                    key={index}
                    className="w-40  object-cover rounded-md"
                    src={img}
                    alt=""
                  />
                ))}
              </div>
            </div>
            {/* Showing parent tab titles, their images, and their sub-tabs */}
            <div className="flex flex-col gap-4">
              {data
                .filter((item) => item.id !== 1) // Exclude 'Lobby' tab itself
                .map((item, parentIndex) => (
                  <div key={item.id} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-8 h-8 mb-2"
                      />
                      <h3 className="text-white">{item.title}</h3>
                    </div>

                    {/* If NOT kheladhul (id 2) or lottery khela (id 3), show sub-tabs */}
                    {item.id !== 3 && item.id !== 7 && (
                      <div className="flex items-center overflow-x-auto justify-between">
                        <div className="bg-bgPrimary  p-2 mb-6">
                          <div className="flex overflow-x-auto  justify-center gap-4">
                            {item.items.map((subItem, subIndex) => {
                              const [activeSubTab, setActiveSubTab] =
                                subTabsState[parentIndex];
                              return (
                                <button
                                  key={subIndex}
                                  className={`px-6 md:px-4 md:py-2 rounded-lg shadow text-white flex flex-col items-center justify-center ${
                                    activeSubTab === subIndex
                                      ? "bg-bgYellow "
                                      : "hover:bg-bgYellow text-black"
                                  }`}
                                  onClick={() => setActiveSubTab(subIndex)}
                                >
                                  <img
                                    src={subItem.img}
                                    alt={subItem.title}
                                    className="w-14"
                                  />
                                  <span className="text-xs md:text-base">{subItem.title}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Showing images */}
                    <div className="mt-4">
                      {item.id === 3 || item.id === 7
                        ? // For 'kheladhul' or 'lottery khela', show all content images
                          item.items.map((subItem, subIndex) => (
                            <div
                              key={subIndex}
                              className="md:flex grid grid-cols-3 md:gap-4 gap-2  mt-2"
                            >
                              {subItem.content.map((imgSrc, imgIndex) => (
                                <img
                                  key={imgIndex}
                                  src={imgSrc}
                                  alt={`Image ${imgIndex + 1}`}
                                  className="md:w-40 md:h-48 object-cover rounded-md"
                                />
                              ))}
                            </div>
                          ))
                        : // For other tabs, show content based on selected sub-tab
                          item.items.map((subItem, subIndex) => {
                            const [activeSubTab] = subTabsState[parentIndex];
                            if (activeSubTab === subIndex) {
                              return (
                                <div
                                  key={subIndex}
                                  className="md:flex grid grid-cols-3 gap-2 md:gap-4  flex-wrap mt-2"
                                >
                                  {subItem.content.map((imgSrc, imgIndex) => (
                                    <div
                                      key={imgIndex}
                                      className="relative group md:w-40 md:h-48"
                                    >
                                      <img
                                        src={imgSrc}
                                        alt={`Image ${imgIndex + 1}`}
                                        className="w-full h-full object-cover rounded-md transform group-hover:scale-110 transition-transform duration-300"
                                      />
                                      <button
                                        className="absolute left-1/2 top-1/2 group-hover:scale-110 transform -translate-x-1/2 -translate-y-1/2 
      text-xs bg-black bg-opacity-60 text-white rounded-sm w-full h-full px-4 py-2 
      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                      >
                                        <div className="flex flex-col items-center gap-4">
                                          <FaPlayCircle className="text-yellow text-3xl" />
                                          <h3 className="underline whitespace-nowrap">
                                            ফ্রি ট্রায়াল
                                          </h3>
                                        </div>
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              );
                            }
                            return null;
                          })}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LobbyTab;
