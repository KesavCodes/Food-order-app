import React, { useReducer, useState, useCallback, useEffect } from "react";
import useHttp from "../hooks/use-http";

const contextInitialValue = {
  availableDishes: [],
  myCart: [],
  totalNoOfDishes: 0,
  netTotal: 0,
  query: "",
  changeQuery: (event) => {},
  onItemAdd: (data) => {},
  onItemRemove: (data) => {},
  onCartReset: () => {},
  showCart: false,
  checkout: false,
  toggleShowCart: () => {},
  toggleShowCheckout: () => {},
  dishesLoading: false,
  fetchError: false,
};

export const CartContext = React.createContext(contextInitialValue);

const reducerIntialValues = {
  cart: [],
  totalNoOfDishes: 0,
  netTotal: 0,
};

const cartReducer = (state, action) => {
  let stateRef = { ...state };
  if (action.type === "ADD_ITEM") {
    const itemIndexInCart = stateRef.cart.findIndex(
      (item) => item.id === action.data.id
    );
    if (itemIndexInCart > -1) {
      stateRef.cart[itemIndexInCart]["quantity"] += action.data.quantity;
    } else {
      stateRef.cart.push(action.data);
    }
    stateRef.totalNoOfDishes += action.data.quantity;
    stateRef.netTotal += parseFloat(action.data.price);
  } else if (action.type === "REMOVE_ITEM") {
    const itemIndexInCart = stateRef.cart.findIndex(
      (item) => item.id === action.data.id
    );
    if (itemIndexInCart > -1) {
      if (stateRef.cart[itemIndexInCart]["quantity"] === 1) {
        stateRef.cart.splice(itemIndexInCart, 1);
      } else {
        stateRef.cart[itemIndexInCart]["quantity"] -= action.data.quantity;
      }
    }
    stateRef.totalNoOfDishes -= action.data.quantity;
    stateRef.netTotal -= parseFloat(action.data.price);
  } else if (action.type === "RESET") {
    stateRef = reducerIntialValues;
  }
  return stateRef;
};

const CartContextProvider = (props) => {
  const [allDishes, setAllDishes] = useState([]);
  const [cartItems, dispatchCart] = useReducer(
    cartReducer,
    reducerIntialValues
  );
  const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  // const fetchMeals = useCallback(async () => {
  //     const response = await fetch('http://localhost:3000/meals', {
  //         method: 'GET',
  //         headers: {
  //             'Content-Type': 'application/json'
  //         }
  //     })
  //     const data = await response.json()
  //     setAllDishes(data)
  // }, [])

  const addDishesHandler = (dishesData) => {
    setAllDishes(dishesData);
  };

  const {
    isLoading,
    error,
    sendRequest: fetchMeals,
  } = useHttp(addDishesHandler);

  useEffect(() => {
    const fetchConfig = {
      url: "http://localhost:3000/meals",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetchMeals(fetchConfig);
  }, [fetchMeals]);

  const onSearchChangeHandler = (event) => {
    setSearch(event.target.value);
  };

  const toggleShowCart = () => {
    setShowCart((prevState) => !prevState);
  };

  const toggleShowCheckout = () => {
    setShowCheckout((prevState) => !prevState);
  };

  const addItemHandler = (data) => {
    dispatchCart({ type: "ADD_ITEM", data });
  };

  const removeItemHandler = (data) => {
    dispatchCart({ type: "REMOVE_ITEM", data });
  };

  const resetHandler = () => {
    dispatchCart({ type: "RESET" });
  };

  return (
    <CartContext.Provider
      value={{
        availableDishes: allDishes,
        myCart: cartItems.cart,
        totalNoOfDishes: cartItems.totalNoOfDishes,
        netTotal: cartItems.netTotal,
        query: search,
        showCart,
        checkout: showCheckout,
        changeQuery: onSearchChangeHandler,
        onItemAdd: addItemHandler,
        onItemRemove: removeItemHandler,
        onCartReset: resetHandler,
        toggleShowCart,
        toggleShowCheckout,
        dishesLoading: isLoading,
        fetchError: error,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
