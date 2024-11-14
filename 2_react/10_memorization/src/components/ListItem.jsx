import React from "react";

const ListItem = ({ item, fn }) => {
  console.log("bileşen render oldu");

  return (
    <li onClick={() => fn(item)}>
      <h2>{item}</h2>
    </li>
  );
};

export default React.memo(ListItem);
