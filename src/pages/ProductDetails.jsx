import { useParams, useNavigate } from "react-router-dom";
import { products } from "../date/product.js";
import { useCart } from "../context/cartContext.jsx";

export default function ProductsDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const styles = {
        container: {
            maxWidth: "800px",
            margin: "50px auto",
            padding: "30px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
            borderRadius: "12px",
            backgroundColor: "#121212",
            fontFamily: "'Segoe UI', sans-serif",
            textAlign: "center",
            color: "#fff"
        },
        image: {
            maxWidth: "100%",
            height: "auto",
            borderRadius: "12px",
            marginBottom: "25px",
            border: "4px solid #9b4dca", // Violet neon border
            boxShadow: "0 0 15px rgba(155, 77, 202, 0.6)"
        },
        name: {
            fontSize: "2.5rem",
            marginBottom: "12px",
            color: "#9b4dca", // Violet neon text color
            textShadow: "0 0 15px rgba(155, 77, 202, 1)"
        },
        description: {
            fontSize: "1.2rem",
            marginBottom: "18px",
            color: "#d1d1d1",
            lineHeight: "1.6"
        },
        price: {
            fontSize: "1.4rem",
            fontWeight: "bold",
            color: "#7fffd4", // Light aqua color for price
            marginBottom: "25px",
            textShadow: "0 0 10px rgba(127, 255, 212, 0.8)"
        },
        button: {
            padding: "15px 30px",
            fontSize: "1.2rem",
            backgroundColor: "#9b4dca", // Violet neon background
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background 0.3s ease, transform 0.2s ease",
            boxShadow: "0 0 10px rgba(155, 77, 202, 0.6)"
        },
        buttonHover: {
            transform: "scale(1.05)",
            backgroundColor: "#7f00ff", // Bright purple when hovered
            boxShadow: "0 0 20px rgba(127, 255, 212, 0.8)"
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.name}>{product.name}</h2>
            <img src={product.image} alt={product.name} style={styles.image} />
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>₹{product.price}</p>
            <button
                style={styles.button}
                onClick={() => {
                    addToCart(product);
                    navigate("/cart");
                }}
                onMouseOver={(e) => e.target.style = {...styles.button, ...styles.buttonHover}} // Hover effect
                onMouseOut={(e) => e.target.style = styles.button} // Reset to default button style
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}
