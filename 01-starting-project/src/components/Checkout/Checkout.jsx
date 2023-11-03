import CheckoutForm from "./CheckoutForm";
import styles from './Checkout.module.css'

const Checkout = () => {
  return (
    <div className={styles.checkout}>
      <h3>Checkout</h3>
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
