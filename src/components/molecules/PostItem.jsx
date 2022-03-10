import React from 'react';
import Button from '../atoms/Button';
import Flex from '../atoms/Flex';
import Text from '../atoms/Text';

const PostItem = () => {
	return (
		<Flex>
			<Button>Завершить</Button>
			<Text>Todo text</Text>
			<Button>Удалить</Button>
		</Flex>
	);
};

export default PostItem;
