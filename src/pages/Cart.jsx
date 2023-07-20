import styles from "./Cart.module.css";

export default function Cart({
    handlePayAction,
    cartProducts,
    handleDeleteFromCart,
}) {
    return (
        <div className={styles.container}>
            {cartProducts.length > 0 && (
                <>
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
                                        id={cartProduct.id}
                                        title={cartProduct.title}
                                        image={cartProduct.image}
                                        price={cartProduct.price}
                                        handleDelete={
                                            handleDeleteFromCart
                                        }
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

function CartProduct({ id, title, image, price, handleDelete }) {
    return (
        <div className={styles.item}>
            <span>{title}</span>
            <img src={image} alt={title} />
            <strong>{price} €</strong>
            <button onClick={() => handleDelete(id)}>remove</button>
        </div>
    );
}
