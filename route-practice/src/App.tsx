import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import NoPage from "./components/NoPage";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import ProductsLayout from "./components/Products/ProductsLayout";
import ProductsList from "./components/Products/ProductsList";
import ProductDetail from "./components/Products/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<About />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
        <Route path="/products" element={<ProductsLayout />}>
          <Route index element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
