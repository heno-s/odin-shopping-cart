import styles from "./Shop.module.css";
import products from "../data/products";

export default function Shop() {
    return (
        <div className={styles.container}>
            {products.map((product) => (
                <Product key={product.description} {...product} />
            ))}
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
            <span className={styles["product-price"]}>{price}</span>
        </div>
    );
}
