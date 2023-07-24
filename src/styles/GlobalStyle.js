import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
:root {
	--color-color-primary: #27ae60;
	--color-color-secondary: #eb5757;
	--color-grey-600: #333333;
	--color-grey-300: #828282;
	--color-grey-100: #e0e0e0;
	--color-negative: #e60000;
	--color-warning: #ffcd07;
	--color-sucess: #168821;
	--color-information: #155bcb;
	font-size: 62.5%;
}

*{
	margin: 0;
	padding: 0;
	outline: 0;
	box-sizing: border-box;
}

body, html{
	width: 100vw;
	height: 100vh;
	font-family: 'Inter', sans-serif;
}

border-style, input, button, textarea{
	font-family: 'Inter', sans-serif;
	font-size: 1.6rem;
}

button{
	cursor: pointer;
}

`
