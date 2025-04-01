import React, { useState } from "react";

const menuItems = [
  "Pizza",
  "Burger",
  "Pasta",
  "Sushi",
  "Salad",
  "Steak",
  "Tacos",
  "Bekhruz"
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(menuItems);

  // Search handler
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    // Filter menu items based on the search term
    const filtered = menuItems.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="App">
      <h1>Menu</h1>
      <input
        type="text"
        placeholder="Search menu..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
}

export default App;
