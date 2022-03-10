import React from 'react';
import styled from 'styled-components';

const Flex = ({ column, children }) => {
	return <StyledFlex column={column}>{children}</StyledFlex>;
};

const StyledFlex = styled.div`
	display: flex;
	flex-direction: ${column => (column ? 'column' : 'row')};
`;

export default Flex;
