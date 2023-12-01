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
      <div className="purchase-icon">
        <img src={data.location} alt={data.name} height="30px" width="30px" />
      </div>
      <h2 className="purchase-name">{data.name}</h2>
      <div className="purchase-description">{unescape(data.description)}</div>
      <div className="purchase-date-container">
        <h3 className="purchase-date-heading">Purchase Date</h3>
        <div className="purchase-date">{toDateString(data.purchaseDate)}</div>
      </div>
      <div className="purchase-price">{toCurrencyString(data.price)}</div>
    </section>
  );
};

export default PurchaseItem;
