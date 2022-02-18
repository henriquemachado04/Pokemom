import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    img{
        height: 300px;
        padding: 10px;
    }

    body {
        background-image: URL("https://img.quizur.com/f/img5f51ae49ba7a97.29849687.png?lastEdited=1599188601");
    }

    body, input, button {
        font: 16px Roboto, sans-serif;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer;
    }
`;