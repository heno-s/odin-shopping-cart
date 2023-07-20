import styles from "./Cart.module.css";

export default function Cart({ handlePayAction, cartProducts }) {
    return (
        <div className={styles.container}>
            {cartProducts.length > 0 && (
                <>
                    {" "}
                    <div className={styles.items}>
                        {cartProducts.map((cartItem) => {
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
                                {cartProducts.reduce(
                                    (total, cartItem) =>
                                        total +
                                        cartItem.price *
                                            cartItem.count,
                                    0
                                )}{" "}
                                €
                            </strong>
                        </span>

                        <form
                            onSubmit={(evt) => {
                                evt.preventDefault();
                                handlePayAction();
                            }}
                        >
                            <button>Pay</button>
                        </form>
                    </div>
                </>
            )}
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
