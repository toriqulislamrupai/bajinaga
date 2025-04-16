// import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "../Components/LoginRegisterModal/Modal";
import SmallDeviceModal from "../Components/SmallDeviceModal/SmallDeviceModal";

const MainLayout = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [autoModalOpen, setAutoModalOpen] = useState(false);
  const [autoActiveTab, setAutoActiveTab] = useState("login"); // 'login' or 'register'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInformationModalOpen, setIsInformationModalOpen] = useState(false);
  const [isModal, setIsModal] = useState(true);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const modalClosed = localStorage.getItem("modalClosed");
    if (!modalClosed) {
      setAutoModalOpen(true); // auto open modal
    }
  }, []);

  // Function to open modal and choose tab
  const autoOpenModal = (tab) => {
    setAutoActiveTab(tab);
    setAutoModalOpen(true);
    localStorage.removeItem("modalClosed");
  };

  const openLoginModal = () => {
    setAutoActiveTab("login");
    setAutoModalOpen(true); // Open the modal
  };

  // Close modal & remember user closed it
  const autoCloseModal = () => {
    setAutoModalOpen(false);
    localStorage.setItem("modalClosed", "true");
  };

  // Toggle menu function (if needed)
  const autoToggleMenu = () => {
    console.log("Menu toggled!");
  };

  return (
    <div className="">
      <SmallDeviceModal isModal={isModal} setIsModal={setIsModal}/>
      <Header
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        autoToggleMenu={autoToggleMenu}
        autoOpenModal={autoOpenModal}
        openLoginModal={openLoginModal}
        setIsInformationModalOpen={setIsInformationModalOpen}
      />
      {/* outlet and Footer */}
      <div className="flex  ">
        <div className="">
          <Sidebar
            menuOpen={menuOpen}
            toggleMenu={toggleMenu}
            isInformationModalOpen={isInformationModalOpen}
            setIsInformationModalOpen={setIsInformationModalOpen}
          />
        </div>
        <div className="static w-full h-[600px] md:h-[600px] flex flex-col overflow-y-auto  custom-scrollbar-hidden  bg-tabBackgroundTwo mx-auto  pt-4 pb-32  md:pb-36 ">
          <div className="lg:mx-auto">
            <Outlet context={{ activeTab, setActiveTab }} />
          </div>
          <div>
            <Footer
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {autoModalOpen && (
        <Modal
          autoActiveTab={autoActiveTab}
          setAutoActiveTab={setAutoActiveTab}
          autoCloseModal={autoCloseModal}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default MainLayout;
