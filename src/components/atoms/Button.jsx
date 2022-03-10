import React from 'react';
import styled from 'styled-components';

const Button = ({ children }) => {
	return <StyledButton>{children}</StyledButton>;
};

export const StyledButton = styled.button`
    background: transparent:
    cursor: pointer;
    border: 1px solid green;
    color: green;
    border-radius: 5px;
    height: 30px;
    padding: 5px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Button;
