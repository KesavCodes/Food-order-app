import DishItem from "./DishItem";
import styles from "./Dish.module.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Dish = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = (item) => {
    const data = { ...item, quantity: 1 };
    cartCtx.onItemAdd(data);
  };

  const filteredDishes = cartCtx.availableDishes.filter((item) =>
    item.name.toLowerCase().includes(cartCtx.query.toLowerCase())
  );

  let content;
  if (!filteredDishes.length && props.search === "") {
    content = <p>No data available.</p>;
  } else if (!filteredDishes.length && props.search !== "") {
    content = <p>No data available. Please refine the search.</p>;
  } else {
    content = filteredDishes.map((item) => (
      <DishItem
        key={item.id}
        name={item.name}
        price={item.price}
        description={item.description}
        image={item.image}
        onAddHandler={addItemToCartHandler.bind(null,item)}
      />
    ));
  }

  return <div className={styles.dish}>{content}</div>;
};

export default Dish;
