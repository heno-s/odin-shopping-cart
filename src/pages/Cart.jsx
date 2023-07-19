import styles from "./Cart.module.css";

export default function Cart({ cartItems }) {
    return (
        <div className={styles.container}>
            <div className={styles.items}>
                {cartItems.map((cartItem) => {
                    const items = [];
                    for (let i = 0; i < cartItem.count; i++) {
                        items.push(
                            <CartItem
                                key={cartItem.id + i}
                                title={cartItem.title}
                                image={cartItem.image}
                                price={cartItem.price}
                            />
                        );
                    }
                    return items;
                })}
            </div>
            <div className={styles.total}>
                <span>
                    Total:{" "}
                    <strong>
                        {cartItems.reduce(
                            (total, cartItem) =>
                                total +
                                cartItem.price * cartItem.count,
                            0
                        )}{" "}
                        €
                    </strong>
                </span>

                <form>
                    <button>Pay</button>
                </form>
            </div>
        </div>
    );
}

function CartItem({ title, image, price }) {
    return (
        <div className={styles.item}>
            <span>{title}</span>
            <img src={image} alt={title} />
            <strong>{price} €</strong>
        </div>
    );
}
