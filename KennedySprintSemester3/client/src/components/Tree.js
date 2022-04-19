import React, { useState, useEffect } from "react";

const Tree = (props) => {
  const [displayable, setDisplayable] = useState([]);

  useEffect(() => {
    let temp = "";
    for (let i = props.tree.length - 1; i >= 0; i--) {
      //console.log(props.tree[i]);
      temp += `Binary Tree Number ${i + 1}`;
      temp += `\n${JSON.stringify(props.tree[i], null, 12)} \n`;
      // time allowing I could develop a more advanced output format
    }
    console.log(temp);
    setDisplayable(temp);
  }, [props.tree]);
  return <pre className="new-line">{displayable}</pre>;
};

export default Tree;
