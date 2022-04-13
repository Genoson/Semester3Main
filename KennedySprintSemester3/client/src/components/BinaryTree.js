// this will be the component that displays the binary tree once it has been filled

import React from "react";
import Tree from "./Tree";
import { useState, useEffect } from "react";



const BinaryTree = (params) => {
  let tree = params.binaryTree;
  let setTree = params.setBinaryTree;
  const [error, setError] = useState(null);
  

//   function syntaxHighlight(json) {
//     if (typeof json != 'string') {
//          json = JSON.stringify(json, undefined, 2);
//     }
//     json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
//     return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
//         var cls = 'number';
//         if (/^"/.test(match)) {
//             if (/:$/.test(match)) {
//                 cls = 'key';
//             } else {
//                 cls = 'string';
//             }
//         } else if (/true|false/.test(match)) {
//             cls = 'boolean';
//         } else if (/null/.test(match)) {
//             cls = 'null';
//         }
//         return '<span class="' + cls + '">' + match + '</span>';
//     });
// }

  useEffect(() => {
    async function getTrees() {
      const response = await fetch("http://localhost:5000/trees/");
      if (!response.ok) {
        setError(response.statusText);
        console.log(error);
        return;
      }
      let data = await response.json();
    
    //   setTree(JSON.stringify(JSON.parse(data), null, 2));
        setTree(data);
      
    }
    getTrees();
   
    
    

  }, []);

  // function to create a displayable tree
  // [6:36 p.m.] Tyler Downey
  // JSON.stringify(jsonobj,null,'\t')
  /**
   * var jsonPretty = JSON.stringify(JSON.parse(jsonString),null,2);
   */




  return (
    <div>
      <h1>Hello Kennedy binary tree problem</h1>
      {error ? <p>{error}</p> : null}
      {tree
        ? <Tree tree={tree} setTree={setTree} />
        : null}
    </div>
  );
};

export default BinaryTree;
