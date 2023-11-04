import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "./CartItem";
import styles from './Cart.module.css'

const Cart = () => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx)

  const addItemToCartHandler = (item) => {
    const data = { ...item, quantity: 1 };
    cartCtx.onItemAdd(data);
  };

  const removeItemfromCartHandler = (item) => {
    const data = { ...item, quantity: 1 };
    cartCtx.onItemRemove(data);
  };

  let content = <p className={styles['no-data']}>No items in cart.</p>;
  if (cartCtx.myCart.length > 0) {
    content = cartCtx.myCart.map((item) => (
      <CartItem
        key={item.id}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        onItemAdd={addItemToCartHandler.bind(null, item)}
        onItemRemove={removeItemfromCartHandler.bind(null, item)}
      />
    ));
  }
  return <div className={styles.cart}>
    <h3>Cart 🛒</h3>
    {content}
    <h3>Cart Total : ${parseFloat(Math.abs(cartCtx.netTotal)).toFixed(2)}</h3>
    <div className={styles.action}>
      <button onClick={cartCtx.toggleShowCart}>Close</button>
      <button onClick={cartCtx.toggleShowCheckout}>Checkout</button>
    </div>
    </div>;
};

export default Cart;
