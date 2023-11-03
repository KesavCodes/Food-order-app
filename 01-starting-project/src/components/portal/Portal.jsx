import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import Modal from './Modal'
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Portal = () => {
    const cartCtx = useContext(CartContext)
    return <>
        {ReactDOM.createPortal(<Backdrop onClickHandler={cartCtx.checkout?cartCtx.toggleShowCheckout:cartCtx.toggleShowCart}/>,document.getElementById('overlay-root'))}
        {!cartCtx.checkout && ReactDOM.createPortal(<Modal show={cartCtx.checkout?'checkout':'cart'}/>,document.getElementById('cart-modal-root'))}
        {cartCtx.checkout && ReactDOM.createPortal(<Modal show={cartCtx.checkout?'checkout':'cart'}/>,document.getElementById('checkout-modal-root'))}

    </>
}

export default Portal