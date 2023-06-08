import './App.css';
import styled from 'styled-components';

import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import Footer from  './components/footer/Footer';

import BookingPage from './pages/BookingPage';

//import ComfirmedBooking from './pages/ConfirmedBooking';
//import {  Route,  Routes } from "react-router-dom"



const AppContainer = styled.div`
    display: grid;
    grid: 1fr 1fr 1fr;
    justify-items: none;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 0.1rem;
`;
function App() {
  return (
      <AppContainer className='App-Container'>
          <Header />
          <HomePage />
          <BookingPage />
          <div>ComfirmedBooking</div>
          <Footer />
      </AppContainer>
  );
}

export default App;
