import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import History from '../pages/History/History';
import About from '../pages/About/About';
import Events from '../pages/Events/Events';
import SingTogether from '../pages/SingTogether/SingTogether';
import Repertoire from '../pages/Repertoire/Repertoire';
import Contact from '../pages/Contact/Contact';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/history" component={History} />
                <Route path="/about" component={About} />
                <Route path="/events" component={Events} />
                <Route path="/sing-together" component={SingTogether} />
                <Route path="/repertoire" component={Repertoire} />
                <Route path="/contact" component={Contact} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default AppRouter;