import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Effects() {
  const [plus, setPlus] = useState(1);
  const [todo, setTodo] = useState([]);
  const [loading, setloading] = useState(false);

  console.log("Inital");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    setloading(true);
    await axios
      .get("htts://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res.data);
        setTodo(res.data);
        setloading(false);
      })
      .catch(() => {
        console.log("Some error");
        setloading(false);
      });
  }, [plus]);
  

  const Incr = () => {
    setPlus(plus + 1);
  };
  const sub = () => {
    setPlus(plus - 1);
  };
  return (
    <div>
      {console.log("Next")}
      <h2>Happy or Sad {plus}</h2>
      <button onClick={Incr}>Plus</button>
      <button onClick={sub}>-</button>
      {loading ? (
        <h2>Loading .....</h2>
      ) : (
        <>
          {" "}
          {todo.map((todo) => {
            return (
              <ul>
                <li>{todo.title}</li>
                <li>{todo.completed ? "completed" : "Not completed"}</li>
              </ul>
            );
          })}{" "}
        </>
      )}
    </div>
  );
}
