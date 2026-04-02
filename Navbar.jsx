import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = cart.length;

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products?search=${search}`);
  };

  return (
    <>
      <div style={styles.topBar}>
        <Link to="/" style={styles.logo}>
          Dinesh chicken Center
        </Link>

        <form style={styles.searchBox} onSubmit={handleSearch}>
          <input
            style={styles.input}
            type="text"
            placeholder="Search chicken, fish..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button style={styles.searchBtn}>Search</button>
        </form>

        <Link to="/cart" style={styles.cart}>
          🛒 Cart ({cartCount})
        </Link>
      </div>

      <div style={styles.menuBar}>
        <Link to="/products">All</Link>
        <Link to="/products?cat=Chicken">Chicken</Link>
        <Link to="/products?cat=Fish">Fish</Link>
      </div>
    </>
  );
}

const styles = {
  topBar: {
    background: "#0b7a2e",
    padding: "12px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "15px",
    flexWrap: "wrap",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    color: "white",
    fontWeight: "700",
    fontSize: "22px",
  },
  searchBox: {
    flex: 1,
    maxWidth: "600px",
    minWidth: "250px",
    display: "flex",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "none",
    outline: "none",
    borderRadius: "6px 0 0 6px",
  },
  searchBtn: {
    padding: "10px 18px",
    border: "none",
    cursor: "pointer",
    background: "#ffb300",
    fontWeight: "700",
    borderRadius: "0 6px 6px 0",
  },
  cart: {
    color: "white",
    fontWeight: "600",
  },
  menuBar: {
    background: "#05541f",
    padding: "10px 20px",
    display: "flex",
    gap: "25px",
    fontWeight: "600",
    color: "white",
    overflowX: "auto",
  },
};

// Mobile responsive styles
const mobileStyles = `
@media (max-width: 768px) {
  .navbar-topBar {
    padding: 10px 15px !important;
    flex-direction: column !important;
    align-items: stretch !important;
  }
  .navbar-logo {
    font-size: 18px !important;
    text-align: center !important;
  }
  .navbar-searchBox {
    max-width: 100% !important;
    min-width: auto !important;
  }
  .navbar-cart {
    text-align: center !important;
    margin-top: 5px !important;
  }
  .navbar-menuBar {
    padding: 8px 15px !important;
    gap: 15px !important;
    justify-content: center !important;
  }
}

@media (max-width: 480px) {
  .navbar-topBar {
    padding: 8px 10px !important;
  }
  .navbar-logo {
    font-size: 16px !important;
  }
  .navbar-input {
    padding: 8px !important;
  }
  .navbar-searchBtn {
    padding: 8px 12px !important;
  }
  .navbar-menuBar {
    padding: 6px 10px !important;
    gap: 10px !important;
  }
}
`;

// Inject mobile styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = mobileStyles;
  document.head.appendChild(style);
}