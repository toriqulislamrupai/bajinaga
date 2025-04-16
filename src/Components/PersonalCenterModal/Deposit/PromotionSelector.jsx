// PromotionSelector.jsx


// প্রমোশন সিলেক্টর কম্পোনেন্ট
const PromotionSelector = ({ promotions }) => {
  return (
    <div className="promotion-selector">
      {promotions.map((promotion, index) => (
        <label key={index}>
          <input type="radio" name="promotion" value={promotion} />
          {promotion}
        </label>
      ))}
    </div>
  );
};

export default PromotionSelector;
