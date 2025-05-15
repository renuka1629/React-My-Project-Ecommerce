import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function Header() {
    const { cart } = useCart();

    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#0d0221", // dark background for neon contrast
        color: "#39ff14", // neon green
        boxShadow: "0 0 10pxrgb(18, 117, 0)",
        fontFamily: "'Orbitron', Arial, sans-serif" // futuristic neon-friendly font
    };

    const logoStyle = {
        fontSize: "26px",
        textDecoration: "none",
        color: "#00ffff", // neon cyan
        fontWeight: "bold",
        letterSpacing: "2px",
        textShadow: "0 0 5px #00ffff, 0 0 10px #00ffff"
    };

    const cartLinkStyle = {
        textDecoration: "none",
        color: "#ff00ff", // neon magenta
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        textShadow: "0 0 5px #ff00ff"
    };

    const cartCountStyle = {
        backgroundColor: "#ff00ff",
        color: "#000000",
        borderRadius: "12px",
        padding: "2px 8px",
        marginLeft: "4px",
        fontSize: "14px",
        fontWeight: "bold",
        boxShadow: "0 0 5pxrgb(13, 66, 0), 0 0 10px #ff00ff"
    };

    return (
        <header style={headerStyle}>
            <Link to="/" style={logoStyle}> Brand one Shop </Link>
            <Link to="/cart" style={cartLinkStyle}>
                🛒 Cart
                <span style={cartCountStyle}>{cart.length}</span>
            </Link>
        </header>
    );
}
