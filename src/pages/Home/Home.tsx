import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import styles from './Home.module.scss';

const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            <Header />
            <LanguageSwitcher />
            <main>
                <h1>Welcome to the Home Page</h1>
                <p>This is the main content of the home page.</p>
            </main>
            <Footer />
        </div>
    );
};

export default Home;