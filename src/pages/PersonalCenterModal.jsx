import { useNavigate } from "react-router-dom";
import PersonalInformation from "../Components/PersonalCenterModal/PersonalInformation";
import { FaArrowLeft } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const PersonalCenterModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  if (!isOpen) return null;

  const handleClose = () => {
    onClose(); // Close the modal
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-[9999]">
      <div className="bg-white  w-full max-w-6xl rounded-lg shadow-lg relative">
        {/* Close Button */}
        <div className="hidden lg:flex">
        <button
          onClick={handleClose} // Call handleClose on button click
          className="absolute bg-informationBG top-1 right-2 text-white  p-2 rounded-full flex items-center justify-center"
        >
          <RxCross1 />
        </button>
        </div>
        

        <div className="lg:hidden ">
                  <button
                    onClick={handleClose}
                    className="absolute top-2 left-2 text-white text-xl font-bold"
                  >
                    <FaArrowLeft />
                  </button>
                </div>

        <PersonalInformation />
      </div>
    </div>
  );
};

export default PersonalCenterModal;
