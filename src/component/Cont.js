import { createContext } from "react";
import Child from "./Child";

export const UserContext = createContext();

function Cont() {
  return (
    <UserContext.Provider value="gokul">
      <Child />
    </UserContext.Provider>
  );
}

export default Cont;
