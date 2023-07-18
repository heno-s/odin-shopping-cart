import styles from "./Shop.module.css";
import products from "../data/products";
import { useEffect, useState } from "react";

export default function Shop() {
    return (
        <div className={styles.container}>
            <div className={styles.products}>
                {products.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}

function Product({ id, title, description, image, price }) {
    const [count, setCount] = useState("1");

    useEffect(() => {
        if (+count < 1 && count !== "") {
            setCount("1");
        }
    }, [count]);

    function increment() {
        setCount(+count + 1 + "");
    }

    function decrement() {
        setCount(+count - 1 + "");
    }

    function handleCountChange(evt) {
        setCount(evt.target.value);
    }

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
                    <button type="button" onClick={decrement}>
                        -
                    </button>
                    <div className={styles["product-count"]}>
                        <input
                            type="number"
                            required
                            value={count}
                            onChange={handleCountChange}
                        />
                    </div>
                    <button type="button" onClick={increment}>
                        +
                    </button>
                </div>

                <button className={styles["submit-button"]}>
                    Add
                </button>
            </form>
        </div>
    );
}
