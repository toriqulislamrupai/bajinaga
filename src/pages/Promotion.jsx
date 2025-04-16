import { useState, useEffect,  useMemo, useContext } from "react";
import image1 from "../assets/1741347907696_500 sign up.webp";
// import image2 from "../assets/new image-2.webp";
import newImage2 from "../assets/1741347966962_App download.webp";
import newImage3 from "../assets/1741600768760_3percent Extra Unlimited  Deposit Bonus.webp";
// import image3 from "../assets/new image-3.webp";
import newImage4 from "../assets/1741602223869_Slot welcome bonus.webp";
import image4 from "../assets/1741347700750_75 sec deposit bonus.webp";

 import newImage6 from "../assets/image6.webp";
// import image7 from "../assets/image7.jpg";
// import image8 from "../assets/tab1logo8.jpg";
// import image9 from "../assets/tab1logo9.jpg";
// import image10 from "../assets/tab1logo10.jpg";
// import image11 from "../assets/tab1logo11.jpg";

// import image12 from "../assets/tab1logo12.jpg";
// import image13 from "../assets/tab1logo13.jpg";
// import image14 from "../assets/tab1logo14.jpg";
// import image15 from "../assets/tab1logo15.jpg";
// import image16 from "../assets/tab1logo16.jpg";
// import image17 from "../assets/tab1logo17.jpg";
// import image18 from "../assets/tab1logo18.jpg";
// import { LanguageContext } from "../Context/LanguageContext";
import Tabs from "../Components/Promotion/Tabs";
import TabsContents from "../Components/Promotion/TabsContents";
import { LanguageContext } from "../Context/LanguageContext";
import { useLocation } from "react-router-dom";

