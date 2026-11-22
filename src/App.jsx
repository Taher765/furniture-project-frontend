import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import LoginPage from "./pages/LoginPage/LoginPage";
import AllProducts from "./pages/AllProducts/AllProducts";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState(true);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/User" element={<User />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Cart" element={auth ? <Cart /> : <LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
