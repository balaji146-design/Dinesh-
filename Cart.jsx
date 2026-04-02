import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  const removeItem = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} style={styles.item}>
              <img src={item.image} style={styles.img} />

              <div style={{ flex: 1 }}>
                <h4>{item.name}</h4>
                <p style={{ color: "green", fontWeight: "700" }}>
                  ₹ {item.price}
                </p>
              </div>

              <button style={styles.removeBtn} onClick={() => removeItem(index)}>
                Remove
              </button>
            </div>
          ))}

          <h3 style={{ marginTop: "20px" }}>Total: ₹ {total}</h3>

          <Link to="/checkout">
            <button className="btn btn-green" style={{ marginTop: "15px" }}>
              Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

const styles = {
  item: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    background: "white",
    padding: "15px",
    borderRadius: "14px",
    marginTop: "15px",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
  },
  img: {
    width: "90px",
    borderRadius: "12px",
  },
  removeBtn: {
    padding: "10px 15px",
    border: "none",
    background: "red",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "700",
  },
};