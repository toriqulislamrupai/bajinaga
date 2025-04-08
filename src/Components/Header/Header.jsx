
import BottomNavigationBar from "./BottomNavigationBar";
import TopHeader from "./TopHeader";

const Header = ({ menuOpen, toggleMenu, autoToggleMenu, autoOpenModal ,openLoginModal}) => {
  return (
    <div className="bg-bgPrimary">
      <TopHeader
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        autoToggleMenu={autoToggleMenu}
        autoOpenModal={autoOpenModal}

      />
      
      {/* <BottomNavbar /> */}
      <BottomNavigationBar  openLoginModal={openLoginModal}/>
      
    </div>
  );
};

export default Header;
