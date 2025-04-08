import { useContext, useEffect, useState } from "react";
import tab1Image from "../../../assets/download (1).png";
import tab2Image from "../../../assets/download (2).png";
import tab3Image from "../../../assets/download (3).png";
import tab4Image from "../../../assets/download (4).png";
import tab5Image from "../../../assets/download (5).png";
import tab6Image from "../../../assets/download (6).png";
import tab7Image from "../../../assets/download (7).png";
// import { FaArrowLeft } from "react-icons/fa6";
// import { FaArrowRightLong } from "react-icons/fa6";



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

import SportImageContent1 from "../../../assets/gcs__SPORTS-U9W_1737710880381 (1).webp";
import SportImageContent2 from "../../../assets/gcs__SPORTS-SB_1737708905635.webp";

import LiveImage1 from "../../../assets/EG4-COLOR.webp";
import LiveImage1Content1 from "../../../assets/EG4147.webp";
import LiveImage1Content2 from "../../../assets/EG4326.webp";

import LiveImage2 from "../../../assets/SEX-COLOR.webp";
import LiveImage2Content1 from "../../../assets/SEX003.webp";
import LiveImage2Content2 from "../../../assets/SEX005.webp";

import LiveImage3 from "../../../assets/PP-COLOR.webp";
import LiveImage3Content1 from "../../../assets/PP0179.webp";
import LiveImage3Content2 from "../../../assets/PP0262.webp";

import LiveImage4 from "../../../assets/MG-COLOR.webp";
import LiveImage4Content1 from "../../../assets/MG0541.webp";
import LiveImage4Content2 from "../../../assets/MG0536.webp";

import LiveImage5 from "../../../assets/VIA-COLOR.webp";
import LiveImage5ContentImage1 from "../../../assets/VIA025.webp";
import LiveImage5ContentImage2 from "../../../assets/VIA024.webp";

import LiveImage6 from "../../../assets/SA-COLOR.webp";
import LiveImage6Content1 from "../../../assets/SA0090.webp";
import LiveImage6Content2 from "../../../assets/SA0089.webp";

import LiveImage7 from "../../../assets/WJ-COLOR.webp";
import LiveImage7Content1 from "../../../assets/WJ0022.webp";
import LiveImage7Content2 from "../../../assets/WJ0021.webp";

import LiveImage8 from "../../../assets/GPI-COLOR.webp";
import LiveImage8ContentImage1 from "../../../assets/GPI336.webp";
import LiveImage8ContentImage2 from "../../../assets/GPI333.webp";

import FishImage1Content1 from "../../../assets/JL0007.webp";
import FishImage1Content2 from "../../../assets/JL0005.webp";

import FishImage2Content1 from "../../../assets/JDB082.webp";
import FishImage2Content2 from "../../../assets/JDB225.webp";

import PokerImage1 from "../../../assets/BSP-COLOR.webp";
import PokerImage1Content1 from "../../../assets/BSP054.webp";
import PokerImage1Content2 from "../../../assets/BSP053.webp";

import PokerImage2 from "../../../assets/KP-COLOR (1).webp";
import PokerImage2Content1 from "../../../assets/KP0011.webp";
import PokerImage2Content2 from "../../../assets/KP0010.webp";

import LotteryImageContent1 from "../../../assets/gcs__ELOTT-SEALOTT_1737708904297.webp";

import LobbyTab from "./LobbyTab";
import HomeContent from "./HomeContent";
import { LanguageContext } from "../../../Context/LanguageContext";
import { useOutletContext } from "react-router-dom";

