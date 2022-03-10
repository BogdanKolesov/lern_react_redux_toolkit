import React from 'react';
import Button from './atoms/Button';
import Flex from './atoms/Flex';
import Text from './atoms/Text';

const Todo = () => {
	return (
		<Flex>
			<Text>Todo</Text>
			<Button>Получить todo</Button>
			<Text>Заголовки постов</Text>
		</Flex>
	);
};

export default Todo;
