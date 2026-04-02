import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div style={styles.banner}>
        <div style={styles.overlay}>
          <h1 style={{ fontSize: "40px" }}>Fresh Chicken & Fish</h1>
          <p style={{ marginTop: "10px", fontSize: "18px" }}>
            Best Quality Delivery to Your Home
          </p>

          <Link to="/products">
            <button className="btn btn-yellow" style={{ marginTop: "20px" }}>
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      <div className="container">
        <h2>Shop By Category</h2>

        <div style={styles.categories}>
          <Link to="/products?cat=Chicken" style={styles.catCard}>
            🐔 Chicken
          </Link>

          <Link to="/products?cat=Fish" style={styles.catCard}>
            🐟 Fish
          </Link>

          <Link to="/products" style={styles.catCard}>
            🔥 Today Deals
          </Link>

          <Link to="/products" style={styles.catCard}>
            🚚 Fast Delivery
          </Link>
        </div>
      </div>

      <a
        href="https://wa.me/916369960501"
        target="_blank"
        style={styles.whatsapp}
      >
        WhatsApp
      </a>
    </div>
  );
}

const styles = {
  banner: {
    height: "380px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1604908554162-30d0cc8b36bb?auto=format&fit=crop&w=1400&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    background: "rgba(0,0,0,0.6)",
    padding: "45px",
    borderRadius: "18px",
    textAlign: "center",
    color: "white",
  },
  categories: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
    gap: "15px",
    marginTop: "20px",
  },
  catCard: {
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    fontWeight: "700",
    textAlign: "center",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
  },
  whatsapp: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    color: "white",
    padding: "15px 22px",
    borderRadius: "50px",
    fontWeight: "700",
    boxShadow: "0px 3px 12px rgba(0,0,0,0.2)",
  },
};

// Mobile responsive styles
const mobileStyles = `
@media (max-width: 768px) {
  .home-banner {
    height: 300px !important;
  }
  .home-overlay {
    padding: 30px 20px !important;
  }
  .home-overlay h1 {
    font-size: 32px !important;
  }
  .home-overlay p {
    font-size: 16px !important;
  }
  .home-categories {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)) !important;
    gap: 12px !important;
  }
  .home-catCard {
    padding: 20px !important;
  }
  .home-whatsapp {
    padding: 12px 18px !important;
    font-size: 14px !important;
  }
}

@media (max-width: 480px) {
  .home-banner {
    height: 250px !important;
  }
  .home-overlay {
    padding: 20px 15px !important;
  }
  .home-overlay h1 {
    font-size: 24px !important;
  }
  .home-overlay p {
    font-size: 14px !important;
  }
  .home-categories {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 10px !important;
  }
  .home-catCard {
    padding: 15px !important;
    font-size: 14px !important;
  }
  .home-whatsapp {
    padding: 10px 15px !important;
    font-size: 12px !important;
    bottom: 15px !important;
    right: 15px !important;
  }
}
`;

// Inject mobile styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = mobileStyles;
  document.head.appendChild(style);
}