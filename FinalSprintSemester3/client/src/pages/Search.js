import React from "react";
import { useState, useEffect } from "react";
import Results from "./Results";
import { useNavigate } from "react-router";
import { Logger } from "../logger/logger";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(null);
  const [searchBy, setSearchBy] = useState("businessName");
  const [database, setDatabase] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const logger = new Logger();

  const logSearch = async () => {
    // setMessage(logger.create(props.user, search, database, new Date()));
    console.log(message);
    await fetch("http://localhost:5000/log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    }).catch((error) => {
      window.alert(error);
      return;
    });
  };

  // functions for searches
  const handleSearchMongo = async () => {
    setResults(null);
    const response = await fetch(
      `http://localhost:5000/search/${searchBy}/${search}`
    );
    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      console.log(message);
      return;
    }
    const results = await response.json();
    console.log(results);
    setResults(results);
    setSearch("");
    navigate("/search");
  };

  const handleSearchPostgres = async () => {
    setResults(null);
    const response = await fetch(
      `http://localhost:5000/search/${database}/${search}`
    );
    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      console.log(message);
      return;
    }
    const results = await response.json();
    console.log(results);
    setResults(results);
    setSearch("");
    navigate("/search");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(search);
    console.log(searchBy);
    console.log(database);
    if (database === "postgres") {
      handleSearchPostgres();
      setMessage(logger.create(props.user, search, database, new Date()));
    }
    handleSearchMongo();
    setMessage(logger.create(props.user, search, database, new Date()));
  };

  // a useEffect to ensure a use is logged in, if not redirect to login page
  useEffect(() => {
    if (!props.isLoggedIn) {
      navigate("/");
    }
  }, []);

  // a use effect to log the search when the message is set
  useEffect(() => {
    if (message !== "") {
      logSearch();
    }
  }, [message]);

  const searchHistory = async (e) => {
    e.preventDefault();
    setDatabase("");
    const response = await fetch(`http://localhost:5000/log/${props.user}`);
    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      console.log(message);
      return;
    }
    const results = await response.json();
    console.log(results);
    setResults(results);
  };

  return (
    <div>
      <h1>Search</h1>
      <form id="searchForm" onSubmit={handleSubmit}>
        <div>
          <input
            type="radio"
            name="database"
            value="mongo"
            onChange={(e) => setDatabase(e.target.value)}
          />
          <label>Mongo</label>
          <input
            type="radio"
            name="database"
            value="postgres"
            onChange={(e) => setDatabase(e.target.value)}
          />
          <label>PostgreSQL</label>
        </div>
        <br />
        {database === "mongo" ? (
          <div>
            <label>
              <input
                type="radio"
                name="searchBy"
                value="businessName"
                onChange={(e) => setSearchBy(e.target.value)}
              />
              Business Name
            </label>
            <label>
              <input
                type="radio"
                name="searchBy"
                value="city"
                onChange={(e) => setSearchBy(e.target.value)}
              />
              City
            </label>
            <label>
              <input
                type="radio"
                name="searchBy"
                value="partial"
                onChange={(e) => setSearchBy(e.target.value)}
              />
              Partial Text Search
            </label>
            <br />
          </div>
        ) : null}
        <br />
        <input
            id="submit"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <br />
        {/* <input type="submit" value="Submit Search" onSubmit={handleSubmit}/> */}
        <button id="submit" type="submit">
          Submit Search
        </button>
      </form>
      <br />
      <form onSubmit={searchHistory}>
        <button id="submit" type="submit">
          Search History
        </button>
      </form>
      {results ? (
        <div>
          {<Results results={results} database={database} user={props.user} />}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
