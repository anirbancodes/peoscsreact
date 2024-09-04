import logo from "./logo.png";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";

import Home from "./containers/Home";
import ProductPage from "./containers/ProductPage";
import Signup from "./components/Signup";
import OrderDetails from "./components/OrderDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchResults from "./containers/SearchResults";
import CartPage from "./containers/CartPage";
import Profile from "./containers/Profile";
import Checkout from "./containers/Checkout";
import { Admin } from "./containers/Admin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/sign" element={<Signup />} />
          <Route
            path="/order-details"
            element={
              <>
                <Navbar />
                <OrderDetails />
                <Footer />
              </>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/results" element={<SearchResults />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
