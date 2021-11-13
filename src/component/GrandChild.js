import React,{useContext} from "react";
import {UserContext} from "./Cont"

export default function GrandChild() {
  const valu = useContext(UserContext)
  return (
    <div>
      <h2>This is GrandChild {valu} </h2>
    </div>
  );
}
