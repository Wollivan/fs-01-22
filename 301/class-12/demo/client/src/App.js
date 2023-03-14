import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [cats, setCats] = useState([]);
  const [location, setLocation] = useState("");

  useEffect(() => {
    getCats();
  }, [location]);

  async function getCats() {
    let API = "http://localhost:8080/cats";

    if (location !== "") {
      API = API + "?location=" + location;
    }
    const res = await axios.get(API);
    setCats(res.data);
  }

  function handleLocation(event) {
    setLocation(event.target.value);
  }

  return (
    <div className="App">
      <h1>Cats</h1>
      <input onChange={handleLocation} value={location} placeholder="Filter by Location" />
      {cats.map((cat, index) => {
        return (
          <div key={index}>
            <h3>{cat.name}</h3>
            <p>{cat.location}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
