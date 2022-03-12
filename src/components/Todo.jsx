import React from 'react';
import { useDispatch } from 'react-redux';
import Button from './atoms/Button';
import Flex from './atoms/Flex';
import Text from './atoms/Text';

const Todo = () => {
	const dispantch = useDispatch();
	return (
		<Flex>
			<Text>Todo</Text>
			<Button>Получить todo</Button>
			<Text>Заголовки постов</Text>
		</Flex>
	);
};

export default Todo;
