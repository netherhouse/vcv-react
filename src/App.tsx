import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/global.scss';

const App = () => {
    return (
        <Router>
            <Header />
            <AppRouter />
            <Footer />
        </Router>
    );
};

export default App;