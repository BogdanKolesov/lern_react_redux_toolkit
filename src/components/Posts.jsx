import React from 'react';
import Button from './atoms/Button';
import Flex from './atoms/Flex';
import { Input } from './atoms/Input';
import PostItem from './molecules/PostItem';

const Posts = () => {
	return (
		<Flex column>
			<Flex>
				<Input />
				<Button>Добавить</Button>
			</Flex>
			<PostItem />
		</Flex>
	);
};

export default Posts;
