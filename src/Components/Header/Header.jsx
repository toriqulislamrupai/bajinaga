
import TopHeader from "./TopHeader";


const Header = ({menuOpen,toggleMenu}) => {
  

  return (
    <div className="bg-bgPrimary">
      <TopHeader menuOpen={menuOpen} toggleMenu={toggleMenu} />

      
    </div>
  );
};

export default Header;
