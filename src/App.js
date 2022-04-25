import "./app.css";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import NavBar from "./components/NavBar/NavBar";
import ProductMenu from "./pages/ProductMenu/ProductMenu";
import ProductDetail from "./pages/ProductDetails/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckOut from "./pages/CheckOut/CheckOut";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductMenu />} />
        <Route path="/check-out" element={<ShoppingCart />} />
        <Route path="/product-details" element={<ProductDetail />} />
        <Route path="/check-out/payment" element={<CheckOut />} />
      </Routes>
    </Router>
  );
}

export default App;
