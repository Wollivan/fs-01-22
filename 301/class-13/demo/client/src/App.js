import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CatDetails from "./CatDetails";

function App() {
  const [cats, setCats] = useState([]);
  const [location, setLocation] = useState("");
  const [form, setForm] = useState({
    name: "",
    color: "",
    hasClaws: false,
    location: "",
  });

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

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleAddCat(event) {
    event.preventDefault();
    const API = "http://localhost:8080/cats";
    const res = await axios.post(API, form);

    // add our new cat to the page
    const newCatsList = [...cats, res.data];
    setCats(newCatsList);

    // reset the form
    setForm({
      name: "",
      color: "",
      hasClaws: false,
      location: "",
    });
  }

  async function deleteCat(id, name) {
    const confirmDelete = window.confirm(`Are you sure you want to permantently delete ${name}?`);
    if (confirmDelete) {
      const API = `http://localhost:8080/cats/${id}`;
      const res = await axios.delete(API);
      console.log(res);
      getCats();
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Cats</h1>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleLocation={handleLocation}
                location={location}
                cats={cats}
                deleteCat={deleteCat}
                handleAddCat={handleAddCat}
                form={form}
                handleChange={handleChange}
              />
            }
          />
          <Route path="/cat/:id" element={<CatDetails />} />
        </Routes>
        <p>This is the footer</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
