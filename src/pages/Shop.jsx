import styles from "./Shop.module.css";
import products from "../data/products";

export default function Shop() {
    return (
        <div className={styles.container}>
            <div className={styles.products}>
                {products.map((product) => (
                    <Product key={product.description} {...product} />
                ))}
            </div>
        </div>
    );
}

function Product({ title, description, image, price }) {
    return (
        <div className={styles.product}>
            <span className={styles["product-title"]}>{title}</span>
            <img src={image} alt={title} />
            <p className={styles["product-description"]}>
                {description}
            </p>
            <span className={styles["product-price"]}>{price} €</span>
            <form>
                <div className={styles["product-controls"]}>
                    <button type="button">-</button>
                    <div className={styles["product-count"]}>
                        <input type="number" required />
                    </div>
                    <button type="button">+</button>
                </div>

                <button>Add</button>
            </form>
        </div>
    );
}
