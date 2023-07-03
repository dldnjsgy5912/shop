import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`

    /* https://meyerweb.com/eric/tools/css/reset/ */
    ${reset} //초기 reset 
    
    /* customize */
    * {
		box-sizing:border-box;
	}
    html{
        font-size:62.5%; 
    }
    body {
        font-size: 1.6rem;
        white-space: pre-wrap;
        font-family: Pretendard, sans-serif;
    }

    a {
    color: inherit;
    text-decoration: none;
    }
    
    
    ol, ul, li {
    list-style: none;
    }
    /* ----- form ---- */
    label {
        display: inline-block;
        font-family: Pretendard, sans-serif;
    }
    button,
    input,
    textarea {
        -webkit-appearance: none;
        display: inline-block;
        border: 0;
        border-radius: 0;
        background: transparent;
        box-shadow: none;
        outline: none;
        font-size: 15px;
        font-family: Pretendard, sans-serif;
    }
    input[type="radio"],
    input[type="checkbox"] {
        width: 0;
        height: 0;
        padding: 0;
        margin: 0;
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* ----- mobile ----- */
    html {
        -ms-text-size-adjust: none;
        -webkit-text-size-adjust: none;
        -moz-text-size-adjust: none;
        text-size-adjust: none;
    }

    body,
    textarea:focus,
    input:focus,
    a:focus {
        -webkit-tap-highlight-color: rgba(135, 135, 135, 0.08);
    }

    body {
        -webkit-touch-callout: none;
    }
    
`;
