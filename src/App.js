import User from "./components/User";
import styled from 'styled-components';
import Posts from "./components/Posts";

function App() {
  return (
    <AppContainer>
      <User />
      <Posts />
    </AppContainer>
  );
}

const AppContainer = styled.div`
    display: flex;
`

export default App;
