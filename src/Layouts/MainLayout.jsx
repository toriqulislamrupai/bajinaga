// import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const MainLayout = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className="flex">
        <div >
          <Sidebar menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>
        <div className="w-full flex flex-col overflow-y-auto custom-scrollbar-hidden h-[500px] lg:h-[500px] bg-tabBackgroundTwo mx-auto  pt-4 ">
          <div className="lg:mx-auto">
            <Outlet />
          </div>
          <div>
          <Footer />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MainLayout;
