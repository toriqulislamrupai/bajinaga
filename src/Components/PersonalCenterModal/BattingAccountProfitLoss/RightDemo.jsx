import { useContext, useState } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";

const ReusableTabs = ({ filterOptions, filters }) => {
  const { language } = useContext(LanguageContext);
  const data = [
    {
      tabTitle: { en: "Sport", bn: "স্পোর্টস" },
      radioTabs: [
        {
          label: { en: "Today", bn: "আজ" },
          tableData: []
        },
        {
          label: { en: "Yesterday", bn: "গতকাল" },
          tableData: [
            {
              betTime: "11:00 AM",
              betAmount: "$150",
              validBet: "$140",
              award: "$100",
              profitLoss: "-$40",
              gameName: "Poker",
              gameNumber: "G456"
            }
          ]
        },
        {
          label: { en: "7 days", bn: "৭ দিন" },
          tableData: []
        }
      ]
    },
    {
        tabTitle: { en: "Slot", bn: "স্লট" },
        radioTabs: [
          {
            label: { en: "Day 1", bn: "দিন ১" },
            tableData: [
              {
                betTime: "11:00 AM",
                betAmount: "$150",
                validBet: "$140",
                award: "$100",
                profitLoss: "-$40",
                gameName: "Poker",
                gameNumber: "G456"
              }
            ]
          }
        ]
      },
    // Other tab data...
  ];

  const tableHeaders = [
    { label: { en: "Bet Time", bn: "বেট সময়" }, key: "betTime" },
    { label: { en: "Bet Amount", bn: "বেট পরিমাণ" }, key: "betAmount" },
    { label: { en: "Valid Bet", bn: "বৈধ বেট" }, key: "validBet" },
    { label: { en: "Award", bn: "অর্থ পুরস্কার" }, key: "award" },
    { label: { en: "Profit Loss", bn: "লাভ ক্ষতি" }, key: "profitLoss" },
    { label: { en: "Game Name", bn: "গেম নাম" }, key: "gameName" },
    { label: { en: "Game Number", bn: "গেম নম্বর" }, key: "gameNumber" },
  ];

  const [activeMainTab, setActiveMainTab] = useState(0);
  const [activeRadioTab, setActiveRadioTab] = useState(0);

  const mainTab = data[activeMainTab];
  const radioTab = mainTab.radioTabs[activeRadioTab];

  return (
    <div className="p-4 space-y-4">
      {/* Main Tabs */}
      <div className="flex gap-10 overflow-x-auto border-b">
        {data.map((tab, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveMainTab(i);
              setActiveRadioTab(0); // reset radio tab
            }}
            className={`pb-2 ${
              i === activeMainTab ? "border-b-2  border-textRed font-semibold" : ""
            }`}
          >
            {language === "bn" ? tab.tabTitle.bn : tab.tabTitle.en}
          </button>
        ))}
      </div>

      {/* Radio Tabs */}
      <div className="flex gap-3 items-center flex-wrap">
        {mainTab.radioTabs.map((r, i) => (
          <label key={i} className="flex items-center gap-1">
            <input
              type="radio"
              name="radioTab"
              checked={i === activeRadioTab}
              onChange={() => setActiveRadioTab(i)}
            />
            {language === "bn" ? r.label.bn : r.label.en}
          </label>
        ))}

        <div className="flex flex-row gap-1">
          {/* Date Picker */}
          <label className="border border-black border-opacity-50 p-1 rounded-md">
            <input type="datetime-local" className="text-sm px-2 py-1" />
          </label>

          {/* Select Dropdown */}
          <label className="flex items-center gap-2 border border-black border-opacity-50 p-1 rounded-md">
            <span className="text-sm">{filters ? filters.label : "Filter:"}</span>
            <select className="border border-gray-300 rounded px-2 py-1 text-sm">
              {filterOptions?.map((opt, i) => (
                <option key={i} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button className="px-5 py-1 hidden lg:block rounded-full text-white bg-bgRed">
          Search
        </button>
      </div>

      {/* Table */}
      <div>
        <p className="text-sm mb-2">
          Showing {radioTab.tableData.length} result(s)
        </p>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              {tableHeaders.map((header, i) => (
                <th key={i} className="border p-2 font-normal">
                  {language === "bn" ? header.label.bn : header.label.en}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {radioTab.tableData.length > 0 ? (
              radioTab.tableData.map((row, i) => (
                <tr key={i}>
                  {tableHeaders.map((header, j) => (
                    <td key={j} className="border p-2">
                      {row[header.key]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={tableHeaders.length}
                  className="border p-4 text-center text-gray-500"
                >
                  No data matches
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReusableTabs;
