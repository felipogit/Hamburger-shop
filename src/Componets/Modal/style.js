import styled from "styled-components"
import { Modal } from "./index"

export const StyledContainer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background: #00000070;

  .Modal {
    width: clamp(300px, 80vw, 500px);
    max-width: 500px;
    height: 375px;
    background-color: white;
    padding-bottom: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

export const StyledModalHeader = styled.div`
  height: 54px;
  background-color: var(--color-color-primary);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  button {
    border: none;
    background-color: var(--color-color-primary);
    color: white;
  }
`

export const StyledContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82px;
  height: 80px;
  background-color: var(--color-grey-100);

  img {
    width: 55px;
    height: 53.49px;
  }
`

export const StyledContainerItens = styled.div`
  display: flex;
  padding: 0 20px;
  gap: 9px;

  div:nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: space-between;

    img {
      width: 15px;
      height: 15px;
      cursor: pointer;
    }
  }
`

export const StyledContainerValue = styled.div`
  width: 100%;
  height: 115px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 0px 20px 0px 20px;

  div:nth-child(1) {
    height: 2px;
    background-color: var(--color-grey-100);
  }
  div:nth-child(2) {
    display: flex;
    justify-content: space-between;

    h3 {
      font-weight: 600;
      font-size: 1.4rem;
    }

    span {
      font-weight: 600;
      font-size: 1.4rem;
      color: var(--color-grey-300);
    }
  }

  button {
    width: 100%;
    height: 60px;
    border-radius: 8px;
    border: none;
    color: var(--color-grey-300);
    background-color: var(--color-grey-100);

    &:hover {
      background-color: var(--color-grey-300);
      color: white;
    }
  }
`

export const StyledTopContainer = styled.div`
  overflow: auto;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
