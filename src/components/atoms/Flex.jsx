import React from 'react';
import styled from 'styled-components';

const Flex = ({ style, column, children }) => {
	return (
		<StyledFlex style={style} column={column}>
			{children}
		</StyledFlex>
	);
};

const StyledFlex = styled.div`
	display: flex;
	flex-direction: ${column => (column ? 'column' : 'row')};
`;

export default Flex;
