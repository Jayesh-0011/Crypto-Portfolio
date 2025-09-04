import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Heading from "./Heading/Heading";
import Itemhead from "./itemhead/Itemhead";
import Footer from "./Footer/Footer";
import { BitContext } from "../../hooks/bitContext";
import { EthContext } from "../../hooks/ethContext";
import { SolContext } from "../../hooks/solContext.js";
import { CntContext } from "../../hooks/CntContext.js";
import { HistContext } from "../../hooks/HistContext.js";
import Sort from "../Sort";

const Box = () => {
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetch1 = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd"
      );
      setData(response.data);
    };
    fetch1();
    const interval = setInterval(fetch1, 10000);
  }, []);

  const [bitbal, setBitbal] = useState(0);
  const [ethbal, setEthbal] = useState(0);
  const [solbal, setSolbal] = useState(0);

  const [bitprice, setBitprice] = useState([]);
  const [ethprice, setEthprice] = useState([]);
  const [solprice, setSolanaprice] = useState([]);

  const { setCnt } = useContext(CntContext);

  useEffect(() => {
    const bitcoin = {
      token: "bitcoin",
      balance: bitbal,
      price: data?.bitcoin?.usd || 0,
      buyprice: bitprice,
      value: bitbal * (data?.bitcoin?.usd || 0),
      setBalance: setBitbal,
      setBuyPrice: setBitprice,
    };

    const ethereum = {
      token: "ethereum",
      balance: ethbal,
      price: data?.ethereum?.usd || 0,
      buyprice: ethprice,
      value: ethbal * (data?.ethereum?.usd || 0),
      setBalance: setEthbal,
      setBuyPrice: setEthprice,
    };

    const solana = {
      token: "solana",
      balance: solbal,
      price: data?.solana?.usd || 0,
      buyprice: solprice,
      value: solbal * (data?.solana?.usd || 0),
      setBalance: setSolbal,
      setBuyPrice: setSolanaprice,
    };

    setCnt([bitcoin, ethereum, solana]);
  }, [bitbal, ethbal, solbal, bitprice, ethprice, solprice, data, setCnt]);

  return (
    <div className="w-[45%] h-[500px] border border-solid border-blue-200 rounded-3xl m-10 mx-20 bg-[#0f1e34]">
      <BitContext.Provider value={{ bitbal, setBitbal }}>
        <EthContext.Provider value={{ ethbal, setEthbal }}>
          <SolContext.Provider value={{ solbal, setSolbal }}>
            <Heading />
            <Sort />
            <Itemhead />
            <Footer />
          </SolContext.Provider>
        </EthContext.Provider>
      </BitContext.Provider>
    </div>
  );
};

export default Box;
