import React, { useEffect, useState } from "react";
import "../styles/Cart.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

let tempArr = [];
const Cart = () => {
  const dispatch = useDispatch();
  let userId = useSelector((state) => state.user.userId);

  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    function fetchData() {
      console.log(userId);
      fetch("http://localhost:5454/api/cart-items/user/" + userId)
        .then((res) => res.json())
        .then((cartItems) => {
          const productPromises = cartItems?.map((item) => {
            return fetch("http://localhost:5454/api/products/" + item.product)
              .then((res) => res.json())
              .then((productData) => ({
                id: item.id,
                qty: item.quantity,
                stock: productData.stockQuantity,
                price: productData.price,
                name: productData.productName,
              }));
          });

          Promise.all(productPromises).then((fetchedProducts) => {
            setProducts(fetchedProducts);
            updateSubtotal(fetchedProducts);
            // updateSubtotal(fetchedProducts);
          });
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
    fetchData();
    // setProducts(tempArr);
    console.log(":", tempArr, products);
  }, [userId]);

  // function updateSubtotal() {
  //   let sum = 0;
  //   products.map((item) => (sum += item.quantity * item.price));
  //   setSubtotal(sum);
  // }

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
        <Link to="/checkout">
          <div className="payment-button">
            <button className="proceed-to-pay">Checkout</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
