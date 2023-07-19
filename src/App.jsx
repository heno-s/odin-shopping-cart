import "./globalStyles.css";
import styles from "./App.module.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faHouse,
} from "@fortawesome/free-solid-svg-icons";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import useCartItems from "./hooks/useCartItems";

function App() {
    const [cartItems, setCartItems] = useCartItems();

    function handleAddToCart(id, count) {
        const cartItem = cartItems.find(
            (cartItem) => cartItem.id === id
        );

        if (cartItem !== undefined) {
            const newCartItems = cartItems.map((cartItem) => {
                if (cartItem.id === id) {
                    return {
                        ...cartItem,
                        count: cartItem.count + count,
                    };
                } else {
                    return cartItem;
                }
            });

            setCartItems(newCartItems);
        } else {
            setCartItems([...cartItems, { id, count }]);
        }
    }

    return (
        <div className={styles.app}>
            <header className={styles.navbar}>
                <NavLink to="/">
                    <FontAwesomeIcon icon={faHouse} />
                </NavLink>
                <NavLink to="/shop">shop</NavLink>
                <NavLink to="/cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                </NavLink>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/shop"
                    element={
                        <Shop handleAddToCart={handleAddToCart} />
                    }
                />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
