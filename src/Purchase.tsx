import React from "react";

import { PurchaseData } from "./types/purchase-data";
import unescape from "./util/unescape";
import toDateString from "./util/date";
import toCurrencyString from "./util/currency";

import "./Purchase.css";

interface PurchaseItemProps {
  data: PurchaseData;
}

const PurchaseItem: React.FC<PurchaseItemProps> = ({ data }) => {
  return (
    <section className="purchase-item">
      <div className="purchase-icon" role="cell" aria-colindex="1">
        <img src={data.location} alt={data.name} height="30px" width="30px" />
      </div>
      <h2 className="purchase-name" role="cell" aria-colindex="2">
        {data.name}
      </h2>
      <div className="purchase-description" role="cell" aria-colindex="3">
        {unescape(data.description)}
      </div>
      <div className="purchase-date-container" role="cell" aria-colindex="4">
        <h3 className="purchase-date-heading">Purchase Date</h3>
        <div className="purchase-date">{toDateString(data.purchaseDate)}</div>
      </div>
      <div className="purchase-price" role="cell" aria-colindex="5">
        {toCurrencyString(data.price)}
      </div>
      <div
        className="purchase-category-container"
        role="cell"
        aria-aria-colindex="6"
      >
        <div
          className={`purchase-category ${data.category
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
        >
          {data.category}
        </div>
      </div>
    </section>
  );
};

export default PurchaseItem;
