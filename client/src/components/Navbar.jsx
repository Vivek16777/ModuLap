import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>ModuLap 💻</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/products" style={styles.link}>
          Products
        </Link>
        <Link to="/customize" style={styles.link}>
          Customize
        </Link>
        <Link to="/cart" style={styles.link}>
          Cart
        </Link>
        <Link to="/login" style={styles.link}>
          Login
        </Link>
        <Link to="/signup" style={styles.link}>
          signup
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#111",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
  },
};
