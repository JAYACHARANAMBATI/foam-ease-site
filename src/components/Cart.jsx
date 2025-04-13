import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Cart = () => {
  const {
    cartItems,
    isCartOpen,
    cartTotal,
    removeFromCart,
    updateQuantity,
    toggleCart,
    clearCart,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#000",
              zIndex: 999,
            }}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "350px",
              height: "100vh",
              backgroundColor: "white",
              boxShadow: "-4px 0 10px rgba(0, 0, 0, 0.1)",
              zIndex: 1000,
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h2 style={{ margin: 0, color: "#2c3e50" }}>Your Cart</h2>
              <button
                onClick={toggleCart}
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  padding: "5px",
                }}
              >
                ×
              </button>
            </div>

            <div style={{ flex: 1, overflowY: "auto", marginBottom: "20px" }}>
              {cartItems.length === 0 ? (
                <p style={{ textAlign: "center", color: "#666" }}>
                  Your cart is empty
                </p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #eee",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h3
                        style={{
                          margin: 0,
                          fontSize: "1rem",
                          color: "#2c3e50",
                        }}
                      >
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "#999",
                          cursor: "pointer",
                          padding: "0",
                        }}
                      >
                        Remove
                      </button>
                    </div>

                    {/* Display 3D model if it's a 3D product */}
                    {item.splineScene && (
                      <div
                        style={{
                          height: "150px",
                          width: "100%",
                          position: "relative",
                        }}
                      >
                        <Spline
                          scene={item.splineScene}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    )}

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                          style={{
                            width: "25px",
                            height: "25px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: item.quantity <= 1 ? "#eee" : "#f5f5f5",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                            cursor:
                              item.quantity <= 1 ? "not-allowed" : "pointer",
                          }}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          style={{
                            width: "25px",
                            height: "25px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "#f5f5f5",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                            cursor: "pointer",
                          }}
                        >
                          +
                        </button>
                      </div>
                      <span style={{ fontWeight: "bold" }}>
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "15px 0",
                    borderTop: "1px solid #eee",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Total:</span>
                  <span style={{ fontWeight: "bold" }}>₹{cartTotal}</span>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={clearCart}
                    style={{
                      flex: 1,
                      padding: "10px",
                      border: "1px solid #2c3e50",
                      borderRadius: "4px",
                      background: "white",
                      color: "#2c3e50",
                      cursor: "pointer",
                    }}
                  >
                    Clear Cart
                  </button>
                  <button
                    style={{
                      flex: 2,
                      padding: "10px",
                      border: "none",
                      borderRadius: "4px",
                      background: "linear-gradient(90deg, #2c3e50, #4ca1af)",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
