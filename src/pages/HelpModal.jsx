import { useNavigate } from "react-router-dom";
import HelpBar from "../Components/HelpModal/Helpbar";
import { FaArrowLeft } from "react-icons/fa6";

const HelpModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  if (!isOpen) return null;

  const handleClose = () => {
    onClose(); // Close the modal
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-[9999]">
      <div className="bg-white w-full max-w-6xl rounded-lg shadow-lg relative">
        {/* Close Button */}
        <div className="hidden lg:block">
          <button
            onClick={handleClose} // Call handleClose on button click
            className="absolute top-1 right-2 text-white text-3xl p-2 rounded-full"
          >
            ✕
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={handleClose}
            className="absolute top-2 left-2 text-white text-xl font-bold"
          >
            <FaArrowLeft />
          </button>
        </div>

        <HelpBar />
      </div>
    </div>
  );
};

export default HelpModal;
