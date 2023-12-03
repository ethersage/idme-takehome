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
      <div
        className="purchase-list desktop"
        role="table"
        aria-label="List of purchases"
      >
        <section className="purchase-item" role="row">
          <div className="purchase-icon" role="columnheader" aria-colindex={1}>
            Location
          </div>
          <div className="purchase-name" role="columnheader" aria-colindex={2}>
            Name
          </div>
          <div
            className="purchase-description"
            role="columnheader"
            aria-colindex={3}
          >
            Description
          </div>
          <div
            className="purchase-date-container"
            role="columnheader"
            aria-colindex={4}
          >
            Purchase Date
          </div>
          <div className="purchase-price" role="columnheader" aria-colindex={5}>
            Price
          </div>
          <div
            className="purchase-category-container"
            role="columnheader"
            aria-colindex={6}
          >
            Category
          </div>
          <div
            className="purchase-actions"
            role="columnheader"
            aria-colindex={7}
            aria-label="Header actions"
          ></div>
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
