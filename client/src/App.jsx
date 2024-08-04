import Header from "./components/Header";
import Menu from "./components/Menu";
import CartContextProvider, { CartContext } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header />
          <Menu />
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
