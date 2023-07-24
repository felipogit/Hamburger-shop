import styled from "styled-components"

export const StyledProductCard = styled.li`
  width: 300px;
  height: 346px;
  min-width: 300px;
  border: 1px solid var(--color-grey-100);

  &:hover {
    border: 2px solid var(--color-color-primary);
  }

  div:nth-child(1) {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 150px;
    background-color: #f5f5f5;
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;

    h2 {
      font-size: 1.8rem;
      font-weight: 700;
    }

    p {
      font-size: 1.2rem;
      font-weight: 400;
      color: var(--color-grey-300);
    }

    span {
      color: var(--color-color-primary);
      font-size: 1.4rem;
      font-weight: 600;
    }

    button {
      width: 106px;
      height: 40px;
      border: none;
      border-radius: 8px;
      background-color: #bdbdbd;
      font-size: 1.4rem;
      font-weight: 600;
      color: white;
      &:hover {
        background-color: var(--color-color-primary);
      }
    }
  }
`
