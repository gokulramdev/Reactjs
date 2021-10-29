import React from "react";

export default function Header(props) {
  console.log(props);
  return (
    <div>
      <h1>Header {props.name}</h1>
    </div>
  );
}
