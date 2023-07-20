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
import useCartProducts from "./hooks/useCartProducts";

function App() {
    const [cartProducts, setCartProducts] = useCartProducts();

    const cartProductsCount = cartProducts.reduce(
        (itemsCount, cartItem) => itemsCount + cartItem.count,
        0
    );

    const navigate = useNavigate();

    function handlePayAction() {
        setCartProducts([]);
        navigate("/");
    }

    function handleAddToCart(productData, count) {
        const cartProduct = cartProducts.find(
            (cartProduct) => cartProduct.id === productData.id
        );

        const isProductInCart = cartProduct !== undefined;

        if (isProductInCart) {
            const newCartProducts = cartProducts.map(
                (cartProduct) => {
                    if (cartProduct.id === productData.id) {
                        return {
                            ...cartProduct,
                            count: cartProduct.count + count,
                        };
                    } else {
                        return cartProduct;
                    }
                }
            );

            setCartProducts(newCartProducts);
        } else {
            setCartProducts([
                ...cartProducts,
                { ...productData, count },
            ]);
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
                    {cartProductsCount > 0 && (
                        <div className={styles["cart-count"]}>
                            {cartProductsCount}
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
                            cartProducts={cartProducts}
                            handlePayAction={handlePayAction}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
