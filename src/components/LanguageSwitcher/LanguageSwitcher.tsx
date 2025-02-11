import React from 'react';
import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher: React.FC = () => {
    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        // Logic to change the language goes here
    };

    return (
        <div className={styles.languageSwitcher}>
            <select onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="ru">Русский</option>
                <option value="ua">Українська</option>
                <option value="de">Deutsch</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;