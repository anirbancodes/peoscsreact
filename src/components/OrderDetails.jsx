import "../styles/OrderDetails.css";

const OrderDetails = () => {
  return (
    <div className="order-details-container">
      <div className="breadcrumb">
        <span>Your Account &gt; Your Orders &gt; Order Details</span>
      </div>

      <div className="order-header">
        <h1>Order Details</h1>
        <p>Ordered on 22 August 2024 | Order# 171-7607421-0417164</p>
        <a href="/invoice" className="invoice-link">
          Invoice
        </a>
      </div>

      <div className="order-summary">
        <div className="shipping-address">
          <h3>Shipping Address</h3>
          <p>Anirban Deb</p>
          <p>Surya Nagar</p>
          <p>Surya Nagar</p>
          <p>ALIPURDUAR, WEST BENGAL 736122</p>
          <p>India</p>
        </div>

        <div className="payment-methods">
          <h3>Payment Methods</h3>
          <p>Pay on Delivery</p>
        </div>

        <div className="order-summary-details">
          <h3>Order Summary</h3>
          <p>Item(s) Subtotal: ₹299.00</p>
          <p>Shipping: ₹40.00</p>
          <p>Cash/Pay on Delivery fee: ₹0.00</p>
          <p>Total: ₹339.00</p>
          <p>Promotion Applied: -₹40.00</p>
          <h3>Grand Total: ₹299.00</h3>
        </div>
      </div>

      <div className="order-item">
        <h3>Arriving Tuesday</h3>
        <p className="order-status">Not yet dispatched</p>

        <div className="order-item-details">
          <img
            src="/path-to-product-image.png"
            alt="Product"
            className="product-image"
          />
          <div className="item-info">
            <p>
              MACLEN Ultra Premium Original Uv Curved Tempered Glass For Moto
              Edge 50 Fusion 5G Smartphone | With 3D Curved Full Screen Coverage
              And Installation Kit
            </p>
            <p>Sold by: Cocoblu Retail</p>
            <p className="item-price">₹299.00</p>
          </div>
        </div>

        <div className="order-actions">
          <button className="track-package-btn">Track package</button>
          <button className="cancel-item-btn">Cancel items</button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
