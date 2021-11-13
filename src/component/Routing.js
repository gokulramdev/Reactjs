import { Switch, Route, NavLink } from "react-router-dom";
import Blog from "./Blog";

const Contact = () => {
  return <>Hello Contact</>;
};

export default function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink exact activeStyle={{ color: "red" }} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: "red" }} to="/blogs">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: "red" }} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/blogs">
          <Blog/>
        </Route>
        <Route path="/contact" component={Contact} />
        <Route path="*">No Match</Route>
      </Switch>
    </>
  );
}
