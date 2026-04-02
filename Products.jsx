import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const productsData = [
  { id: 1, name: "Broiler", price: 220, category: "Chicken", image: "/Broiler.jpeg" },
  { id: 2, name: "Valarppu Nattu Kozhi", price: 450, category: "Chicken", image: "/Valarppu nattu kozh.jpeg" },
  { id: 3, name: "Kaadai", price: 180, category: "Chicken", image: "/Kaadai.jpeg" },
  { id: 4, name: "Vaathu", price: 380, category: "Chicken", image: "/Vaathu.jpeg" },
  { id: 5, name: "Original Nattu Kozhi", price: 550, category: "Chicken", image: "/Original nattu kozhi.jpeg" },

  { id: 6, name: "Rogu Fish", price: 300, category: "Fish", image: "/Rogu fish.jpeg" },
  { id: 7, name: "Katla Fish", price: 320, category: "Fish", image: "/Katla fish.jpeg" },
  { id: 8, name: "Keluthi Fish", price: 280, category: "Fish", image: "/Keluthi fish.jpeg" },
];

export default function Products() {
  const [products] = useState(productsData);
  const [filtered, setFiltered] = useState(productsData);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const cat = searchParams.get("cat");
    const search = searchParams.get("search");

    let result = [...products];

    if (cat) result = result.filter((p) => p.category === cat);

    if (search)
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );

    setFiltered(result);
  }, [searchParams, products]);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
    window.location.reload();
  };

  return (
    <div className="container">
      <h2>Fresh Products</h2>

      <div style={styles.grid}>
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: "20px",
    marginTop: "20px",
  },
};

// Mobile responsive styles
const mobileStyles = `
@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
    gap: 15px !important;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)) !important;
    gap: 12px !important;
  }
}
`;

// Inject mobile styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = mobileStyles;
  document.head.appendChild(style);
}