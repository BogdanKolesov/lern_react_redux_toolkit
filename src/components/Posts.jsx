import React from 'react';
import Button from './atoms/Button';
import Flex from './atoms/Flex';
import { Input } from './atoms/Input';
import Text from './atoms/Text';
import PostItem from './molecules/PostItem';

const Posts = () => {
	return (
		<Flex column>
			<Text>Posts</Text>
			<Flex>
				<Input />
				<Button>Добавить</Button>
			</Flex>
			<PostItem />
		</Flex>
	);
};

export default Posts;
