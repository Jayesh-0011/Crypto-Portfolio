import React, { useContext } from 'react';
import { CntContext } from '../hooks/CntContext';

const Sort = () => {
  const { cnt, setCnt } = useContext(CntContext);

  const sortByBalance = () => {
    const sorted = [...cnt].sort((a, b) => b.balance - a.balance);
    setCnt(sorted);
  };

  const sortByValue = () => {
    const sorted = [...cnt].sort((a, b) => b.value - a.value);
    setCnt(sorted);
  };

  const handleSort = (e) => {
    const value = e.target.value;

    if (value === "balance") {
      sortByBalance();
    } 
    else if (value === "value") {
      sortByValue();
    }  
    else if (value === "price") {
      const sorted = [...cnt].sort((a, b) => b.price - a.price);
      setCnt(sorted);
    }
  };

  return (
    <div>
      <select
        name="filter"
        id="filter"
        className="bg-zinc-700 mx-6 m-2 p-2 border-1 border-zinc-200 rounded-[6px]"
        onChange={handleSort}   
      >
        <option value="token">Token</option>
        <option value="price">Price</option>
        <option value="balance">Balance</option>
        <option value="value">Value</option>
      </select>
    </div>
  );
};

export default Sort;
