import React, { useState } from 'react'
import PieChart from './PieChart';

const Chart = () => {
  const [filter, setFilter] = useState("balance");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-4 mx-25">
      <select
        onChange={handleChange}
        className="bg-zinc-700 text-white p-2 rounded-md border border-gray-500"
      >
        <option value="balance">Balance</option>
        <option value="value">Value</option>
        <option value="price">Price</option>
      </select>

      <PieChart filter={filter} />
    </div>
  );
}

export default Chart;
