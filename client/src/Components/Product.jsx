import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import cardImage from '../assets/bag.jpeg'
import Navbar from './Navbar';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products/")
      .then((resp) => resp.json())
      .then((res) => {
        setProducts(res);
      })
      .catch((e) => {
        console.error("Error Fetching data", e.message);
      });
  }, []);

  return (
    <>
    <Navbar />
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map((product, idx) => (
        <ProductCard key={idx} product={product} />
      ))}
    </div>
    </>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img src={cardImage} alt={product.name} style={styles.image} />
      {/* <img src={product?.image} alt={product.name} style={styles.image} /> */}
      <div style={styles.cardContent}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p><strong>${product.price}</strong></p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      price: PropTypes.number.isRequired
    }).isRequired
  };  

const styles = {
  card: {
    width: '250px',
    border: '1px solid #e0e0e0',
    borderRadius: '5px',
    margin: '15px',
    padding: '2rem',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    maxHeight: '150px',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '10px',
  },
};

export default Product;
