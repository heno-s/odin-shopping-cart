import "./globalStyles.css";
import styles from "./App.module.css";
import {
    NavLink,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";
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

    const cartItemsCount = cartItems.reduce(
        (itemsCount, cartItem) => itemsCount + cartItem.count,
        0
    );

    const navigate = useNavigate();

    function handlePayAction() {
        setCartItems([]);
        navigate("/");
    }

    function handleAddToCart(productData, count) {
        const cartItem = cartItems.find(
            (cartItem) => cartItem.id === productData.id
        );

        if (cartItem !== undefined) {
            const newCartItems = cartItems.map((cartItem) => {
                if (cartItem.id === productData.id) {
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
            setCartItems([...cartItems, { ...productData, count }]);
        }
    }

    return (
        <div className={styles.app}>
            <header className={styles.navbar}>
                <NavLink to="/">
                    <FontAwesomeIcon icon={faHouse} />
                </NavLink>
                <NavLink to="/shop">shop</NavLink>
                <NavLink to="/cart" className={styles["cart-link"]}>
                    {cartItemsCount > 0 && (
                        <div className={styles["cart-count"]}>
                            {cartItemsCount}
                        </div>
                    )}
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
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cartItems={cartItems}
                            handlePayAction={handlePayAction}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
