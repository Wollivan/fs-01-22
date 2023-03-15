import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CatDetails() {
  const [cat, setCat] = useState({});
  const [form, setForm] = useState({
    name: "",
    location: "",
    color: "",
  });

  const { id } = useParams();

  useEffect(() => {
    getCat();
  }, []);

  async function getCat() {
    const API = `http://localhost:8080/cats?_id=${id}`;
    const res = await axios.get(API);
    setCat(res.data[0]);
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleUpdateCat(event) {
    event.preventDefault();
    const body = {};
    // go through property item in the object
    for (const prop in form) {
      // if the property is not empty, then add it to our body object
      if (form[prop]) {
        body[prop] = form[prop];
      }
    }
    // so we end up with a body object which is only the fields the user has type in
    const API = `http://localhost:8080/cats/${id}`;
    await axios.put(API, body);

    const newCat = { ...cat, ...body };
    setCat(newCat);
  }

  return (
    <div>
      <h2>{cat.name}</h2>
      <p>{cat.location}</p>
      <p>{cat.color}</p>
      <h3>Update details of Cat</h3>
      <form onSubmit={handleUpdateCat}>
        <input name="name" value={form.name} placeholder={cat.name} onChange={handleChange} />
        <input name="location" value={form.location} placeholder={cat.location} onChange={handleChange} />
        <input name="color" value={form.color} placeholder={cat.color} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
