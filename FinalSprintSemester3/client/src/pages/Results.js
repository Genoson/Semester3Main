import React from "react";
import { useState, useEffect } from "react";

// handles the search results and processes the data for display, limits number of visible result
// results are displayed very rudimentarily, could increase amount of data displayed and incorporate paging etc...
const Results = (props) => {
  const results = props.results;
  const [shortResults, setShortResults] = useState([]);

  useEffect(() => {
    if (props.database === "mongo") {
      console.log(results[0]);
      let temp = [];
      let number;
      results.length < 20 ? (number = results.length) : (number = 20);
      // ^^ if the results are less than 20, display all results otherwise display 20
      for (let i = 0; i < number; i++) {
        temp.push(results[i]);
      }
      setShortResults(temp);
    } else {
      console.log(results);
      setShortResults(results);
    }
  }, []);

  let i = 0;
  if (props.database === "postgres") {
    return (
      <div>
        <h1> Postgres Results</h1>
        {shortResults.map((result) => {
          console.log(result);
          return (
            <div>
              <h2>{result.business_name}</h2>
              <p>
                {`${result.city}`}
                <br />
                {result.address}
                <br />
                {result.categories}
                <br />
                {`Rated ${result.stars} stars across ${result.stars} reviews.`}
                <br />
              </p>
            </div>
          );
        })}
      </div>
    );
  } else if (props.database === "mongo") {
    return (
      <div>
        <h1>Results</h1>

        {shortResults.map((result) => {
          return (
            <div>
              <hr />
              <h3>{result.name}</h3>
              <div>
                {`${result.city}, ${result.state}`} <br />
                {result.address}
                <br />
                {result.categories} <br />
                {`Rating: ${result.stars}/5 based on ${result.review_count} reviews.`}{" "}
                <br />
                <hr />
              </div>
            </div>
          );
        })}
        <br />
        {results
          ? `There are ${results.length} results, up to the first 20 are shown`
          : null}
      </div>
    );
  } else {
    return (
      <div>
        <h1>{`Search History for ${props.user}`}</h1>
        {results.map((result) => {
          return (
            <div>
              <p className="searchHistory">{`Searched "${result.search}" on the ${result.database} database on ${result.time}`}</p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Results;
