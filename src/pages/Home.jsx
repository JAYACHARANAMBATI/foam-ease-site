import { useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Define the product data
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  const foamEaseProduct = {
    id: "foam-ease-pen",
    name: "FoamEase Pen Sanitizer",
    price: 150,
    quantity: 1,
    splineScene: "https://prod.spline.design/e7j4kRPmlxIsUiOX/scene.splinecode",
  };

  // Function to handle adding product to cart
  const handleAddToCart = () => {
    addToCart(foamEaseProduct);
  };

  // Function to handle learn more button
  const handleLearnMore = () => {
    navigate("/features");
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [modelRef, modelInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    onChange: (inView) => {
      if (inView && !isModelLoaded) {
        setIsModelLoaded(true);
      }
    },
  });

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        color: "#333",
        fontFamily: "Segoe UI, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
        backdropFilter: "blur(5px)",
        borderRadius: "12px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="hero-section"
        style={{
          textAlign: "center",
          padding: "3rem 1rem",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
          marginBottom: "3rem",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
        }}
      >
        <motion.h1
          variants={fadeIn}
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            background: "linear-gradient(90deg, #2c3e50, #4ca1af)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "700",
          }}
        >
          FoamEase Pen Sanitizer
        </motion.h1>
        <motion.p
          variants={fadeIn}
          style={{
            fontSize: "1.4rem",
            marginBottom: "2rem",
            maxWidth: "700px",
            margin: "0 auto 2rem",
            lineHeight: "1.6",
            color: "#555",
          }}
        >
          Sleek. Refillable. Safe. Your portable hygiene companion designed for
          convenience and sustainability.
        </motion.p>
        <motion.button
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
          style={{
            background: "linear-gradient(90deg, #2c3e50, #4ca1af)",
            color: "white",
            border: "none",
            padding: "12px 30px",
            borderRadius: "30px",
            fontSize: "1.1rem",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(76, 161, 175, 0.4)",
          }}
        >
          Add to Cart
        </motion.button>
      </motion.div>

      <motion.div
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={staggerContainer}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          marginBottom: "4rem",
        }}
      >
        <motion.div
          variants={fadeIn}
          style={{
            background: "white",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
            height: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "1.2rem",
              color: "#2c3e50",
              borderBottom: "2px solid #4ca1af",
              paddingBottom: "0.5rem",
            }}
          >
            Key Features
          </h2>
          <ul
            style={{
              lineHeight: "1.75",
              fontSize: "1.1rem",
              listStyleType: "none",
              padding: 0,
            }}
          >
            <li
              style={{
                margin: "0.8rem 0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "linear-gradient(90deg, #2c3e50, #4ca1af)",
                  marginRight: "10px",
                  flexShrink: 0,
                }}
              ></span>
              Pocket-sized for ultimate portability
            </li>
            <li
              style={{
                margin: "0.8rem 0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "linear-gradient(90deg, #2c3e50, #4ca1af)",
                  marginRight: "10px",
                  flexShrink: 0,
                }}
              ></span>
              Push-pen mechanism for one-handed use
            </li>
            <li
              style={{
                margin: "0.8rem 0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "linear-gradient(90deg, #2c3e50, #4ca1af)",
                  marginRight: "10px",
                  flexShrink: 0,
                }}
              ></span>
              Eco-friendly with reusable pen and refill packs
            </li>
            <li
              style={{
                margin: "0.8rem 0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "linear-gradient(90deg, #2c3e50, #4ca1af)",
                  marginRight: "10px",
                  flexShrink: 0,
                }}
              ></span>
              Child-safe twist-lock mechanism
            </li>
            <li
              style={{
                margin: "0.8rem 0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "linear-gradient(90deg, #2c3e50, #4ca1af)",
                  marginRight: "10px",
                  flexShrink: 0,
                }}
              ></span>
              Custom branding available for corporates/events
            </li>
            <li
              style={{
                margin: "0.8rem 0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "linear-gradient(90deg, #2c3e50, #4ca1af)",
                  marginRight: "10px",
                  flexShrink: 0,
                }}
              ></span>
              Safe, alcohol-based foam that dries quickly
            </li>
            <li
              style={{
                margin: "0.8rem 0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "linear-gradient(90deg, #2c3e50, #4ca1af)",
                  marginRight: "10px",
                  flexShrink: 0,
                }}
              ></span>
              Attractive modern design (available in colors)
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeIn}
          style={{
            background: "white",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
            height: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "1.2rem",
              color: "#2c3e50",
              borderBottom: "2px solid #4ca1af",
              paddingBottom: "0.5rem",
            }}
          >
            Why FoamEase?
          </h2>
          <ul
            style={{
              lineHeight: "1.75",
              fontSize: "1.1rem",
              listStyleType: "none",
              padding: 0,
            }}
          >
            <li
              style={{
                margin: "0.8rem 0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "linear-gradient(90deg, #2c3e50, #4ca1af)",
                  marginRight: "10px",
                  flexShrink: 0,
                }}
              ></span>
              Refill once, reuse many times
            </li>
            <li
              style={{
                margin: "0.8rem 0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "linear-gradient(90deg, #2c3e50, #4ca1af)",
                  marginRight: "10px",
                  flexShrink: 0,
                }}
              ></span>
              Helps reduce plastic waste compared to traditional sanitizers
            </li>
            <li
              style={{
                margin: "0.8rem 0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "linear-gradient(90deg, #2c3e50, #4ca1af)",
                  marginRight: "10px",
                  flexShrink: 0,
                }}
              ></span>
              Perfect for travelers, school kids, office workers
            </li>
            <li
              style={{
                margin: "0.8rem 0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "linear-gradient(90deg, #2c3e50, #4ca1af)",
                  marginRight: "10px",
                  flexShrink: 0,
                }}
              ></span>
              Affordable at just ₹150 per pen with low-cost refills
            </li>
            <li
              style={{
                margin: "0.8rem 0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "linear-gradient(90deg, #2c3e50, #4ca1af)",
                  marginRight: "10px",
                  flexShrink: 0,
                }}
              ></span>
              Designed & Made in India
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        ref={modelRef}
        initial="hidden"
        animate={modelInView ? "visible" : "hidden"}
        variants={fadeIn}
        style={{
          textAlign: "center",
          marginTop: "3rem",
          background: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "1.5rem",
            color: "#2c3e50",
          }}
        >
          Experience the FoamEase Difference
        </h2>
        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "1.5rem",
              color: "#2c3e50",
            }}
          >
            3D Model Preview
          </h2>
          <div
            style={{
              height: "700px",
              width: "100%",
              maxWidth: "1000px",
              position: "relative",
              margin: "3rem auto",
              border: "1px solid rgba(44, 62, 80, 0.2)",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 12px 40px rgba(44, 62, 80, 0.2)",
              backgroundColor: "#f8f9fa",
            }}
          >
            {isModelLoaded ? (
              <Spline
                scene="https://prod.spline.design/e7j4kRPmlxIsUiOX/scene.splinecode"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2c3e50",
                }}
              >
                Loading 3D model...
              </div>
            )}
          </div>
        </div>
        <p
          style={{
            fontSize: "1rem",
            marginTop: "1.5rem",
            color: "#666",
            fontStyle: "italic",
          }}
        >
          Sleek and compact FoamEase sanitizer pen – Available now
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#4ca1af" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            style={{
              background: "#2c3e50",
              color: "white",
              border: "none",
              padding: "12px 30px",
              borderRadius: "30px",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(44, 62, 80, 0.4)",
            }}
          >
            Add to Cart
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#f5f5f5" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLearnMore}
            style={{
              background: "transparent",
              color: "#2c3e50",
              border: "2px solid #2c3e50",
              padding: "12px 30px",
              borderRadius: "30px",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
