import styles from './Portals.module.css'

const Backdrop = props => {
    return <div className={styles['back-drop']} onClick={props.onClickHandler}></div>
}

export default Backdrop