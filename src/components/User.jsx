import React from 'react';
import Flex from './atoms/Flex';
import styled from 'styled-components';
import Text from './atoms/Text';
import { Input } from './atoms/Input';
import { useDispatch } from 'react-redux';
import { setFirstName, setSecondName } from '../features/user/userSlice';
import { useSelector } from 'react-redux';

const User = () => {
	const dispatch = useDispatch();
	const name = useSelector(state => state.user.firstName);
	const secondName = useSelector(state => state.user.secondName);

	return (
		<div>
			<Text>User</Text>
			<Flex>
				<Flex column>
					<Input
						onChange={e => {
							dispatch(setFirstName(e.target.value));
						}}
					/>
					<Text>{name}</Text>
				</Flex>
				<Flex column>
					<Input
						onChange={e => {
							dispatch(setSecondName(e.target.value));
						}}
					/>
					<Text>{secondName}</Text>
				</Flex>
			</Flex>
		</div>
	);
};

export default User;
