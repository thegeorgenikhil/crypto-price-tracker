import React from "react";
import ChangeIndicator from "./ChangeIndicator/ChangeIndicator";
import { inrConvert } from "./helper/currencyConverter";

function Card({ ticker, exchangeCurrency, currPrice, openPrice }) {
  const imgURL = "https://cryptoicon-api.vercel.app/api/icon/" + ticker;
  return (
    <div className="">
      <div className=" dark:bg-black dark:text-white dark:shadow-lg bg-white text-black mx-3 mt-10 px-5 py-3 w-[250px] rounded-lg shadow-lg shadow-black/10">
        <div className="flex justify-between">
          <div>
            <img className="w-[50px]" src={imgURL} alt="" />
            <div className="mt-6 text-xl">
              {ticker.toUpperCase()}/
              <span className="text-base text-gray-400">
                {exchangeCurrency.toUpperCase()}
              </span>
            </div>
          </div>
          <div className="pt-2">
            <ChangeIndicator currPrice={currPrice} openPrice={openPrice} />
          </div>
        </div>
        <div className="text-2xl ">{inrConvert(currPrice)}</div>
      </div>
    </div>
  );
}

export default Card;
