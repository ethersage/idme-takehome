import React, { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://storage.googleapis.com/marketplace-prod-7728-shop-cdn-e5e2/interview/data.json"
    )
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Purchases</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {/* Display one of the JSON fields for each item */}
            <div>
              <img src={item.location} height="30px" width="30px" />
            </div>
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>{item.purchaseDate}</div>
            Price: {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
