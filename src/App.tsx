import React, { useState, useEffect } from "react";

import { PurchaseData } from "./types/purchase-data";
import Purchase from "./Purchase";

import "./App.css";

function App() {
  const [purchaseData, setItems] = useState<PurchaseData[]>([]);

  useEffect(() => {
    fetch(
      "https://storage.googleapis.com/marketplace-prod-7728-shop-cdn-e5e2/interview/data.json"
    )
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section>
      <h1>Purchases</h1>
      <div className="purchase-list desktop">
        <section className="purchase-item">
          <div className="purchase-icon">Location</div>
          <div className="purchase-name">Name</div>
          <div className="purchase-description">Description</div>
          <div className="purchase-date-container">Purchase Date</div>
          <div className="purchase-price">Price</div>
          <div className="purchase-category-container">Category</div>
        </section>
      </div>
      <ul className="purchase-list">
        {purchaseData.map((data) => (
          <li key={data.id}>
            <Purchase data={data} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
