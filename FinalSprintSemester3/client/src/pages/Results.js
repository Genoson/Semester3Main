import React from "react";
import { useState, useEffect } from "react";

const Results = (props) => {
  const results = props.results;
  const [shortResults, setShortResults] = useState([]);

  useEffect(() => {
    if (props.database === "mongo") {
      console.log(results[0]);
      let temp = [];
      let number;
      results.length < 20 ?  number = results.length:  number = 20;
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
              <p>{result.address}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Results</h1>

        {shortResults.map((result) => {
          return (
            <div>
              <h3>{result.name}</h3>
              <p>{result.address}</p>
            </div>
          );
        })}

        {results
          ? `There are ${results.length} results, only the first 20 are shown`
          : null}
      </div>
    );
  }
};

export default Results;
