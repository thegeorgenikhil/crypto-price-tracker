import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { apiCall } from "./helper/wazrixAPI";

function Coins() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    apiCall().then((data) => {
      const inrCoins = data.slice(0, 114);
      setCoins(inrCoins);
    })
    .catch(err => alert("Too many requests. Please try again after sometime!"));
  }, []);
  return (
    <div className="mx-4">
      <div className="flex flex-wrap justify-center">
        {coins &&
          coins.map((coin) => {
              const {baseAsset,quoteAsset,lastPrice,openPrice} = coin;
            return <Card ticker={baseAsset} exchangeCurrency={quoteAsset} currPrice={lastPrice} openPrice={openPrice} />;
          })}
      </div>
    </div>
  );
}

export default Coins;
