import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BelowHeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px',
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <div className="below-herosection-cont">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={cardVariants}
        className="below-hero-box-cont"
      >
        <div className="star-cont">
          <AiTwotoneStar color="white" size={24} />
          <AiTwotoneStar color="white" size={24} />
          <AiTwotoneStar color="white" size={24} />
          <AiTwotoneStar color="white" size={24} />
          <AiTwotoneStar color="#B7B7B8" size={24} />
        </div>

        <div id="middle-text">
          <h1>+15K</h1>
          <p>Product Reviews</p>
        </div>

        <div id="last-text">
          <h2 style={{ color: "white" }}>
            Real identity- <br />
            verified reviews
            <br />
            you can trust
          </h2>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={cardVariants}
        className="below-hero-small-box-cont"
      >
      

        <div className="below-hero-small-box"></div>

<div className="below-hero-small-box">
  <h2
    style={{
      color: "#FFF",
      fontFamily: "Red Hat Display",
      fontWeight: 700,
    }}
  >
    Quality
    <br />
    products from
    <br />
    local businesses
  </h2>
</div>
</motion.div>

<motion.div
ref={ref}
animate={controls}
initial="hidden"
variants={cardVariants}
className="below-hero-small-box"
style={{ backgroundColor: "#F6F6F6" }}
>
<h1
  style={{
    color: "#000",
    fontFamily: "Red Hat Display",
    fontSize: "2rem",
    fontWeight: 700,
    margin: 0,
  }}
>
  4,897+
</h1>
<p
  style={{
    color: "#B7B7B8",
    fontFamily: "Red Hat Display",
    fontSize: "1rem",
    fontWeight: 700,
    margin: 0,
  }}
>
  Certified Brands
</p>
</motion.div>

<motion.div
ref={ref}
animate={controls}
initial="hidden"
variants={cardVariants}
className="below-hero-small-box"
style={{ backgroundColor: "#E6E5FF", height: "24rem", gap: "5rem" }}
>
<div
  className="inside-small-box-cont"
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <h3
    style={{
      color: "#000",
      fontFamily: "Red Hat Display",
      fontSize: "2rem",
      fontWeight: 700,
      margin: 0,
    }}
  >
    10%+
  </h3>
  <p
    style={{
      color: "#B7B7B8",
      textAlign: "center",
      fontFamily: "Red Hat Display",
      fontSize: "1rem",
      fontWeight: 700,
      margin: 0,
    }}
  >
    Up to 10% back on
    <br />
    all purchases
  </p>
</div>
<div className="inside-small-box-cont">
  <p
    style={{
      color: "#B7B7B8",
      textAlign: "center",
      fontFamily: "Red Hat Display",
      fontSize: "1rem",
      fontWeight: 700,
      margin: 0,
    }}
  >
    Free, fast, and
    <br />
    reliable shipping
  </p>
</div>
</motion.div>

<motion.div
ref={ref}
animate={controls}
initial="hidden"
variants={cardVariants}
className="below-hero-box-cont"
style={{ backgroundColor: "#2A61DB" }}
>
<h3
  style={{
    color: "#FFF",
    fontFamily: "Red Hat Display",
    fontSize: "1.25rem",
    fontWeight: 600,
  }}
>
  See how 405 found sellers compare to sites like Amazon, Etsy, and
  <br />
  others
</h3>
<div style={{ width: "100%" }}>
  <hr style={{ width: "100%" }} />
  <div className="display-row">
    <p
      style={{
        color: "#FFF",
        fontFamily: "Red Hat Display",
        fontSize: "1rem",
        fontWeight: 600,
        margin: 0,
      }}
    >
      Learn more
    </p>
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
      >
        <path
          d="M3.79167 9.20832L9.20834 3.79166"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.79167 3.79166H9.20834V9.20832"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </div>
</div>
</motion.div>
</div>
);};

export default BelowHeroSection;
