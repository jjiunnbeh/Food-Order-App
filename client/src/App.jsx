import Header from "./components/Header";
import Menu from "./components/Menu";
import CartContextProvider, { CartContext } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import PopUpModal from "./components/PopUpModal";

function App() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header name='Western Food' />
          <Menu />
          <Cart />
          <CheckOut />
          <PopUpModal />
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
