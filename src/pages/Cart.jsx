import styles from "./Cart.module.css";

export default function Cart({ handlePayAction, cartProducts }) {
    return (
        <div className={styles.container}>
            {cartProducts.length > 0 && (
                <>
                    {" "}
                    <div className={styles.items}>
                        {cartProducts.map((cartProduct) => {
                            const items = [];
                            for (
                                let i = 0;
                                i < cartProduct.count;
                                i++
                            ) {
                                items.push(
                                    <CartProduct
                                        key={cartProduct.id + i}
                                        title={cartProduct.title}
                                        image={cartProduct.image}
                                        price={cartProduct.price}
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
                                    (total, cartProduct) =>
                                        total +
                                        cartProduct.price *
                                            cartProduct.count,
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

function CartProduct({ title, image, price }) {
    return (
        <div className={styles.item}>
            <span>{title}</span>
            <img src={image} alt={title} />
            <strong>{price} €</strong>
            <button>remove</button>
        </div>
    );
}
