

const TabButton = ({  label, isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md ${isActive ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TabButton;
