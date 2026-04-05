import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function Customize() {
  const [product, setProduct] = useState(null);
  const [components, setComponents] = useState([]);
  const [selected, setSelected] = useState([]);
  const [price, setPrice] = useState(0);

  const PRODUCT_ID = "PASTE_YOUR_PRODUCT_ID"; // 🔥 replace

  // Fetch product
  useEffect(() => {
    API.get("/products").then((res) => {
      setProduct(res.data[0]);
      setPrice(res.data[0].basePrice);
    });
  }, []);

  // Fetch components
  useEffect(() => {
    API.get("/components").then((res) => {
      setComponents(res.data);
    });
  }, []);

  // Handle selection
  const handleSelect = (id) => {
    let updated;

    if (selected.includes(id)) {
      updated = selected.filter((i) => i !== id);
    } else {
      updated = [...selected, id];
    }

    setSelected(updated);

    // Call backend for price
    API.post("/config/calculate", {
      productId: PRODUCT_ID,
      components: updated,
    }).then((res) => {
      setPrice(res.data.totalPrice);
    });
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>Customize Your Laptop 💻</h1>

        <h2>Base Price: ₹{product?.basePrice}</h2>
        <h2>Total Price: ₹{price}</h2>

        <hr />

        <h3>Select Components:</h3>

        {components.map((comp) => (
          <div key={comp._id}>
            <label>
              <input type="checkbox" onChange={() => handleSelect(comp._id)} />
              {comp.type} - {comp.name} (+₹{comp.price})
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
