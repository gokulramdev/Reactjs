import React from "react";
import Hi from "./component/Content";
import Footer from "./component/Footer";
import Header from "./component/Header";
import DemoState from "./component/DemoState";
import DemoProps from "./component/DemoProps";
import DemoStateFun from "./component/DemoStateFun";
import List from "./component/List"
import Form from "./component/Form";
import FormHooks from "./component/FormHooks";
import LifeCycle from "./component/LifeCycle";
import Effects from './component/Effects';
import Ref from "./component/Ref";
import Cont from "./component/Cont";
import Routing from "./component/Routing"

function Main() {
  const Data = {
    name: "Gokul",
    age: "24",
  };
  
  const Click = () => {
    console.log("Hi");
  };

    return (
    <>
       {/* <Header name="Testing" age={Data} buy={Click} />
       <LifeCycle/>
        <Effects/> 
        <FormHooks/> 
       <Ref/>
       <Cont/> */}

       <Routing></Routing>
    </>
  );
}

export default Main;
