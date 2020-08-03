import styled, { css } from 'styled-components';

interface ContainerProps {
    isFocused?: boolean;
    isFilled?: boolean;
    isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;
    padding: 0 20px;
    width: 100%;
    display: flex;
    align-items: center;

    border: 2px solid #232129;
    color: #fff;

    & + div {
        margin-top: 8px;
    }

    ${props =>
        props.isFocused &&
        css`
            border: 2px solid #ff9000;
            color: #ff9000;
        `}

    ${props =>
        props.isFilled &&
        css`
            color: #ff9000;
        `}


    input {
        background: #232129;
        color: #f4ede8;
        width: 100%;
        height: 56px;
        border: 0;

        &::placeholder {
            color: #666360;
        }
    }

    svg {
        margin-right: 10px;
    }
`;
