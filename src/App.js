import React from 'react';
import Header from './components/Header';
import GlobalStyle, {Container} from './styles/global';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import CenterContainer from './components/CenterContainer'
function App() {
  return (
    <>
      <Header/>
      <GlobalStyle/>
      <Container>
        <LeftBar/>
        <CenterContainer/>
        <RightBar/>
      </Container>
      
      
    </>
    
  );
}

export default App;
