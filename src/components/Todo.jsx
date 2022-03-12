import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './atoms/Button';
import Flex from './atoms/Flex';
import Text from './atoms/Text';
import { getTodos } from '../features/todo/todoSlice';
import TodoItem from './molecules/TodoItem';

const Todo = () => {
	const dispatch = useDispatch();
	const todos = useSelector(state => state.todo.todos);
	return (
		<Flex>
			<Text>Todo</Text>
			<Button onClick={() => dispatch(getTodos())}>Получить todo</Button>
			<Text>Заголовки постов</Text>
			<Flex column>
				{todos?.map(todo => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</Flex>
		</Flex>
	);
};

export default Todo;
