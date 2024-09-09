import { useEffect, useState } from "react";
import "../styles/OrderDetails.css";

const OrderDetails = () => {
  const [info, setInfo] = useState({});
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState({});

  const orderID = Number(
    new URL(window.location.href).searchParams.get("orderID")
  );

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const orderResponse = await fetch(
          `http://localhost:5454/api/orders/${orderID}`
        );
        const orderData = await orderResponse.json();
        setInfo(orderData);

        const itemsResponse = await fetch(
          `http://localhost:5454/api/order-items/order/${orderID}`
        );
        const itemsData = await itemsResponse.json();
        setItems(itemsData);

        // Fetch product details
        const productPromises = itemsData.map((item) =>
          fetch(`http://localhost:5454/api/products/${item.product}`).then(
            (res) => res.json()
          )
        );

        const productData = await Promise.all(productPromises);
        const productsMap = productData.reduce((acc, product) => {
          acc[product.id] = {
            name: product.productName,
            desc: product.description,
            imageUrl: product.imageUrl,
          };
          return acc;
        }, {});

        setProducts(productsMap);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, [orderID]);

  return (
    <div className="order-details-container">
      <div className="breadcrumb">
        <span>Your Account &gt; Your Orders &gt; Order Details</span>
      </div>

      <div className="order-header">
        <h1>Order Details</h1>
        <p>
          Ordered on {info.orderDate} | Order# {orderID}
        </p>
        <a href="/invoice" className="invoice-link">
          Invoice
        </a>
      </div>

      <div className="order-summary">
        <div className="shipping-address">
          <h3>Shipping Address</h3>
          {/* {info.shippingAddress
            .split(",")
            .map((item, idx) => item && <p key={idx}>{item}</p>)} */}
        </div>

        <div className="payment-methods">
          <h3>Payment Methods</h3>
          <p>Paid</p>
        </div>

        <div className="order-summary-details">
          <h3>Order Summary</h3>
          <p>Item(s) Subtotal: ₹{info.totalAmount}</p>
          <p>Cash on Delivery fee: ₹0.00</p>
        </div>
      </div>

      <div className="order-item">
        <h3>Arriving Tuesday</h3>
        <p className="order-status">{info.orderStatus}</p>

        {items.map((item) => (
          <div key={item.id} className="order-item-details">
            <img
              src={products[item.product]?.imageUrl} // Use actual product image URLs if available
              alt="Product"
              className="product-image"
            />
            <div className="item-info">
              <p>{products[item.product]?.name || "Loading..."}</p>
              <p>{products[item.product]?.desc || "Loading..."}</p>
              <p>Qty: {item.quantity}</p>
              <p className="item-price">₹{item.totalPrice}</p>
            </div>
          </div>
        ))}

        <div className="order-actions">
          <button disabled className="track-package-btn">
            Track package
          </button>
          {/* <button className="cancel-item-btn">Cancel items</button> */}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
