export default function Home({ handleLocation, location, cats, deleteCat, handleAddCat, form, handleChange }) {
  return (
    <div>
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
