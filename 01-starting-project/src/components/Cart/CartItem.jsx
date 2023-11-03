import styles from './CartItem.module.css'

const CartItem = ({name, price, quantity, onItemAdd, onItemRemove}) => {
    return (
        <div className={styles['cart-item']}>
            <div className={styles['name-price']}>
                <h4>{name}</h4>
                <p>${parseFloat(price).toFixed(2)}</p>
            </div>
            <div className={styles.quantity}>
                <button type="button" onClick={onItemRemove}>-</button>
                <h4>{quantity}</h4>
                <button type="button" onClick={onItemAdd}>+</button>
            </div>
        </div>
    )
}

export default CartItem