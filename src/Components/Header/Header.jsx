
import BottomNavigationBar from "./BottomNavigationBar";
import TopHeader from "./TopHeader";

const Header = ({ menuOpen, toggleMenu, autoToggleMenu, autoOpenModal ,openLoginModal,setIsInformationModalOpen}) => {
  return (
    <div className="bg-bgPrimary">
      <TopHeader
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        autoToggleMenu={autoToggleMenu}
        autoOpenModal={autoOpenModal}
        setIsInformationModalOpen={setIsInformationModalOpen}

      />
      
      {/* <BottomNavbar /> */}
      <BottomNavigationBar  openLoginModal={openLoginModal}/>
      
    </div>
  );
};

export default Header;
