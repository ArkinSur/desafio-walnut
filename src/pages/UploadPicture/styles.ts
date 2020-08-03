import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    a {
        text-decoration: none;
        color: #f4ede8;
        display: flex;
        transition: color 0.2s;
        align-items: center;
        margin: 40px 0;

        &:hover {
            color: ${shade(0.2, '#F4EDE8')};
        }

        svg {
            margin-right: 10px;
        }
    }
`;

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    strong {
        font-size: 28px;
        margin-bottom: 40px;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 400px;
        align-items: center;

        > div {
            width: 400px;
        }

        #container {
            margin-top: 40px;
        }

        #document {
            font-size: 24px;
            margin-left: 8px;
        }

        #preview {
            display: flex;
            margin-top: 20px;
            align-items: center;

            img {
                height: 80px;
                width: 80px;
            }

            p {
                margin-left: 10px;
                font-size: 18px;
            }
        }

        button {
            background: transparent;
            border: 0;
            color: #ff9000;
            margin-left: 20px;
            margin-top: 8px;
        }
    }

    #submit {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 60px;
        width: 240px;
        background: #ff9000;
        padding: 0 16px;
        color: #312e38;
        font-weight: 600;
        border: 0;
        border-radius: 10px;
        height: 56px;
        transition: background-color 0.3s;

        &:hover {
            background: ${shade(0.2, '#ff9000')};
        }

        span {
            font-size: 20px;
        }
    }
`;
