import User from './components/User';
import styled from 'styled-components';
import Posts from './components/Posts';
import Todo from './components/Todo';
import { useSelector } from 'react-redux';
import PostItem from './components/molecules/PostItem';

function App() {
	const posts = useSelector(state => state.post.posts);
	return (
		<AppContainer>
			<User />
			<Posts />
			{posts?.map(post => (
				<PostItem key={post.id} post={posts} />
			))}
			<Todo />
		</AppContainer>
	);
}

const AppContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	margin: 10px;
`;

export default App;
