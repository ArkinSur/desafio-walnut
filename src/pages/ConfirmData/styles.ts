import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    padding-top: 28px;

    #title {
        max-width: 400px;
        text-align: center;
    }

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

export const DataContainer = styled.div`
    display: flex;
    flex: 1;
    margin-top: 20px;
    border-radius: 8px;
    width: 900px;
    background: #ff9000;
    padding: 40px 30px;
`;

export const Left = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    color: #312e38;

    > div {
        display: flex;
    }

    strong {
        font-size: 22px;
    }

    p {
        margin-left: 10px;
        font-size: 22px;
    }
`;

export const Right = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    color: #312e38;

    strong {
        font-size: 23px;
    }

    img {
        margin-top: 12px;
        max-height: 400px;
        max-width: 450px;
    }
`;
