import logo from "./logo.png";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Product from "./components/Product";
import Home from "./containers/Home";
import ProductPage from "./containers/ProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
