import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Features() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <div className="bg-white text-gray-900 p-8 font-sans">
      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={fadeIn}
          className="text-4xl font-bold mb-6 text-center"
          style={{
            background: "linear-gradient(90deg, #2c3e50, #4ca1af)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Product Features
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-lg leading-7 mb-8 text-center"
          style={{
            maxWidth: "700px",
            margin: "0 auto 2rem",
            lineHeight: "1.6",
            color: "#555",
          }}
        >
          FoamEase is designed to combine functionality, sustainability, and
          everyday convenience in one sleek hygiene tool.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {[
            {
              title: "Pen-like portability",
              description: "Fits in your pocket, purse, or backpack effortlessly.",
              icon: "🚀"
            },
            {
              title: "Alcohol-based foam",
              description: "Fast-drying and effective against germs.",
              icon: "🧴"
            },
            {
              title: "Refillable design",
              description: "Comes with eco-friendly refill packets to reduce waste.",
              icon: "♻️"
            },
            {
              title: "Compact and stylish",
              description: "Clean minimalist design for professional or casual use.",
              icon: "✨"
            },
            {
              title: "Child-safe lock",
              description: "Twist-lock prevents accidental discharge.",
              icon: "🔒"
            },
            {
              title: "Custom branding",
              description: "Great for corporate giveaways, events, or branding kits.",
              icon: "🏷️"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                height: "100%",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{feature.icon}</div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  marginBottom: "1rem",
                  color: "#2c3e50",
                  borderBottom: "2px solid #4ca1af",
                  paddingBottom: "0.5rem",
                }}
              >
                {feature.title}
              </h3>
              <p style={{ lineHeight: "1.6", color: "#555" }}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-base">
            More than just sanitizer — FoamEase is a statement of smart,
            sustainable living. Join the hygiene revolution today.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Features;
