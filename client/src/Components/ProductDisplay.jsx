import { useEffect, useState } from "react";
import "./ProductDisplay.css";
import Demo from "../assets/Demo.jpeg";
import Rating from "@mui/material/Rating";
// import { GrCart } from "react-icons/gr";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tooltip from "@mui/material/Tooltip";
import { motion } from "framer-motion";
import { getProductById } from "./api";

// Image animation variants
const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
};

const id = 6;

function ProductDisplay() {
  useEffect(() => {
    getProductById(id);
  }, []);
  const [value, setValue] = useState(2);
  return (
    <div className="product_display_main">
      <motion.div
        className="product_image"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img src={Demo} alt="" style={{ width: "100%", height: "100%" }} />
      </motion.div>

      <div className="product_information">
        <div className="Product_Name">
          <h1>405 not Found</h1>
          <p>Supplier Name</p>
        </div>
        <div className="product_rating">
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <div className="Product_Pricing">
          <h2>{`₹900`}</h2>
        </div>
        <div className="add-to-cart-btn">
          <Tooltip
            title="Add to Cart"
            placement="top"
            sx={{
              "& .MuiTooltip-tooltip": {
                backgroundColor: "#007BFF",
                color: "white",
                fontSize: "0.9rem",
                borderRadius: "8px",
              },
              "& .MuiTooltip-arrow": {
                color: "#007BFF",
              },
            }}
          >
            <ShoppingCartIcon
              style={{ marginRight: "3%", color: "white !important" }}
            />
          </Tooltip>
          <Tooltip
            title="Add to Cart"
            placement="top"
            sx={{
              "& .MuiTooltip-tooltip": {
                backgroundColor: "#007BFF",
                color: "white",
                fontSize: "0.9rem",
                borderRadius: "8px",
              },
              "& .MuiTooltip-arrow": {
                color: "#007BFF",
              },
            }}
          >
            Add to cart
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
