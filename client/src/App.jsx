import Header from './components/Header'
import Menu from './components/Menu'
import CartContextProvider, { CartContext } from './store/CartContext'


function App() {


  return (
    <>
    <CartContextProvider>
      <Header />
      <Menu />
      
      </CartContextProvider>
    </>
  )
}

export default App
