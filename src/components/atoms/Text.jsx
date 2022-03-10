import React from 'react';
import styled from 'styled-components';

const Text = ({ children }) => {
	return <StyledText>{children}</StyledText>;
};

export const StyledText = styled.p`
	font-size: 14px;
`;

export default Text;
