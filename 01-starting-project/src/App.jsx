import Header from './components/Header/Header'
import Dish from './components/Dish/Dish'
import Search from './components/Search/Search'
import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import Portal from './components/portal/Portal'

function App() {
  const cartCtx = useContext(CartContext)
  
  return (
    <div>
      {(cartCtx.showCart || cartCtx.checkout) && <Portal />}
      <Header />
      <Search />
      <Dish />
    </div>
  );
}

export default App;
