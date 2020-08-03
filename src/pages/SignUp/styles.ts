import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
`;

export const FormContent = styled.div`
    display: flex;
    margin-top: 100px;

    h1 {
        font-size: 40px;
        margin-bottom: 40px;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 400px;
        align-items: center;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
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
