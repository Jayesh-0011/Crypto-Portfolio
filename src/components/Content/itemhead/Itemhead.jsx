import React, { useContext, useEffect } from "react";
import Content from "./ItemCont/Content";
import { CntContext } from "../../../hooks/CntContext.js";
import { ReturnContext } from "../../../hooks/ReturnContext.js";

const Itemhead = () => {
  const { cnt } = useContext(CntContext);
  const {returns, setReturns}=useContext(ReturnContext)
  const returncal=(cnt)=> {
    let total=0
    cnt.forEach((coin)=> {
        coin.buyprice.forEach((buy)=>{
          total+=(-buy+coin.price)
        })
    })
    setReturns(total)
  }
  useEffect(()=> {
    returncal(cnt)
  }, [cnt])
  return (
    <div className="mt-8 mx-5 text-lg">
      <table className="w-full border-collapse">
        <thead className="bg-gray-800 text-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">Token</th>
            <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">Current Price</th>
            <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">Balance</th>
            <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">Portfolio Value</th>
            <th className="px-6 py-3 text-left text-sm font-semibold tracking-wider">Returns</th>
            <th className="px-6 py-3 text-center text-sm font-semibold tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody>
          {cnt.map((coin) => (
            <Content key={coin.token} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Itemhead;
