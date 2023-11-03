import logo from '../../assets/logo.jpg'
import styles from './LogoAndTitle.module.css'

const LogoAndTitle = () => {
    return <div className={styles['title-container']}>
        <img src={logo} alt={'restaurant-retro-theme-logo'}></img>
        <h1>React Foods</h1>
    </div>
}

export default LogoAndTitle