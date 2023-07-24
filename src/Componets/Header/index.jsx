import { useState } from "react"
import group from "../../assets/Group.png"
import buttonDisable from "../../assets/button-disable.png"
import { StyledForm, StyledHeader } from "./style"
import { Modal } from "../Modal"
import trash from "../../assets/trash.png"
import logo from "../../assets/logo.svg"
import { StyledContainerImg, StyledContainerItens, StyledContainerValue, StyledTopContainer } from "../Modal/style"

export const Header = ({ setInputSearch, cartList, addToCart, removeFromCart, removeAll }) => {
  const [cartOpen, setCartOpen] = useState(false)
  const [teste, setTest] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setInputSearch(teste)
    setTest("")
  }

  const total = cartList.reduce((prev, current) => prev + current.price, 0)

  const handleClose = () => {
    setCartOpen(false)
  }
  return (
    <>
      <StyledHeader>
        <div className="container">
          <div>
            <img src={logo} alt="Logo" />
            <img onClick={() => setCartOpen(true)} src={group} alt="Carrinho de Compras" />
          </div>

          <StyledForm onSubmit={handleSubmit}>
            <input onChange={(e) => setTest(e.target.value)} type="text" value={teste} placeholder="Digitar Pesquisa" />
            <button type="submit">
              <img type="image" src={buttonDisable} alt="Pesquisa" />
            </button>
          </StyledForm>
        </div>
      </StyledHeader>

      <Modal title={"Carrinho de compras"} onClose={handleClose} isOpen={cartOpen}>
        <StyledTopContainer>
          {cartList.map((item) => (
            <StyledContainerItens key={item.id}>
              <StyledContainerImg>
                <img src={item.img} alt={item.name} />
              </StyledContainerImg>
              <div>
                <h2>{item.name}</h2>
                <img onClick={() => removeFromCart(item)} src={trash} alt="Excluir" />
              </div>
            </StyledContainerItens>
          ))}
        </StyledTopContainer>

        <StyledContainerValue>
          <div></div>
          <div>
            <h3>Total</h3>
            <span>R$ {total.toFixed(2)}</span>
          </div>
          <button onClick={removeAll}>Remover Todos</button>
        </StyledContainerValue>
      </Modal>
    </>
  )
}
