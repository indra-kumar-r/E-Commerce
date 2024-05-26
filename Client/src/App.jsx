import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Payment from "./pages/Payment";
import "./styles/global.scss";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EditProduct from "./pages/AdminPages/EditProduct";

export default function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={"profile"} element={<Profile />} />
          <Route path={"cart"} element={<Cart />} />
          <Route path={"wishlist"} element={<WishList />} />
          <Route path={"product/:productId"} element={<Product />} />
          <Route path={"about"} element={<About />} />
          <Route path={"payment"} element={<Payment />} />
          <Route path={"*"} element={<NotFound />} />
          <Route path={"about"} element={<About />} />
          <Route path={"admin"} element={<Admin />} />
          <Route path={"/edit/:productId"} element={<EditProduct />} />
          <Route path={"login"} element={<Login />} />
          <Route path={"register"} element={<Register />} />
          {/* <Route path={""} element={ } /> */}
        </Route>
      </Routes>
    </>
  );
}
