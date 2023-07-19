export default function Cart({ cartItems }) {
    return (
        <div>
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
    );
}

function CartItem({ title, image, price }) {
    return (
        <div>
            <span>{title}</span>
            <img src={image} alt={title} />
            <span>{price}</span>
        </div>
    );
}
