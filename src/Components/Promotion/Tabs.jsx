

const Tabs = ({tabData,activeTab,setActiveTab,}) => {
    return (
        <div className="flex w-full overflow-x-auto whitespace-nowrap md:gap-2 gap-4 px-4 md:mx-auto lg:px-0 lg:gap-6 justify-start lg:justify-center  py-2 mb-4">
  {tabData.map((tab) => (
    <button
      key={tab.id}
      className={`min-w-max py-2 px-3 text-sm font-semibold transition-all ${
        activeTab === tab.id
          ? "bg-bgYellow text-white shadow-lg px-3 py-1" 
          : "bg-bgPrimary text-gray-400" 
      } 
      ${activeTab === tab.id ? "rounded-md" : "rounded-md"} // Rounded corners for active tab
      sm:px-4 lg:px-6`} 
      onClick={() => setActiveTab(tab.id)}
    >
      {tab.label}
    </button>
  ))}
</div>
    );
};

export default Tabs;