import styled from "styled-components"

export const StyledProductList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  gap: 5.6rem;
  margin-top: 32px;
  width: 100%;

  @media (max-width: 720px) {
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`
