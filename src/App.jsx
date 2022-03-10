import User from './components/User';
import styled from 'styled-components';
import Posts from './components/Posts';
import Todo from './components/Todo';

function App() {
	return (
		<AppContainer>
			<User />
			<Posts />
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
