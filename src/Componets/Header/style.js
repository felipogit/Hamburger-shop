import styled from "styled-components"

export const StyledHeader = styled.header`
  width: 100%;
  background-color: #f5f5f5;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 152px;
    max-width: 1500px;
    margin: 0 auto;
    width: 100%;
    padding: 2rem;

    flex-direction: column;

    @media (min-width: 720px) {
      flex-direction: row;
      height: 80px;
    }
    & > div:nth-child(1) {
      display: flex;
      justify-content: space-between;
      width: 100%;

      img {
        margin-right: 20px;
        cursor: pointer;
      }
    }
  }
`

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  input {
    width: 100%;
    height: 50px;
    border-radius: 0.8rem;
    border: none;
    padding: 20px;
  }

  button {
    border: none;
    img {
      position: absolute;
      right: 7px;
      top: 5px;
    }
  }

  @media (min-width: 720px) {
    max-width: 365px;
  }
`
