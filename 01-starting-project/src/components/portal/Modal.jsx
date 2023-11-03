import styles from './Portals.module.css'
import Cart from '../Cart/Cart'
import Checkout from '../Checkout/Checkout'

const Modal = (props) => {
    let content = <Cart />
    if(props.show==='checkout'){
        content = <Checkout />
    }
    return <div className={styles.modal}>
        {content}
    </div>
}

export default Modal