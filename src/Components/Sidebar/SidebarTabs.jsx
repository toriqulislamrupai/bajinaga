import { NavLink } from "react-router-dom";

const SidebarTabs = ({ tabs }) => {
  return (
    <div className="flex justify-center gap-4 p-3">
      {tabs.map((tab, index) => (
        <NavLink
          key={index}
          to={tab.path}
          className={({ isActive }) =>
            `p-3 text-lg font-bold rounded-lg transition-all duration-200 ${
              isActive ? "bg-bgYellow text-black" : "bg-tabBackground text-white"
            }`
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
};

export default SidebarTabs;
