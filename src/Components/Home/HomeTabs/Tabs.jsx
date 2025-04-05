import { useState } from "react";
import tab1Image from "../../../assets/download (1).png";
import tab2Image from "../../../assets/download (2).png";
import tab3Image from "../../../assets/download (3).png";
import tab4Image from "../../../assets/download (4).png";
import tab5Image from "../../../assets/download (5).png";
import tab6Image from "../../../assets/download (6).png";
import tab7Image from "../../../assets/download (7).png";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import SlotImage from "../../../assets/JL-COLOR.webp";
import SlotImageContent1 from "../../../assets/JL0033.webp";
import SlotImageContent2 from "../../../assets/JL0038.webp";


import SlotImage2 from "../../../assets/PG-COLOR.webp";
import SlotImage2Content1 from "../../../assets/PG0113.webp";
import SlotImage2Content2 from "../../../assets/PG0118.webp";

import SlotImage3 from "../../../assets/JDB-COLOR.webp";
import SlotImage3Content1 from "../../../assets/JDB223.webp";
import SlotImage3Content2 from "../../../assets/JDB225.webp";

import SlotImage4 from "../../../assets/FS-COLOR.webp";
import SlotImage4Content1 from "../../../assets/FS0030.webp";
import SlotImage4Content2 from "../../../assets/FS0009.webp";



import SlotImage5 from "../../../assets/FC-COLOR.webp";
import SlotImage5Content1 from "../../../assets/FC0060.webp";
import SlotImage5Content2 from "../../../assets/FC0061.webp";


import SlotImage6 from "../../../assets/SG-COLOR.webp";
import SlotImage6Content1 from "../../../assets/SG0175.webp";
import SlotImage6Content2 from "../../../assets/SG0178.webp";


import SlotImage7 from "../../../assets/NS-COLOR.webp";
import SlotImage7Content1 from "../../../assets/NS0050.webp";
import SlotImage7Content2 from "../../../assets/NS0046.webp";

import SlotImage8 from "../../../assets/YB-COLOR.webp";
import SlotImage8ContentImage1 from "../../../assets/YB0036.webp";
import SlotImage8ContentImage2 from "../../../assets/YB0043.webp";


