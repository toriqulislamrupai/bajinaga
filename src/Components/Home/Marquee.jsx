
import marqueeImage from "../../assets/download.png"

const Marquee = () => {
    const text = {
      bn: [
        "🏏দৈনিক IPL স্পোর্টস ক্যাশব্যাক পান  ০.৩৫% পর্যন্ত💥",
        "🔥🎉 Betnaga🇧🇩-এ স্বাগতম! আলটিমেট অনলাইন স্লট এবং বেটিং অ্যাপ! 🎰💰"
      ],
    };
  
    return (
      <div className="flex justify-evenly bg-tabBackground overflow-hidden p-2 relative">
        <div className="w-[94%]  text-white overflow-hidden">
          <span className="w-full  absolute top-1 left-0 md:left-8 lg:left-0 text-common-orange text-2xl">
            <img src={marqueeImage} alt="" className="w-6 h-6 ml-2" />
          </span>
  
          <div className="w-full text-sm">
            <div className="marquee block">
              {text.bn.map((item, index) => (
                <span key={index} className=" lg:mx-4">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Marquee;
  