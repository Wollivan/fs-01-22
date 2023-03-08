import axios from "axios";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // function to retrieve shopping list data
  async function getShoppingList() {
    const API = `http://localhost:8080/shopping-list?type=${searchQuery}`;
    const res = await axios.get(API);
    console.log(res.data);
    setList(res.data);
  }

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="App">
      <input onChange={handleSearch} placeholder="Search for a type of item" />
      <button onClick={getShoppingList}>Get Data</button>
      {/* map through our results */}
      {list.map((item) => {
        return (
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
