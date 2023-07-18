import "./globalStyles.css";
import styles from "./App.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faHouse,
} from "@fortawesome/free-solid-svg-icons";

function App() {
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
        </div>
    );
}

export default App;
