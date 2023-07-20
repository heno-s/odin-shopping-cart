import { Link } from "react-router-dom";
import styles from "./Home.module.css";
export default function Home() {
    return (
        <div className={styles.container}>
            <p className={styles.slogan}>Explore new innovations!</p>
            <button className={styles["cta-button"]}>
                <Link to="/shop">Shop</Link>{" "}
            </button>
        </div>
    );
}
