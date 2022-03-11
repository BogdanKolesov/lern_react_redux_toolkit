import React from 'react';
import Button from '../atoms/Button';
import Flex from '../atoms/Flex';
import Text from '../atoms/Text';
import { useDispatch } from 'react-redux';
import { toggleCompletedPost, removePost } from '../../features/post/postSlice';

const PostItem = ({ post }) => {
	const dispatch = useDispatch();

	const togglePostHandler = post => {
		dispatch(toggleCompletedPost(post.id));
		console.log(post.completed);
	};

	const removePostHandler = id => {
		dispatch(removePost(id));
	};

	return (
		<Flex column style={{ backgroundColor: post.completed ? 'red' : 'blue' }}>
			<Button onClick={() => togglePostHandler(post)}>Завершить</Button>
			<p>{post.id}</p>
			<Text>{post.text}</Text>
			<Button onClick={() => removePostHandler(post.id)}>Удалить</Button>
		</Flex>
	);
};

export default PostItem;
