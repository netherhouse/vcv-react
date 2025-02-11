import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/icons/vcv-logo.png';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <h1 className={styles.title}>Welcome to Our Application</h1>
        </header>
    );
};

export default Header;