import React, { useEffect, useState, useContext } from 'react';
import { CntContext } from '../../../hooks/CntContext';
import { ReturnContext } from '../../../hooks/ReturnContext';

const Footer = () => {
  const { cnt } = useContext(CntContext);
  const [net, setNet] = useState(0);
  const { returns, setReturns } = useContext(ReturnContext)

  useEffect(() => {
    let total = 0;

    cnt.forEach((coin) => {
      coin.buyprice.forEach((buy) => {
        total += buy;
      });
    });

    setNet(total);
  }, [cnt]);

  return (
    <div className='m-5 text-center'>
      <h1 className='text-[20px]'>Total Portfolio Value: $ {net.toFixed(2)}</h1>
      <h1 className='text-[20px]'>Net Returns: $ {returns.toFixed(2)}</h1>
    </div>
  );
};

export default Footer;
