import "./styles.css";
import { useState } from "react";
import Products from "./Products";

export default function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(search);
    const YOUR_APP_ID = "88a9849e";
    const YOUR_APP_KEY = "04922719fa045f73aca6159163a847bc";
    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=21&calories=591-722&health=alcohol-free`
    )
      .then((response) => response.json())
      .then((data) => setData(data.hits));
  };
  return (
    <div className="App">
      <h1>Food Recipe App</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />{" "}
        <br /> <br />
        <input type="submit" className="btn btn-primary" value="search" />
      </form>
      <br />
      {data.length >= 1 ? <Products data={data} /> : null}
    </div>
  );
}
