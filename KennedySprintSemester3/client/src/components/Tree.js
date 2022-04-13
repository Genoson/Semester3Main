import React, { useState, useEffect } from "react";

const Tree = (props) => {
  const [displayable, setDisplayable] = useState([]);

  useEffect(() => {
    let temp = "";
    for (let i = props.tree.length - 1; i >= 0; i--) {
      //console.log(props.tree[i]);
      temp += `${JSON.stringify(props.tree[i], null, 2)} \n`;
    }
    console.log(temp);
    setDisplayable(temp);
  }, [props.tree]);
  return <div className="new-line">{displayable}</div>;
};

export default Tree;
