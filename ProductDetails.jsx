import { useParams } from "react-router-dom";

const productsData = [
  { id: 1, name: "Broiler", price: 220, category: "Chicken", image: "/images/broiler.jpg" },
  { id: 2, name: "Valarppu Nattu Kozhi", price: 450, category: "Chicken", image: "/images/valarppu-nattu-kozhi.jpg" },
  { id: 3, name: "Kaadai", price: 180, category: "Chicken", image: "/images/kaadai.jpg" },
  { id: 4, name: "Vaathu", price: 380, category: "Chicken", image: "/images/vaathu.jpg" },
  { id: 5, name: "Original Nattu Kozhi", price: 550, category: "Chicken", image: "/images/original-nattu-kozhi.jpg" },

  { id: 6, name: "Rogu Fish", price: 300, category: "Fish", image: "/images/rogu-fish.jpg" },
  { id: 7, name: "Katla Fish", price: 320, category: "Fish", image: "/images/katla-fish.jpg" },
  { id: 8, name: "Keluthi Fish", price: 280, category: "Fish", image: "/images/keluthi-fish.jpg" },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id == id);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  };

  if (!product) return <h2 style={{ padding: "20px" }}>Product Not Found</h2>;

  return (
    <div className="container" style={styles.wrap}>
      <img src={product.image} alt={product.name} style={styles.img} />

      <div style={styles.details}>
        <h2>{product.name}</h2>
        <p style={styles.price}>₹ {product.price} / kg</p>

        <p style={{ marginTop: "10px" }}>
          Fresh quality product delivered quickly.
        </p>

        <button className="btn btn-green" style={{ marginTop: "15px" }} onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
    marginTop: "30px",
    alignItems: "center",
  },
  img: {
    width: "400px",
    borderRadius: "18px",
    border: "1px solid #ddd",
  },
  details: {
    flex: 1,
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
  },
  price: {
    fontSize: "22px",
    fontWeight: "700",
    color: "green",
    marginTop: "10px",
  },
};