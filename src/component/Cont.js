import { createContext, useContext } from "react";
import Child from './Child';



export const UserContext = createContext();

function Cont() {
  
  
  return (
    <UserContext.Provider value="Gokulram">
      <Child/>
    </UserContext.Provider>
  );
}


export default Cont