// ProcessContent.jsx

import AmountList from "./AmountList"; // অংক তালিকা কম্পোনেন্ট
import PromotionSelector from "./PromotionSelector"; // প্রমোশন সিলেক্টর কম্পোনেন্ট

// প্রক্রিয়ার কনটেন্ট কম্পোনেন্ট
const ProcessContent = ({ content }) => {
  return (
    <div className="process-content-details">
      <AmountList amounts={content.amounts} /> {/* অংক তালিকা */}
      <PromotionSelector promotions={content.promotions} /> {/* প্রমোশন সিলেক্টর */}
    </div>
  );
};

export default ProcessContent;
