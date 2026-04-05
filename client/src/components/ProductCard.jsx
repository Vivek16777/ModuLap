import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div style={styles.card}>
      <img src={product.image} alt="laptop" style={styles.image} />

      <h3>{product.name}</h3>
      <p style={styles.price}>₹{product.price}</p>

      <button style={styles.button} onClick={() => navigate("/customize")}>
        Customize
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    transition: "0.3s",
    cursor: "pointer",
    background: "#fff",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "contain",
  },
  price: {
    fontWeight: "bold",
    margin: "10px 0",
  },
  button: {
    padding: "10px",
    background: "#ff9900",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};
