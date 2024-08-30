import logo from "./logo.png";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Product from "./components/Product";
import Home from "./containers/Home";
import ProductPage from "./containers/ProductPage";
import Signup from "./components/Signup";
import OrderDetails from "./components/OrderDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
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
          <Route path="/product" element={<ProductPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
