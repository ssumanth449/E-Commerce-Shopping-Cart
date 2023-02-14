import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { AboutUs } from "./pages/AboutUs";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";

import {Login} from "./pages/Login";

import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/*" element={<Shop />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Privacy" element={<Privacy />} />
            <Route path="/Terms" element={<Terms />} />

            <Route path="/Login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
