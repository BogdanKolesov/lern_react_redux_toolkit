import React from 'react';
import Text from '../atoms/Text';
import { deleteTodoById } from '../../features/todo/todoSlice';
import { useDispatch } from 'react-redux';

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();

	return (
		<Text onClick={() => dispatch(deleteTodoById(todo.id))}>{todo.title}</Text>
	);
};

export default TodoItem;
