import React, { useState } from "react";

const initialValue = {
  age: 20,
  name: "gokul",
};

export default function DemoStateFun() {
  const [buy, setbuy] = useState(initialValue);
  
  const sellCookies = () => {
    setbuy({ age: 24 });
  };
  return (
    <div>
      <h1> {buy.age}</h1>
      <h1> {buy.name}</h1>
      <button onClick={sellCookies}>Sell</button>
    </div>
  );
}
