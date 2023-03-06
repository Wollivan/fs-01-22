import axios from "axios";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState({});

  async function getLocation() {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
    const res = await axios.get(API);
    console.log(res.data[0]);
    this.setState({ location: res.data[0] });
  }

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <>
      <input onChange={handleSearch} placeholder="search for a city"></input>
      <button onClick={this.getLocation}>Explore!</button>
      {location.place_id && <h2>The city is: {location.display_name}</h2>}
    </>
  );
}

export default App;
