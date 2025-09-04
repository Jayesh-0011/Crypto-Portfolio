import React, { useContext } from 'react';
import { HistContext } from '../../hooks/HistContext';

const Transaction = () => {
  const { hist } = useContext(HistContext);

  if (!hist || hist.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-400 font-medium">
        No transactions yet.
      </div>
    );
  }

  return (
    <div className="w-[500px] mb-10 mx-20 mt-10 p-4 bg-gray-900 rounded-3xl border-[0.5px] border-blue-200 shadow-lg text-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Transaction History</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-gray-200">
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Transaction</th>
            </tr>
          </thead>
          <tbody>
            {hist.map((transaction, i) => (
              <tr key={i} className="border-b border-gray-700 hover:bg-gray-800">
                <td className="py-2 px-4">{i + 1}</td>
                <td className="py-2 px-4">{transaction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;