const Promotion = () => {
  const location = useLocation(); // Hook to track the current location
  
    useEffect(() => {
      // Scroll to the top of the page when the location changes
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location]); // Runs every time the location changes (e.g., URL hash)
  
  
  const { language } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState(1);
  const [promotions, setPromotions] = useState([]);
  const tabData = useMemo(() => [
    {
      id: 1,
      label: language === "bn" ? "সব" : "All",
      data: [
        {
          image: image1,
          title:
            language === "bn"
              ? "দৈনিক গিভঅ্যাওয়ে BPL ২০২৪-২০২৫"
              : "Daily Giveaway BPL 2024-2025",
          description:
            language === "bn"
              ? "প্রতিদিন ৯৯ জন সদস্যের জন্য একটি BPL গিভঅ্যাওয়ে পান !!!"
              : "Get a BPL giveaway for 99 members daily!!!",
          date: "2024-12-24 02:21:30 to 2025-02-08 14:59:59",
          countdown: "6 D 1 H এ শেষ হবে",
          details: true,
          apply: true,
        },
        {
          image: newImage3,
          title:
            language === "bn"
              ? "সুপার লিমিটেড অফার ৩৫০% স্বাগতম বোনাস"
              : "Super Limited Offer 350% Welcome Bonus",
          description:
            language === "bn"
              ? "এখনই নিন টিটো ৩৫০% বোনাস, সীমিত অফার"
              : "Claim Tito 350% Bonus now, limited offer",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "332 D 10 H এ শেষ হবে",
          details: true,
          apply: false,
        },
        {
          image: newImage4,
          title:
            language === "bn"
              ? "JAYA9 চমৎকার রেফারেল প্রোগ্রাম"
              : "JAYA9 Excellent Referral Program",
          description:
            language === "bn"
              ? "৳৯,৯৯,৯৯,৯৯৯ পর্যন্ত ২০% ডিপোজিট কমিশন"
              : "20% deposit commission up to ৳9,99,99,999",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "332 D 10 H এ শেষ হবে",
          details: true,
          apply: false,
        },
        {
          image: newImage2,
          title:
            language === "bn"
              ? "বিশেষ সীমাহীন আমানত বোনাস +৩%"
              : "Special Unlimited Deposit Bonus +3%",
          description:
            language === "bn"
              ? "জমা করুন এবং প্রতিটি জমার সাথে পান +৩% সীমাহীন বোনাস !!!"
              : "Deposit and get +3% unlimited bonus with every deposit!!!",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "332 D 10 H এ শেষ হবে",
          details: true,
          apply: false,
        },
        {
          image: image4,
          title:
            language === "bn"
              ? "টুর্নামেন্ট স্লট Jili x Tito ৳৯,৯৯,৯৯৯"
              : "Tournament Slot Jili x Tito ৳9,99,999",
          description:
            language === "bn"
              ? "টুর্নামেন্টে অংশগ্রহণ করুন এবং সমস্ত পুরস্কার জিতে নিন ৳৯,৯৯,৯৯৯"
              : "Join the tournament and win all prizes worth ৳9,99,999",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown:
            language === "bn" ? "332 D 10 H এ শেষ হবে" : "Ends in 332 D 10 H",
          details: true,
          apply: false,
        },

        {
          image: newImage6,
          title:
            language === "bn"
              ? "বিনামূল্যে জন্মদিন বোনাস ৳২,০০০"
              : "Free Birthday Bonus ৳2,000",
          description:
            language === "bn"
              ? "আপনার বিশেষ দিনটিকে একটি বড় জয়ে পরিণত করুন"
              : "Turn your special day into a big win",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown:
            language === "bn" ? "332 D 10 H এ শেষ হবে" : "Ends in 332 D 10 H",
          details: true,
          apply: false,
        },
        

        
      ],
    },

    {
      id: 2,
      label: language === "bn" ? "খেলাধুলা" : "Deposit",
      data: [
        {
          image: newImage2,
          title:
            language === "bn"
              ? "বিশেষ সীমাহীন আমানত বোনাস +৩%"
              : "Special Unlimited Deposit Bonus +3%",
          description:
            language === "bn"
              ? "জমা করুন এবং প্রতিটি জমার সাথে পান +৩% সীমাহীন বোনাস !!!"
              : "Deposit and get +3% unlimited bonus on each deposit!!!",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "2 D 8 H",
          details: true,
          apply: true,
        },
        {
          image: image1,
          title:
            language === "bn"
              ? "বিনামূল্যে জন্মদিন বোনাস ৳২,০০০"
              : "Free Birthday Bonus ৳2,000",
          description:
            language === "bn"
              ? "আপনার বিশেষ দিনটিকে একটি বড় জয়ে পরিণত করুন"
              : "Turn your special day into a big win!",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "7 D 12 H",
          details: false,
          apply: true,
        },
        {
          image: image4,
          title:
            language === "bn"
              ? "স্পোর্ট 20% সাপ্তাহিক রিলোড বোনাস"
              : "Sports 20% Weekly Reload Bonus",
          description:
            language === "bn"
              ? "স্পোর্টসবুকের জন্য আপনার সপ্তাহের প্রথম জমাতে প্রতি সপ্তাহে ৳25,000 পর্যন্ত বোনাস পান"
              : "Get up to ৳25,000 weekly bonus on your first deposit of the week for Sportsbook!",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "7 D 12 H",
          details: false,
          apply: true,
        },
        
      ],
    },

    {
      id: 3,
      label: language === "bn" ? "লাইভ ক্যাসিনো" : "Sports",
      data: [
        {
          image: newImage3,
          title:
            language === "bn"
              ? "বিনামূল্যে জন্মদিন বোনাস ৳২,০০০"
              : "Free Birthday Bonus ৳2,000",
          description:
            language === "bn"
              ? "আপনার বিশেষ দিনটিকে একটি বড় জয়ে পরিণত করুন"
              : "Turn your special day into a big win",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "5 D 3 H",
          details: true,
          apply: false,
        },
        {
          image: image4,
          title:
            language === "bn"
              ? "লাইভ ক্যাসিনো 50% স্বাগতম বোনাস"
              : "Live Casino 50% Welcome Bonus",
          description:
            language === "bn"
              ? "৳20,000 পর্যন্ত স্বাগতম বোনাস পান"
              : "Get up to ৳20,000 welcome bonus",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "5 D 3 H",
          details: true,
          apply: false,
        },
        {
          image: image1,
          title:
            language === "bn"
              ? "লাইভ ক্যাসিনো 5% আনলিমিটেড ডিপোজিট বোনাস"
              : "Live Casino 5% Unlimited Deposit Bonus",
          description:
            language === "bn"
              ? "সীমাহীন বোনাস দাবি উপভোগ করুন এবং প্রতিবার জমা করার সময় লাইভ ক্যাসিনো"
              : "Enjoy unlimited bonus claims every time you deposit at Live Casino",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "5 D 3 H",
          details: true,
          apply: false,
        },
        
      ],
    },
    {
      id: 4,
      label: language === "bn" ? "স্লট" : "Live Casino",
      data: [
        {
          image: newImage3,
          title:
            language === "bn"
              ? "সুপার লিমিটেড অফার ৩৫০% স্বাগতম বোনাস"
              : "Super Limited Offer 350% Welcome Bonus",
          description:
            language === "bn"
              ? "এখনই নিন টিটো ৩৫০% বোনাস, সীমিত অফার"
              : "Get Tito 350% Bonus Now, Limited Offer",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: language === "bn" ? "332 D 6 H এ শেষ হবে" : "Ends in 332 D 6 H",
          details: false,
          apply: true,
        },
        {
          image: image1,
          title:
            language === "bn"
              ? "টুর্নামেন্ট স্লট Jili x Tito ৳৯,৯৯,৯৯৯"
              : "Tournament Slot Jili x Tito ৳9,99,999",
          description:
            language === "bn"
              ? "টুর্নামেন্টে অংশগ্রহণ করুন এবং সমস্ত পুরস্কার জিতে নিন ৳৯,৯৯,৯৯৯"
              : "Join the tournament and win all prizes of ৳9,99,999",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: language === "bn" ? "332 D 6 H এ শেষ হবে" : "Ends in 332 D 6 H",
          details: false,
          apply: true,
        },
        {
          image: newImage6,
          title:
            language === "bn"
              ? "বিনামূল্যে জন্মদিন বোনাস ৳২,০০০"
              : "Free Birthday Bonus ৳2,000",
          description:
            language === "bn"
              ? "আপনার বিশেষ দিনটিকে একটি বড় জয়ে পরিণত করুন"
              : "Make your special day a big win",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: language === "bn" ? "2158 D 6 H এ শেষ হবে" : "Ends in 2158 D 6 H",
          details: false,
          apply: true,
        },


        
      ],
    },
    { id: 5, label: language === "bn" ? "টেবিল গেম" : "Slots", data: [
        {
          image: newImage3,
          title:
            language === "bn"
              ? "বিনামূল্যে জন্মদিন বোনাস ৳২,০০০"
              : "Free Birthday Bonus ৳2,000",
          description:
            language === "bn"
              ? "আপনার বিশেষ দিনটিকে একটি বড় জয়ে পরিণত করুন"
              : "Turn your special day into a big win",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "5 D 3 H",
          details: true,
          apply: false,
        },
        {
          image: image4,
          title:
            language === "bn"
              ? "লাইভ ক্যাসিনো 50% স্বাগতম বোনাস"
              : "Live Casino 50% Welcome Bonus",
          description:
            language === "bn"
              ? "৳20,000 পর্যন্ত স্বাগতম বোনাস পান"
              : "Get up to ৳20,000 welcome bonus",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "5 D 3 H",
          details: true,
          apply: false,
        },
        {
          image: image1,
          title:
            language === "bn"
              ? "লাইভ ক্যাসিনো 5% আনলিমিটেড ডিপোজিট বোনাস"
              : "Live Casino 5% Unlimited Deposit Bonus",
          description:
            language === "bn"
              ? "সীমাহীন বোনাস দাবি উপভোগ করুন এবং প্রতিবার জমা করার সময় লাইভ ক্যাসিনো"
              : "Enjoy unlimited bonus claims every time you deposit at Live Casino",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "5 D 3 H",
          details: true,
          apply: false,
        },
        
      ], },
    { id: 6, label: language === "bn" ? "লটারি" : "Fishing", data: [
        {
          image: newImage3,
          title:
            language === "bn"
              ? "বিনামূল্যে জন্মদিন বোনাস ৳২,০০০"
              : "Free Birthday Bonus ৳2,000",
          description:
            language === "bn"
              ? "আপনার বিশেষ দিনটিকে একটি বড় জয়ে পরিণত করুন"
              : "Turn your special day into a big win",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "5 D 3 H",
          details: true,
          apply: false,
        },
        {
          image: image4,
          title:
            language === "bn"
              ? "লাইভ ক্যাসিনো 50% স্বাগতম বোনাস"
              : "Live Casino 50% Welcome Bonus",
          description:
            language === "bn"
              ? "৳20,000 পর্যন্ত স্বাগতম বোনাস পান"
              : "Get up to ৳20,000 welcome bonus",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "5 D 3 H",
          details: true,
          apply: false,
        },
        {
          image: image1,
          title:
            language === "bn"
              ? "লাইভ ক্যাসিনো 5% আনলিমিটেড ডিপোজিট বোনাস"
              : "Live Casino 5% Unlimited Deposit Bonus",
          description:
            language === "bn"
              ? "সীমাহীন বোনাস দাবি উপভোগ করুন এবং প্রতিবার জমা করার সময় লাইভ ক্যাসিনো"
              : "Enjoy unlimited bonus claims every time you deposit at Live Casino",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "5 D 3 H",
          details: true,
          apply: false,
        },
        
      ], },
    { id: 7, label: language === "bn" ? "VIP" : "Rebate", data: [
        {
          image: image1,
          title:
            language === "bn"
              ? "দৈনিক গিভঅ্যাওয়ে BPL ২০২৪-২০২৫"
              : "Daily Giveaway BPL 2024-2025",
          description:
            language === "bn"
              ? "প্রতিদিন ৯৯ জন সদস্যের জন্য একটি BPL গিভঅ্যাওয়ে পান !!!"
              : "Get a BPL giveaway for 99 members daily!!!",
          date: "2024-12-24 02:21:30 to 2025-02-08 14:59:59",
          countdown: "6 D 1 H এ শেষ হবে",
          details: true,
          apply: true,
        },
        {
          image: newImage3,
          title:
            language === "bn"
              ? "সুপার লিমিটেড অফার ৩৫০% স্বাগতম বোনাস"
              : "Super Limited Offer 350% Welcome Bonus",
          description:
            language === "bn"
              ? "এখনই নিন টিটো ৩৫০% বোনাস, সীমিত অফার"
              : "Claim Tito 350% Bonus now, limited offer",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "332 D 10 H এ শেষ হবে",
          details: true,
          apply: false,
        },
        {
          image: newImage4,
          title:
            language === "bn"
              ? "JAYA9 চমৎকার রেফারেল প্রোগ্রাম"
              : "JAYA9 Excellent Referral Program",
          description:
            language === "bn"
              ? "৳৯,৯৯,৯৯,৯৯৯ পর্যন্ত ২০% ডিপোজিট কমিশন"
              : "20% deposit commission up to ৳9,99,99,999",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "332 D 10 H এ শেষ হবে",
          details: true,
          apply: false,
        },
        {
          image: newImage2,
          title:
            language === "bn"
              ? "বিশেষ সীমাহীন আমানত বোনাস +৩%"
              : "Special Unlimited Deposit Bonus +3%",
          description:
            language === "bn"
              ? "জমা করুন এবং প্রতিটি জমার সাথে পান +৩% সীমাহীন বোনাস !!!"
              : "Deposit and get +3% unlimited bonus with every deposit!!!",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "332 D 10 H এ শেষ হবে",
          details: true,
          apply: false,
        },
        {
          image: image4,
          title:
            language === "bn"
              ? "টুর্নামেন্ট স্লট Jili x Tito ৳৯,৯৯,৯৯৯"
              : "Tournament Slot Jili x Tito ৳9,99,999",
          description:
            language === "bn"
              ? "টুর্নামেন্টে অংশগ্রহণ করুন এবং সমস্ত পুরস্কার জিতে নিন ৳৯,৯৯,৯৯৯"
              : "Join the tournament and win all prizes worth ৳9,99,999",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown:
            language === "bn" ? "332 D 10 H এ শেষ হবে" : "Ends in 332 D 10 H",
          details: true,
          apply: false,
        },

        {
          image: newImage6,
          title:
            language === "bn"
              ? "বিনামূল্যে জন্মদিন বোনাস ৳২,০০০"
              : "Free Birthday Bonus ৳2,000",
          description:
            language === "bn"
              ? "আপনার বিশেষ দিনটিকে একটি বড় জয়ে পরিণত করুন"
              : "Turn your special day into a big win",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown:
            language === "bn" ? "332 D 10 H এ শেষ হবে" : "Ends in 332 D 10 H",
          details: true,
          apply: false,
        },
        

        
      ], },
    { id: 8, label: language === "bn" ? "ক্র্যাশ" : "App Download", data: [
        {
          image: newImage2,
          title:
            language === "bn"
              ? "বিশেষ সীমাহীন আমানত বোনাস +৩%"
              : "Special Unlimited Deposit Bonus +3%",
          description:
            language === "bn"
              ? "জমা করুন এবং প্রতিটি জমার সাথে পান +৩% সীমাহীন বোনাস !!!"
              : "Deposit and get +3% unlimited bonus on each deposit!!!",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "2 D 8 H",
          details: true,
          apply: true,
        },
        {
          image: image1,
          title:
            language === "bn"
              ? "বিনামূল্যে জন্মদিন বোনাস ৳২,০০০"
              : "Free Birthday Bonus ৳2,000",
          description:
            language === "bn"
              ? "আপনার বিশেষ দিনটিকে একটি বড় জয়ে পরিণত করুন"
              : "Turn your special day into a big win!",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "7 D 12 H",
          details: false,
          apply: true,
        },
        {
          image: image4,
          title:
            language === "bn"
              ? "স্পোর্ট 20% সাপ্তাহিক রিলোড বোনাস"
              : "Sports 20% Weekly Reload Bonus",
          description:
            language === "bn"
              ? "স্পোর্টসবুকের জন্য আপনার সপ্তাহের প্রথম জমাতে প্রতি সপ্তাহে ৳25,000 পর্যন্ত বোনাস পান"
              : "Get up to ৳25,000 weekly bonus on your first deposit of the week for Sportsbook!",
          date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
          countdown: "7 D 12 H",
          details: false,
          apply: true,
        },
        
      ], }
  ],[language]);
  useEffect(() => {
    const selectedTab = tabData.find((tab) => tab.id === activeTab);
    setPromotions(selectedTab?.data || []);
  }, [activeTab,tabData, language]);

  return (
    <div className="w-full py-4">
      {/* Tabs */}
      <Tabs
        tabData={tabData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* TabsContents */}
      <TabsContents language={language} promotions={promotions} />
    </div>
  );
};

export default Promotion;
