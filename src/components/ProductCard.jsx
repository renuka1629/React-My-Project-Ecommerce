import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const goToDetails = () => navigate(`/product/${product.id}`);

    // Styles
    const cardStyle = {
        width: "250px",
        backgroundColor: "#E6E6FA", // dark violet background
        color: "#e0b3ff", // soft neon violet text
        borderRadius: "20px",
        boxShadow: "0 0 10pxrgb(164, 122, 199)", // soft glow
        overflow: "hidden",
        margin: "15px",
        fontFamily: "'Orbitron', sans-serif",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease"
    };

    const clickableStyle = {
        cursor: "pointer",
        padding: "15px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
    };

    const imageStyle = {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "100px",
        transition: "transform 0.3s ease"
    };

    const titleStyle = {
        fontSize: "16px",
        fontWeight: "bold",
        margin: "10px 0",
        color: "#121212" // light lavender
    };

    const priceStyle = {
        color: "#da70d6", // orchid
        fontSize: "18px",
        marginBottom: "15px",
        fontWeight: "bold"
    };

    const detailsText = {
        color: "#b980f2",
        fontSize: "14px",
        marginTop: "8px"
    };

    const buttonStyle = {
        backgroundColor: "#9d4edd",
        color: "#fff",
        border: "none",
        padding: "12px 0",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        width: "100%",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        transition: "all 0.3s ease",
        boxShadow: "0 0 8pxrgb(212, 201, 221)"
    };

    const handleHover = (e, hover) => {
        e.target.style.backgroundColor = hover ? "#c77dff" : "#9d4edd";
        e.target.style.boxShadow = hover
            ? "0 0 12px #c77dff, 0 0 20px #e0aaff"
            : "0 0 8px #9d4edd";
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 0 15px #e0aaff";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 0 10px #9d4edd";
            }}
        >
            <div style={clickableStyle} onClick={goToDetails}>
                <img src={product.image} alt={product.name} style={imageStyle} />
                <h3 style={titleStyle}>{product.name}</h3>
                <p style={priceStyle}>₹{product.price.toFixed(2)}</p>
                <p style={detailsText}>View Details</p>
            </div>
            <button
                style={buttonStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                onClick={() => addToCart(product)}
            >
                ✨ Add to Cart
            </button>
        </div>
    );
}
