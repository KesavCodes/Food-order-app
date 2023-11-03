import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import styles from "./CartValue.module.css";

const CartValue = () => {
  const cartCtx = useContext(CartContext);
  return (
    <div className={styles["cart-value"]} onClick={cartCtx.toggleShowCart}>
      <h3>
        Cart ( <span>{cartCtx.totalNoOfDishes}</span> )
      </h3>
    </div>
  );
};

export default CartValue;
