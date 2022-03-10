import User from "./components/User";
import styled from 'styled-components';

function App() {
  return (
    <AppContainer>
      <User />
    </AppContainer>
  );
}

const AppContainer = styled.div`
    display: flex;
`

export default App;
