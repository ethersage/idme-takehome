import React from "react";

import { PurchaseData } from "./types/purchase-data";
import unescape from "./util/unescape";
import toDateString from "./util/date";
import toCurrencyString from "./util/currency";

interface PurchaseItemProps {
  data: PurchaseData;
}

const PurchaseItem: React.FC<PurchaseItemProps> = ({ data }) => {
  return (
    <>
      <div>
        <img src={data.location} alt={data.name} height="30px" width="30px" />
      </div>
      <div>{data.name}</div>
      <div>{unescape(data.description)}</div>
      <div>{toDateString(data.purchaseDate)}</div>
      <div>Price: {toCurrencyString(data.price)}</div>
    </>
  );
};

export default PurchaseItem;
