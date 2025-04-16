// ProcessTabsWrapper.jsx
import  { useState } from "react";
import ProcessContent from "./ProcessContent"; // প্রক্রিয়া কনটেন্ট কম্পোনেন্ট

const ProcessTabsWrapper = ({ processNames, processContent }) => {
  const [activeProcess, setActiveProcess] = useState(processNames[0]); // ডিফল্ট প্রক্রিয়া প্রথমটি

  return (
    <div className="process-tabs-wrapper">
      {/* Process tabs (AutoPay, ExPay, SendMoney etc.) */}
      <div className="process-tabs">
        {processNames.map((processName) => (
          <button
            key={processName}
            className={`process-tab ${activeProcess === processName ? "active" : ""}`}
            onClick={() => setActiveProcess(processName)}
          >
            {processName}
          </button>
        ))}
      </div>

      {/* Display process content based on active process */}
      <div className="process-content">
        {processNames.map((processName) =>
          activeProcess === processName ? (
            <ProcessContent key={processName} content={processContent[processName]} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default ProcessTabsWrapper;
