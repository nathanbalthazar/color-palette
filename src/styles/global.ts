import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

.App {
    width: 100%;
    min-height: 100vh;

    display: flex;

    h1 {
        color: #fff;
        font-size: 45px;
        line-height: 1;
        position: absolute;
        top: 50px;
        left: 50%;

       transform: translateX(-50%);
    }

    .container {
        margin: auto;
        width: 100%;
        max-width: 590px;

        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .card {
            width: 100%;
            max-width: 100px;
            margin: 10px 0;
            text-align: center;

            p {
                margin: 12px 0;
                font-weight: 600;
                cursor: pointer;
            }

            .box {
                width: 100%;
                height: 100px;
                border-radius: 12px;
                cursor: pointer;
            }
        }
    }
}
`;  