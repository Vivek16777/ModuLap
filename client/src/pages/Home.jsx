import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const products = [
  {
    _id: "1",
    name: "ModuLap Pro X",
    price: 50000,
    image: "/src/assets/Laptop1.jpg",
  },
  {
    _id: "2",
    name: "ModuLap Air",
    price: 40000,
    image: "/src/assets/Laptop1.jpg",
  },
  {
    _id: "3",
    name: "ModuLap Gaming",
    price: 70000,
    image: "/src/assets/Laptop2.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div style={styles.hero}>
        <h1>Build Your Dream Laptop 💻</h1>
        <p>Customize performance, design, and power — your way.</p>
      </div>

      {/* PRODUCT SECTION */}
      <div style={styles.container}>
        <h2>Featured Laptops</h2>

        <div style={styles.grid}>
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

const styles = {
  hero: {
    background: "linear-gradient(to right, #111, #333)",
    color: "#fff",
    padding: "40px",
    textAlign: "center",
  },
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
