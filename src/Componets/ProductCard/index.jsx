import { StyledProductCard } from "./style"

export const ProductCard = ({ name, category, price, img, onAddProduct }) => {
  return (
    <StyledProductCard>
      <div>
        <img src={img} alt="Imagem do item" />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{category}</p>
        <span>R$ {price.toFixed(2)}</span>
        <button onClick={onAddProduct}>Adicionar</button>
      </div>
    </StyledProductCard>
  )
}
