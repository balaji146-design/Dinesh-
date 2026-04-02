export default function Footer() {
  return (
    <footer style={styles.footer}>
      <h3>Dinesh chicken Center</h3>
      <p>Fresh Chicken & Fish Delivery</p>
      <p style={{ marginTop: "10px" }}>© 2026 All Rights Reserved</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "50px",
    padding: "30px",
    background: "#0b7a2e",
    textAlign: "center",
    color: "white",
  },
};