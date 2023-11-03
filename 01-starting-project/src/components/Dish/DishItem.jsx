import styles from "./DishItem.module.css";

const DishItem = ({ name, price, description, image, onAddHandler}) => {
  return (
    <div className={styles["dish-item"]}>
      <img
        src={`http://localhost:3000/` + image}
        alt={`${name}-menu-item-picture`}
      ></img>
      <h3>{name}</h3>
      <div>${price}</div>
      <p>{description}</p>
      <button onClick={onAddHandler}>Add to cart</button>
    </div>
  );
};

export default DishItem;
