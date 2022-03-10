import React from 'react';
import Flex from './atoms/Flex';
import styled from 'styled-components';
import Text from './atoms/Text';
import { Input } from './atoms/Input';

const User = () => {
	return (
		<Flex>
			<Text>User</Text>
			<Flex>
				<Flex column>
					<Input />
					<Text>Name</Text>
				</Flex>
				<Flex column>
					<Input />
					<Text>SecondName</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default User;
