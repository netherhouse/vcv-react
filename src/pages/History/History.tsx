import React from 'react';
import styles from './History.module.scss';

const History: React.FC = () => {
    return (
        <div className={styles.history}>
            <h1>History Page</h1>
            <p>This is the history page of the application.</p>
        </div>
    );
};

export default History;