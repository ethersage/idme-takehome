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
