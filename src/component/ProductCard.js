import React from "react";

const ProductCard = React.memo(({ name,addToCart }) => {
  console.log(`${name} Rerendering`);
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={addToCart}>Cart</button>
    </div>
  );
});
export default ProductCard;
