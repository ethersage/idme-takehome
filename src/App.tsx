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
      <div className="purchase-heading-container">
        <div className="purchase-heading">
          <div className="purchase-item-heading">Name</div>
          <div className="purchase-item-heading">Location</div>
          <div className="purchase-item-heading">Purchase Date</div>
          <div className="purchase-item-heading">Category</div>
          <div className="purchase-item-heading">Description</div>
          <div className="purchase-item-heading">Price</div>
          {/* <div className="purchase-item-heading"></div> */}
        </div>
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
