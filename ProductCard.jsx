import { Link } from "react-router-dom";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="card-hover" style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.img} />

      <div style={styles.content}>
        <h3 style={styles.name}>{product.name}</h3>
        <p style={styles.price}>₹ {product.price} / kg</p>

        <div style={styles.btnRow}>
          <Link to={`/product/${product.id}`} style={styles.viewBtn}>
            View
          </Link>

          <button style={styles.cartBtn} onClick={() => addToCart(product)}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
  },
  img: {
    width: "100%",
    height: "190px",
    objectFit: "cover",
  },
  content: {
    padding: "12px",
  },
  name: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "6px",
  },
  price: {
    fontSize: "18px",
    fontWeight: "700",
    color: "green",
    marginBottom: "10px",
  },
  btnRow: {
    display: "flex",
    gap: "10px",
  },
  viewBtn: {
    flex: 1,
    textAlign: "center",
    padding: "10px",
    background: "#eaeaea",
    borderRadius: "10px",
    fontWeight: "600",
  },
  cartBtn: {
    flex: 1,
    padding: "10px",
    background: "#0b7a2e",
    border: "none",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

// Mobile responsive styles
const mobileStyles = `
@media (max-width: 768px) {
  .productCard-img {
    height: 160px !important;
  }
  .productCard-content {
    padding: 10px !important;
  }
  .productCard-name {
    font-size: 14px !important;
  }
  .productCard-price {
    font-size: 16px !important;
  }
  .productCard-viewBtn, .productCard-cartBtn {
    padding: 8px !important;
    font-size: 14px !important;
  }
}

@media (max-width: 480px) {
  .productCard-img {
    height: 140px !important;
  }
  .productCard-content {
    padding: 8px !important;
  }
  .productCard-name {
    font-size: 12px !important;
  }
  .productCard-price {
    font-size: 14px !important;
  }
  .productCard-viewBtn, .productCard-cartBtn {
    padding: 6px !important;
    font-size: 12px !important;
  }
}
`;

// Inject mobile styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = mobileStyles;
  document.head.appendChild(style);
}