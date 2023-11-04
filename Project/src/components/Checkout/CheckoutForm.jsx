import Input from "../../Utils/Input";
import useInput from "../../hooks/use-input";
import styles from './CheckoutForm.module.css';
import { useContext, useState } from "react";
import { CartContext } from '../../Context/CartContext'
import useHttp from "../../hooks/use-http";

const CheckoutForm = () => {
  const [orderSentSuccessfully, setOrderSentSuccessfully] = useState(false)

  const cartCtx = useContext(CartContext)
  const {
    value: fullNameValue,
    valueChangeHandler: fullNameValueChangeHandler,
    onBlurHandler: fullNameBlurHandler,
  } = useInput("");
  const {
    value: emailValue,
    valueChangeHandler: emailValueChangeHandler,
    onBlurHandler: emailBlurHandler,
  } = useInput("");
  const {
    value: streetValue,
    valueChangeHandler: streetValueChangeHandler,
    onBlurHandler: streetBlurHandler,
  } = useInput("");
  const {
    value: postalCodeValue,
    valueChangeHandler: postalCodeChangeHandler,
    onBlurHandler: postalCodeBlurHandler,
  } = useInput("");
  const {
    value: cityValue,
    valueChangeHandler: cityValueChangeHandler,
    onBlurHandler: cityBlurHandler,
  } = useInput("");

  const responseHandler = (data) => {
    setOrderSentSuccessfully(true)
  }

  const {isLoading, error, sendRequest:postOrder} = useHttp(responseHandler)

  const formSubmitHandler = (event) => {
    event.preventDefault()
    const fetchConfig = {
      url:'http://localhost:3000/orders',
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({order:{
        customer:{
          name:fullNameValue,
          email:emailValue,
          street:streetValue,
          'postal-code':postalCodeValue,
          city:cityValue,
        },
        items:cartCtx.myCart,
      }})
    }
    postOrder(fetchConfig)
  }
  return (
    <div>

    {!orderSentSuccessfully && <form onSubmit={formSubmitHandler}>
      <Input
        label="Full Name"
        id="fullName"
        value={fullNameValue}
        onChange={fullNameValueChangeHandler}
        onBlur={fullNameBlurHandler}
        />
      <Input
        label="Email"
        id="email"
        value={emailValue}
        onChange={emailValueChangeHandler}
        onBlur={emailBlurHandler}
        />
      <Input
        label="Street"
        id="street"
        value={streetValue}
        onChange={streetValueChangeHandler}
        onBlur={streetBlurHandler}
        />
      <Input
        label="Postal Code"
        id="pcode"
        value={postalCodeValue}
        onChange={postalCodeChangeHandler}
        onBlur={postalCodeBlurHandler}
        />
      <Input
        label="City"
        id="city"
        value={cityValue}
        onChange={cityValueChangeHandler}
        onBlur={cityBlurHandler}
        />
      <div className={styles.actions}>
        <button type="button" onClick={cartCtx.toggleShowCheckout}>Back</button>
        <button type="submit">Order</button>
      </div>
    </form>
    }
    {orderSentSuccessfully && <p>Order placed successfully!</p>}
    {orderSentSuccessfully && <button onClick={setOrderSentSuccessfully.bind(null,false)}>Close</button>}
    </div>
  );
};

export default CheckoutForm;
