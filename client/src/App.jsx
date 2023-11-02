import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import "./LandingPage.css";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/Signup";
import ProductDisplay from "./Components/ProductDisplay";
import CartPage from "./CartPage";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div>
    <Navbar/>
    <Routes>

      <Route path="/" element={<LandingPage />} />
      <Route path="/users/login" element={<Login />} />
      <Route path="/users/register" element={<SignUp />} />
      <Route path="/product/:id" element={<ProductDisplay />} />
      <Route path="/cart-page" element={<CartPage />} />
    </Routes>
    </div>
  );
}

export default App;
