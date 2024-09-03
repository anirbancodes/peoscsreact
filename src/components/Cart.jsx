import React, { useState } from "react";
import "../styles/Cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Anirrrrr Debbbb", price: 399, stock: 10, qty: 1 },
    { id: 2, name: "Anirrrrr Debbbb", price: 399, stock: 10, qty: 1 },
    { id: 3, name: "Anirrrrr Debbbb", price: 399, stock: 10, qty: 1 },
  ]);
  const [subtotal, setSubtotal] = useState(0);

  const updateQuantity = (id, newQty) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.id === id ? { ...product, qty: newQty } : product
      );
      updateSubtotal(updatedProducts);
      return updatedProducts;
    });
  };

  const removeItem = (id) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.filter(
        (product) => product.id !== id
      );
      updateSubtotal(updatedProducts);
      return updatedProducts;
    });
  };

  const updateSubtotal = (products) => {
    const newSubtotal = products.reduce(
      (sum, product) => sum + product.qty * product.price,
      0
    );
    setSubtotal(newSubtotal);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-body">
        {products.map((product) => (
          <CartItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            stock={product.stock}
            qty={product.qty}
            onQuantityChange={updateQuantity}
            onRemove={removeItem}
          />
        ))}
        <hr />
        <p className="subtotal">
          Subtotal ({products.length} items): ₹{subtotal.toFixed(2)}
        </p>
        <div className="payment-button">
          <button className="proceed-to-pay">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
