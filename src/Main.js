import React from "react";
import Hi from "./component/Content";
import Footer from "./component/Footer";
import Header from "./component/Header";
import DemoState from "./component/DemoState";
import DemoProps from "./component/DemoProps";
import DemoStateFun from "./component/DemoStateFun";

function Main() {
  const Data = {
    name: "Gokul",
    age: "24",
  };

  const Click = () => {
    console.log("Hi");
  };

  return (
    <div>
      {/* <Header name="Testing" age={Data} buy={Click} />
      <Hi />
      <Footer />
      <DemoState />
      <DemoProps name={Data} /> */}
      <DemoStateFun/>
    </div>
  );
}

export default Main;
