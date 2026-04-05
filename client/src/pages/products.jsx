import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import API from "../services/api";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1>Our Products 💻</h1>

        <div style={styles.grid}>
          {products.map((p) => (
            <ProductCard
              key={p._id}
              product={{
                ...p,
                price: p.basePrice,
              }}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
};