const Tabs = () => {
  const data = [
    {
      id: 1,
      title: "লবি",
      img: tab1Image,
      items: [], // Keep this empty if no sub-tabs are needed for this tab
    },
    {
      id: 2,
      title: "স্লট",
      img: tab2Image,
      items: [
        {
          title: "JILI",
          img: SlotImage,
          content: [
            SlotImageContent1,
            SlotImageContent2,
          ],
        },
        {
          title: "PG",
          img: SlotImage2,
          content: [
            SlotImage2Content1,
            SlotImage2Content2,
          ],
        },
        {
          title: "JDB",
          img: SlotImage3,
          content: [
          SlotImage3Content1,
          SlotImage3Content2,
          ],
        },
        {
          title: "FASTSPIN",
          img: SlotImage4,
          content: [
            SlotImage4Content1,
            SlotImage4Content2,
          ],
        },
        {
          title: "FC",
          img: SlotImage5,
          content: [
            SlotImage5Content1,
            SlotImage5Content2,
          ],
        },
        {
          title: "SG",
          img: SlotImage6,
          content: [
            SlotImage6Content1,
            SlotImage6Content2,
          ],
        },
        {
          title: "NEXT SPIN",
          img: SlotImage7,
          content: [
           SlotImage7Content1,
           SlotImage7Content2
          ],
        },
        {
          title: "YELLOW BAT",
          img: SlotImage8,
          content: [
            SlotImage8ContentImage1,
            SlotImage8ContentImage2,
          ],
        },

        // Add more unique titles here
      ],
    },
    {
      id: 3,
      title: "খেলাধুলা",
      img: tab3Image,
      items: [
        {
          title: "ফুটবল",
          img: `https://picsum.photos/seed/sport1a/200/150`,
          content: [
            `https://picsum.photos/seed/sport1a/200/150`,
            `https://picsum.photos/seed/sport1b/200/150`,
          ],
        },
        {
          title: "ক্রিকেট",
          img: `https://picsum.photos/seed/sport2a/200/150`,
          content: [
            `https://picsum.photos/seed/sport2a/200/150`,
            `https://picsum.photos/seed/sport2b/200/150`,
          ],
        },
        // More unique titles can go here
      ],
    },
    {
      id: 4,
      title: "লাইভ",
      img: tab4Image,
      items: [
        {
          title: "লাইভ ১",
          img: `https://picsum.photos/seed/live1a/200/150`,
          content: [
            `https://picsum.photos/seed/live1a/200/150`,
            `https://picsum.photos/seed/live1b/200/150`,
          ],
        },
        {
          title: "লাইভ ২",
          img: `https://picsum.photos/seed/live2a/200/150`,
          content: [
            `https://picsum.photos/seed/live2a/200/150`,
            `https://picsum.photos/seed/live2b/200/150`,
          ],
        },
        // More unique titles can go here
      ],
    },
    {
      id: 5,
      title: "মাছ ধরা",
      img: tab5Image,
      items: [
        {
          title: "মাছ ধরা ১",
          img: `https://picsum.photos/seed/fish1a/200/150`,
          content: [
            `https://picsum.photos/seed/fish1a/200/150`,
            `https://picsum.photos/seed/fish1b/200/150`,
          ],
        },
        {
          title: "মাছ ধরা ২",
          img: `https://picsum.photos/seed/fish2a/200/150`,
          content: [
            `https://picsum.photos/seed/fish2a/200/150`,
            `https://picsum.photos/seed/fish2b/200/150`,
          ],
        },
        // More unique titles can go here
      ],
    },
    {
      id: 6,
      title: "পোকার",
      img: tab6Image,
      items: [
        {
          title: "পোকার ১",
          img: `https://picsum.photos/seed/poker1a/200/150`,
          content: [
            `https://picsum.photos/seed/poker1a/200/150`,
            `https://picsum.photos/seed/poker1b/200/150`,
          ],
        },
        {
          title: "পোকার ২",
          img: `https://picsum.photos/seed/poker2a/200/150`,
          content: [
            `https://picsum.photos/seed/poker2a/200/150`,
            `https://picsum.photos/seed/poker2b/200/150`,
          ],
        },
        // More unique titles can go here
      ],
    },
    {
      id: 7,
      title: "লটারি খেলা",
      img: tab7Image,
      items: [
        {
          title: "লটারি ১",
          img: `https://picsum.photos/seed/lottery1a/200/150`,
          content: [
            `https://picsum.photos/seed/lottery1a/200/150`,
            `https://picsum.photos/seed/lottery1b/200/150`,
          ],
        },
        {
          title: "লটারি ২",
          img: `https://picsum.photos/seed/lottery2a/200/150`,
          content: [
            `https://picsum.photos/seed/lottery2a/200/150`,
            `https://picsum.photos/seed/lottery2b/200/150`,
          ],
        },
        // More unique titles can go here
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const subTabsState = data.map(() => useState(0)); // Create a useState for each parent tab's sub-tabs
  const [scrollIndex, setScrollIndex] = useState(0); // For scroll navigation

  const handleScrollLeft = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  const handleScrollRight = () => {
    if (scrollIndex < Math.max(...data.map((tab) => tab.items.length)) - 5) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  return (
    <div className="p-4 bg-tabBackground mt-4">
      {/* Tabs */}
      <div className="flex flex-wrap justify-start gap-4 mb-6">
        {data.map((item, index) => (
          <button
            key={item.id}
            className={`px-6 py-1 rounded-lg shadow flex flex-col items-center  ${
              activeTab === index
                ? "bg-bgYellow text-white"
                : "bg-bgPrimary text-white"
            }`}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            <img src={item.img} alt={item.title} className="w-10 h-10 mb-1" />
            <span className="text-sm font-medium">{item.title}</span>
          </button>
        ))}
      </div>

      {/* Lobby Tab content */}
      {activeTab === 0 && (
        <div>
          <div className="flex flex-col gap-4">
            {/* Showing parent tab titles, their images, and their sub-tabs */}
            <div className="flex flex-col gap-4">
              {data
                .filter((item) => item.id !== 1) // Excluding "Lobby" tab from list
                .map((item, parentIndex) => (
                  <div key={item.id} className="flex flex-col  gap-2">
                    <div className="flex items-center  gap-2">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-16 h-16 mb-2"
                      />
                      <h3 className="text-white">{item.title}</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      {/* <button
                        onClick={handleScrollLeft}
                        className="px-4 py-2 text-white bg-bgYellow rounded-full"
                      >
                        <FaArrowLeft />
                      </button> */}

                      {/* Sub-tabs for each parent tab */}
                      <div className="bg-bgPrimary p-2  mb-6">
                        <div className="flex flex-wrap justify-center gap-4">
                          {item.items.map((subItem, subIndex) => {
                            const [activeSubTab, setActiveSubTab] =
                              subTabsState[parentIndex]; // Access state for this parent's sub-tab
                            return (
                              <button
                                key={subIndex}
                                className={`px-4 py-2 rounded-lg shadow text-white flex flex-col items-center justify-center ${
                                  activeSubTab === subIndex
                                    ? "bg-bgYellow rounded-lg "
                                    : " hover:bg-bgYellow hover:rounded-lg text-black"
                                }`}
                                onClick={() => setActiveSubTab(subIndex)}
                              >
                                <img
                                  src={subItem.img}
                                  alt={subItem.title}
                                  className="w-14"
                                />
                                <span>{subItem.title}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      {/* <button
                        onClick={handleScrollRight}
                        className="px-4 py-2 text-white bg-bgYellow rounded-full"
                      >
                        <FaArrowRightLong />
                      </button> */}
                    </div>
                    {/* Show images for sub-tabs in lobby tab */}
                    {item.items.map((subItem, subIndex) => {
                      const [activeSubTab] = subTabsState[parentIndex];
                      if (activeSubTab === subIndex) {
                        return (
                          <div key={subIndex} className="mt-4">
                            
                            <div className="flex gap-4 flex-wrap mt-2">
                              {subItem.content.map((imgSrc, imgIndex) => (
                                <img
                                  key={imgIndex}
                                  src={imgSrc}
                                  alt={`Image ${imgIndex + 1}`}
                                  className="w-40 h-40 object-cover rounded-md"
                                />
                              ))}
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab content */}
      {activeTab !== 0 && (
        <div>
          {/* Show sub-tabs with images */}
          <div className="flex  justify-start">
            {/* <button
              onClick={handleScrollLeft}
              className="px-4 py-2 text-white bg-bgYellow rounded-full"
            >
              <FaArrowLeft />
            </button> */}
            <div className="bg-bgPrimary p-2  mb-6">
              <div className="flex flex-wrap  justify-center gap-4  overflow-x-auto">
                {data[activeTab].items
                  .slice(scrollIndex, scrollIndex + 9)
                  .map((item, index) => {
                    const [activeSubTab, setActiveSubTab] =
                      subTabsState[activeTab]; // Access state for this tab's sub-tab
                    return (
                      <button
                        key={index}
                        className={`px-4 py-2 shadow text-white  flex flex-col items-center justify-center ${
                          activeSubTab === index
                            ? "bg-bgYellow rounded-lg "
                            : " hover:bg-bgYellow hover:rounded-lg text-black"
                        }`}
                        onClick={() => setActiveSubTab(index)}
                      >
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-14 mb-2"
                        />
                        <span>{item.title}</span>
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* <button
              onClick={handleScrollRight}
              className="px-4 py-2 text-white bg-bgYellow rounded-full"
            >
              <FaArrowRightLong />
            </button> */}
          </div>

          {/* Content under sub-tabs (shown below the sub-tabs) */}
          <div className="mt-4">
            {data[activeTab].items.map((item, index) => {
              const [activeSubTab] = subTabsState[activeTab];
              if (activeSubTab === index) {
                return (
                  <div key={index}>
                    
                    <div className="flex gap-2 mt-2">
                      {item.content.map((imgSrc, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={imgSrc}
                          alt={`Content ${imgIndex}`}
                          className="w-32 h-32 object-cover"
                        />
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabs;
