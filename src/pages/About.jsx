import { motion } from "framer-motion";

function About() {
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
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={fadeIn}
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            background: "linear-gradient(90deg, #2c3e50, #4ca1af)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          About FoamEase
        </motion.h2>
        <motion.p
          variants={fadeIn}
          style={{
            fontSize: "1.4rem",
            marginBottom: "2rem",
            maxWidth: "700px",
            margin: "0 auto 2rem",
            lineHeight: "1.6",
            color: "#555",
            textAlign: "center",
          }}
        >
          At FoamEase, we're redefining hygiene on the go. We believe that
          cleanliness shouldn't be bulky, messy, or wasteful. Our signature
          pen-style foam sanitizer is crafted for people who value convenience,
          sustainability, and style in their everyday routines.
        </motion.p>

        <div
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
            <h3
              style={{
                fontSize: "1.8rem",
                marginBottom: "1.2rem",
                color: "#2c3e50",
                borderBottom: "2px solid #4ca1af",
                paddingBottom: "0.5rem",
              }}
            >
              Our Mission
            </h3>
            <p className="text-base leading-6">
              To empower individuals with smart, eco-conscious hygiene solutions
              that fit effortlessly into modern lifestyles. From your pocket to
              your palm — hygiene is just a click away.
            </p>
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
            <h3
              style={{
                fontSize: "1.8rem",
                marginBottom: "1.2rem",
                color: "#2c3e50",
                borderBottom: "2px solid #4ca1af",
                paddingBottom: "0.5rem",
              }}
            >
              Who We Are
            </h3>
            <p className="text-base leading-6">
              FoamEase is built by a diverse team of designers, health
              enthusiasts, and engineers committed to innovation and
              sustainability. We come from backgrounds in product design, public
              health, and consumer technology — united by a passion to solve
              real-world problems with simplicity.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn}
          style={{
            background: "white",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
            marginTop: "3rem",
          }}
        >
          <h3
            style={{
              fontSize: "1.8rem",
              marginBottom: "1.2rem",
              color: "#2c3e50",
              borderBottom: "2px solid #4ca1af",
              paddingBottom: "0.5rem",
            }}
          >
            What We Value
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Portability:</strong> Designed to move with you.
            </li>
            <li>
              <strong>Eco-consciousness:</strong> Built with refillable
              components to reduce waste.
            </li>
            <li>
              <strong>Style:</strong> Functional products with a sleek, modern
              aesthetic.
            </li>
            <li>
              <strong>Innovation:</strong> Constantly iterating to deliver
              smarter hygiene tools.
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
            marginTop: "3rem",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "1.8rem",
              marginBottom: "1.2rem",
              color: "#2c3e50",
              borderBottom: "2px solid #4ca1af",
              paddingBottom: "0.5rem",
            }}
          >
            Join the Clean Movement
          </h3>
          <p className="text-base leading-6">
            FoamEase isn’t just a product — it’s a movement for a cleaner,
            smarter future. Whether you're a daily commuter, a student, a
            parent, or a wellness brand, we invite you to explore a better way
            to stay clean. Welcome to the hygiene revolution.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
