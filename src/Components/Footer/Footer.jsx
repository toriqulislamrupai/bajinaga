import Customer from "./Customer";
import Help from "./Help";
import Product from "./Product";
import SocialMedia from "./SocialMedia";
import SlotImage from "../../assets/JL-COLOR.webp";
import SlotImage2 from "../../assets/PG-COLOR.webp";
import SlotImage3 from "../../assets/JDB-COLOR.webp";
import SlotImage4 from "../../assets/FS-COLOR.webp";
import SlotImage5 from "../../assets/FC-COLOR.webp";
import SlotImage6 from "../../assets/SG-COLOR.webp";
import SlotImage7 from "../../assets/NS-COLOR.webp";
import SlotImage8 from "../../assets/YB-COLOR.webp";
import LiveImage1 from "../../assets/EG4-COLOR.webp";
import LiveImage2 from "../../assets/SEX-COLOR.webp";
import LiveImage3 from "../../assets/PP-COLOR.webp";
import LiveImage4 from "../../assets/MG-COLOR.webp";
import LiveImage5 from "../../assets/VIA-COLOR.webp";
import LiveImage6 from "../../assets/SA-COLOR.webp";


const Footer = ({setActiveTab,isModalOpen,
    setIsModalOpen}) => {

        const images = [
            SlotImage,
            SlotImage2,
            SlotImage3,
            SlotImage4,
            SlotImage5,
            SlotImage6,
            SlotImage7,
            SlotImage8,
            LiveImage1,
            LiveImage2,
            LiveImage3,
            LiveImage4,
            LiveImage5,
            LiveImage6
          ];
        
    return (
        <div className="text-white  md:pb-0 ">
           <div className="grid grid-cols-1 md:grid-cols-4">
            
            <Help 
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}/>
            <Product
            setActiveTab={setActiveTab}
            />
            <div className="hidden md:block">
            <Customer/>
            </div>
            
            <SocialMedia/>
            </div> 
            <div className="">
            <div className="p-4 grid grid-cols-5 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative  ">
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="md:w-[60%]  rounded-lg"
          />
        </div>
      ))}
    </div>

    
            </div>

            <div className="text-gray-500 justify-items-center text-xs">
                <p>Copyright © 2025 BetNaga All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;