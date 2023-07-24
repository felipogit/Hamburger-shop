import { useEffect } from "react"
import { useState } from "react"
import { api } from "../../services/api"
import { Header } from "../Header"
import { StyledProductList } from "./style"
import { ProductCard } from "../ProductCard"
import { StyledContainer } from "../../styles/flex"

export const Home = ({ cartList, addToCart, removeFromCart, removeAll }) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [inputSearch, setInputSearch] = useState("")

  const filterProducts = products.filter((product) => product.name.toUpperCase().includes(inputSearch.toUpperCase()))

  useEffect(() => {
    setIsLoading(true)

    const getProducts = async () => {
      try {
        const response = await api.get("/products")
        setProducts(response.data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    getProducts()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header
        removeAll={removeAll}
        cartList={cartList}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        setInputSearch={setInputSearch}
      />

      <StyledContainer>
        <StyledProductList>
          {filterProducts.map((products) => (
            <ProductCard onAddProduct={() => addToCart(products)} key={products.id} {...products} />
          ))}
        </StyledProductList>
      </StyledContainer>
    </>
  )
}
