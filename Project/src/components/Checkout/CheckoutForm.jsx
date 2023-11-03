import Input from "../../Utils/Input";
import useInput from "../../hooks/use-input";
import styles from './CheckoutForm.module.css';
import { useContext } from "react";
import { CartContext } from '../../Context/CartContext'
const CheckoutForm = () => {
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

  const formSubmitHandler = (event) => {
    event.preventDefault()
    console.log(fullNameValue,'--full name')
    console.log(emailValue,'--email')
    console.log(streetValue,'--street')
    console.log(postalCodeValue,'--postal code')
    console.log(cityValue,'--city')
  }
  return (
    <form onSubmit={formSubmitHandler}>
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
  );
};

export default CheckoutForm;
