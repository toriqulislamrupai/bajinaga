// AmountList.jsx


// অংক তালিকা কম্পোনেন্ট
const AmountList = ({ amounts }) => {
  return (
    <div className="amount-list">
      {amounts.map((amount) => (
        <button key={amount} className="amount-item">
          {amount}
        </button>
      ))}
    </div>
  );
};

export default AmountList;
