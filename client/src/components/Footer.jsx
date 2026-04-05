export default function Footer() {
  return (
    <footer style={styles.footer}>
      <h3>ModuLap 💻</h3>
      <p>Build Your Laptop, Your Way.</p>

      <div style={styles.links}>
        <p>© 2026 ModuLap. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "50px",
    padding: "20px",
    background: "#111",
    color: "#fff",
    textAlign: "center",
  },
  links: {
    marginTop: "10px",
  },
};
