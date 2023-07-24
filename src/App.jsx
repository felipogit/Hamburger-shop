import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import { Home } from "./Componets/Home"
import GlobalStyle from "./styles/GlobalStyle"
import { StyledContainer } from "./styles/flex"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const App = () => {
  const [cartList, setCartList] = useState([])

  const addToCart = (item) => {
    if (cartList.findIndex((product) => product.id == item.id) == -1) {
      setCartList((state) => state.concat(item))
      toast.success("Produto adicionado com sucesso!")
    }
  }

  const removeAll = () => {
    setCartList([])
    toast.warn("Todos os produtos foram removidos!")
  }

  const removeFromCart = (product) => {
    setCartList((state) => state.filter((item) => item.id !== product.id))
    toast.warn("Produto removido com sucesso!")
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <GlobalStyle />

      <Home removeAll={removeAll} cartList={cartList} addToCart={addToCart} removeFromCart={removeFromCart} />
    </>
  )
}