const HomeTabs = () => {
    const { language } = useContext(LanguageContext);
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
          content: [SlotImageContent1, SlotImageContent2],
        },
        {
          title: "PG",
          img: SlotImage2,
          content: [SlotImage2Content1, SlotImage2Content2],
        },
        {
          title: "JDB",
          img: SlotImage3,
          content: [SlotImage3Content1, SlotImage3Content2],
        },
        {
          title: "FASTSPIN",
          img: SlotImage4,
          content: [SlotImage4Content1, SlotImage4Content2],
        },
        {
          title: "FC",
          img: SlotImage5,
          content: [SlotImage5Content1, SlotImage5Content2],
        },
        {
          title: "SG",
          img: SlotImage6,
          content: [SlotImage6Content1, SlotImage6Content2],
        },
        {
          title: "NEXT SPIN",
          img: SlotImage7,
          content: [SlotImage7Content1, SlotImage7Content2],
        },
        {
          title: "YELLOW BAT",
          img: SlotImage8,
          content: [SlotImage8ContentImage1, SlotImage8ContentImage2],
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
          //   title: "ফুটবল",
          //   img: `https://picsum.photos/seed/sport1a/200/150`,
          content: [SportImageContent1, SportImageContent2],
        },
        // {
        //   title: "ক্রিকেট",
        //   img: `https://picsum.photos/seed/sport2a/200/150`,
        //   content: [
        //     `https://picsum.photos/seed/sport2a/200/150`,
        //     `https://picsum.photos/seed/sport2b/200/150`,
        //   ],
        // },
        // More unique titles can go here
      ],
    },
    {
      id: 4,
      title: "লাইভ",
      img: tab4Image,
     
      items: [
        {
          title: "EVO",
          img: LiveImage1,
          content: [LiveImage1Content1, LiveImage1Content2],
        },
        {
          title: "SEXY",
          img: LiveImage2,
          content: [LiveImage2Content1, LiveImage2Content2],
        },
        {
          title: "PP",
          img: LiveImage3,
          content: [LiveImage3Content1, LiveImage3Content2],
        },
        {
          title: "MG",
          img: LiveImage4,
          content: [LiveImage4Content1, LiveImage4Content2],
        },
        {
          title: "VIA CASINO",
          img: LiveImage5,
          content: [LiveImage5ContentImage1, LiveImage5ContentImage2],
        },
        {
          title: "SA",
          img: LiveImage6,
          content: [LiveImage6Content1, LiveImage6Content2],
        },
        {
          title: "W CASINO",
          img: LiveImage7,
          content: [LiveImage7Content1, LiveImage7Content2],
        },
        {
          title: "GPI",
          img: LiveImage8,
          content: [LiveImage8ContentImage1, LiveImage8ContentImage2],
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
          title: "JILI",
          img: SlotImage,
          content: [FishImage1Content1, FishImage1Content2],
        },
        {
          title: "JDB",
          img: SlotImage3,
          content: [FishImage2Content1, FishImage2Content2],
        },
        {
          title: "FC",
          img: SlotImage5,
          content: [SlotImage5Content1, SlotImage5Content2],
        },
        {
          title: "FASTSPIN",
          img: SlotImage4,
          content: [SlotImage4Content1, SlotImage4Content2],
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
          title: "BAISON POKER",
          img: PokerImage1,
          content: [PokerImage1Content1, PokerImage1Content2],
        },
        {
          title: "KINGS POKER",
          img: PokerImage2,
          content: [PokerImage2Content1, PokerImage2Content2],
        },
        // More unique titles can go here
      ],
    },
    {
      id: 7,
      title: "লটারি ",
      img: tab7Image,
      
      items: [
        {
          content: [LotteryImageContent1],
        },
        // {
        //   title: "লটারি ২",
        //   img: `https://picsum.photos/seed/lottery2a/200/150`,
        //   content: [
        //     `https://picsum.photos/seed/lottery2a/200/150`,
        //     `https://picsum.photos/seed/lottery2b/200/150`,
        //   ],
        // },
        // More unique titles can go here
      ],
    },
  ];
  const { activeTab,setActiveTab } = useOutletContext();

//   const [activeTab, setActiveTab] = useState(0);
  
  const subTabsState = data.map(() => useState(0)); // Create a useState for each parent tab's sub-tabs
//   const [scrollIndex, setScrollIndex] = useState(0); // For scroll navigation

  //   const handleScrollLeft = () => {
  //     if (scrollIndex > 0) {
  //       setScrollIndex(scrollIndex - 1);
  //     }
  //   };

  //   const handleScrollRight = () => {
  //     if (scrollIndex < Math.max(...data.map((tab) => tab.items.length)) - 5) {
  //       setScrollIndex(scrollIndex + 1);
  //     }
  //   };
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [activeTab]);
  return (
    <div className="p-4 bg-tabBackground mt-4 ">
      {/* Tabs */}
      <div className="flex   justify-start overflow-x-auto gap-4 mb-6">
        {data.map((item, index) => (
          <button
            key={item.id}
            className={`px-8 md:px-6 md:py-1 rounded-lg shadow flex flex-col items-center  ${
              activeTab === index
                ? "bg-bgYellow text-white"
                : "bg-bgPrimary hover:bg-bgYellow text-white"
            }`}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            <img src={item.img} alt={item.title} className="w-10 h-10 md:mb-1" />
            <span className="text-xs md:text-sm font-medium">{item.title}</span>
          </button>
        ))}
      </div>

      {/* Lobby Tab content */}
      <LobbyTab 
      activeTab={activeTab}
      data={data}
      subTabsState={subTabsState}
      language={language}
      />

      {/* Tab content */}
      <HomeContent 
      activeTab={activeTab}
      data={data}
      subTabsState={subTabsState}
      language={language}
      />
      
    </div>
  );
};

export default HomeTabs;
