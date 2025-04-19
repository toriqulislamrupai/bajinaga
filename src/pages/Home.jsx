
import HomeTabs from "../Components/Home/HomeTabs/HomeTabs";
import ImageSlider from "../Components/Home/ImageSlider";
import Marquee from "../Components/Home/Marquee";

const Home = () => {

  
  return (
    <div className="w-full   max-w-6xl px-4">
      <ImageSlider />
      <div className="pt-6">
        <Marquee />
      </div>
      <HomeTabs />
    </div>
  );
};

export default Home;
