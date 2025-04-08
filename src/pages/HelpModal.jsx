import { useNavigate } from "react-router-dom";
import HelpBar from "../Components/HelpModal/Helpbar";

const HelpModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  if (!isOpen) return null;

  const handleClose = () => {
    onClose(); // Close the modal
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-50">
      <div className="bg-white w-full max-w-6xl rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={handleClose}  // Call handleClose on button click
          className="absolute top-1 right-2 text-white text-3xl p-2 rounded-full"
        >
          ✕
        </button>
        <HelpBar />
      </div>
    </div>
  );
};

export default HelpModal;
