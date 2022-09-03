import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Products from "./components/pages/Products";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
