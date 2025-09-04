import React, { useState, useContext } from "react";
import { HistContext } from "../../../../hooks/HistContext";
import { ShowContext } from "../../../../hooks/showContext";

const Sell = ({ coin }) => {
  const { hist, setHist } = useContext(HistContext);
  const { showSellModal, setShowSellModal } = useContext(ShowContext);
  const [selected, setSelected] = useState([]); 

 
  const handleCheckboxChange = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  
  const handleSell = () => {
    if (selected.length === 0) return;

  
    selected.forEach((idx) => {
      const price = coin.buyprice[idx];
      setHist((prev) => [
        ...prev,
        `You sold 1 ${coin.token} at $${coin.price.toFixed(2)} (bought at $${price.toFixed(
          2
        )})`
      ]);
    });

    
    const remaining = coin.buyprice.filter((_, idx) => !selected.includes(idx));
    coin.setBuyPrice(remaining);
    coin.setBalance(remaining.length);

     
    setShowSellModal(false);
    setSelected([]);
  };

  if (!showSellModal) return null;

  return (
    <div className="fixed inset-0 bg-black opacity-90 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-200 text-black opacity-1000">
        <h2 className="text-lg font-bold mb-4">Sell {coin.token}</h2>
        {coin.buyprice.map((price, index) => (
          <div key={index} className="flex flex-col mb-2">
            <label>
              <input
                type="checkbox"
                value={index}
                checked={selected.includes(index)}
                onChange={() => handleCheckboxChange(index)}
                className="mr-2"
              />
              Bought at ${price.toFixed(2)} | Current Profit: ${(coin.price - price).toFixed(2)}
            </label>
          </div>
        ))}
        <div className="flex justify-end gap-2 mt-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={() => setShowSellModal(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleSell}
            disabled={selected.length === 0}
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sell;
