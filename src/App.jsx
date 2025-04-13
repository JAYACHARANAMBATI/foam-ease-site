import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 1,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            minHeight: "100vh",
            paddingTop: "56px", // Matches typical navbar height
          }}
        >
          <Router>
            <Navbar />
            <Cart />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/order" element={<Order />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
