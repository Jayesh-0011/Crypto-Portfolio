import React, { useEffect, useState, useContext } from "react";
import { HistContext } from "../../../../hooks/HistContext";
import { ShowContext } from "../../../../hooks/showContext";
import { ReturnContext } from "../../../../hooks/ReturnContext";
import Sell from "./Sell";

const Content = ({ coin }) => {
  const { hist, setHist } = useContext(HistContext);
  const [profit, setProfit] = useState(0);
  const [value, setValue] = useState(0);
  const [showSellModal, setShowSellModal] = useState(false);


  const addTran = () => {
    setHist([
      ...hist,
      `You bought 1 ${coin.token} at $${coin.price.toFixed(2)}`
    ]);
  };

  useEffect(() => {
    if (coin.balance === 0 || coin.buyprice.length === 0) {
      setProfit(0);
      setValue(0);
      return;
    }

    const netprofit = coin.buyprice.reduce((acc, buy) => acc + (coin.price - buy), 0);
    setProfit(netprofit);
    

    const val = coin.buyprice.reduce((acc, bp) => acc + bp, 0);
    setValue(val);
  }, [coin]);

  return (
    <ShowContext.Provider value={{ showSellModal, setShowSellModal }}>
      <>
        <tr>
          <td className="p-1.5 text-center">{coin.token}</td>
          <td className="p-1.5 text-center">{coin.price.toFixed(2)}</td>
          <td className="p-1.5 text-center">{coin.balance}</td>
          <td className="p-1.5 text-center">{value.toFixed(2)}</td>
          <td className="p-1.5 text-center">{profit.toFixed(2)}</td>
          <td className="p-1.5 text-center">
            <div className="flex justify-center">
              <button
                className="bg-green-500 text-white p-1 px-3 mx-3 rounded hover:bg-green-600"
                onClick={() => {
                  coin.setBalance(coin.balance + 1);
                  coin.setBuyPrice([...coin.buyprice, coin.price]);
                  addTran();
                }}
              >
                Buy
              </button>

              <button
                className="bg-red-500 text-white p-1 px-3 rounded hover:bg-red-600 disabled:bg-zinc-600 disabled:cursor-default"
                onClick={() => setShowSellModal(true)}
                disabled={coin.balance === 0}
              >
                Sell
              </button>
            </div>
          </td>
        </tr>
                {showSellModal && <Sell coin= {coin}/>}
       
      </>
    </ShowContext.Provider>
  );
};

export default Content;
