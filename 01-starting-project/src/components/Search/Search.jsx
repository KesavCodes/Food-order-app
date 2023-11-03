import styles from './Search.module.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const Search = () => {
    const cartCtx = useContext(CartContext)
    return (
        <div className={styles.search}>
            <input type="text" name="search" placeholder='Search dishes...' id="search"  value={cartCtx.query} onChange={cartCtx.changeQuery}/>
        </div>
    )
}

export default Search