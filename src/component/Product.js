import React, { useState, useCallback } from "react";
import ProductCard from "./ProductCard";

export default function Product() {
  const [prod, setprod] = useState(["prod1", "prod2"]);

  const [count, setcount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    console.log(cart);
    setCart(cart + 1);
  }, [cart]);

  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <h2>Cart :{cart} </h2>
      {prod.map((p, i) => {
        return <ProductCard name={p} key={i} addToCart={addToCart} />;
      })}
    </div>
  );
}
