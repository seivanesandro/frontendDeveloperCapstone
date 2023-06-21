import './App.css';
import styled from 'styled-components';
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import Footer from './components/footer/Footer';
import BookingPage from './pages/BookingPage';
import ComfirmedBooking from './pages/confirmedBooking';
import {  Route,  Routes } from "react-router-dom"

const AppContainer = styled.div`
    display: grid;
    grid: 1fr 1fr 1fr;
    justify-items: none;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 0rem;
`;

const BookingPageContainer = styled.div`
    display: flex;
    background-color: #333333;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5rem 5rem 10rem;
`;

const BookingConfirmContainer = styled.div`
    display: flex;
    background-color: #333333;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    padding: 5rem 5rem 10rem;
`;

function App() {
    return (
        <AppContainer className="App-Container">
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}
                ></Route>

                <Route
                    path="/booking"
                    element={
                        <BookingPageContainer>
                            <BookingPage />
                        </BookingPageContainer>
                    }
                ></Route>

                <Route
                    path="/confirmed"
                    element={
                        <BookingConfirmContainer>
                            <ComfirmedBooking />
                        </BookingConfirmContainer>
                    }
                ></Route>
            </Routes>
            <Footer />
        </AppContainer>
    );
}

export default App;
