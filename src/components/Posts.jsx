import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './atoms/Button';
import Flex from './atoms/Flex';
import { Input } from './atoms/Input';
import Text from './atoms/Text';
import { v4 } from 'uuid';
import { addPost } from '../features/post/postSlice';

const Posts = () => {
	const dispatch = useDispatch();
	const [postValue, setPostValue] = useState('');

	const addPostHandler = () => {
		const post = {
			id: v4(),
			text: postValue,
			completed: false,
		};
		dispatch(addPost(post));
		console.log(post);
		setPostValue('');
	};

	return (
		<Flex column>
			<Text>Posts</Text>
			<Flex>
				<Input value={postValue} onChange={e => setPostValue(e.target.value)} />
				<Button type='button' onClick={() => addPostHandler()}>
					Добавить
				</Button>
			</Flex>
		</Flex>
	);
};

export default Posts;
