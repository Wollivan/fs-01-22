import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

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
    console.log(res.data);
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
    <div className="App">
      <h1>Cats</h1>
      <input onChange={handleLocation} value={location} placeholder="Filter by Location" />
      {cats.map((cat, index) => {
        return (
          <div key={index}>
            <h3>{cat.name}</h3>
            <p>Location: {cat.location}</p>
            <p>Color: {cat.color}</p>
            <span onClick={() => deleteCat(cat._id, cat.name)}>X</span>
          </div>
        );
      })}
      <h2>Add a Cat</h2>
      <form onSubmit={handleAddCat}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
        <input name="color" value={form.color} onChange={handleChange} placeholder="Color" />
        <input name="location" value={form.location} onChange={handleChange} placeholder="Location" />
        <button type="submit">Add Cat</button>
      </form>
    </div>
  );
}

export default App;
