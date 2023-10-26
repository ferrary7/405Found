import Spline from "@splinetool/react-spline";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px",
  });

  const heroVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="main-content"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={heroVariants}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="spline-background">
        <Spline scene="https://prod.spline.design/DoljBMn3Nnq6Ap8H/scene.splinecode" />
      </div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : ""}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Shop everything you need <br /> online from the <br /> retailers{" "}
        <span className="love"> you love</span>
      </motion.h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 1 }}
          style={{ width: "20%", borderRadius: "20px" }}
          onClick={() => navigate("/users/register", { replace: true })}
        >
          Register here <BsArrowUpRight />
        </motion.button>

        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 1.2 }}
          style={{ fontSize: "1.1rem" }}
          onClick={() => navigate("/products", { replace: true })}
        >
          Shop all products
        </motion.button>
      </div>
    </motion.div>
  );
}

export default HeroSection;
