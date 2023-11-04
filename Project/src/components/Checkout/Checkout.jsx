import CheckoutForm from "./CheckoutForm";
import styles from './Checkout.module.css'
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

const Checkout = () => {
  let cartCtx = useContext(CartContext)
  return (
    <div className={styles.checkout}>
      <h3>Checkout</h3>
      <p>The Order total is ${parseFloat(cartCtx.netTotal).toFixed(2)}</p>
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
