// this will be the component that displays the binary tree once it has been filled

import React from "react";
import Tree from "./Tree";
import { useState, useEffect } from "react";

const BinaryTree = (params) => {
  let tree = params.binaryTree;
  let setTree = params.setBinaryTree;
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getTrees() {
      const response = await fetch("http://localhost:5000/trees/");
      if (!response.ok) {
        setError(response.statusText);
        console.log(error);
        return;
      }
      let data = await response.json();
      setTree(data);
    }
    getTrees();
  }, []);

  // function to create a displayable tree, the below was suggested formatting search keywords from Tyler Downey
  // [6:36 p.m.] Tyler Downey
  // JSON.stringify(jsonobj,null,'\t')
  /**
   * var jsonPretty = JSON.stringify(JSON.parse(jsonString),null,2);
   */

  return (
    <div>
      <h1>Binary Trees From MongoDB</h1>
      <h3>Displayed in reverse order of addition</h3>
      {error ? <p>{error}</p> : null}
      {tree ? <Tree tree={tree} setTree={setTree} /> : null}
    </div>
  );
};

export default BinaryTree;
