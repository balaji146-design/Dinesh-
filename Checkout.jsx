import { useEffect, useState } from "react";

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = () => {
    if (!name || !address || !phone) {
      alert("Please fill all details!");
      return;
    }

    let message = `Hello Kaviya Home Needs,%0A%0A`;
    message += `Customer Name: ${name}%0A`;
    message += `Phone: ${phone}%0A`;
    message += `Address: ${address}%0A%0A`;
    message += `Order Items:%0A`;

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - ₹${item.price}%0A`;
    });

    message += `%0ATotal: ₹${total}%0A%0AThank you!`;

    const whatsappNumber = "916369960501";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="container">
      <h2>Checkout</h2>

      <div style={styles.box}>
        <input
          style={styles.input}
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={styles.input}
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <textarea
          style={styles.textarea}
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <h3>Total Amount: ₹ {total}</h3>

        <button className="btn btn-green" onClick={placeOrder}>
          Order on WhatsApp
        </button>
      </div>
    </div>
  );
}

const styles = {
  box: {
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    maxWidth: "450px",
    marginTop: "20px",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
  },
  textarea: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
    height: "100px",
  },
};