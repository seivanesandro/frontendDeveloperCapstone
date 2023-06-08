import './App.css';
import styled from 'styled-components';

import Header from './components/header/Header';
import Footer from  './components/footer/Footer';



const AppContainer = styled.div`
    display: grid;
    grid: 1fr 1fr 1fr;
    justify-items: none;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 0.5rem;
`;
function App() {
  return (
      <AppContainer>
          

          <Header />
          <div>header</div>
          <div>hero</div>
          <div>main</div>

          <Footer />
      </AppContainer>
  );
}

export default App;
