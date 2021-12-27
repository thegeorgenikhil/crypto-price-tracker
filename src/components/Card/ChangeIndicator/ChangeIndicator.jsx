import React from "react";
import { priceChange } from "./helper/priceChange";

function ChangeIndicator({ currPrice, openPrice }) {
  const changeInPrice = priceChange(currPrice, openPrice);
  const change = changeInPrice > 0;
  const color = change ? "text-green-500" : "text-red-500";
  return (
    <div className={`${color}`}>
      <div className="text-2xl">
        {change ? (
          <i class="fas fa-caret-up"></i>
        ) : (
          <i class="fas fa-caret-down"></i>
        )} {changeInPrice.toFixed(2)}
      </div>
    </div>
  );
}

export default ChangeIndicator;
