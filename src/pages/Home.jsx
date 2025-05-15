import { useState } from "react";
import { products } from "../date/product.js";
import ProductCard from "../components/ProductCard";
import { FaStoreAlt } from "react-icons/fa";

export default function Home() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filtered = products.filter(
        (p) =>
            (category === "All" || p.category === category) &&
            p.name.toLowerCase().includes(search.toLowerCase())
    );

    const categories = ["All", ...new Set(products.map((p) => p.category))];

    const styles = {
        container: {
            padding: "30px",
            fontFamily: "'Segoe UI', sans-serif",
            backgroundColor: "#fff8fc",
            minHeight: "100vh",
            color: "#333"
        },
        heading: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.5rem",
            color: "#c71585", // medium violet red
            gap: "12px",
            marginBottom: "30px",
            fontFamily: "'Pacifico', cursive",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
        },
        filters: {
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "35px",
            flexWrap: "wrap"
        },
        input: {
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "1px solid #bbb",
            minWidth: "220px",
            outlineColor: "#c71585"
        },
        select: {
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "1px solid #bbb",
            minWidth: "180px",
            outlineColor: "#c71585"
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px"
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>
                <FaStoreAlt size={32} color="#c71585" />
                Explore Our Products
            </h1>
            <div style={styles.filters}>
                <input
                    type="text"
                    placeholder="🔎 Search for products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={styles.input}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={styles.select}
                >
                    {categories.map((cat) => (
                        <option key={cat}>{cat}</option>
                    ))}
                </select>
            </div>
            <div style={styles.grid}>
                {filtered.map((product) => (
                    <ProductCard key={product.id + product.name} product={product} />
                ))}
            </div>
        </div>
    );
}
