import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Policy from "./pages/Policy";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import Account from "./pages/Account";

function App() {
  // const navigate = useNavigate();
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />

            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="account" element={<Account />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<WishList />} />

            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="policy" element={<Policy />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
